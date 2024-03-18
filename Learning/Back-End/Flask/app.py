#載入Flask所有相關的module
from flask import Flask
from flask import request
from flask import render_template
from flask import session  #管理使用者狀態

#建立Application物件，設定靜態檔案的處理
app = Flask(__name__,
            static_folder = "static",
            static_url_path = "/"
            )

app.secret_key="admin" #設定Session的密鑰

#建立網站首頁的回應方式
@app.route("/")
def index():
    
    return render_template("index.html")
#建立分頁的回應
@app.route("/page")
def page():
    return render_template("page.html")

@app.route("/show", methods=["POST"])
def show():
    name=request.form["name"]
    session["username"]=name
    # name = request.args.get("name", "")
    return render_template("show.html", data= name)

@app.route("/talk")
def talk():
    name=session["username"]
    return name + "你今天想做甚麼?"

@app.route("/data")
def Data():
    return "My Data !"

@app.route("/user/<username>")
def nandleUser(username):
    return "Hello " + username
if __name__ == "__main__":
    from waitress import serve
    print("url = http://127.0.0.1:3000")
    serve(app, host="127.0.0.1", port=3000)
    
    #http://127.0.0.1:3000/