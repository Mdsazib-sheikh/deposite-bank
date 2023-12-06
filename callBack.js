function welComeGuest(name, greetHandler){
    greetHandler(name);
}
const actorName = "tomsHank";

function greetUser(name){
    console.log('Good morning',name);
}

function greetEvening(name){
    console.log('Good Evening',name);
}



function greetAfternoon(name){
    console.log('Good Afternoon',name);
}

welComeGuest(actorName,greetAfternoon);