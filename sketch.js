const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,bloc6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var hero,monster;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
ground = new Ground(1500,400,3000,10);
hero = new SuperHero(400,350,100,50);
monster = createSprite(1000,350,50,100);
block1 = newBlock(600,350,50,50);
block2 = newBlock(600,350,50,50);
block3 = newBlock(600,350,50,50);
block4 = newBlock(600,350,50,50);
block5 = newBlock(600,350,50,50);
block6 = newBlock(600,350,50,50);
block7 = newBlock(700,350,50,50);
block8 = newBlock(700,350,50,50);
block9 = newBlock(700,350,50,50);
block10 = newBlock(700,350,50,50);
block11 = newBlock(700,350,50,50);
block12 = newBlock(700,350,50,50);
block13 = newBlock(700,350,50,50);
block14 = newBlock(700,350,50,50);
block15 = newBlock(800,350,50,50);
block16 = newBlock(800,350,50,50);
block17 = newBlock(800,350,50,50);
block18 = newBlock(800,350,50,50);
block19 = newBlock(800,350,50,50);
block20 = newBlock(800,350,50,50);
}

function draw() {
  background("white");
  hero.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

drawSprites();
}

