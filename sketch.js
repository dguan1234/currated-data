let fruits = [];
let fruitsSecond = [];
let fruitsThird = [];
let smoothieBackground;


function preload() {

  smoothieBackground = loadImage('images/smuuthie.jpg')

  let ft0 = loadImage('images/apple.jpg')
  let ft1 = loadImage('images/apricot.jpg')
  let ft2 = loadImage('images/avocado.jpg')
  let ft3 = loadImage('images/banana.jpg')
  let ft4 = loadImage('images/blueberry.jpg')
  let ft5 = loadImage('images/cantolope.jpg')
  let ft6 = loadImage('images/cherry.jpg')
  let ft7 = loadImage('images/coconut.jpg')
  let ft8 = loadImage('images/durian.jpg')
  let ft9 = loadImage('images/fig.jpg')
  let ft10 = loadImage('images/guava.jpg')
  let ft11 = loadImage('images/kiwi.jpg')
  let ft12 = loadImage('images/lemon.jpg')
  let ft13 = loadImage('images/lime.jpg')
  let ft14 = loadImage('images/lychee.jpg')
  let ft15 = loadImage('images/mango.jpg')
  let ft16 = loadImage('images/orange.jpg')
  let ft17 = loadImage('images/passionfruit.jpg')
  let ft18 = loadImage('images/peach.jpg')
  let ft19 = loadImage('images/pear.jpg')
  let ft20 = loadImage('images/pineaple.jpg')
  let ft21 = loadImage('images/plum.jpg')
  let ft22 = loadImage('images/pomegranate.jpg')
  let ft23 = loadImage('images/raspberry.jpg')
  let ft24 = loadImage('images/redgrapes.jpg')
  let ft25 = loadImage('images/strawberry.jpg')
  let ft26 = loadImage('images/watermelon.jpg')
  let ft27 = loadImage('images/whitegrapes.jpg')

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
  text("click to randomize a smoothie!", 750, 400);
  pop();
}

function mousePressed() {
  push()
  background(random(255), random(255), random(255))
  pop()
  let randomFruit = int(random(fruits.length))
  let randomFruits2 = int(random(fruitsSecond.length))
  let randomFruits3 = int(random(fruitsThird.length))
  image(fruits[randomFruit], 0, 0);
  image(fruits[randomFruits2], 500, 0)
  image(fruits[randomFruits3], 1000, 0)
  push()
  textAlign(CENTER)
  textSize(50)
  fill(random(255), random(255), random(255))
  text("Blend these ingredients together to create a savory drink!", 750, 600)
  pop()
}
