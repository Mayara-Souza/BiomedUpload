import json

def update_materias():
    with open('../data/materias.json', 'r') as file:
        data = json.load(file)

    # Adicionar um novo objeto
    new_post = {
        "title": "Novo texto",
        "direct_to": "https://exemplo.com"
    }
    data["materias"].append(new_post)

    # Salvar o arquivo JSON atualizado
    with open('../data/materias.json', 'w') as file:
        json.dump(data, file, indent=4)
