const fetchPokemon = () => {
    // Search Button
    const pokeSearch = document.getElementById("pokeSearch");
    let pokeName = pokeSearch.value.toLowerCase();
    // Pokemon Name
    const pokemon = document.getElementById("pokemon");
    pokemon.innerHTML = pokeSearch.value;
    // Search API
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        // Error Handling
        if (res.status != 200) {
            console.log(res);
            pokeSprites("../static/whichPoke.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        // Search for Data in a Json
        console.log(data);
        // Sprite Variable
        let pokeSprite = data.sprites.front_default;
        // Pokemon Sprite Url
        //console.log(pokeSprite);
        // Pokemon Sprite Called
        pokeSprites(pokeSprite);
        // Pokemon Number Order
        let pokeOrder = data.order;
        // Pokemon Number
        const order = document.getElementById("order");
        order.innerHTML = `#${pokeOrder}`;
        // Pokemon Types Length
        let typesL = data.types.length;
        // Pokemon Type 01
        let pokeType01 = data.types[0].type.name;
        let type01 = document.getElementById("type-01");
        type01.innerHTML = pokeType01;
        if (typesL == 2) {
            // Pokemon Type 02
            let pokeType02 = data.types[1].type.name;
            let type02 = document.getElementById("type-02");
            type02.innerHTML = pokeType02;
        }
        else {
            // Deletes Second Pokemon Type
            let type02 = document.getElementById("type-02");
            type02.innerHTML = " ";
        }
        // Pokemon Abilities
        let ability = data.abilities[0].ability.name;
        let ability1 = data.abilities[1].ability.name;
        pokeAbility(ability, ability1);
        // Pokemon Base Stats
        // Hp
        let baseH = data.stats[0].base_stat;
        // Attack
        let baseA = data.stats[1].base_stat;
        // Defense
        let baseD = data.stats[2].base_stat;
        // Special-Attack
        let baseSA = data.stats[3].base_stat;
        // Special-Defense
        let baseSD = data.stats[4].base_stat;
        // Speed
        let baseSp = data.stats[5].base_stat;
        baseStats(baseH, baseA, baseD, baseSA, baseSD, baseSp);
        // Pokemon Moves
        let moves = data.moves[0].move.name;
        let moves_01 = data.moves[1].move.name;
        let moves_02 = data.moves[2].move.name;
        let moves_03 = data.moves[3].move.name;
        pokeMoves(moves, moves_01, moves_02, moves_03);
    })
}

//fetchPokemon();

// Pokemon Sprites
const pokeSprites = (url) => {
    const pokeSprite = document.getElementById("pokeSprite");
    pokeSprite.src = url;
}
// Pokemon Abilities
const pokeAbility = (ability, ability1) => {
    let firstAbility = document.getElementById("ability");
    let secondAbility = document.getElementById("ability1");
    firstAbility.innerHTML = ability;
    secondAbility.innerHTML = ability1;
}
// Pokemon Moves
const pokeMoves = (moves, moves_01, moves_02, moves_03) => {
    let moveOne = document.getElementById("moveOne");
    let moveTwo = document.getElementById("moveTwo");
    let moveThree = document.getElementById("moveThree");
    let moveFour = document.getElementById("moveFour");
    moveOne.innerHTML = moves;
    moveTwo.innerHTML = moves_01;
    moveThree.innerHTML = moves_02;
    moveFour.innerHTML = moves_03;
}
// Pokemon Basic Statistics
const baseStats = (baseH, baseA, baseD, baseSA, baseSD, baseSp) => {
    let hp = document.getElementById("hp");
    let a = document.getElementById("attack");
    let d = document.getElementById("defense");
    let sa = document.getElementById("sa");
    let sd = document.getElementById("sd");
    let sp = document.getElementById("speed");
    hp.innerHTML = baseH;
    a.innerHTML = baseA;
    d.innerHTML = baseD;
    sa.innerHTML = baseSA;
    sd.innerHTML = baseSD;
    sp.innerHTML = baseSp;
}


//pokeSprites("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png");
