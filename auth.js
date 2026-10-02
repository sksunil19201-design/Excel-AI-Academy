//==================================================
// EXCEL AI ACADEMY
// AUTHENTICATION
// js/auth.js
//==================================================

import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    doc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import {
    auth,
    db
} from "./firebase-config.js";


//==================================================
// SIGN UP
//==================================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const signupBtn = document.getElementById("signupBtn");
        const message = document.getElementById("signupMessage");


        //=========================================
        // VALIDATION
        //=========================================

        if (password !== confirmPassword) {

            showMessage(
                message,
                "Passwords do not match.",
                "error"
            );

            return;
        }


        if (password.length < 6) {

            showMessage(
                message,
                "Password must contain at least 6 characters.",
                "error"
            );

            return;
        }


        //=========================================
        // DISABLE BUTTON
        //=========================================

        signupBtn.disabled = true;

        signupBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin me-2"></i>Creating Account...';


        try {

            //=====================================
            // CREATE FIREBASE USER
            //=====================================

            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );


            const user = userCredential.user;


            //=====================================
            // SAVE DISPLAY NAME
            //=====================================

            await updateProfile(user, {
                displayName: name
            });


            //=====================================
            // CREATE FIRESTORE USER DOCUMENT
            //=====================================

            await setDoc(
                doc(db, "users", user.uid),
                {
                    uid: user.uid,
                    name: name,
                    email: user.email,
                    createdAt: serverTimestamp()
                }
            );


            //=====================================
            // SUCCESS
            //=====================================

            showMessage(
                message,
                "Account created successfully! Redirecting...",
                "success"
            );


            signupForm.reset();


            //=====================================
            // REDIRECT
            //=====================================

            setTimeout(function () {

                window.location.href = "login.html";

            }, 1500);


        } catch (error) {

            console.error(
                "Signup Error:",
                error
            );


            let errorMessage =
                "Something went wrong. Please try again.";


            switch (error.code) {

                case "auth/email-already-in-use":

                    errorMessage =
                        "This email is already registered.";

                    break;


                case "auth/invalid-email":

                    errorMessage =
                        "Please enter a valid email address.";

                    break;


                case "auth/weak-password":

                    errorMessage =
                        "Password is too weak. Use at least 6 characters.";

                    break;


                case "auth/network-request-failed":

                    errorMessage =
                        "Network error. Please check your internet connection.";

                    break;

            }


            showMessage(
                message,
                errorMessage,
                "error"
            );


            signupBtn.disabled = false;

            signupBtn.innerHTML =
                '<i class="fa-solid fa-user-plus me-2"></i>Create Account';

        }

    });

}


//==================================================
// SHOW MESSAGE
//==================================================

function showMessage(
    element,
    text,
    type
) {

    if (!element) return;

    element.textContent = text;

    element.className =
        "message " + type;

}

//==================================================
// LOGIN
//==================================================


//==================================================
// LOGIN FORM
//==================================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        const loginBtn =
            document.getElementById("loginBtn");

        const message =
            document.getElementById("loginMessage");


        //=========================================
        // DISABLE BUTTON
        //=========================================

        loginBtn.disabled = true;

        loginBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin me-2"></i>Signing In...';


        try {

            //=====================================
            // SIGN IN USER
            //=====================================

            const userCredential =
                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            const user = userCredential.user;


            console.log(
                "Login successful:",
                user.email
            );


            //=====================================
            // SUCCESS MESSAGE
            //=====================================

            showMessage(
                message,
                "Login successful! Redirecting...",
                "success"
            );


            //=====================================
            // REDIRECT
            //=====================================

            setTimeout(function () {

                window.location.href = "index.html";

            }, 1000);


        } catch (error) {

            console.error(
                "Login Error:",
                error
            );


            let errorMessage =
                "Unable to sign in. Please try again.";


            switch (error.code) {

                case "auth/invalid-credential":

                    errorMessage =
                        "Incorrect email or password.";

                    break;


                case "auth/user-not-found":

                    errorMessage =
                        "No account found with this email.";

                    break;


                case "auth/wrong-password":

                    errorMessage =
                        "Incorrect password.";

                    break;


                case "auth/invalid-email":

                    errorMessage =
                        "Please enter a valid email address.";

                    break;


                case "auth/too-many-requests":

                    errorMessage =
                        "Too many attempts. Please try again later.";

                    break;


                case "auth/network-request-failed":

                    errorMessage =
                        "Network error. Please check your internet connection.";

                    break;

            }


            showMessage(
                message,
                errorMessage,
                "error"
            );


            //=====================================
            // ENABLE BUTTON AGAIN
            //=====================================

            loginBtn.disabled = false;

            loginBtn.innerHTML =
                '<i class="fa-solid fa-right-to-bracket me-2"></i>Sign In';

        }

    });

}


//==================================================
// SHOW / HIDE PASSWORD
//==================================================

const togglePassword =
    document.getElementById("togglePassword");

if (togglePassword) {

    togglePassword.addEventListener("click", function () {

        const passwordInput =
            document.getElementById("loginPassword");

        const icon =
            togglePassword.querySelector("i");


        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");

            togglePassword.setAttribute(
                "aria-label",
                "Hide password"
            );

        } else {

            passwordInput.type = "password";

            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");

            togglePassword.setAttribute(
                "aria-label",
                "Show password"
            );

        }

    });

}

//==================================================
// FORGOT PASSWORD
//==================================================

const forgotPasswordLink =
    document.getElementById("forgotPasswordLink");

if (forgotPasswordLink) {

    forgotPasswordLink.addEventListener("click", async function (event) {

        event.preventDefault();

        const emailInput =
            document.getElementById("loginEmail");

        const message =
            document.getElementById("loginMessage");

        const email =
            emailInput.value.trim();


        //=========================================
        // CHECK EMAIL
        //=========================================

        if (!email) {

            showMessage(
                message,
                "Please enter your email address first.",
                "error"
            );

            emailInput.focus();

            return;
        }


        //=========================================
        // SEND RESET EMAIL
        //=========================================

        try {

            await sendPasswordResetEmail(
                auth,
                email
            );


            showMessage(
                message,
                "Password reset email sent. Please check your inbox.",
                "success"
            );


        } catch (error) {

            console.error(
                "Password Reset Error:",
                error
            );


            let errorMessage =
                "Unable to send password reset email.";


            switch (error.code) {

                case "auth/invalid-email":

                    errorMessage =
                        "Please enter a valid email address.";

                    break;


                case "auth/user-not-found":

                    errorMessage =
                        "No account found with this email.";

                    break;


                case "auth/network-request-failed":

                    errorMessage =
                        "Network error. Please check your internet connection.";

                    break;

            }


            showMessage(
                message,
                errorMessage,
                "error"
            );

        }

    });

}