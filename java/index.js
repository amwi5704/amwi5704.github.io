function buttonClicked() {

  document.getElementById('button-1').classList.toggle('was-clicked');
}

function photoHovered() {

  document.getElementById('pic').classList.toggle('was-hov');
}

function windowLoaded() {
  console.log('loaded');
  document.getElementById('button-1').addEventListener('click',buttonClicked);

  document.getElementById('pic').addEventListener('mouseover',photoHovered);
}

window.onload = windowLoaded;
