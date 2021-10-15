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

// Al click scorre le immagini

arrowBottomButtonElement.addEventListener('click', function (){
    for (let i = 0; i < items.length - 1; i++) {
        const element = items[i]; 
       

            document.getElementById('slider').src = items[1]
            console.log(items);
        
       
            document.getElementById('slider').src = items[2]

        
        
        
       

        
    }
    
});