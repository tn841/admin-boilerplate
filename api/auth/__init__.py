from functools import wraps
from flask import request, session

from auth.user import User


def api_auth_check(func):
    @wraps(func)
    def auth_check(*args, **kwargs):
        if not request.cookies.get('session', None):
            kwargs['auth_result'] = {'success': False, 'msg': 'fail to auth. (no session)'}
        elif not session.get('token', None):
            kwargs['auth_result'] = {'success': False, 'mag': 'fail to auth. (no token)'}     
        else:
            user = User.decode_token(session['token'])
            print('USER : {}'.format(user))
            kwargs['auth_result'] = {'succeess': True, 'user': user}
        return func(*args, **kwargs)
    return auth_check