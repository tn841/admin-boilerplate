from app import db
from models.banner import Banner
from models.webservice import Webservice
from models.bannercount import Bannercount
from datetime import datetime

# db.drop_all()
db.create_all()

# print(db)

# service = Webservice(
#     servciename='service1',
#     depth1='d1',
#     depth2='d2',
#     depth3='d3'
# )
#
# # print(service)
# db.session.add(service)
# # b1 = Banner(id=str(datetime.now()),
# #             bannerlabel='배너1',
# #             imgsrc='/img/test.png',
# #             banneralt='배너 이미지 설명',
# #             onclick='window.open("https://naver.com")',
# #             sdate=datetime.now(),
# #             edate=datetime.now(),
# #             probability=0,
# #             active=True,
# #             service=service
# #             )
#
# # print(b1)
#
# # db.session.add(b1)
# # db.session.commit()
# print(Webservice.query.all())


# service1 = Webservice.query.filter_by(id=1).first()
# print(service1)

# b1 = Banner(id=str(datetime.now()),
#             bannerlabel='배너1',
#             imgsrc='/img/test.png',
#             banneralt='배너 이미지 설명',
#             onclick='window.open("https://naver.com")',
#             probability=0,
#             webservice=service1
#             )
# print(b1)
# db.session.add(b1)

# b1 = Banner.query.filter_by(id='2020-08-12 10:27:51.186359').first()
# print('b1 : {}'.format(b1))


# bc1 = Bannercount(
#     eventtype='expose',
#     cpid='A010002002',
#     useragent='',
#     session='D12678A4C',
#     ip='10.10.1.12',
#     banner=b1
# )
# print(bc1)
# db.session.add(bc1)

# db.session.commit()

# print(Banner.query.all())
# print(Bannercount.query.all())

result = Bannercount.query.filter_by(cpid='A010002002').all()
print(result)
