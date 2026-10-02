//==================================================
// EXCEL AI ACADEMY
// AUTHENTICATION GUARD
// js/auth-guard.js
//==================================================

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    auth
} from "./firebase-config.js";


//==================================================
// CHECK LOGIN STATUS
//==================================================

onAuthStateChanged(auth, function (user) {

    //==============================================
    // USER IS NOT LOGGED IN
    //==============================================

    if (!user) {

        window.location.href = "login.html";

        return;
    }


    //==============================================
    // USER IS LOGGED IN
    //==============================================

    console.log(
        "Authenticated user:",
        user.email
    );

});