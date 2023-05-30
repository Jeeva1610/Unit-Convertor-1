let input = document.getElementById('input')
let result = document.getElementById('result')
let inputType = document.getElementById('inputType')
let resultType = document.getElementById('resultType')
let inputTypeValue, resultTypeValue

// now add listener
input.addEventListener("keyup", myResult)
inputType.addEventListener("change", myResult)
resultType.addEventListener("change", myResult)

//taking initial value
inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult() {

//when we change the input and output type value we need to
// update the inputType value and outputType value

    inputTypeValue = inputType.value
    resultTypeValue = resultType.value


// now campare input and resultType value and add formula

   if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){

    //This is meter to kilometer formula
    result.value = Number(input.value) * 0.001;

   }else if(inputTypeValue === "meter" && resultTypeValue==="centimeter"){

    //this is meter to centimeter formula
    result.value = Number(input.value) * 100;

   }else if(inputTypeValue === "meter" && resultTypeValue==="meter"){ 

    //this is meter to meter formula
    result.value = input.value;
   }


   if(inputTypeValue === "kilometer" && resultTypeValue==="meter"){

    //This is kilometer to meter formula
    result.value = Number(input.value) * 1000;

   }else if(inputTypeValue === "kilometer" && resultTypeValue==="centimeter"){

    //this is kilometer to centimeter formula
    result.value = Number(input.value) * 100000;

   }else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){ 

    //this is kilometer to kilometer formula
    result.value = input.value;
   }


   if(inputTypeValue === "centimeter" && resultTypeValue==="kilometer"){

    //This is centimeter to kilometer formula
    result.value = Number(input.value) * 0.00001;

   }else if(inputTypeValue === "centimeter" && resultTypeValue==="meter"){

    //this is centimeter to meter formula
    result.value = Number(input.value) * 0.01;

   }else if(inputTypeValue === "centimeter" && resultTypeValue==="centimeter"){ 

    //this is centimeter to centimeter formula
    result.value = input.value;
   }
}