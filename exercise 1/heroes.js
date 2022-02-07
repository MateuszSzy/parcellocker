class Hero {
    #powerCount = 10;

    constructor(name) {
        this.name = name;
    }

    getCurrentPowerCount() {
        return this.#powerCount;
    }

    train() {
        this.#powerCount + 1;
    }
}

let heroCount = 0;

const heroes = [];

let hero = getHero("hulk");
let geralt = getHero("geralt");

heroes.push(hero);
heroes.push(geralt);

// code review: wrong name of the method -> printHallOfName()
// print_halt_of_name();

// printHallOfName();

// code review: name of the method in camelCase => getHero
// bug: method does not return anything. It should return hero object
function getHero() {
    heroCount++;

    // let hero = new Hero('hulk');// this line to be deleted
    return new Hero('hulk');

}

// code review: again, wrong name of the method -> printHallOfName
const printHallOfName = (spider) => {
    // bug: code tries to pass 'spider' variable as an argument but it does not exist
    // it should be "spider" instead
    // code review: those two lines should not be a part of this method
    // the name of this method suggests that it only prints heroes, not adds any
    let spiderman = getHero(spider);
    heroes.push(spiderman);

    // bug: there's no div with id="div". "#div" => ".div"
    const heroesContainer = document.querySelector("#div");

    heroes.map((x, i, arr) => {
        const heroElement = document.createElement("div");
        // bug: x is an object - not an array. So correct syntax is: const {name} = x;
        const {name} = x;

        // bug: #powerCount is a private field of Hero class so we cannot access it directly
        // Correct version: heroElement.innerHTML = '<p>${name}</p>${x.getCurrentPowerCount()}</p>';

        heroElement.innerHTML = '<p>${name}${x.getCurrentPowerCount()}</p>';
        // heroElement.innerHTML = `<p>${name}</p>${x.#powerCount}</p>`;

        heroesContainer.append(heroElement);
    });
};
printHallOfName();
