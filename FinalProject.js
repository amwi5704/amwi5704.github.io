const button = document.querySelector('.generate');
const sand = document.querySelector('.mainsS');
const gob = document.querySelector('.mainsG');
const ha = document.querySelector('.mainsH');
const hpp = document.querySelector('.hp');
const attt = document.querySelector('.at');
const atype = document.querySelector('.atype');
const level = document.querySelector('.level');
let mainstat = document.querySelector(".mainstat");
let lv = document.querySelector(".lv");
let s1 = document.querySelector(".s1");
let s2 = document.querySelector(".s2");
let s3 = document.querySelector(".s3");
let s4 = document.querySelector(".s4");


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

console.log('loaded');

const percentages = ["ATK %", "DEF %", "Energy Recharge", "Crit Rate", "Crit Damage"];
const allStats = ["ATK %", "DEF %", "Energy Recharge", "Crit Rate", "Crit Damage", "ATK", "HP", "DEF", "Elemental Mastery"];
const critR = [2.7, 3.1, 3.5, 3.9];
const critD = [5.4, 6.2, 7.0, 7.8];
const defF = [16, 19, 21, 23];
const defP = [5.1, 6.2, 7.3];
const atkF = [14, 17, 19];
const atkP = [4.1, 4.6, 5.2, 5.8];
const hpF = [209, 229, 269, 299];
const hpP = [4.1, 4.6, 5.2, 5.8];
const em = [16, 19, 21, 23];
const er = [4.5, 5.5, 6.5];

atype.addEventListener('click', check);

function check(){
if(document.getElementById("feather").checked) {
    console.log('plume');
    attt.style.visibility = 'visible';
    hpp.style.visibility = 'hidden';
    ha.style.visibility = 'hidden';
    gob.style.visibility = 'hidden';
    sand.style.visibility = 'hidden';
}
else if(document.getElementById("flower").checked) {
    console.log('broach');
    ha.style.visibility = 'hidden';
    gob.style.visibility = 'hidden';
    sand.style.visibility = 'hidden';

    hpp.style.visibility = 'visible';
    attt.style.visibility = 'hidden';
}
else if(document.getElementById("sands").checked) {
    sand.style.visibility = 'visible';
    console.log('timepiece');
    ha.style.visibility = 'hidden';
    gob.style.visibility = 'hidden';
    attt.style.visibility = 'hidden';
    hpp.style.visibility = 'hidden';
}
else if(document.getElementById("goblet").checked) {
    gob.style.visibility = 'visible';
    console.log('cup');
    sand.style.visibility = 'hidden';
    ha.style.visibility = 'hidden';
    attt.style.visibility = 'hidden';
    hpp.style.visibility = 'hidden';
}
else if(document.getElementById("hat").checked) {
    ha.style.visibility = 'visible';
    console.log('circlit');
    sand.style.visibility = 'hidden';
    gob.style.visibility = 'hidden';
    attt.style.visibility = 'hidden';
    hpp.style.visibility = 'hidden';
}}

let artifact = {
  "mainStat": "DEF %",
  "mainStatV": 0,
  "sub1": "DEF",
  "sub1v": 0,
  "p1": false,
  "sub2": "HP",
  "sub2v": 0,
  "p2": false,
  "sub3": "HP %",
  "sub3v": 0,
  "p3": true,
  "sub4": "ATK",
  "sub4v": 0,
  "p4": false,
  "lv": 0
};

button.addEventListener('click', generate);

function generate(){
let mainStat = "";
let sub1p = false;
let sub2p = false;
let sub3p = false;
let sub4p = false;

if (document.getElementById("feather").checked){
  mainStat = "ATK";
}
else if (document.getElementById("flower").checked){
  mainStat = "HP";
}
else if (document.getElementById("sands").checked){
  mainStat = document.querySelector('input[name="mainSS"]:checked').value;
;
}
else if (document.getElementById("goblet").checked){
  mainStat = document.querySelector('input[name="mainSG"]:checked').value;
}
else if (document.getElementById("hat").checked){
  mainStat = document.querySelector('input[name="mainSH"]:checked').value;
};

if (percentages.includes(document.getElementById("cs1").value)){
  sub1p = true;
}
if (percentages.includes(document.getElementById("cs2").value)){
  sub2p = true;
}
if (percentages.includes(document.getElementById("cs3").value)){
  sub3p = true;
}
if (percentages.includes(document.getElementById("cs4").value)){
  sub4p = true;
}


artifact = {
  "mainStat": mainStat,
  "mainStatV": 1,
  "sub1": document.getElementById("cs1").value,
  "sub1v": parseFloat(document.getElementById("cs1v").value),
  "p1": sub1p,
  "sub2": document.getElementById("cs2").value,
  "sub2v": parseFloat(document.getElementById("cs2v").value),
  "p2": sub2p,
  "sub3": document.getElementById("cs3").value,
  "sub3v": parseFloat(document.getElementById("cs3v").value),
  "p3": sub3p,
  "sub4": document.getElementById("cs4").value,
  "sub4v": parseFloat(document.getElementById("cs4v").value),
  "p4": sub4p,
  "lv": 0
};
console.log(artifact);
display();
}

