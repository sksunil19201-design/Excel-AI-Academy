//==================================================
// EXCEL AI ACADEMY
// USER PROFILE
// js/user-profile.js
//==================================================

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    auth
} from "./firebase-config.js";


//==================================================
// LOAD LOGGED-IN USER
//==================================================

onAuthStateChanged(auth, function (user) {

    //==============================================
    // USER NOT LOGGED IN
    //==============================================

    if (!user) {
        return;
    }


    //==============================================
    // GET USER NAME
    //==============================================

    const userName =
        document.getElementById("userName");

    const userAvatar =
        document.getElementById("userAvatar");


    //==============================================
    // DISPLAY NAME
    //==============================================

    if (userName) {

        userName.textContent =
            user.displayName || user.email;

    }


    //==============================================
    // CREATE INITIALS
    //==============================================

    if (userAvatar) {

        let name =
            user.displayName || user.email || "User";

        let initials = "";

        const nameParts =
            name.trim().split(/\s+/);


        if (nameParts.length >= 2) {

            initials =
                nameParts[0].charAt(0) +
                nameParts[nameParts.length - 1].charAt(0);

        } else {

            initials =
                nameParts[0].substring(0, 2);

        }


        userAvatar.textContent =
            initials.toUpperCase();

    }

});