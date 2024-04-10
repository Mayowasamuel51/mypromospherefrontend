function repeatString(str) {
    let repeatedString = '';
    for (let i = 0; i < 20; i++) {
      repeatedString += str;
    }
    return repeatedString;
  }
  
  // Example usage
  const originalString = 'Hello!';
  const repeatedString = repeatString(originalString);
  console.log(repeatedString); // Output will be 'Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!'
  