
let planets = ['Mercury', 'Venus', 'Earth', 'Mars','Jupiter', 'Saturn','Uranus','Neptune'];

planets.forEach(planet => {
    let div = document.createElement('div');
    div.classList.add('planet');
    div.classList.add(`planet-${planet}`);
    document.querySelector('section').appendChild(div);
});

let planetsMoons = {mercuryMoons : 32, venusMoons : 12, earthMoons : 2, marsMoonss : 11, jupiterMoons : 4, saturnMoon : 1, uranusMoons : 9, neptuneMoons : 17};

for(let planet in planetsMoons){
    
}