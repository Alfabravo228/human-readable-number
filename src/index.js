module.exports = function toReadable(number) {
  if (!Number.isInteger(number) || number > 999) {
    return 0;
  }
  let temp = String(number);
  let arr1 = temp.split('');
  let arr2 = [];
  let str = [];
  let upToTen = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
  let upToTwenty = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];
  let upToHundred = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",]
  let hundred = "hundred";
  for (let i = 0; i < arr1.length; i++) {
    arr2.unshift(Number(arr1[i]));
  }

  if (arr2.length == 1) {
    switch (arr2[0]) {
      case 0:
        str.unshift(upToTen[9]);
        break;
      case 1:
        str.unshift(upToTen[0]);
        break;
      case 2:
        str.unshift(upToTen[1]);
        break;
      case 3:
        str.unshift(upToTen[2]);
        break;
      case 4:
        str.unshift(upToTen[3]);
        break;
      case 5:
        str.unshift(upToTen[4]);
        break;
      case 6:
        str.unshift(upToTen[5]);
        break;
      case 7:
        str.unshift(upToTen[6]);
        break;
      case 8:
        str.unshift(upToTen[7]);
        break;
      case 9:
        str.unshift(upToTen[8]);
        break;
    }
  }
  if (arr2.length == 2 && arr2[1] == 1) {
    switch (arr2[0]) {
      case 0:
        str.unshift(upToTwenty[0]);
        break;
      case 1:
        str.unshift(upToTwenty[1]);
        break;
      case 2:
        str.unshift(upToTwenty[2]);
        break;
      case 3:
        str.unshift(upToTwenty[3]);
        break;
      case 4:
        str.unshift(upToTwenty[4]);
        break;
      case 5:
        str.unshift(upToTwenty[5]);
        break;
      case 6:
        str.unshift(upToTwenty[6]);
        break;
      case 7:
        str.unshift(upToTwenty[7]);
        break;
      case 8:
        str.unshift(upToTwenty[8]);;
        break;
      case 9:
        str.unshift(upToTwenty[9]);
        break;
    }
  }

  if (arr2.length == 2 && arr2[1] > 1) {
    switch (arr2[0]) {
      case 0:
        break;
      case 1:
        str.unshift(upToTen[0]);
        break;
      case 2:
        str.unshift(upToTen[1]);
        break;
      case 3:
        str.unshift(upToTen[2]);
        break;
      case 4:
        str.unshift(upToTen[3]);
        break;
      case 5:
        str.unshift(upToTen[4]);
        break;
      case 6:
        str.unshift(upToTen[5]);
        break;
      case 7:
        str.unshift(upToTen[6]);
        break;
      case 8:
        str.unshift(upToTen[7]);
        break;
      case 9:
        str.unshift(upToTen[8]);
        break;
    }
    switch (arr2[1]) {
      case 2:
        str.unshift(upToHundred[0]);
        break;
      case 3:
        str.unshift(upToHundred[1]);
        break;
      case 4:
        str.unshift(upToHundred[2]);
        break;
      case 5:
        str.unshift(upToHundred[3]);
        break;
      case 6:
        str.unshift(upToHundred[4]);
        break;
      case 7:
        str.unshift(upToHundred[5]);
        break;
      case 8:
        str.unshift(upToHundred[6]);
        break;
      case 9:
        str.unshift(upToHundred[7]);
        break;
    }
  }

  if (arr2.length == 3) {
    if (arr2[1] == 0) {
      switch (arr2[0]) {
        case 0:
          break;
        case 1:
          str.unshift(upToTen[0]);
          break;
        case 2:
          str.unshift(upToTen[1]);
          break;
        case 3:
          str.unshift(upToTen[2]);
          break;
        case 4:
          str.unshift(upToTen[3]);
          break;
        case 5:
          str.unshift(upToTen[4]);
          break;
        case 6:
          str.unshift(upToTen[5]);
          break;
        case 7:
          str.unshift(upToTen[6]);
          break;
        case 8:
          str.unshift(upToTen[7]);
          break;
        case 9:
          str.unshift(upToTen[8]);
          break;

      }
    }
    if (arr2[1] == 1) {
      switch (arr2[0]) {
        case 0:
          str.unshift(upToTwenty[0]);
          break;
        case 1:
          str.unshift(upToTwenty[1]);
          break;
        case 2:
          str.unshift(upToTwenty[2]);
          break;
        case 3:
          str.unshift(upToTwenty[3]);
          break;
        case 4:
          str.unshift(upToTwenty[4]);
          break;
        case 5:
          str.unshift(upToTwenty[5]);
          break;
        case 6:
          str.unshift(upToTwenty[6]);
          break;
        case 7:
          str.unshift(upToTwenty[7]);
          break;
        case 8:
          str.unshift(upToTwenty[8]);;
          break;
        case 9:
          str.unshift(upToTwenty[9]);
          break;
      }
    }
    if (arr2[1] > 1) {
      switch (arr2[0]) {
        case 0:
          break;
        case 1:
          str.unshift(upToTen[0]);
          break;
        case 2:
          str.unshift(upToTen[1]);
          break;
        case 3:
          str.unshift(upToTen[2]);
          break;
        case 4:
          str.unshift(upToTen[3]);
          break;
        case 5:
          str.unshift(upToTen[4]);
          break;
        case 6:
          str.unshift(upToTen[5]);
          break;
        case 7:
          str.unshift(upToTen[6]);
          break;
        case 8:
          str.unshift(upToTen[7]);
          break;
        case 9:
          str.unshift(upToTen[8]);
          break;
      }
      switch (arr2[1]) {
        case 2:
          str.unshift(upToHundred[0]);
          break;
        case 3:
          str.unshift(upToHundred[1]);
          break;
        case 4:
          str.unshift(upToHundred[2]);
          break;
        case 5:
          str.unshift(upToHundred[3]);
          break;
        case 6:
          str.unshift(upToHundred[4]);
          break;
        case 7:
          str.unshift(upToHundred[5]);
          break;
        case 8:
          str.unshift(upToHundred[6]);
          break;
        case 9:
          str.unshift(upToHundred[7]);
          break;
      }
    }
    switch (arr2[2]) {
      case 0:
        break;
      case 1:
        str.unshift(hundred);
        str.unshift(upToTen[0]);
        break;
      case 2:
        str.unshift(hundred);
        str.unshift(upToTen[1]);
        break;
      case 3:
        str.unshift(hundred);
        str.unshift(upToTen[2]);
        break;
      case 4:
        str.unshift(hundred);
        str.unshift(upToTen[3]);
        break;
      case 5:
        str.unshift(hundred);
        str.unshift(upToTen[4]);
        break;
      case 6:
        str.unshift(hundred);
        str.unshift(upToTen[5]);
        break;
      case 7:
        str.unshift(hundred);
        str.unshift(upToTen[6]);
        break;
      case 8:
        str.unshift(hundred);
        str.unshift(upToTen[7]);
        break;
      case 9:
        str.unshift(hundred);
        str.unshift(upToTen[8]);
        break;
    }
  }
  let string = str.join(' ');
  return string;
}