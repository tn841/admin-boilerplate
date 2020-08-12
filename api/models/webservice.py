from app import db


class Webservice(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    servciename = db.Column(db.String(100))
    depth1 = db.Column(db.String(100))
    depth2 = db.Column(db.String(100))
    depth3 = db.Column(db.String(100))

    def __repr__(self):
        return '<WebService %r>' % self.id
