//! Convert string to camel case (6 kyu)

//?Description:

//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

//?Example:
// returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior") 

// returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

//?Mysolution:

let str = "the-stealth-warrior";

function toCamelCase(str){
    str = str.split('');
    return str.map(function(el, i){
      if(el == '-' || el == '_'){
        el = str[i+1].toUpperCase();
        str.splice(i+1, 1);
      }
      return el;
    }).join('');
  }

//   toCamelCase(str);
  //! similar solutions:

  function toCamelCase1(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}

//?####################################################################

function toCamelCase2(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }
 console.log(toCamelCase2(str)) ;

//?####################################################################

function toCamelCase3(str){
    return str
      .split(/_|-/)
      .map((word, i) => i ? word.charAt(0).toUpperCase() + word.slice(1) : word)
      .join('')
  }
  console.log(toCamelCase3(str)) ;


//?####################################################################