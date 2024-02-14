'''import json'''

'''Escrever os dados no arquivo JSON json.load(file)'''

with open('../data/materias.json', 'r') as arquivo:
    conteudo = arquivo.read()
    print(conteudo)

'''../data/materias.json'''
