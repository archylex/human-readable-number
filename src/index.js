module.exports = function toReadable (n) {
    let small = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five', 
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
      }

      let dec = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty', 
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
      }

    let big = { 
        1: 'hundred', 
        2: 'thousand'
    }

    let result = '';
    n = n.toString();

    if (n.length === 1 && n === '0') return 'zero'
    ///////
    if (n.length >= 4) {
      let third = n.substr(-4, 1);  
      if (n.length === 5) {
        third = n.substr(-5, 2);        
        if (Number(third) < 20)
          result += small[Number(third)] + ' ' + big[2] + ' '  
        else
          result += dec[Number(third.substr(-2,1))] + ' ' + small[Number(third.substr(-1))] + ' ' + big[2] + ' '
      } else

      result += small[Number(third)] + ' ' + big[2] + ' '
    }

    //////
    if (n.length >= 3) {
    let second = n.substr(-3, 1);
      
        result += small[Number(second)] + ' ' + big[1] + ' '
    }
    
    ///////
    let first = n.substr(-2);

    if (Number(first)<20)
      result += small[Number(first)];
    else {
      result += dec[Number(first.substr(-2,1))] + ' ' + small[Number(first.substr(-1))]
    }
    
    result = result.replace(' undefined', '')
    return result
}

