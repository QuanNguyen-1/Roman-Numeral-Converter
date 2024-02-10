const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const number = document.getElementById("number");

const numerals = [
  {arabic:1000,
  roman: "M"},
  {arabic:900,
  roman: "CM"},
  {arabic:500,
  roman: "D"},
  {arabic:400,
  roman: "CD"},
  {arabic:100,
  roman: "C"},
  {arabic:90,
  roman: "XC"},
  {arabic:50,
  roman: "L"},
  {arabic:40,
  roman: "XL"},
  {arabic:10,
  roman: "X"},
  {arabic:9,
  roman: "IX"},
  {arabic:5,
  roman: "V"},
  {arabic:4,
  roman: "IV"},
  {arabic:1,
  roman: "I"},
  
];


const checkInput = () => {
  output.innerText="";

  if(!number.value){
    output.innerText="Please enter a valid number";
  } else if(parseInt(number.value)===-1){
    output.innerText="Please enter a number greater than or equal to 1";
  } else if(parseInt(number.value) >= 4000){
    output.innerText="Please enter a number less than or equal to 3999";
  } else {
    output.innerText=convert(parseInt(number.value));
  };
};

const convert = (input) => {
  
  let resultObj = numerals.find((item) => 
  input >= item.arabic);

  if(resultObj.arabic === input){
    return resultObj.roman;
  } else {
    return resultObj.roman + convert(input-resultObj.arabic);
  };
};

convertBtn.addEventListener("click",checkInput);
