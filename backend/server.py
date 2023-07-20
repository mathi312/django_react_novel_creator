from flask import Flask, request, jsonify
from web_novel_meta_infos import WebNovelMetaInfos
from novel import Novel
import datetime
 
x = datetime.datetime.now()
 
# Initializing flask app
app = Flask(__name__)
 
 
# Route for seeing a data
@app.route('/data')
def get_time():
 
    # Returning an api for showing in  reactjs
    return {
        "Name" :"geek",
        "Age":"22",
        "Date":x,
        "programming":"python"
        }

@app.route('/novel')
def get_Novel():
    url = request.args.get('url', None)
    if url is None: return None
    novel = WebNovelMetaInfos.getTitleAndDescription(url)
    return jsonify(novel)

     
# Running app
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)