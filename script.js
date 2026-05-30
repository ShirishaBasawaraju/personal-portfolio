const words = [
'Frontend Development Enthusiast',
'Aspiring Full Stack Developer',
'Responsive Web Designer',
'Creative UI Builder'
];


let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

const typing = document.getElementById('typing');

function typeEffect(){

  currentWord = words[wordIndex];

  if(isDeleting){
    typing.textContent = currentWord.substring(0,charIndex--);
  }

  else{
    typing.textContent = currentWord.substring(0,charIndex++);
  }

  if(!isDeleting && charIndex === currentWord.length){

    isDeleting = true;

    setTimeout(typeEffect,1000);

    return;
  }

  if(isDeleting && charIndex === 0){

    isDeleting = false;

    wordIndex = (wordIndex + 1) % words.length;
  }
  

  }