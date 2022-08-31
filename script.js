/*
Prompt users for a color
 */


const color = prompt("Please pick a color", "red");



if (color == "red"){
    document.body.style.backgroundColor = color;
}else if(color == "blue"){
    document.body.style.backgroundColor = color;
}else if (color == "green"){
    document.body.style.backgroundColor = color;
}else if(color == "yellow"){
    document.body.style.backgroundColor = color;
}else if(color == "orange"){
    document.body.style.backgroundColor = color;
}else if(color == "indigo"){
    document.body.style.backgroundColor = color;
}else if(color == "violet"){
    document.body.style.backgroundColor = color;
}else if(color == "random"){
    let randomColor;
    //randomColor = `#${Math.floor(Math.random() * 16).toString(16)}${Math.floor(Math.random() * 16).toString(16)}${Math.floor(Math.random() * 10).toString(16)}${Math.floor(Math.random() * 16).toString(16)}${Math.floor(Math.random() * 16).toString(16)}${Math.floor(Math.random() * 16).toString(16)}`;
   randomColor=`#${Math.floor(Math.random()*16777216).toString(16)}`;
    console.log(randomColor);
   document.body.style.backgroundColor = randomColor;
}else{
    prompt(`${color} is not a color of the rainbow. Please enter a valid color`, "red");

}