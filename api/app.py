from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from config import config

app = Flask(__name__)

app.config.from_object((config.get('DEFAULT')))
print(app.config)

CORS(app, resources={r"/api/*": {"origins": "*"}})

db = SQLAlchemy(app)
# db 객체가 생성된 이후에 import 해야 정상적으로 초기화가능
from models.banner import Banner
from models.webservice import Webservice
db.create_all()


def configure_blueprints(app):
    from apis import api_view_list
    for api_view in api_view_list:
        app.register_blueprint(api_view)


configure_blueprints(app)


@app.route('/index')
def index():
    return {'data': 'welcome index'}


