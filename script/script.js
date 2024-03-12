let cards;
let posts;
let subject;
let cookieList;
let container = document.querySelector('#boundaries');

function getCurrentPage(){
    let path = window.location.pathname;
    let segments = path.split('/');
    let currentPage = segments[segments.length - 1];
    return currentPage;
}

function jsonReader(){
    let current_page = getCurrentPage();
    console.log(current_page)

    if (current_page === "index.html"){
        fetch('https://mayara-souza.github.io/BiomedUpload/data/posts.json')
            .then(response => response.json())
            .then(data => {
                const cards = Object.keys(data);
                console.log(cards);
                createCards(current_page, cards);
            })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
        // fetch('https://mayara-souza.github.io/BiomedUpload/data/subjects.json')
        // .then(response => response.json())
        // .then(data => {
        //     cards = data;
        //     console.log("JSON lido"); 
        //     console.log(cards);
        //     createCards(current_page, cards);
        // })
        // .catch(error => {
        //     console.error('Erro ao ler o arquivo JSON:', error);
        // });
    } else if (current_page === "posts.html"){
        fetch('/data/posts.json')
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
        for(let card of cards){
            try{
                console.log(card);
                let div = document.createElement('div');
                div.className = 'card';
    
                let a = document.createElement('a');
                a.setAttribute('href',card.direct_to);
                    
                let span = document.createElement('span'); 
                span.textContent = card;
                
                a.appendChild(span);
                div.appendChild(a);
                container.appendChild(div);
                div.onclick = function(event){
                    event.preventDefault();
                    subject = card.toLowerCase();
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
        let theme = Object.keys(cookie)[0].toUpperCase();
        console.log(theme);
        showPath(theme);

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

function showPath(path){
    let current_path = document.querySelector('#path');
    console.log(current_path);
    let content = current_path.textContent;
    console.log(content);
    let new_path =  content+" > "+path;
    console.log(new_path);

    current_path.innerText = new_path;
}




// todo: criar a interface que irá gerar os json's
// todo: criar links para todas as notas
// todo: configurar o cookie e atributo sameSite após lançar a página
jsonReader();
