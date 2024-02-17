let cards;
let posts;
let subject;
let cookieList;
let container = document.querySelector('#boundaries');

function jsonReader(){
    let current_page = window.location.href;
    current_page = current_page.slice(-10);
    console.log(current_page);

    if (current_page === "index.html"){
        fetch('../data/materias.json')
        .then(response => response.json())
        .then(data => {
            cards = data;
            console.log("JSON lido"); 
            console.log(cards);
            createCards(current_page, cards);
        })
        .catch(error => {
            console.error('Erro ao ler o arquivo JSON:', error);
        });
    } else if (current_page === "posts.html"){
        fetch('../data/posts.json')
        .then(response => response.json())
        .then(data => {
            posts = data;
            console.log("JSON lido"); 
            console.log(posts);
            createCards(current_page, posts);
        })
        .catch(error => {
            console.error('Erro ao ler o arquivo JSON:', error);
        });
    }
}

function createCards(current_page, cards){
    console.log("criando cards: ");

    if(current_page === "index.html"){
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
                div.onclick = function(event){
                    event.preventDefault();
                    subject = card.title.toLowerCase();
                    document.cookie = subject;
                    
                    window.location.href = '/pages/posts.html';
                }
            }catch (erro) {
                console.log('Não foi possível gerar o card.');
                console.error(erro);
            }
        } 
    }

    if (current_page === "posts.html"){
        let cookie = getAllCookies();
        let theme = Object.keys(cookie)[0];

        posts[theme].forEach(post => {
            try{
                console.log(post);
                let div = document.createElement('div');
                div.className = 'card';
    
                let a = document.createElement('a');
                a.setAttribute('href',post.direct_to);
                    
                let span = document.createElement('span'); 
                span.textContent = post.title;
                
                a.appendChild(span);
                div.appendChild(a);
                container.appendChild(div);
    
                
            }catch (erro) {
                console.log('Não foi possível gerar o card.');
                console.error(erro);
            }
        });
    }
}

function getAllCookies() {
    let cookies = document.cookie.split(';');
    cookieList = {};
    cookies.forEach(function(cookie) {
        let parts = cookie.split('=');
        let name = parts[0].trim();
        let value = decodeURIComponent(parts[1]);
        cookieList[name] = value;
    });
    return cookieList;
}


// todo: configurar o cookie após lançar a página
jsonReader();
