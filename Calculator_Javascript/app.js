const buttons = document.querySelectorAll('button');
const input = document.getElementById('screen');

for(let btn of buttons){
    btn.addEventListener('click',(e)=>{
        const buttonText = e.target.innerText; //to get the value of the button that has been clicked
        //e.target gives you the target html tag where the event has occured.

        if(buttonText ==='X'){
            input.value+='*';
        }
        else if(buttonText === 'C'){
            input.value="";
        }
        else if(buttonText === '='){
            try{
                input.value= eval(input.value); // eval() evaluates mathematical operations.
            }
            catch(e){
                console.log(e.message);
                input.value = "Invalid";
            }
        }
        else{
            input.value+= buttonText;
        }
    })
}