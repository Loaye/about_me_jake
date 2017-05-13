'use strict';

var user = prompt ('What is your name?');
console.log('user', user);

alert('Hi there ' + user + '! Let\'s get to know each other a little bit by asking 5 questions.');

var greeting = prompt('I am going to provide 5 questions and you have to guess is they are Yes or No. Sound good? Are you ready to start(Y|N)').toUpperCase();
console.log(greeting);

if(greeting === 'Y' || greeting === 'YES' || greeting === 'YEA' || greeting === 'YAY'){
  alert('Sweet let\'s begin!');
}else{
  alert('Too bad, already comitted..muwahah!');
}

var dog = prompt('How many dogs does Jake own(0-4)?');
console.log(dog);

if(dog === '1' || dog === '2'){
  alert('Nope not quite.. Almost');
}else if(dog === '3' && dog === '4'){
  alert('Way off buddy..');
}else{
  alert('Sadly.. but true..');
}


var car = prompt('What kind of car do you think Jake owns? (Subaru|Ford|Toyota)').toLowerCase();
console.log(car);

if(car === 'subaru' || car === 'sub' || car === 'subby' || car === 'subbie'){
  alert('Yay!! That is right! Good guess!');
}else if(car === 'ford'){
  alert('I used to, but no. Good guess though!');
}else{
  alert('WHAT!?! I am no traitor');
}

var fruit = prompt('Do you think my favourite type of food is fruit? (Y|N)').toUpperCase();
console.log(fruit);

if(fruit === 'Y' || fruit === 'YES' || fruit === 'YEA' || fruit === 'YAY'){
  alert('You are right!');
}else{
  alert('Wrong again.. It is Yes!');
}

var hat = prompt('How many hats do you think Jake owns?').toLowerCase();
console.log(hat);

if(hat === '1' || hat === 'one'){
  alert('You are correct!!');
}else if(hat < '1' || hat === 'zero'){
  alert('Sorry.. that is wrong. He owns 1!');
}else{
  alert('Sorry wrong again.. I thought we knew each other!');
}

var colour = prompt('What do you think Jake\s favourite colour is? (Black|Red|Purple)').toLowerCase();
console.log(colour);

if(colour === 'black'){
  alert('That is correct!! One with the darkness..muwahahah');
}else{
  alert('Sorry, it was black.. the darkness... muwahaha');
}
