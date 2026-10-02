/*==================================================*
* EXCEL AI ACADEMY
* MODULE PAGE
* module.js
*==================================================*/
import { auth, db } from "./firebase-config.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
/*==================================================*
* GET MODULE
*==================================================*/


const params =
    new URLSearchParams(window.location.search);

const moduleId =
    Number(params.get("module")) ||
    Number(params.get("id")) ||
    (window.location.pathname.includes("module2") ? 2 : 1);

const moduleData =
    EXCEL_COURSE.find(
        module => module.id === moduleId
    );


const moduleContent =
    document.getElementById("moduleContent");


/*==================================================*
* MODULE NOT FOUND
*==================================================*/

if (!moduleData) {

    if (moduleContent) {

        moduleContent.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-circle-exclamation"></i>

                <h2>Module Not Found</h2>

                <p>
                    The requested module could not be found.
                </p>

                <a href="index.html">
                    Back to Dashboard
                </a>

            </div>

        `;

    }

}


/*==================================================*
* LOAD MODULE
*==================================================*/

else {

    updateModuleHeader();

    onAuthStateChanged(auth, () => {

        loadModuleProgress();

    });

    setupLessonSearch();

}


/*==================================================*
* UPDATE MODULE HEADER
*==================================================*/

function updateModuleHeader() {

    const moduleIcon =
        document.getElementById("moduleIcon") ||
        document.querySelector(".module-icon i");


    const moduleNumber =
        document.getElementById("moduleNumber") ||
        document.querySelector(".module-info h1");


    const moduleTitle =
        document.getElementById("moduleTitle") ||
        document.querySelector(".module-info h2");


    const moduleDescription =
        document.getElementById("moduleDescription") ||
        document.querySelector(".module-info p");


    /*---------------------------------------------
    MODULE ICON
    ---------------------------------------------*/

    if (moduleIcon) {

        moduleIcon.className =
            `fa-solid ${moduleData.icon}`;

    }


    /*---------------------------------------------
    MODULE NUMBER
    ---------------------------------------------*/

    if (moduleNumber) {

        moduleNumber.textContent =
            `Module ${moduleData.id}`;

    }


    /*---------------------------------------------
    MODULE TITLE
    ---------------------------------------------*/

    if (moduleTitle) {

        moduleTitle.textContent =
            moduleData.title;

    }


    /*---------------------------------------------
    MODULE DESCRIPTION
    ---------------------------------------------*/

    if (moduleDescription) {

        moduleDescription.textContent =
            moduleData.description;

    }


    /*---------------------------------------------
    PAGE TITLE
    ---------------------------------------------*/

    document.title =
        `Module ${moduleData.id} | ${moduleData.title} | Excel AI Academy`;

}


/*==================================================*
* GET ALL MODULE LESSONS
*==================================================*/

function getAllLessons() {

    const lessons = [];


    if (!moduleData.sections) {

        return lessons;

    }


    moduleData.sections.forEach(section => {

        if (!section.lessons) return;


        section.lessons.forEach(lesson => {

            lessons.push(lesson);

        });

    });


    return lessons;

}


/*==================================================*
* LOAD MODULE PROGRESS FROM FIRESTORE
*==================================================*/

async function loadModuleProgress() {

    const user = auth.currentUser;

    // User is not logged in
    if (!user) {

        console.log("No user logged in.");

        updateModuleProgress();
        renderSections();

        return;
    }


    try {

        // Get current user's progress document
        const progressRef =
            doc(
                db,
                "users",
                user.uid
            );


        const progressSnap =
            await getDoc(progressRef);


        // Reset current lesson status
        getAllLessons().forEach(lesson => {

            lesson.completed = false;

        });


        // No progress saved yet
        if (!progressSnap.exists()) {

            updateModuleProgress();
            renderSections();

            return;
        }


        // Get saved progress
        const progressData =
            progressSnap.data();


        const completedLessons =
            progressData.completedLessons || [];


        // Mark completed lessons
        getAllLessons().forEach(lesson => {

            const lessonKey =
                `module-${moduleId}-lesson-${lesson.id}`;


            if (
                completedLessons.includes(lessonKey)
            ) {

                lesson.completed = true;

            }

        });


        // Update UI
        updateModuleProgress();

        renderSections();


    } catch (error) {

        console.error(
            "Error loading module progress:",
            error
        );

        // Still render lessons if Firestore has an error
        updateModuleProgress();

        renderSections();

    }

}

/*==================================================*
* UPDATE MODULE PROGRESS
*==================================================*/


function updateModuleProgress() {

    const allLessons =
        getAllLessons();


    const totalLessons =
        allLessons.length;


    const completedLessons =
        allLessons.filter(
            lesson => lesson.completed === true
        ).length;


    let percentage = 0;


    if (totalLessons > 0) {

        percentage =
            Math.round(
                (completedLessons / totalLessons) * 100
            );

    }


    /*---------------------------------------------
    PROGRESS TEXT
    ---------------------------------------------*/

    const progressText =
        document.getElementById("moduleProgress");


    if (progressText) {

        progressText.textContent =
            `${percentage}%`;

    }


    /*---------------------------------------------
    PROGRESS BAR
    ---------------------------------------------*/

    const progressBar =
        document.getElementById("moduleProgressBar") ||
        document.querySelector(".progress-bar");


    if (progressBar) {

        progressBar.style.width =
            `${percentage}%`;

    }

}


/*==================================================*
* RENDER SECTIONS
*==================================================*/

function renderSections() {

    if (
        !moduleData.sections ||
        moduleData.sections.length === 0
    ) {

        moduleContent.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-folder-open"></i>

                <h3>No Sections Available</h3>

                <p>
                    Lessons for this module are coming soon.
                </p>

            </div>

        `;

        return;

    }


    let html = "";


    moduleData.sections.forEach(section => {

        const lessons =
            section.lessons || [];


        const lessonCount =
            lessons.length;


        const completedCount =
            lessons.filter(
                lesson => lesson.completed === true
            ).length;


        html += `

            <div
                class="section-card"
                data-section-id="${section.id}"
            >

                <!--=================================
                SECTION HEADER
                =================================-->

                <div class="section-header">

                    <div class="section-header-left">

                        <div class="section-icon">

                            <i class="fa-solid fa-folder-open"></i>

                        </div>

                        <h2 class="section-title">

                            Section ${section.id}
                            ${escapeHTML(section.title)}

                        </h2>

                    </div>


                    <span class="lesson-count">

                        ${completedCount}/${lessonCount}
                        ${lessonCount === 1
                            ? "Lesson"
                            : "Lessons"}

                    </span>

                </div>


                <!--=================================
                LESSONS
                =================================-->

                <div class="lesson-list">

                    ${renderLessons(lessons)}

                </div>

            </div>

        `;

    });


    moduleContent.innerHTML =
        html;

}


