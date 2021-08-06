let googleUser;

window.onload = (event) => {
  // Use this to retain user state between html pages.

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //console.log('Logged in as: ' + user.displayName);
       document.getElementById("name").innerHTML =  "Hi, " + user.displayName
      googleUser = user;
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
};

const handleNoteSubmit = () => {
  // 1. Capture the form data
  const noteTitle = document.querySelector('#noteTitle');
  const noteText = document.querySelector('#noteText');
  // 1b. get data

   
  // 2. Format the data and write it to our database
  firebase.database().ref(`users/${googleUser.uid}`).push({
    title: noteTitle.value,
    text: noteText.value,
    created: new Date().toISOString(),
  })
  // 3. Clear the form so that we can write a new note
  .then(() => {
    noteTitle.value = "";
    noteText.value = "";
  });



};


const logOut = () => {
 firebase.auth().signOut().then(() => {
  // Sign-out successful.
  // window.location = 'index.html';
  // alert("good")
  console.log("hi")

}).catch((error) => {
  // An error happened.
});


}