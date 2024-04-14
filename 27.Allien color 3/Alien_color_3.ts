// Alien colors 3 : turn your if else chain from excercise 25-26 into an if else chain.

let aliencolor:string='green';
// if the alien is green, print a message that the player earned 5 points.
// if the alien is yellow, print a message that the player earned 10 points.
// if the alien is red, print a message that the player earned 15 points.

// version 1.
if(aliencolor==='green'){
    console.log(" version 1. player earned 5 points.")
}else if(aliencolor==="yellow"){
    console.log("player earned 10 points.")
}else if(aliencolor==="red"){
    console.log("player earned 15 points.")
}
else{
    console.log("please select right color")
}
// version 2.
 aliencolor="yellow"

if(aliencolor==='green'){
    console.log("player earned 5 points.")
}else if(aliencolor==="yellow"){
    console.log("version 2. player earned 10 points.")
}else if(aliencolor==="red"){
    console.log("player earned 15 points.")
}
else{
    console.log("please select right color")
}

// version 3.
aliencolor="red"

if(aliencolor==='green'){
    console.log(" player earned 5 points.")
}else if(aliencolor==="yellow"){
    console.log("player earned 10 points.")
}else if(aliencolor==="red"){
    console.log("version 3. player earned 15 points.")
}
else{
    console.log("please select right color")
}





