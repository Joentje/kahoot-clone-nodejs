var socket = io();

var params = jQuery.deparam(window.location.search); //Gets the id from url

var timer;

var time = 20;

//When host connects to server
socket.on('connect', function () {
    // socket.emit('getTotalNrOfQuestions', params);
    //Tell server that it is host connection from game view
    socket.emit('host-join-game', params);
});
socket.on('receivedTotalNrOfQuestions', (data) => {
    console.log("received the nr of questions: " + data)
    document.getElementById('questionNum').innerHTML = `Question ${data.cur} / ${data.total}`
});

socket.on('noGameFound', function () {
    window.location.href = '../../';//Redirect user to 'join game' page
});

socket.on('gameQuestions', function (data) {
    document.getElementById('question').innerHTML = data.q1;
    document.getElementById('answer1').innerHTML = data.a1;
    document.getElementById('answer2').innerHTML = data.a2;
    document.getElementById('answer3').innerHTML = data.a3;
    document.getElementById('answer4').innerHTML = data.a4;
    var correctAnswer = data.correct;
    document.getElementById('playersAnswered').innerHTML = "Players Answered 0 / " + data.playersInGame;
    updateTimer();
});

socket.on('updatePlayersAnswered', function (data) {
    document.getElementById('playersAnswered').innerHTML = "Players Answered " + data.playersAnswered + " / " + data.playersInGame;
});

socket.on('questionOver', function (playerData, correct) {
    clearInterval(timer);
    var answer1 = 0;
    var answer2 = 0;
    var answer3 = 0;
    var answer4 = 0;
    var total = 0;
    //Hide elements on page
    document.getElementById('playersAnswered').style.display = "none";
    document.getElementById('timerText').style.display = "none";

    //Shows user correct answer with effects on elements
    if (correct == 1) {
        document.getElementById('answer2').style.filter = "grayscale(50%)";
        document.getElementById('answer3').style.filter = "grayscale(50%)";
        document.getElementById('answer4').style.filter = "grayscale(50%)";
        var current = document.getElementById('answer1').innerHTML;
        document.getElementById('answer1').innerHTML = "&#10004" + " " + current;
    } else if (correct == 2) {
        document.getElementById('answer1').style.filter = "grayscale(50%)";
        document.getElementById('answer3').style.filter = "grayscale(50%)";
        document.getElementById('answer4').style.filter = "grayscale(50%)";
        var current = document.getElementById('answer2').innerHTML;
        document.getElementById('answer2').innerHTML = "&#10004" + " " + current;
    } else if (correct == 3) {
        document.getElementById('answer1').style.filter = "grayscale(50%)";
        document.getElementById('answer2').style.filter = "grayscale(50%)";
        document.getElementById('answer4').style.filter = "grayscale(50%)";
        var current = document.getElementById('answer3').innerHTML;
        document.getElementById('answer3').innerHTML = "&#10004" + " " + current;
    } else if (correct == 4) {
        document.getElementById('answer1').style.filter = "grayscale(50%)";
        document.getElementById('answer2').style.filter = "grayscale(50%)";
        document.getElementById('answer3').style.filter = "grayscale(50%)";
        var current = document.getElementById('answer4').innerHTML;
        document.getElementById('answer4').innerHTML = "&#10004" + " " + current;
    }

    for (var i = 0; i < playerData.length; i++) {
        if (playerData[i].gameData.answer == 1) {
            answer1 += 1;
        } else if (playerData[i].gameData.answer == 2) {
            answer2 += 1;
        } else if (playerData[i].gameData.answer == 3) {
            answer3 += 1;
        } else if (playerData[i].gameData.answer == 4) {
            answer4 += 1;
        }
        total += 1;
    }

    //Gets values for graph
    var answer1pct = answer1 / total * 100;
    var answer2pct = answer2 / total * 100;
    var answer3pct = answer3 / total * 100;
    var answer4pct = answer4 / total * 100;

    document.getElementById('square1').style.display = "inline-block";
    document.getElementById('square2').style.display = "inline-block";
    document.getElementById('square3').style.display = "inline-block";
    document.getElementById('square4').style.display = "inline-block";
    document.getElementById('square1txt').style.display = "inline-block";
    document.getElementById('square2txt').style.display = "inline-block";
    document.getElementById('square3txt').style.display = "inline-block";
    document.getElementById('square4txt').style.display = "inline-block";

    document.getElementById('square1').style.height = answer1pct + "px";
    document.getElementById('square1txt').innerHTML = answer1;
    document.getElementById('square2').style.height = answer2pct + "px";
    document.getElementById('square2txt').innerHTML = answer2;
    document.getElementById('square3').style.height = answer3pct + "px";
    document.getElementById('square3txt').innerHTML = answer3;
    document.getElementById('square4').style.height = answer4pct + "px";
    document.getElementById('square4txt').innerHTML = answer4;

    document.getElementById('nextQButton').style.display = "block";

});

