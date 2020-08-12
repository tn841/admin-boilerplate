from datetime import datetime
from app import db

class Banner(db.Model):
    id = db.Column(db.String(20), primary_key=True, unique=True)
    bannerlabel = db.Column(db.String(50))
    imgsrc = db.Column(db.String(100))
    banneralt = db.Column(db.String(200))
    onclick = db.Column(db.String(1000))
    sdate = db.Column(db.DateTime, default=datetime.utcnow)
    edate = db.Column(db.DateTime, default=datetime.utcnow)
    probability = db.Column(db.Integer)
    active = db.Column(db.Boolean, default=False)

    serviceid = db.Column(db.Integer, db.ForeignKey('webservice.id'))
    webservice = db.relationship('Webservice',
                              backref=db.backref('banner', lazy=True))

    def __repr__(self):
        return '<Banner %r>' % self.id

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

