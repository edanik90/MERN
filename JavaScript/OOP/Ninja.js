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

const ninja1 = new Ninja("Hanzo", 50);
// ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();