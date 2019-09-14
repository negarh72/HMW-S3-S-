var robot;
var user_score = 0;
var robot_score = 0;
// Score Counter:
for (var i = 1; i < 6; i++) {
    var user_rand_score = 0;
    var draw_rand_score = 0;
    var robot_rand_score = 0;
    var randNumber = Math.floor(Math.random() * 3);
    if (randNumber == 0) {
        robot = "rock"
    } else if (randNumber == 1) {
        robot = "paper"
    } else if (randNumber == 2) {
        robot = "scissors"
    }
    console.log(robot);
    user = prompt("Please Chosse: rock,paper,scissors")
    console.log(user);
    if (user == robot) {
        user_score = user_score;
        robot_score = robot_score;
        draw_rand_score = 1;
    } else if (user == "rock" && robot == "scissors") {
        user_score += 1;
        robot_score = robot_score;
        user_rand_score = 1;

    } else if (user == "paper" && robot == "rock") {
        user_score += 1;
        robot_score = robot_score;
        user_rand_score = 1;
    } else if (user == "scissors" && robot == "paper") {
        user_score += 1;
        robot_score = robot_score;
        user_rand_score = 1;
    } else if (user == "rock" && robot == "paper") {
        robot_score += 1;
        user_score = user_score;
        robot_rand_score = 1;

    } else if (user == "paper" && robot == "scissors") {
        robot_score += 1;
        user_score = user_score;
        robot_rand_score = 1;
    } else if (user == "scissors" && robot == "rock") {
        robot_score += 1;
        user_score = user_score;
        robot_rand_score = 1;
    }
    if (user_rand_score == 1 && draw_rand_score == 0) {
        document.getElementById('output1').innerHTML += "Round " + i + ": " + "You are the Winner" + '<br>';
    } else if (draw_rand_score != 0 && user_rand_score != 1 && robot_rand_score != 1) {
        document.getElementById('output1').innerHTML += "Round " + i + ": " + "Has No Winner" + '<br>';

    } else if (robot_rand_score == 1 && draw_rand_score == 0) {
        document.getElementById('output1').innerHTML += "Round " + i + ": " + "I am the Winner" + '<br>';

    }
}
console.log("robot total score is: " + robot_score);
console.log("user total score is: " + user_score)
if (user_score > robot_score) {
    document.getElementById('output2').innerHTML += "Congrats! , You are the Final Winner" + '<br>';
} else if (user_score < robot_score) {
    document.getElementById('output2').innerHTML += "Maybe Next Time" + '<br>';
} else {
    document.getElementById('output2').innerHTML += "We are Even" + '<br>';
}