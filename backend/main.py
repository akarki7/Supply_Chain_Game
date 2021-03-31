"""REST Server."""
from flask import Flask, request
from flask_cors import CORS
import json
from src.connection import Connector

app = Flask(__name__)
con = Connector()

CORS(app)



@app.route('/auth', methods=['POST'])
def authentication(name=None):
    """Verify player with name."""
    data = request.get_json()
    if (data['user_type']=="/player"):
        lis = con.get_players_email_password()
        for x in lis:
            if x[0]==data['email']:
                return json.dumps({"password": x[1]})
        return json.dumps({"password": False})
    else:
        lis = con.get_instructors_email_password()
        for x in lis:
            if x[0]==data['email']:
                return json.dumps({"password": x[1]})
        return json.dumps({"password": False})


@app.route('/register', methods=['POST'])
def register_user():
    # data = request.form
    data = request.get_json()
    if (data['user_type']=="/player"):
        result=con.add_player(data['name'], data['email'], data['password'])
        if result==False:
            return json.dumps({"success": False})
        else:
            return json.dumps({"success": True})
    else:
        result=con.add_instructor(data['name'], data['email'], data['password'])
        if result==False:
            return json.dumps({"success": False})
        else:
            return json.dumps({"success": True})

@app.route('/')
def welcome():
    return 'Welcome!'

if __name__ == '__main__':
    app.run(port=8086, host='0.0.0.0')
