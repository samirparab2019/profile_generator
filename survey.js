const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const array = [];

rl.question('Whats your name? Nicknames are also acceptable:) ', (answer) => {
  array.push(answer);
  
  
rl.question('Whats an activity you like doing?:) ', (answer) => {
  array.push(answer);

rl.question('What do you listen to while doing that?:) ', (answer) => {
  array.push(answer);

rl.question('Which meal is your favourite (eg: dinner, brunch, etc.:) ', (answer) => {
array.push(answer);
    
rl.question('Whats your favourite thing to eat for that meal?:) ', (answer) => {
      array.push(answer);

rl.question('Which sport is your absolute favourite?:) ', (answer) => {
array.push(answer);

rl.question('What is your superpower? In a few words, tell us what you are amazing at!:) ', (answer) => {
array.push(answer);
  
  
console.log(`Thank you for your valuable feedback:\nMy name is ${array[0]}.\nI like to play ${array[1]}.\nI listen to ${array[2]}.\nI enjoy eating ${array[3]}.\nMy fav. meal is ${array[4]}.\nI like to play ${array[5]}.\n${array[6]}.\n`);
rl.close();
});
});
});
});
});
});
});

  


