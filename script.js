/*
Prompt users for a color
 */



let isColorValid = false;

while(!isColorValid){
    let userInput= prompt("Please pick a color", "red");
    let hexCode="#";
    if(userInput !== null){

        // making sure that the userInput is lower case and removing uncessary space from beginning to end. 
        let color = userInput.toLowerCase().trim();
    
    
        if (color === "red"){
            hexCode += "FF0000";
            isColorValid = true;
        }else if(color === "blue"){
            hexCode += "0000FF";
            isColorValid = true;
        }else if (color === "green"){
            hexCode += "00FF00"
            isColorValid = true;
        }else if(color === "yellow"){
            hexCode +="FFFF00";
            isColorValid = true;
        }else if(color === "orange"){
            hexCode+="FFA500";
            isColorValid = true;
        }else if(color === "indigo"){
            hexCode +="FFA500";
            isColorValid = true;
        }else if(color === "violet"){
            hexCode += "EE82EE"
            isColorValid = true;
        }else if(color === "random"){
            let randomColor;
            //randomColor = `#${Math.floor(Math.random() * 16).toString(16)}${Math.floor(Math.random() * 16).toString(16)}${Math.floor(Math.random() * 10).toString(16)}${Math.floor(Math.random() * 16).toString(16)}${Math.floor(Math.random() * 16).toString(16)}${Math.floor(Math.random() * 16).toString(16)}`;
           randomColor=`#${Math.floor(Math.random()*16777216).toString(16)}`;
            console.log(randomColor);
           hexCode = randomColor;
           isColorValid = true;
        }else{
           alert(`${color} is not a color of the rainbow.`);
            isColorValid = false;
        
        }

        alert(`The hex code for ${color} is: ${hexCode}`)
            document.body.style.backgroundColor = hexCode;
    }else{
        alert("Sorry to hear that you cannot play right now. Maybe next time. Bye!")
        isColorValid = true;
    }



}

