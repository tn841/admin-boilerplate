import os
from datetime import timedelta

def file_path(path):
    return os.path.abspath((os.getcwd()) + path )
# file_path = os.path.abspath((os.getcwd()) + "\database.db")

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + file_path("/database.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SECRET_KEY = '3JPL8SZMYXTIV8C9AAW0'
    PERMANENT_SESSION_LIFETIME = timedelta(minutes=30)

    UPLOAD_FOLDER = file_path("/upload_files")

config = {
    "DEFAULT": Config
}