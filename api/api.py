from flask import Flask, request
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/')
def index():
    return {'data': 'welcome index'}

@app.route('/api/time')
def mytime():
    return {'time': time.time()}

@app.route('/api/getBanner/<bannerid>')
def getBanner(bannerid):
    print("bannerid : {}".format(bannerid))
    return {'bannerid': bannerid}


@app.route('/api/login', methods=['POST'])
def userLogin():
    print('request.get_data() : {}'.format(request.get_data()))
    print('request : {}'.format(request.get_json()))
    tmp_user = {
        'name': '홍길동',
        'email': 'test.test.com'
    }
    return {'success': True, 'user': tmp_user}