/*==================================================*
* RENDER LESSONS
*==================================================*/

function renderLessons(lessons) {

    if (
        !lessons ||
        lessons.length === 0
    ) {

        return `

            <div class="empty-state">

                <i class="fa-solid fa-book-open"></i>

                <p>
                    Lessons Coming Soon...
                </p>

            </div>

        `;

    }


    return lessons.map(lesson => {

        const completedClass =
            lesson.completed
                ? "completed"
                : "";


        const icon =
            lesson.completed
                ? "fa-check"
                : "fa-play";


        return `

            <div
                class="lesson-item ${completedClass}"
                data-lesson-title="${escapeHTML(
                    String(lesson.title).toLowerCase()
                )}"
            >

                <div class="lesson-icon">

                    <i class="fa-solid ${icon}"></i>

                </div>


                <a
    href="/lesson"
    class="lesson-link"
    data-module="${moduleData.id}"
    data-lesson="${lesson.id}"
>

    ${escapeHTML(lesson.title)}

</a>


                <i
                    class="fa-solid fa-chevron-right lesson-arrow"
                ></i>

            </div>

        `;

    }).join("");

}


/*==================================================*
* LESSON SEARCH
*==================================================*/

function setupLessonSearch() {

    const searchInput =
        document.getElementById("lessonSearch") ||
        document.querySelector(".lesson-search input");


    if (!searchInput) {

        return;

    }


    searchInput.addEventListener(
        "input",
        function () {

            const searchTerm =
                this.value
                    .trim()
                    .toLowerCase();


            const sections =
                document.querySelectorAll(
                    ".section-card"
                );


            sections.forEach(section => {

                const lessons =
                    section.querySelectorAll(
                        ".lesson-item"
                    );


                let visibleLessons = 0;


                lessons.forEach(lesson => {

                    const title =
                        lesson.dataset.lessonTitle || "";


                    if (
                        searchTerm === "" ||
                        title.includes(searchTerm)
                    ) {

                        lesson.style.display =
                            "flex";

                        visibleLessons++;

                    }

                    else {

                        lesson.style.display =
                            "none";

                    }

                });


                /*---------------------------------
                HIDE EMPTY SECTION
                ---------------------------------*/

                if (visibleLessons === 0) {

                    section.style.display =
                        "none";

                }

                else {

                    section.style.display =
                        "block";

                }

            });

        }
    );

}


/*==================================================*
* ESCAPE HTML
*==================================================*/

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}

/*==================================================*
* SAVE SELECTED LESSON
*==================================================*/

document.addEventListener("click", function (event) {

    const lessonLink =
        event.target.closest(".lesson-link");

    if (!lessonLink) {
        return;
    }

    const selectedModule =
        lessonLink.dataset.module;

    const selectedLesson =
        lessonLink.dataset.lesson;

    console.log(
        "SELECTED LESSON:",
        selectedModule,
        selectedLesson
    );

    sessionStorage.setItem(
        "selectedModule",
        selectedModule
    );

    sessionStorage.setItem(
        "selectedLesson",
        selectedLesson
    );

});