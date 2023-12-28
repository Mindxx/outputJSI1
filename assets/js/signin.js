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

// Set up our login function
function login() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Invalid!!!')
        return
        // Don't continue running the code
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                last_login: Date.now()
            };

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).update(user_data)

            // DOne
            alert('Login Successfully!!!')
            window.location.href = "index.html"

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

document.getElementById("btnLogIn").addEventListener('click', () => {
    login()
})