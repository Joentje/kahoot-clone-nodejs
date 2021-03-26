var input =
    [
        { "hostId": "i822KGNKpCnoCBqeAAAi", "playerId": "-VIjRjQrfr9b3zLxAAAl", "name": "Henk    ", "gameData": { "score": 325, "answer": 0 } },
        { "hostId": "i822KGNKpCnoCBqeAAAi", "playerId": "Urk4hIovDQ9Yi-MWAAAm", "name": "Tom     ", "gameData": { "score": 300, "answer": 0 } },
        { "hostId": "i822KGNKpCnoCBqeAAAi", "playerId": "jJGtTFrO3N6BUmYzAAAq", "name": "Klaas   ", "gameData": { "score": 310, "answer": 0 } },
        { "hostId": "i822KGNKpCnoCBqeAAAi", "playerId": "Jh3ZNf7qSRIMZnUwAAAr", "name": "Taco    ", "gameData": { "score": 290, "answer": 0 } },
        { "hostId": "i822KGNKpCnoCBqeAAAi", "playerId": "YBEhjRE14uNeWPblAAAp", "name": "Jeroen  ", "gameData": { "score": 310, "answer": 0 } },
        { "hostId": "i822KGNKpCnoCBqeAAAi", "playerId": "GHBqOIw1jaH-Ds5GAAAk", "name": "Vincent ", "gameData": { "score": 280, "answer": 0 } },
        { "hostId": "i822KGNKpCnoCBqeAAAi", "playerId": "kfxkXQUYc6FWhRoSAAAo", "name": "Paul    ", "gameData": { "score": 355, "answer": 0 } },
        { "hostId": "i822KGNKpCnoCBqeAAAi", "playerId": "daaRfFPO7Oii7_qeAAAj", "name": "David   ", "gameData": { "score": 125, "answer": 0 } },
        { "hostId": "i822KGNKpCnoCBqeAAAi", "playerId": "a5DWpKRmIB0RE82-AAAn", "name": "Piet    ", "gameData": { "score": 365, "answer": 0 } }
    ]


// input.forEach(x => {
//     console.log(`${x.name} - ${x.gameData.score}`)
// })

input.sort(function (a, b) {
    return b.gameData.score - a.gameData.score
});
// console.log("sorted")

// input.forEach(x => {
//     console.log(`${x.name} - ${x.gameData.score}`)
// })
for (var i = 0; i < 10; i++) {
    var player = input[i];
    // console.log(player)
    if (player) {
        console.log(`${i} | ${player.name} - ${player.gameData.score}`)
    }
}

// const myPlace = input.findIndex( x => {
//     console.log(x.name);
//     var name = x.name.trim().toUpperCase();
//     var me = "Tom".trim().toUpperCase();
//     console.log(name);
//     console.log(me);
//     console.log(name == me);
//     console.log(name === me);
//     x.name.trim().toUpperCase() === "Tom".toUpperCase();
// })
const myPlace2 = input.findIndex(x => x.name.trim().toLowerCase() == "tom");
// console.log(myPlace);
console.log(myPlace2);