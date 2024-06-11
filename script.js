console.log('welcome to the calculator made by chaitanya ganesh pansare');

// grap the input field with thier values
let screen = document.getElementById('screen');

// create lacal variable for storing or appending the values of buttons to it...
let screenValue = "";

// grap all buutons and their value
let buttons = document.querySelectorAll('button');

for (item of buttons) {
    item.addEventListener("click", (e)=>{
        buttonText = e.target.innerText; // button text is the innertext of the button usually...
        console.log(buttonText);
        
        if (buttonText == "X") {

            // when multiply is denoted in the calculator X this sign we have to implement in hte * sign so we are doing this thing here...
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == "C") {
            // if the button text is equal to the C then screen becomes clear 0r empty
            screenValue = "";
            screen.value = screenValue;
        }

        else if (buttonText == "=") {
            // eval function is used to evaluate any javascript string
            // hence when the user clicks on the is equal to button then eval func will be executed...
            // we will get the result
            screen.value = eval(screenValue);
        }

        else if (buttonText === "") {
            // console.log("you have clicked on the bs button");
            if (screen.value !== "") {
                screen.value = screen.value.toString().slice(0, -1);
            }
           else{
               return
           }
        }

        else{
            
            screenValue += buttonText;  // appending into the screenValue
            screen.value = screenValue; // to print the values on the screen
        }
    })
}

