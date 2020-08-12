from flask import Blueprint, request, session

from app import db
from auth.user import User
from auth import api_auth_check
import time

user_api = Blueprint('user_api', __name__, url_prefix='/api/user')


@user_api.route('/time')
def mytime():
    return {'time': time.time()}


@user_api.route('/login', methods=['POST', 'GET'])
def userLogin():
    print('request.get_data() : {}'.format(request.get_data()))
    print('request : {}'.format(request.get_json()))

    tmp_user = {
        'name': '홍길동',
        'email': 'test.test.com',
        'isLogin': True
    }

    session['token'] = User.create_token(tmp_user)
    return {'success': True, 'user': tmp_user}


@user_api.route('/logout', methods=['POST', 'GET'])
@api_auth_check
def userLogout(auth_result):
    if session.get('token', None):
        del session['token']
    return {'success': True}


@user_api.route('/auth')
@api_auth_check
def auth_check(auth_result):
    print('auth_result : {}'.format(auth_result))
    return auth_result


