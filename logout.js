//==================================================
// EXCEL AI ACADEMY
// LOGOUT
// js/logout.js
//==================================================

import {
    signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    auth
} from "./firebase-config.js";


//==================================================
// LOGOUT BUTTON
//==================================================

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener("click", async function () {

        try {

            //=========================================
            // SIGN OUT FROM FIREBASE
            //=========================================

            await signOut(auth);


            //=========================================
            // REDIRECT TO LOGIN
            //=========================================

            window.location.href = "login.html";


        } catch (error) {

            console.error(
                "Logout Error:",
                error
            );

            alert(
                "Unable to sign out. Please try again."
            );

        }

    });

}