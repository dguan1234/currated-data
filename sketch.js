let fruitFact = [
  "Tomatoes are a fruit.",
  "Strawberries are technically not a berry.",
  "A pomegranate can hold up to 1000 seeds!",
  "Potatoes were the first vegetable to be grown in space.",
  "Not all oranges are orange.",
  "Cranberries can bounce.",
  "The part of broccoli that you eat is actually flowers which haven’t opened yet.",
  "Pumpkins and cucumber are also classed as a fruit, not a vegetable!",
  "Durian is the smelliest fruit in the world."
]

let decision = [
  "Blend these ingredients together to create a savory drink!",
  "Try randomizing again."
]

let fruits = [];
let fruitsSecond = [];
let fruitsThird = [];
let smoothieBackground;
let counter = 0;
let button;
let bar;
let robottoBold


function preload() {

  smoothieBackground = loadImage('images/smuuthie.jpg')
  bar = loadImage('images/bar.png')

  robottoBold = loadFont('assets/robotto-bold.ttf')

  let ft0 = loadImage('images/apple.png')
  let ft1 = loadImage('images/apricot.png')
  let ft2 = loadImage('images/avocado.png')
  let ft3 = loadImage('images/banana.png')
  let ft4 = loadImage('images/blueberry.png')
  let ft5 = loadImage('images/cantolope.png')
  let ft6 = loadImage('images/cherry.png')
  let ft7 = loadImage('images/coconut.png')
  let ft8 = loadImage('images/durian.png')
  let ft9 = loadImage('images/fig.png')
  let ft10 = loadImage('images/guava.png')
  let ft11 = loadImage('images/kiwi.png')
  let ft12 = loadImage('images/lemon.png')
  let ft13 = loadImage('images/lime.png')
  let ft14 = loadImage('images/lychee.png')
  let ft15 = loadImage('images/mango.png')
  let ft16 = loadImage('images/orange.png')
  let ft17 = loadImage('images/passionfruit.png')
  let ft18 = loadImage('images/peach.png')
  let ft19 = loadImage('images/pear.png')
  let ft20 = loadImage('images/pineaple.png')
  let ft21 = loadImage('images/plum.png')
  let ft22 = loadImage('images/pomegranate.png')
  let ft23 = loadImage('images/raspberry.png')
  let ft24 = loadImage('images/redgrapes.png')
  let ft25 = loadImage('images/strawberry.png')
  let ft26 = loadImage('images/watermelon.png')
  let ft27 = loadImage('images/whitegrapes.png')

  fruits = [ft0, ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, ft11, ft12, ft13, ft14, ft15, ft16, ft17, ft18, ft19, ft20, ft21, ft22, ft23, ft24, ft25, ft26, ft27]
  fruitsSecond = [ft0, ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, ft11, ft12, ft13, ft14, ft15, ft16, ft17, ft18, ft19, ft20, ft21, ft22, ft23, ft24, ft25, ft26, ft27]
  fruitsThird = [ft0, ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, ft11, ft12, ft13, ft14, ft15, ft16, ft17, ft18, ft19, ft20, ft21, ft22, ft23, ft24, ft25, ft26, ft27]

}



function setup() {
  createCanvas(1500, 800);
  background(200)
  push()
  fill(3, 252, 215)
  image(smoothieBackground, 0, 0)
  textSize(50)
  textAlign(CENTER);
  textFont(robottoBold)
  text("Your Smoothie Randomizer", 750, 400);
  pop();
  button = createButton("click to randomize a drink")
  button.mousePressed(buttonPressed);
  button.class("drinkButton");
}


function buttonPressed() {
  setTimeout(loadingScreen, 1500)
  setTimeout(loadingScreen2, 3500)
  setTimeout(loadingScreen3, 5500)
  setTimeout(randomFruitPicker, 7500);
}




function loadingScreen() {
  background(255, random(94,165), random(0,110))
  push()
  textFont(robottoBold)
  textSize(50)
  fill(random(55,90), random(0,46), 255)
  text('LOading.', 800, 400)
  fruitFactDisplay()
  text('fun fruit fact: ',110,70)
  pop()
}

function loadingScreen2() {
  background(255, random(94,165), random(0,110))
  push()
  textFont(robottoBold)
  textSize(50)
  fill(random(55,90), random(0,46), 255)
  text('LOADing..', 800, 400)
  fruitFactDisplay()
  text('fun fruit fact: ',110,70)
  pop()
}

function loadingScreen3() {
  background(255, random(94,165), random(0,110))
  push()
  textFont(robottoBold)
  textSize(50)
  fill(random(55,90), random(0,46), 255)
  text('LOADING...', 800, 400)
  fruitFactDisplay()
  text('fun fruit fact: ',110,70)
  pop()
}


function randomFruitPicker() {

  background(random(125, 160), random(65, 85), random(34, 55))
  image(bar, 0, 0)
  let randomFruit = int(random(fruits.length))
  let randomFruits2 = int(random(fruitsSecond.length))
  let randomFruits3 = int(random(fruitsThird.length))
  image(fruits[randomFruit], 0, 0);
  image(fruits[randomFruits2], 500, 0)
  image(fruits[randomFruits3], 1000, 0)
  push()
  textAlign(CENTER)
  textSize(50)
  textFont(robottoBold)
  fill(random(0,90), random(140,180), random(245,245))
  decisionDecide()
  pop()
}

function decisionDecide() {
  let randomDecision = int(random(decision.length))
  text(decision[randomDecision], 750, 600)
}

function fruitFactDisplay() {
  let randomFruitFact = int(random(fruitFact.length))
  push()
  textFont(robottoBold)
  textSize(30)
  fill(random(55,90), random(0,46), 255)
  text(fruitFact[randomFruitFact],110,100)
  pop()
  push()
  textSize(15)
  textFont(robottoBold)
  fill(random(55,90), random(0,46), 255)
  text('from Becketts farm', 110,115)
  pop()
}
