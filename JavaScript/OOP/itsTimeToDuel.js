class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    showStats(){
        console.log(`Name: ${this.name} Cost: ${this.cost} Power: ${this.power} Resilience: ${this.res}`);
    }

    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
            console.log(`${this.name} attacks ${target.name}`);
            this.showStats();
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            if(this.stat == "resilience"){
                target.res += this.magnitude;
                console.log(`${this.name} played on ${target.name}: ${this.text}`);
                target.showStats();
            }
            else{
                target.power += this.magnitude;
                console.log(`${this.name} played on ${target.name}: ${this.text}`);
                target.showStats();
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}


const redNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlg = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unPromise = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProg = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// hardAlg.play(redNinja);
// unPromise.play(blackNinja);
pairProg.play(redNinja);
// redNinja.attack(blackNinja);