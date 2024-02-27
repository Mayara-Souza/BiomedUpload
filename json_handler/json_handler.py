import json

def get_registered_subjects():
    path_to_json = '../data/subjects.json'

    with open(path_to_json, 'r') as arquivo:
        data = json.load(arquivo)

        # Extrair os valores do campo 'title' como uma lista
        titles = [materia['title'] for materia in data['materias']]

        subjects_array = titles

    return subjects_array

def add_study_subject(subject_data):
    with open('../data/subjects.json', 'r') as file:
        data = json.load(file)

    # Adicionar um novo objeto
    new_subject = {
        "title": subject_data["title"],
        "direct_to": subject_data["direct_to"]
    }
    data["materias"].append(new_subject)

    # Salvar o arquivo JSON atualizado
    with open('../data/subjects.json', 'w') as file:
        json.dump(data, file, indent=4)


def add_subject_topic(new_post):
    print(new_post)
    with open('../data/posts.json', 'r') as file:
        data = json.load(file)

    # Adicionar um novo objeto
    new_post = {
        "subject": new_post["selected_subject"],
        "title": new_post["title"],
        "direct_to": new_post["direct_to"]
    }

    subject = new_post["subject"]

    data[subject].append({"title": new_post["title"], "direct_to": new_post["direct_to"]})

    # Salvar o arquivo JSON atualizado
    with open('../data/posts.json', 'w') as file:
        json.dump(data, file, indent=4)
