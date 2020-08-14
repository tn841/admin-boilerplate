from flask import Blueprint, request
from app import db
from auth import api_auth_check
from models.banner import Banner

banner_api = Blueprint('banner_api', __name__, url_prefix='/api/banner')


@banner_api.route('/add')
# @api_auth_check
def add_banner():
    return {'success': True, 'msg': 'add_banner api'}



@banner_api.route('/list')
@api_auth_check
def get_banner_list(auth_result):
    bannerlist = Banner.query.all()
    print(bannerlist)
    return {'success': True,
            'data': [banner.as_dict() for banner in bannerlist]}

@banner_api.route('/img', methods=['POST'])
@api_auth_check
def upload_banner_img(auth_result):

    if 'file' not in request.files:
        return {'success': False}
    
    file = request.files
    print(file)
    return {'success': True}

