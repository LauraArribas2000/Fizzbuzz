"use strict";


function fizzbuzz(num) {
  let string = "";
  if(num%3 == 0) {
    string += "Fizz";
  }
  if(num%5 == 0){
    string += "Buzz";
  }
  if(string == ""){
    return num;
  }
  return string;
}

module.exports = fizzbuzz;