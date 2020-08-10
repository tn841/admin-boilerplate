from functools import wraps
from flask import request, session

from auth.user import User


def api_auth_check(func):
    @wraps(func)
    def auth_check(*args, **kwargs):
        print('cookies : {}'.format(request.cookies))
        if not request.cookies.get('session', None):
            print('cookie has no session')
            kwargs['auth_result'] = {'success': False, 'msg': 'fail to auth. (no session)'}
        elif not session.get('token', None):
            print('session has no token : {}'.format(session))
            kwargs['auth_result'] = {'success': False, 'mag': 'fail to auth. (no token)'}     
        else:
            user = User.decode_token(session['token'])
            print('USER : {}'.format(user))
            kwargs['auth_result'] = {
                'succeess': True, 
                'user': user,
                'isLogin': True
                }
        return func(*args, **kwargs)
    return auth_check