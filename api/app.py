from flask import Flask
from flask_cors import CORS
from api import api
from datetime import timedelta
import time



app = Flask(__name__)
app.secret_key = "danal_advertisement_manage_system_1!@#43"
app.permanent_session_lifetime = timedelta(seconds=10)
app.register_blueprint(api)

print(app.config)
CORS(app, resources={r"/api/*": {"origins": "*"}})



@app.route('/')
def index():
    return {'data': 'welcome index'}


