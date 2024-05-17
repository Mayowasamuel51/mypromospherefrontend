const myArray = [
    'Lagos',
    'lagos', // Case-sensitive
    'Oyo',
    'Abuja',
    'Ogun',
    'Rivers',
    'Kano',
  ];
  
  // Get a random index within the array length
  const randomIndex = Math.floor(Math.random() * myArray.length);
  
  // Access the random string using the index
  const randomString = myArray[randomIndex];
  
  // Display the random string
  console.log(randomString);