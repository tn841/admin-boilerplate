from flask_login import UserMixin
import jwt


class User(UserMixin):
    def __init__(self, token, email, name, authority='', part='', phone=''):
        self.token = token
        self.email = email
        self.name = name
        self.authority = authority
        self.part = part
        self.phone = phone

    @staticmethod
    def get_from_token(token):
        user_info = User.decode_token(token)
        return User(
            token=token,
            email=user_info.get('email'),
            name=user_info.get('name'),
            authority=user_info.get('authority'),
            part=user_info.get('part'),
            phone=user_info.get('phone')
        )

    @staticmethod
    def decode_token(token):
        return jwt.decode(token, 'dams_secrete_key_202008^%$#@@#', algorithms='HS256')

    @staticmethod
    def create_token(user_info):
        token = jwt.encode(user_info, 'dams_secrete_key_202008^%$#@@#', algorithm='HS256')
        return token 

