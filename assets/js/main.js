const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
// diamo ai bottoni la possibilità di compiere un azione per far scorrere le immagini

const arrowTopButtonElement = document.getElementById('arrow-top');
const arrowBottomButtonElement = document.getElementById('arrow-bottom');
const img = document.querySelector('#slider');

// Al click scorre le immagini
var corrente = 0
var n_img = items.length -1
var titolo = title.length -1
var paragrafo = text.length -1
var info = document.getElementById('titolo');
var para = document.querySelector('testo');
arrowBottomButtonElement.addEventListener('click', function (){
    corrente++;
    if((corrente > n_img)){
        corrente = 0;
    }
    console.log(corrente);
    img.setAttribute('src','./' + items[corrente])
    console.log(info + (title[corrente]));
    info.innerHTML = (title[corrente]);
    para.innerHTML = (text[corrente]);
    console.log(para);
    
    
   /* console.log(items[corrente]);
    console.log(title[corrente]);
    console.log(text[corrente]);*/
});
arrowTopButtonElement.addEventListener('click', function (){
    corrente--;
    if(corrente == -1){
        corrente = n_img;
    }
    console.log(corrente);
    img.setAttribute('src','./' + items[corrente])
});