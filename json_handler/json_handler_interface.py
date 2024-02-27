import json
import PySimpleGUI as sg
import json_handler

layout = [
    [sg.Text("Selecione a opção desejada:")],
    [sg.Button("Adicionar novo campo de estudo", key='1')],
    [sg.Button("Adicionar novo tópico de um campo existente", key='2')]
]

def add_new_subject():
    # Layout para a janela de entrada dos dados do novo campo de estudo
    layout_new_subject = [
        [sg.Text("Digite o título do novo campo de estudo:")],
        [sg.InputText(key='-TITULO-')],
        [sg.Text("Digite o link direto para o novo campo de estudo:")],
        [sg.InputText(key='-DIRECTO-')],
        [sg.Button('OK')]
    ]

    # Abre a janela modal para inserção dos dados
    window_new_subject = sg.Window('Novo Campo de Estudo', layout_new_subject, modal=True)

    while True:
        event_new_subject, values_new_subject = window_new_subject.read()
        if event_new_subject == 'OK' or event_new_subject == sg.WINDOW_CLOSED:
            break
    window_new_subject.close()

    # Dados inseridos pelo usuário
    new_subject = {
        "title": values_new_subject['-TITULO-'],
        "direct_to": values_new_subject['-DIRECTO-']
    }

    # Adiciona o novo campo de estudo
    json_handler.add_study_subject(new_subject)

def add_subject_topic():
    subjects = json_handler.get_registered_subjects();

    # Layout para a janela de entrada dos dados do novo tópico do campo de estudo
    layout_new_post = [
        [sg.Text("Informe a área de conhecimento do post que deseja adicionar.")],
        [sg.Combo(subjects, size=(20, len(subjects)), key='-MAINSUB-', enable_events=True)],
        [sg.Text("Informe o título no novo post:")],
        [sg.InputText(key='-TITULO-')],
        [sg.Text("Digite o link do post:")],
        [sg.InputText(key='-DIRECTO-')],
        [sg.Button('OK')]
    ]

    # Abre a janela modal para inserção dos dados
    window_new_post = sg.Window('Novo post', layout_new_post, modal=True)

    while True:
        event_new_post, values_new_post = window_new_post.read()
        if event_new_post == 'OK' or event_new_post == sg.WINDOW_CLOSED:
            break
    window_new_post.close()

    # Dados inseridos pelo usuário
    new_post = {
        "selected_subject": values_new_post['-MAINSUB-'],
        "title": values_new_post['-TITULO-'],
        "direct_to": values_new_post['-DIRECTO-']
    }

    # Adiciona o novo post
    json_handler.add_subject_topic(new_post)








window = sg.Window('BIOMED UPLOAD', layout)

while True:
    event, _ = window.read()
    if event == sg.WINDOW_CLOSED:
        break
    if event == '1':
        add_new_subject()
        sg.popup("Função 'add_study_subject()' chamada.")
    elif event == '2':
        add_subject_topic()

window.close()
