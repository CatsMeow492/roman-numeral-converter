function convertToRoman(num) {
    // first split the number into decimal places
    let str = num.toString(10);
    let array = str.split("");
  
    // unshift string elements to an array
    // index[3] is always thousands
    // index[2] is always hundreds
    // index[1] is always tens
    // index[0] is always ones
    let numerals = [];
    array.forEach(decimal => {
      numerals.unshift(decimal)
    });
    console.log(numerals);
    
    let romanNumeral = [];
    // push thousands first, if it exists
    if (numerals[3]) {
      // thousands
      switch(numerals[3]) {
        case '1':
          romanNumeral.push("M");
          break;
        case '2':
          romanNumeral.push("MM");
          break;
        case '3':
          romanNumeral.push("MMM");
          break;
        default:
          break;
      }
    }
  
    // push hundreds next, if it exists
    if (numerals[2]) {
      // hundreds
      switch(numerals[2]) {
        case '1':
          romanNumeral.push("C");
          break;
        case '2':
          romanNumeral.push("CC");
          break;
        case '3':
          romanNumeral.push("CCC");
          break;
        case '4':
          romanNumeral.push("CD");
          break;
        case '5':
          romanNumeral.push("D");
          break;
        case '6':
          romanNumeral.push("DC");
          break;
        case '7':
          romanNumeral.push("DCC");
          break;
        case '8':
          romanNumeral.push("DCCC");
          break;
        case '9':
          romanNumeral.push("CM");
          break;
        default:
          break;
      }
    }
  
    // push tens next, if it exists
    if (numerals[1]) {
      // hundreds
      switch(numerals[1]) {
        case '1':
          romanNumeral.push("X");
          break;
        case '2':
          romanNumeral.push("XX");
          break;
        case '3':
          romanNumeral.push("XXX");
          break;
        case '4':
          romanNumeral.push("XL");
          break;
        case '5':
          romanNumeral.push("L");
          break;
        case '6':
          romanNumeral.push("LX");
          break;
        case '7':
          romanNumeral.push("LXX");
          break;
        case '8':
          romanNumeral.push("LXXX");
          break;
        case '9':
          romanNumeral.push("XC");
          break;
        default:
          break;
      }
    }
  
    // push ones last, if it exists
    if (numerals[0]) {
      // hundreds
      switch(numerals[0]) {
        case '1':
          romanNumeral.push("I");
          break;
        case '2':
          romanNumeral.push("II");
          break;
        case '3':
          romanNumeral.push("III");
          break;
        case '4':
          romanNumeral.push("IV");
          break;
        case '5':
          romanNumeral.push("V");
          break;
        case '6':
          romanNumeral.push("VI");
          break;
        case '7':
          romanNumeral.push("VII");
          break;
        case '8':
          romanNumeral.push("VIII");
          break;
        case '9':
          romanNumeral.push("IX");
          break;
        default:
          break;
      }
    }
  
    console.log(romanNumeral);
    return romanNumeral.join("");
  }