const attributeHtml = {
    data_categories_all: document.querySelector('[data_categories_all]'),
    data_science: document.querySelector('[data_ia]'),
    data_games: document.querySelector('[data_cp]'),
    data_security: document.querySelector('[data_internet]'),
    data_hardware: document.querySelector('[data_pt]'),
    data_article: document.querySelectorAll('[ data_article]'),
    data_categorie: document.querySelectorAll('[data_categorie]'),
    data_date: document.querySelectorAll('[data_date]'),
    data_views_1: document.querySelector('[data_views_1]'),
    data_views_2: document.querySelector('[data_views_2]'),
    data_views_3: document.querySelector('[data_views_3]'),
    data_views_4: document.querySelector('[data_views_4]'),
}    

attributeHtml.data_views_1.innerHTML = localStorage.getItem('views_card_1') || '0';
attributeHtml.data_views_2.innerHTML = localStorage.getItem('views_card_2') || '0';
attributeHtml.data_views_3.innerHTML = localStorage.getItem('views_card_3') || '0';
attributeHtml.data_views_4.innerHTML = localStorage.getItem('views_card_4') || '0';

const dataAtual = {
    data: new Date().toLocaleDateString()
}

attributeHtml.data_date.forEach((data) => {
    data.innerHTML = `${dataAtual.data}`
})

attributeHtml.data_categories_all.addEventListener('click', () => {
    attributeHtml.data_article.forEach((index) => {
        index.style.display = 'block'
    })
})

attributeHtml.data_science.addEventListener('click', () => {
    attributeHtml.data_article.forEach((index) => {
        if(index.getAttribute('data_categorie') === 'ciencia'){
            index.style.display = 'block'
        } else {
            index.style.display = 'none'
        }
    })
})

attributeHtml.data_games.addEventListener('click', () => {
    attributeHtml.data_article.forEach((index) => {
        if(index.getAttribute('data_categorie') === 'games'){
            index.style.display = 'block'
        } else {
            index.style.display = 'none'
        }
    })
})

attributeHtml.data_security.addEventListener('click', () => {
    attributeHtml.data_article.forEach((index) => {
        if(index.getAttribute('data_categorie') === 'seguranca'){
            index.style.display = 'block'
        } else {
            index.style.display = 'none'
        }
    })
})

attributeHtml.data_hardware.addEventListener('click', () => {
    attributeHtml.data_article.forEach((index) => {
        if(index.getAttribute('data_categorie') === 'hardware'){
            index.style.display = 'block'
        } else {
            index.style.display = 'none'
        }
    })
})

attributeHtml.data_article.forEach((index, indice) => {
    
    index.addEventListener('click', () =>{
        localStorage.setItem('indice', indice)

        switch (indice) {
            case 0:
                attributeHtml.data_views_1.innerHTML = parseInt(attributeHtml.data_views_1.innerHTML) + 1
                localStorage.setItem('views_card_1', attributeHtml.data_views_1.innerText)
                window.location.assign('index.html')
                break;

            case 1:
                attributeHtml.data_views_2.innerHTML = parseInt(attributeHtml.data_views_2.innerHTML) + 1
                localStorage.setItem('views_card_2', attributeHtml.data_views_2.innerText)
                window.location.assign('index.html')
                break;

            case 2:
                attributeHtml.data_views_3.innerHTML = parseInt(attributeHtml.data_views_3.innerHTML) + 1
                localStorage.setItem('views_card_3', attributeHtml.data_views_3.innerText)
                window.location.assign('index.html')
                break;
                
            case 3:
                attributeHtml.data_views_4.innerHTML = parseInt(attributeHtml.data_views_4.innerHTML) + 1
                localStorage.setItem('views_card_4', attributeHtml.data_views_4.innerText)
                window.location.assign('index.html')
                break;
        
            default:
                break;
        }
    })
})


