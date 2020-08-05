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

@app.route('/api/getBanner')
@app.route('/api/getBanner/<bannerid>')
def getBanner(bannerid=''):
    print("bannerid : {}".format(bannerid))
    tmp_banner = {
        "service_id": "1",
        "banner_id": "A35C22AC",
        "banner_label": "iframe_pc_shinhan_200618",
        "regist_date": "2020-06-18",
        "src": "/banner/img/shcard01.jpg",
        "alt": "신한카드 전자 청구서 My빌&페이 각종 청구서 관리와 납부를 한번에~",
        "onclick" : "window.open('https://shcard.io/zF01uRX')",
        "sdate": {
            "year": 2020,
            "month": 6,
            "day": 18,
            "hour": 9,
            "minute": 0,
            "second": 0
        },
        "edate": {
            "year": 2020,
            "month": 7,
            "day": 31,
            "hour": 23,
            "minute": 59,
            "second": 59
        },
      "probability": 2
    }
    return {'success': True, 'data': tmp_banners}



@app.route('/api/login', methods=['POST'])
def userLogin():
    print('request.get_data() : {}'.format(request.get_data()))
    print('request : {}'.format(request.get_json()))
    tmp_user = {
        'name': '홍길동',
        'email': 'test.test.com'
    }
    return {'success': True, 'user': tmp_user}

