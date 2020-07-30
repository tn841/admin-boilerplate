from flask import Flask
import time

app = Flask(__name__)

@app.route('/api/time')
def index():
    
    return {'time': time.time()}