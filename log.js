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



// const storage = getStorage();
// // Create a reference to 'mountains.jpg'
// const storageRef = ref(storage, baker);
// uploadBytes(storageRef, baker).then((snapshot) => {
//     console.log('Uploaded a blob or file!');
// });
// const storage = getStorage();
// const storageRef = ref(storage, imageUpload.file);
// const uploadTask = uploadBytesResumable(storageRef,imageUpload.file);
// // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
// uploadTask.on('state_changed', 
//   (snapshot) => {
//     // Observe state change events such as progress, pause, and resume
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   }, 
//   (error) => {
//     // Handle unsuccessful uploads
//   }, 
//   () => {
//     // Handle successful uploads on complete
//     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });
//   }
// );
// Assuming fileList is an array containing multiple File objects
// Assuming fileList is an array containing multiple File objects





for (let i = 0; i < imageUpload.length; i++) {
  const imageRef = ref(storage, `/mulitpleFiles/${imageUpload[i].name}`);
  const result = uploadBytes(imageRef, imageUpload[i])
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
      console.log("error");
    });

  console.log(result)
}




for (let i = 0; i < imageUpload.length; i++) {
  const imageRef = ref(storage, `/mulitpleFiles/${imageUpload[i].name}`);
  const uploadTask = uploadBytesResumable(imageRef, imageUpload[i]);
  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
        // ..
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        const second_payload = {
          itemadsimagesurls: "cxCzxczvsdvsdvsvs"
        }
        axios.post(`http://127.0.0.1:8000/api/freeads/${response}`, second_payload, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
          }
        }).then((res) => {
          if (res.status === 200) {
            console.log('worked with second ...................')
            console.log(res.data.item)
          }
          else if (res.status === 500 || res.status === 401) {
            console.log(res.data.message)
          }
        }).catch((err) => console.log(err.message))
      })
    })


}