level.addEventListener('click', levelup);

function levelup(){
  if(artifact.sub4 === "none"){
    addFourthStat();
    console.log(artifact);
  }
  else if(artifact.lv === 20){
    console.log("maxxed");
  }
  else{
    plusFour();
  };
  display()
}

function addFourthStat(){
  console.log("yay fourth stat");
  let arr = [artifact.sub1, artifact.sub2, artifact.sub3, artifact.sub4, artifact.mainStat];
  let newS = randomValueFromArray(allStats);
  if (arr.includes(newS))
  {
    addFourthStat();
  }
  else{
    artifact.sub4 = newS;
    if (newS === "ATK %"){
      artifact.sub4v = randomValueFromArray(atkP);
    }
    else if (newS === "ATK"){
      artifact.sub4v = randomValueFromArray(atkF);
    }
    else if (newS === "DEF %"){
    artifact.sub4v = randomValueFromArray(defP);
    }
    else if (newS === "DEF"){
      artifact.sub4v = randomValueFromArray(defF);
    }
    else if (newS === "HP %"){
      artifact.sub4v = randomValueFromArray(hpP);
    }
    else if (newS === "HP"){
      artifact.sub4v = randomValueFromArray(hpF);
    }
    else if (newS === "Energy Recharge"){
      artifact.sub4v = randomValueFromArray(er);
    }
    else if (newS === "Elemental Mastery"){
      artifact.sub4v = randomValueFromArray(em);
    }
    else if (newS === "Crit Rate"){
      artifact.sub4v = randomValueFromArray(critR);
    }
    else if (newS === "Crit Damage"){
      artifact.sub4v = randomValueFromArray(critD);
    };
  }


}

function plusFour(){
  console.log("plus 4");
  artifact.lv = artifact.lv +4;
  let arr = [artifact.sub1, artifact.sub2, artifact.sub3, artifact.sub4];
  const rand = Math.floor(Math.random()*4) +1;
  let sub = "";
  if (rand === 1){
    sub = artifact.sub1;
    subv = artifact.sub1v;
  }
  else if (rand === 2){
    sub = artifact.sub2;
    subv = artifact.sub2v;
  }
  else if (rand === 3){
    sub = artifact.sub3;
    subv = artifact.sub3v;
  }
  else if (rand === 4){
    sub = artifact.sub4;
    subv = artifact.sub4v;
  };
  if (sub === "ATK %"){
    subv = subv + randomValueFromArray(atkP);
  }
  else if (sub === "ATK"){
    subv = subv + randomValueFromArray(atkF);
  }
  else if (sub === "DEF %"){
  subv = subv + randomValueFromArray(defP);
  }
  else if (sub === "DEF"){
    subv = subv + randomValueFromArray(defF);
  }
  else if (sub === "HP %"){
    subv = subv + randomValueFromArray(hpP);
  }
  else if (sub === "HP"){
    subv = subv + randomValueFromArray(hpF);
  }
  else if (sub === "Energy Recharge"){
    subv = subv + randomValueFromArray(er);
  }
  else if (sub === "Elemental Mastery"){
    subv = subv + randomValueFromArray(em);
  }
  else if (sub === "Crit Rate"){
    subv = subv + randomValueFromArray(critR);
  }
  else if (sub === "Crit Damage"){
    subv = subv + randomValueFromArray(critD);
  };
  if (rand === 1){
    artifact.sub1v = subv;
  }
  else if (rand === 2){
    artifact.sub2v = subv;
  }
  else if (rand === 3){
    artifact.sub3v = subv;;
  }
  else if (rand === 4){
    artifact.sub4v = subv;;
  };
  console.log(artifact);

};

function display(){
  console.log('display');
    mainstat.textContent = artifact.mainStat;

      lv.textContent = "+" +artifact.lv;
      s1.textContent = artifact.sub1 + " " + artifact.sub1v;

      s2.textContent = artifact.sub2 + " " + artifact.sub2v;

      s3.textContent = artifact.sub3 + " " + artifact.sub3v;

      s4.textContent = artifact.sub4 + " " + artifact.sub4v;
};
