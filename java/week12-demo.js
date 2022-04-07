// const endPoint = 'https://catfact.ninja/fact';

const endPoint = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);
const modButton = document.querySelector('#mod-quote');
modButton.addEventListener('click', modifyQuote);

async function getQuote() {

  console.log('quote button was clicked');
  try{
    const response = await fetch(endPoint);
    if (!response.ok){
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.quotes[0].text);
  } catch(err) {
    console.log(err);
    alert('fail');
  }
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

function modifyQuote() {

  const quoteText = document.querySelector('#js-quote-text');
  const mod = prompt('What is your quote?');
  quoteText.textContent = mod;
}
