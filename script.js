const quotes = [
    {
        name:'Autor 1',
        quote:'Lorem Ipsum is simply dummy text of the printing and typesetting industry....'
    },
    {
        name:'Autor 2',
        quote:'It is a long established fact that a reader will be distracted ....'
    },
    {
        name:'Autor 3',
        quote:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...'
    },
    {
        name:'Autor 4',
        quote:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form....'
    },
    {
        name:'Autor 5',
        quote:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested....'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){

    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}