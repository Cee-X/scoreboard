let result=document.getElementById("score");
let awayresult=document.getElementById("guestscore");
let homepoint=0;
let awaypoint=0;
function add_1(){
    homepoint += 1;
    result.textContent = homepoint;
}
function add_2(){
    homepoint += 2;
    result.textContent = homepoint;
}
function add_3(){
    homepoint += 3;
    result.textContent = homepoint;
}
function add1(){
    awaypoint += 1;
    awayresult.textContent = awaypoint;
}
function add2(){
   awaypoint += 2;
    awayresult.textContent = awaypoint;
}
function add3(){
    awaypoint += 3;
    awayresult.textContent = awaypoint;
}
