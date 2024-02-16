let cards;
let container = document.querySelector('#boundaries');

function jsonReader(){
    fetch('../data/materias.json')
    .then(response => response.json())
    .then(data => {
        cards = data;
        console.log("JSON lido"); 
        console.log(cards);
        createCards(cards);
    })
    .catch(error => {
        console.error('Erro ao ler o arquivo JSON:', error);
    });
}

function createCards(cards){
    console.log("criando cards: ");

    for(let card of cards.materias){
        try{
            console.log(card);
            let div = document.createElement('div');
            div.className = 'card';

            let a = document.createElement('a');
            a.setAttribute('href',card.direct_to);
                
            let span = document.createElement('span'); 
            span.textContent = card.title;
                
            a.appendChild(span);
            div.appendChild(a);
            container.appendChild(div);

            
        }catch (erro) {
            console.log('Não foi possível gerar o card.');
            console.error(erro);
        }
    }
}

// todo-create same logic to posts

jsonReader();




