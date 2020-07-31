from flask import Flask
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


