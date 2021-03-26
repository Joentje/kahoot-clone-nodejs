var socket = io();
var playerAnswered = false;
var correct = false;
var name;
var score = 0;

var params = jQuery.deparam(window.location.search); //Gets the id from url

socket.on('connect', function() {
    //Tell server that it is host connection from game view
    socket.emit('player-join-game', params);
    
    document.getElementById('answer1').style.visibility = "visible";
    document.getElementById('answer2').style.visibility = "visible";
    document.getElementById('answer3').style.visibility = "visible";
    document.getElementById('answer4').style.visibility = "visible";
});

socket.on('noGameFound', function(){
    window.location.href = '../../';//Redirect user to 'join game' page 
});

function answerSubmitted(num){
    if(playerAnswered == false){
        playerAnswered = true;
        
        socket.emit('playerAnswer', num);//Sends player answer to server
        
        //Hiding buttons from user
        document.getElementById('answer1').style.visibility = "hidden";
        document.getElementById('answer2').style.visibility = "hidden";
        document.getElementById('answer3').style.visibility = "hidden";
        document.getElementById('answer4').style.visibility = "hidden";
        document.getElementById('message').style.display = "block";
        document.getElementById('message').innerHTML = "Answer Submitted! Waiting on other players...";
        
    }
}

//Get results on last question
socket.on('answerResult', function(data){
    if(data == true){
        correct = true;
    }
});

socket.on('questionOver', function(data){
    if(correct == true){
        document.body.style.backgroundColor = "#4CAF50";
        document.getElementById('message').style.display = "block";
        document.getElementById('message').innerHTML = "Correct!";
    }else{
        document.body.style.backgroundColor = "#f94a1e";
        document.getElementById('message').style.display = "block";
        document.getElementById('message').innerHTML = "Incorrect!";
    }
    document.getElementById('answer1').style.visibility = "hidden";
    document.getElementById('answer2').style.visibility = "hidden";
    document.getElementById('answer3').style.visibility = "hidden";
    document.getElementById('answer4').style.visibility = "hidden";
    socket.emit('getScore');
});

socket.on('newScore', function(data){
    document.getElementById('scoreText').innerHTML = "Score: " + data;
});

socket.on('nextQuestionPlayer', function(){
    correct = false;
    playerAnswered = false;
    
    document.getElementById('answer1').style.visibility = "visible";
    document.getElementById('answer2').style.visibility = "visible";
    document.getElementById('answer3').style.visibility = "visible";
    document.getElementById('answer4').style.visibility = "visible";
    document.getElementById('message').style.display = "none";
    document.body.style.backgroundColor = "white";
    
});

socket.on('hostDisconnect', function(){
    window.location.href = "../../";
});

socket.on('playerGameData', function(data){
   for(var i = 0; i < data.length; i++){
       if(data[i].playerId == socket.id){
           document.getElementById('nameText').innerHTML = "Name: " + data[i].name;
           document.getElementById('scoreText').innerHTML = "Score: " + data[i].gameData.score;
       }
   }
});

socket.on('GameOver', function(data){
    console.log("socket id");
    console.log(socket.id);
    console.log(data);
    const myPlace = data.playerScores.findIndex(x => x.playerId === socket.id);
    const me = data.playerScores[myPlace];
    console.log(myPlace);
    console.log(data.totalPlayers);
    document.body.style.backgroundColor = "#FFFFFF";
    document.getElementById('answer1').style.visibility = "hidden";
    document.getElementById('answer2').style.visibility = "hidden";
    document.getElementById('answer3').style.visibility = "hidden";
    document.getElementById('answer4').style.visibility = "hidden";
    document.getElementById('message').style.display = "block";
    const txt = `You've finished the quiz!<br>Thank you for playing ${me.name}<br><br>You've scored ${me.score} points,<br>which means you have finished as<br>player ${myPlace + 1} out of ${data.totalPlayers} players`
    document.getElementById('message').innerHTML = "GAME OVER";
    document.getElementById('message').innerHTML = txt;

    document.getElementById('nameText').style.visibility = "hidden";
    document.getElementById('rankText').style.visibility = "hidden";
    document.getElementById('scoreText').style.visibility = "hidden";
    // document.getElementById('nameText').style.fontSize = "35px";
    // document.getElementById('nameText').style.textAlign = "center";
    // document.getElementById('scoreText').style.fontSize = "35px";
    // document.getElementById('scoreText').style.textAlign = "center";
    // document.getElementById('rankText').style.fontSize = "35px";
    // document.getElementById('rankText').style.textAlign = "center";

    // document.getElementById('rankText').style.display
    document.getElementById('rankText').innerHTML = `Rank: ${myPlace+1}`
    // document.getElementById('rankText')

    document.getElementsByTagName("body")[0].style.animation = "bgcolor 10s infinite"
    document.getElementsByTagName("body")[0].style.animationDirection = "alternate"

    // body {
    //     -webkit-animation: bgcolor 20s infinite;
    //     animation: bgcolor 10s infinite;
    //     -webkit-animation-direction: alternate;
    //     animation-direction: alternate;
    // }

});

