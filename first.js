const quotes =[
    "The Hell is Empty, All the Devils are here","A lion doesn't concern him self with the opinion of a sheep.","A man who passes the sentences should swing the sword.","Any men who must say, I'm the king is no true king","We work jobs that we hate, to buy things we don't need, to impress people we don't like",
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*4);
    console.log(index);
    quote.textContent =quotes[index];

})