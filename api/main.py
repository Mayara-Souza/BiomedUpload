from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
    "BIOQUÍMICA": {
        "card_name": "BIOQUÍMICA",
        "card_url": "ttps://share.note.sx/0q2sawx5#WqcvqOCyZb3Dusx/QTPEahNBC97SK4Jh8crx2XJyr20"
    },
    "PSICOBIOLOGIA": {
        "card_name": "PSICOBIOLOGIA",
        "card_url": "ttps://share.note.sx/0q2sawx5#WqcvqOCyZb3Dusx/QTPEahNBC97SK4Jh8crx2XJyr20"
    }
}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
