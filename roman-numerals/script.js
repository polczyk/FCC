const input = document.querySelector('#input');
const result = document.querySelector('#result');

input.addEventListener('input', (e) => {
  if (containsLetter(input.value)) {
    if (isRomanNotation(input.value)) {
      result.value = toArabic(input.value.toUpperCase());
      result.style.fontFamily = 'Questrial';
    }
    else {
      result.value = 'Pleas enter valid roman numerals.';
    }
  }
  else {
    result.value = toRoman(parseInt(input.value));
    result.style.fontFamily = 'Cinzel';
  }
  
});

function containsLetter(str) {
  const regex = /[^0-9]/;
  
  if (str.match(regex)) {
    return true;
  }
  
  return false;
}

function isRomanNotation(str) {
  const regex = /[^ivxlcdmIVXLCDM]/;
  
  if (str.match(regex)) {
    return false;
  }
  
  return true;
}

function toArabic(str) {
  let [...arr] = str;

  let tokens = arr.map(el => {
      return symbolToNumber(el);
    
  });

  let result = 0;
  
  if (tokens.length === 1) 
    {
      console.log('sss');
      return tokens[0];
    }
  
  tokens.forEach( (el, indx) => {
    console.log(el);
    
    if (indx + 1 < tokens.length) 
      {
        if (el >= tokens[indx + 1])
        {
          console.log('Add.');
          result += el;
        }
        else {
          console.log('Sub');
          result += tokens[indx + 1] - el;
        }
      }
      else {
        result += el;
      }
  });
  
  return result;
}

function toRoman(num) {
  let str = '';
  str = parse(num, 1000);
  return str;
}

function symbolToNumber(symbol) {
  switch (symbol) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
        break;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
  }
}

// Recursive function.
// Breaks a given number into its individual components; thousands, hundreds, tens and ones.
// Returns a roman numeral for each component.
// num = number to break down, ix = decimal place to start with.
function parse(num, ix) {
  let result = Math.floor(num / ix);
  let remainder = num % ix;
  let str = '';
  
  switch (ix) {
    case 1000:
      str = convertThousands(result);
      break;
    case 100:
      str = convertHundreds(result);
      break;
    case 10:
      str = convertTens(result);
      break;
    case 1:
      str = convertOnes(result);
      break;
  }

  if (ix === 0.1) {
    return '';
  }

  return str + parse(remainder, ix * 0.1);
}

function convertThousands(num) {
  let str = "";

  for (let i = 0; i < num; i++) {
    str += "M";
  }

  return str;
}

function convertHundreds(num) {
  switch (num) {
    case 1:
      return "C";
    case 2:
      return "CC";
    case 3:
      return "CCC";
    case 4:
      return "CD";
    case 5:
      return "D";
    case 6:
      return "DC";
    case 7:
      return "DCC";
    case 8:
      return "DCCC";
    case 9:
      return "CM";
    default:
      return "";
  }
}

function convertTens(num) {
  switch (num) {
    case 1:
      return "X";
    case 2:
      return "XX";
    case 3:
      return "XXX";
    case 4:
      return "XL";
    case 5:
      return "L";
    case 6:
      return "LX";
    case 7:
      return "LXX";
    case 8:
      return "LXXX";
    case 9:
      return "XC";
    default:
      return "";
  }
}

function convertOnes(num) {
  switch (num) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
    default:
      return "";
  }
}
