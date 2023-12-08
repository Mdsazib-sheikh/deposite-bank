function welComeGuest(name, greetHandler){
    greetHandler(name);
}
const actorName = "tomsHank";


function greetMorning(name){
    console.log('Good Morning',name);
}

function greetEvening(name){
    console.log('Good Evening',name);
}



function greetAfternoon(name){
    console.log('Good Afternoon',name);
}

welComeGuest(actorName, greetAfternoon);
welComeGuest('piter van', greetEvening);
welComeGuest('rango',greetMorning);


function handleClick(){
    console.log('some one clicked me');  //named funtion 
}

document.getElementById('click).addEvenListerner('click', function(){
    
})