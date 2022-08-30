from flask import Flask, render_template
from flask import request
import json

app = Flask('app')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/cody')
def cody():
    return render_template('cody.html')


@app.route('/memo')
def memo():
    return render_template('memo.html')

@app.route('/ganarMemo')
def ganarMemo():
  return render_template('memoGanar.html')

@app.route('/test', methods=['POST'])
def test():
  output = request.get_json()
  print(output)
  result = json.loads(output)
  print(result)
  return result


# usar Flask session para guardar datos según el usuario
  
app.run(host='0.0.0.0', port=8080)