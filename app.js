// Common parent constructor
function Creature(name, weight, height, diet) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
}

// Create Dino Constructor
function Dino(dino) {
    Creature.call(this, dino.species, dino.weight, dino.height, dino.diet);
    this.where = dino.where;
    this.when = dino.when;
    this.fact = dino.fact;
}

// Create Dino Objects
const dinoArray = dinoDataSource.map(dino => {
    return new Dino(dino);
});

// Create Human Object
const human = new Creature();

// Use IIFE to get human data from form
function fillHumanData() {
    (function(humanObj){
        humanObj.name = document.getElementById('name').value;
        humanObj.weight = Number(document.getElementById('weight').value);
        humanObj.diet = document.getElementById('diet').value;
        const feet = Number(document.getElementById('feet').value);
        const inches = Number(document.getElementById('inches').value);
        humanObj.height = feet * 12 + inches;
    }(human));
}


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

// Remove form from screen
function hideForm() {
    document.getElementById('dino-compare').style.display = 'none';
}

// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', () => {
    hideForm();
    fillHumanData();
    console.log(human);
});
