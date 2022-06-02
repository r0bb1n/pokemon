import {useState} from 'react'


const randomNum = (max, min) => {
    if(min === undefined || min === '' || min === null){
        min = 0;
    }

    return Math.floor(Math.random() * (max - min) + min);
}

// gamedata contains all the information and vars for the characters
const gameData = {
    step: 1,
    hero: {},
    enemy: {},
    curAttack: {},
    attackName: '',

    characters: [
        {
            name: "Bulbasaur",
            type: 'grass',
            weakness: ['fire'],
            hp: {
                total: 500,
                current: 500
            },
            attacks: [
                {
                    name: "tackle",
                    hp: randomNum(40, 20)
                },
                {
                    name: "vine whip",
                    hp: randomNum(60, 45)
                }
            ]
        },
        {
            name: "Charmander",
            type: 'fire',
            weakness: ['water'],
            hp: {
                total: 500,
                current: 500
            },
            attacks: [
                {
                    name: "ember",
                    hp: randomNum(40, 20)
                },
                {
                    name: "flamethrower",
                    hp: randomNum(60, 45)
                }
            ]
        }
    ]
}


// random num generator for attack


// attack multiplier based on weakness (could add resistance but has chosen not to)
const attackMultiplier = (attacker, curAttack) => {
    let defender = 'enemy';
    if(attacker === 'enemy'){
        defender = 'hero';
    }

    if(gameData[defender].weakness.indexOf(gameData[attacker].type) >=0){
        curAttack.hp *= 2;
    }

    curAttack.hp = Math.floor(curAttack.hp);
    return curAttack.hp;
}



export default gameData;