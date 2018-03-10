var jHeight = prompt("enter the height of John in cms");
var x = parseInt(jHeight);
var fHeight = prompt("enter the height of friend in cms");
var y = parseInt(fHeight);
var jAge = prompt("enter the age of John");
var p = parseInt(jAge);
var fAge = prompt("enter the age of friend");
var q = parseInt(fAge);

score1 = x  + 5*p;
score2 = y + 5*q;

if(score1 >= score2)
    console.log("John wins!" + score1);
else if(score2 >=score1)
    console.log("John's friend wins" + score2);
else
    console.log("Its a draw");

