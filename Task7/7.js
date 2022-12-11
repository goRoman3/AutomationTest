/*
Написати метод котрий буде заміняти невалідні символи в тексті. 

Вхідний параметр: текст в якому є символи % ! ?
Вихідний параметр: текст без символів % ! ?
*/

var myString = "ыыыыыыы%  ыв!ла!ьлыь ! ыаь% вльаы  %  %  % пважвбп???";

//просто функція що видалить символи які ми передамо після строки 
function replacer(str, ...args){
  var string = str; 
  for (i = 0; i < args.length; i++) {
      if (args[i])
      string = string.replaceAll(args[i], "");
    }
  return string;
}

console.log(replacer(myString,"!","?","%"));

//регулярка
console.log("a%b#с?".replace(/[%#?]/g, ""))

// метод классу 

/*const replacer = {
    constructor(str, args) {
      this.str = str;
      this.args = args;
    },
    // Method
    replaceSymbo : function() {
    //  this.inputString * this.parameter1 * this.parameter2 *this.parameter3;
      result = this.str.replace(this.args, "");
      consolt.log(result);
    }
  }*/
//replacer.replaceSymbo(myString, 1);
