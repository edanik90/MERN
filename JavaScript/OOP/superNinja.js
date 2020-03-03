class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("Name: ", this.name);
    }
    showStats(){
        this.sayName();
        console.log("Health: " + this.health + " Strength: " + this.strength + " Speed: " + this.speed);
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name, health){
        super(name, 200)
        this.wisdom = 10;
        this.strength = 10;
        this.speed = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months");
    }
}

const sensei = new Sensei("Kagawa");
sensei.speakWisdom();
sensei.showStats();