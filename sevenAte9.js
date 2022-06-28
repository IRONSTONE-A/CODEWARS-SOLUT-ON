//! Write a function that removes every lone 9 that is inbetween 7s.

// examples
// "79712312" --> "7712312"
// "79797"    --> "777"

//? solution

function sevenAte9(str){
    return str.split("").map((e,index,arr) => e == "9" && arr[index-1] == "7" && arr[index+1] == "7" ? e = "" : e).join("")
}