function nextQuestion() {
    document.getElementById('nextQButton').style.display = "none";
    document.getElementById('square1').style.display = "none";
    document.getElementById('square2').style.display = "none";
    document.getElementById('square3').style.display = "none";
    document.getElementById('square4').style.display = "none";
    document.getElementById('square1txt').style.display = "none";
    document.getElementById('square2txt').style.display = "none";
    document.getElementById('square3txt').style.display = "none";
    document.getElementById('square4txt').style.display = "none";

    document.getElementById('answer1').style.filter = "none";
    document.getElementById('answer2').style.filter = "none";
    document.getElementById('answer3').style.filter = "none";
    document.getElementById('answer4').style.filter = "none";

    document.getElementById('playersAnswered').style.display = "block";
    document.getElementById('timerText').style.display = "block";
    document.getElementById('num').innerHTML = " 20";
    socket.emit('nextQuestion'); //Tell server to start new question
}

function updateTimer() {
    time = 20;
    timer = setInterval(function () {
        time -= 1;
        document.getElementById('num').textContent = " " + time;
        if (time == 0) {
            socket.emit('timeUp');
        }
    }, 1000);
}
socket.on('GameOver', function (data) {
    document.getElementById('nextQButton').style.display = "none";
    document.getElementById('questionNum').style.display = 'none';
    document.getElementById('square1').style.display = "none";
    document.getElementById('square2').style.display = "none";
    document.getElementById('square3').style.display = "none";
    document.getElementById('square4').style.display = "none";

    document.getElementById('answer1').style.display = "none";
    document.getElementById('answer2').style.display = "none";
    document.getElementById('answer3').style.display = "none";
    document.getElementById('answer4').style.display = "none";
    document.getElementById('timerText').innerHTML = "";
    document.getElementById('question').innerHTML = "";
    document.getElementById('playersAnswered').innerHTML = "";

    // document.getElementById('winner1').style.display = "block";
    // document.getElementById('winner2').style.display = "block";
    // document.getElementById('winner3').style.display = "block";
    // document.getElementById('winner4').style.display = "block";
    // document.getElementById('winner5').style.display = "block";
    document.getElementById('winnerTitle').style.display = "block";


    for (let i = 0; i < data.length; i++) {
        const p = data[i];
        var id = "winner" + i;
        document.getElementById(id).style.display = "block";
        if (p.score == -1) {
            document.getElementById(id).innerHTML = `${i + 1}.`;
        } else {
            document.getElementById(id).innerHTML = `${i + 1}. ${p.name} (${p.score})`;
        }
    }

    // for (let i = 0; i < 10; i++) {
    //     const element = data[i]
    //     var id = "winner" + i
    //     document.getElementById(id).style.display = "block";
    //     if (element) {
    //         console.log("element: " + element)
    //         document.getElementById(id).innerHTML = `${i}. ${element.name} (${element.gameData.score})`
    //     } else {
    //         document.getElementById(id).innerHTML = `${i}. -`
    //     }
    // }

    // document.getElementById('winner1').innerHTML = "1. " + data.num1;
    // document.getElementById('winner2').innerHTML = "2. " + data.num2;
    // document.getElementById('winner3').innerHTML = "3. " + data.num3;
    // document.getElementById('winner4').innerHTML = "4. " + data.num4;
    // document.getElementById('winner5').innerHTML = "5. " + data.num5;
});



socket.on('getTime', function (player) {
    socket.emit('time', {
        player: player,
        time: time
    });
});




















