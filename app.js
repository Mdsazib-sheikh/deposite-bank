let inputBox = document.getElementById('inputBox')
let buttons  = document.getElementById('button')

let string = ''

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            string = string(eval(string))
            inputBox.value = string;
        }
        else if(b.target.innerText == 'AC'){
            string = ''
            inputBox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.string = string;
        }
        else if(b.target.id== 'plsuMinus'){
            string = String(-eval(string))
            inputBox.value = string;
        }
        else{
            string =+ b.target.innerText
            inputBox.value = string;
        }
    })
})

