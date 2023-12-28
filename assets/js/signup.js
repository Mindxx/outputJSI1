const firebaseConfig = {
    apiKey: "AIzaSyB7R2bxSJCudUCHYRKlUQXzv3gMqwW6EQE",
    authDomain: "outputjsi.firebaseapp.com",
    databaseURL: "https://outputjsi-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "outputjsi",
    storageBucket: "outputjsi.appspot.com",
    messagingSenderId: "1051066721931",
    appId: "1:1051066721931:web:60bf7141dd5c8143ddd68e"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    cpassword = document.getElementById('cpassword').value
    username = document.getElementById('username').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false || password !== cpassword) {
        alert('Email or Password is Invalid!!!')
        return
        // Don't continue running the code
    }
    if (validate_field(username) == false) {
        alert('Your Name is Invalid!!')
        return
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            // Declare user variable
            var user = auth.currentUser
            // Add this user to Firebase Database
            var database_ref = database.ref()
            // Create User data
            var user_data = {
                email: email,
                username: username,
                password: password,
                last_login: Date.now()
            }
            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data)
            // DOne
            alert('Successfully!!!')
        })
        .catch((error) => {
            // Firebase will use this to alert of its errors
            var error_message = error.message
            alert(error_message)
        })
}

// Validate Functions
function validate_email(email) {
    // regex 1 chuỗi ký tự hỗ trợ mình kiểm tra gì đó,
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true;
    } else {
        // Email is bad
        return false;
    }
}

function validate_password(password) {
    expression = /^[A-Za-z]\w{7,14}$/
    // Firebase only accepts lengths greater than 6
    if (expression.test(password) == true) {
        return true;
    } else {
        return false;
    }
}

function validate_field(field) {
    if (field == null) {
        return false;
    }

    if (field.length <= 0) {
        return false;
    } else {
        return true;
    }
}

document.getElementById("btnSignUp").addEventListener('click', () => {
    register()
})