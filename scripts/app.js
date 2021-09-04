let carnivorous = ['Lion','Tiger','Cat'];
let herbivorous = ['Buffallo','Cow','Horse', ...carnivorous]
let [x,y, ...args] = herbivorous;
console.log(x,y, args); 
