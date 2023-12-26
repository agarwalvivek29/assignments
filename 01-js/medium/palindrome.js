/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var others = new Set([' ',',','!',"'",'"','(',')','.','?','@'])
  for(let i=0;i<str.length;i++){
    if(others.has(str[i])){
      str=str.replace(str[i],'0')
    }
  }
  str=str.replace(/0/g,'') // /.../ these just signify start and end of the string which has to be eliminated g signifies all occurances should be deleted, not just the first one
  console.log(str)
  let str1=''
  for(let i=0;i<str.length;i++){
    str1+=str[i];
  }

  let str2=''
  for(let i=str1.length-1;i>=0;i--){
    str2+=str1[i];
  }
  for(let x in others){
    if(x in str1){
      str1.replace(x,'')
    }
    if(x in str2){
      str2.replace(x,'')
    }
  }
  console.log(str1,str2);
  return str1.toLowerCase()===str2.toLowerCase();
}

module.exports = isPalindrome;
