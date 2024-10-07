from flask import Flask, render_template, request
from gemini import generate_response

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/get')
def get_bot_response():
    userText = request.args.get('msg')
    bot_response = generate_response(userText)
    return bot_response

if __name__ == '__main__':
  app.run(debug=True)
