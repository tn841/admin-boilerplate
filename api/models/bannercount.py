from datetime import datetime
from app import db

class Bannercount(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    eventtype = db.Column(db.String(20))
    gentime = db.Column(db.DateTime, default=datetime.utcnow)
    cpid = db.Column(db.String(50))
    useragent = db.Column(db.String(50))
    session = db.Column(db.String(50))
    ip = db.Column(db.String(20))

    banner_id = db.Column(db.String(20), db.ForeignKey('banner.id'))
    banner = db.relationship('Banner', backref=db.backref('bannercount', lazy=True))


    def __repr__(self):
        return '<Bannercount %r - %r>' % (self.id, self.banner)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

