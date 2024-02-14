let cards = ["Bioquímica", "Fisiopatologia", "Fisologia aplicada a psicobiologia"];
let text_url = "https://share.note.sx/0q2sawx5#WqcvqOCyZb3Dusx/QTPEahNBC97SK4Jh8crx2XJyr20";
let container = document.querySelector('#boundaries');

function createCards(){
    cards.forEach(card => {
        let div = document.createElement('div');
        div.className = 'card';

        let a = document.createElement('a');
        a.setAttribute('href', text_url);
        
        let span = document.createElement('span'); 
        span.textContent = card;
        
        a.appendChild(span);
        div.appendChild(a);
        container.appendChild(div);
    });
}

createCards();




