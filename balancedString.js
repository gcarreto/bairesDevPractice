function isBalance(str) {

  if(!str.length){
    return false;
  }

  let arrayStr = str.split("");
  let S = [];
  let isBalanced = true;

  for(let i=0; i<arrayStr.length; i++) {
    if(['{', '(', '['].includes(arrayStr[i])) {
      S.push(arrayStr[i]);
    } else if(['}', ')', ']'].includes(arrayStr[i])) {
      let lastPop = S.pop();

      if((arrayStr[i] === '}' && lastPop !== '{') ||
        (arrayStr[i] === ']' && lastPop !== '[') ||
        (arrayStr[i] === ')' && lastPop !== '(')) {
        isBalanced = false;
        break;
      }
    }
  }

  if(S.length){
    isBalanced = false;
  }

  return isBalanced;
}

const tests = {
  '(a[0]+b[2c[6]]) {24 + 53}' : true,
  'f(e(d))' : true,
  '[()]{}([])' : true,
  '((b)' : false,
  '(c]' : false,
  '{(a[])' : false,
  '([)]' : false,
  ')(' : false,
  '' : false
}

let keys = Object.keys(tests);

keys.forEach((currentK) => {
  let rs = isBalance(currentK);
  console.log(rs,tests[currentK]);
});