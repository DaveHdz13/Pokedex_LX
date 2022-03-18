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
        // Pokemon Ability Variable
        let ability = data.abilities[0].ability.name;
        // Pokemon Ability Print
        let firstAbility = document.getElementById("ability");
        firstAbility.innerHTML = ability;
        // Pokemon Base Stats
        // Hp
        let baseH = data.stats[0].base_stat;
        let hp = document.getElementById("hp");
        hp.innerHTML = baseH
        // Attack
        let baseA = data.stats[1].base_stat;
        let a = document.getElementById("attack");
        a.innerHTML = baseA
        // Defense
        let baseD = data.stats[2].base_stat;
        let d = document.getElementById("defense");
        d.innerHTML = baseD
        // Special-Attack
        let baseSA = data.stats[3].base_stat;
        let sa = document.getElementById("sa");
        sa.innerHTML = baseSA
        // Special-Defense
        let baseSD = data.stats[4].base_stat;
        let sd = document.getElementById("sd");
        sd.innerHTML = baseSD
        // Speed
        let baseSp = data.stats[5].base_stat;
        let sp = document.getElementById("speed");
        sp.innerHTML = baseSp
    })
}

//fetchPokemon();

// Pokemon Sprites
const pokeSprites = (url) => {
    const pokeSprite = document.getElementById("pokeSprite");
    pokeSprite.src = url;
}



//pokeSprites("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png");
