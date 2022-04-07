const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

function getQuote() {

  console.log('quote button was clicked');
  try{
    const response = await fetch(endPoint);
    if (!response.ok){
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.message);
  } catch(err) {
    console.log(err)
    alert('fail');
  }
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endPoint = 'https://catfact.ninja/fact';
