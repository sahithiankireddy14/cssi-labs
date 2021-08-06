// console.log("hello")
// const getMessages = () => {
//     const messagesRef = firebase.database().ref();
//         messagesRef.on('value', (snapshot) => {
//         const data = snapshot.val();
//     });
// }

console.log("in viewMessages.js")
​
function getMessages() {
    console.log(firebase)
    const messagesRef = firebase.database().ref()
    messagesRef.on('value', (snapshot) => {
        const messages = snapshot.val();
        console.log(messages)
        validateMessages(messages)
    })
}
​
function validateMessages(messages){
    // let counter = 0;
    const passcodeAttempt = document.querySelector("#passcode").value
    // console.log("here is my passcode attempt! " + passcodeAttempt);
    for (message in messages) {
        // console.log(counter);
        const messageData = messages[message]
        // console.log(messageData)
        // console.log("here is my messageData.passcode! " + messageData.passcode);
        if (messageData.passcode === passcodeAttempt) {
            // console.log("Correct password!")
            renderMessageAsHtml(messageData.message)
            // console.log(counter);
        } else if (messageData.passcode !== passcodeAttempt) {
            // console.log("Error!");
            // counter++;
​
            var text = document.getElementById("passcode");
            text.placeholder = "Error! Password is wrong.";
            text.value = "";
​
            /*if (counter >= 6) {
                renderMessageAsHtml("Error! We're sorry, you have tried too many times.");
            }*/
            // console.log(counter);  
        }
    }
}
​
function renderMessageAsHtml(messageContent) {
     // Hide Input Form
    const passcodeInput = document.querySelector('#passcodeInput');
    // Hide it
    passcodeInput.style.display = 'none';
    // Render message as HTML
    const messageDiv = document.querySelector("#message")
    messageDiv.innerHTML = messageContent; 
}