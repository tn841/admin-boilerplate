from flask import Blueprint, request
from app import db
from auth import api_auth_check
from models.webservice import Webservice

service_api = Blueprint('service_api', __name__, url_prefix='/api/service')


@service_api.route('/add')
@api_auth_check
def add_service(auth_result):
    return {'success': True, 'msg': 'add_banner api'}



@service_api.route('/list')
@api_auth_check
def get_service_list(auth_result):
    servicelist = Webservice.query.all()
    print(servicelist)
    return {'success': True,
            'data': [service.as_dict() for service in servicelist]}

