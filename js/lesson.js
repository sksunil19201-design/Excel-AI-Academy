/*==================================================
EXCEL AI ACADEMY
LESSON PAGE
lesson.js

FIRST PROTOTYPE
W3Schools-Style
7-Section Hinglish Lesson
==================================================*/


//==================================================
// FIREBASE
//==================================================

import {
    auth,
    db
} from "./firebase-config.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    doc,
    setDoc,
    getDoc,
    arrayUnion,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


//==================================================
// LESSON ROUTING
//==================================================

const params =
    new URLSearchParams(window.location.search);


//--------------------------------------------------
// OLD URL SUPPORT
//--------------------------------------------------

const urlModule =
    Number(params.get("module"));

const urlLesson =
    Number(params.get("lesson"));


//--------------------------------------------------
// GET SAVED LESSON
//--------------------------------------------------

const savedModule =
    Number(
        sessionStorage.getItem(
            "selectedModule"
        )
    );

const savedLesson =
    Number(
        sessionStorage.getItem(
            "selectedLesson"
        )
    );


//--------------------------------------------------
// FINAL MODULE & LESSON
//--------------------------------------------------

const moduleId =
    urlModule ||
    savedModule ||
    1;

const lessonId =
    urlLesson ||
    savedLesson ||
    1;


//--------------------------------------------------
// SAVE CURRENT LESSON
//--------------------------------------------------

sessionStorage.setItem(
    "selectedModule",
    moduleId
);

sessionStorage.setItem(
    "selectedLesson",
    lessonId
);

//==================================================
// DEBUG
//==================================================

console.log("================================");
console.log("CURRENT LESSON DEBUG");
console.log("URL:", window.location.href);
console.log("Module ID:", moduleId);
console.log("Lesson ID:", lessonId);
console.log("================================");

//==================================================
// LOAD MODULE
//==================================================

const moduleData =
    EXCEL_COURSE.find(
        module => Number(module.id) === moduleId
    );


if (!moduleData) {

    const container =
        document.getElementById("lessonContent");

    if (container) {

        container.innerHTML = `

            <div class="lesson-card">

                <div class="card-body">

                    <h2>Module Not Found</h2>

                    <p>
                        The requested module could not be found.
                    </p>

                </div>

            </div>

        `;

    }

    throw new Error("Module not found");

}


//==================================================
// LESSON VARIABLES
//==================================================

let currentLesson = null;

let lessonIndex = -1;

let lessonList = [];


//==================================================
// CREATE FLAT LESSON LIST
//==================================================

if (Array.isArray(moduleData.sections)) {

    moduleData.sections.forEach(section => {

        if (!Array.isArray(section.lessons)) {
            return;
        }

        section.lessons.forEach(lesson => {

            lessonList.push({

                ...lesson,

                section: section.title

            });

        });

    });

}


//==================================================
// FIND CURRENT LESSON
//==================================================

lessonIndex =
    lessonList.findIndex(
        lesson =>
            Number(lesson.id) === lessonId
    );


currentLesson =
    lessonList[lessonIndex];


if (!currentLesson) {

    const container =
        document.getElementById("lessonContent");

    if (container) {

        container.innerHTML = `

            <div class="lesson-card">

                <div class="card-body">

                    <h2>Lesson Not Found</h2>

                    <p>
                        The requested lesson could not be found.
                    </p>

                </div>

            </div>

        `;

    }

    throw new Error("Lesson not found");

}


//==================================================
// INITIALIZE PAGE
//==================================================

updateLessonHeader();

updateLessonProgress();

renderLesson();

updateNavigation();


//==================================================
// ESCAPE HTML
//==================================================

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


    sessionStorage.setItem(
        "selectedModule",
        selectedModule
    );


    sessionStorage.setItem(
        "selectedLesson",
        selectedLesson
    );

});

//==================================================
// FORMAT TEXT
//==================================================

function formatText(value) {

    if (!value) {
        return "";
    }

    let text =
        escapeHTML(value);


    return text

        .split(/\n\s*\n/)

        .map(paragraph => {

            return `
                <p>
                    ${paragraph.replace(
                        /\n/g,
                        "<br>"
                    )}
                </p>
            `;

        })

        .join("");

}


//==================================================
// FORMAT INLINE TEXT
//==================================================

function formatInlineText(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }

    let result =
        escapeHTML(value);


    // Bold

    result =
        result.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        );


    // Inline code

    result =
        result.replace(
            /`([^`]+)`/g,
            "<code>$1</code>"
        );


    return result;

}


//==================================================
// UPDATE LESSON HEADER
//==================================================

function updateLessonHeader() {

    const moduleName =
        document.getElementById("moduleName");

    const lessonTitle =
        document.getElementById("lessonTitle");

    const lessonDuration =
        document.getElementById("lessonDuration");

    const lessonDifficulty =
        document.getElementById("lessonDifficulty");

    const lessonCategory =
        document.getElementById("lessonCategory");


    // MODULE

    if (moduleName) {

        moduleName.textContent =
            `Module ${moduleData.id} • ${currentLesson.section}`;

    }


    // TITLE

    if (lessonTitle) {

        lessonTitle.textContent =
            currentLesson.title;

    }


    // DURATION

    if (lessonDuration) {

        lessonDuration.innerHTML = `

            <i class="fa-regular fa-clock"></i>

            ${escapeHTML(
                currentLesson.duration ||
                "15 Minutes"
            )}

        `;

    }


    // DIFFICULTY

    if (lessonDifficulty) {

        lessonDifficulty.innerHTML = `

            <i class="fa-solid fa-signal"></i>

            ${escapeHTML(
                currentLesson.difficulty ||
                "Beginner"
            )}

        `;

    }


    // CATEGORY

    if (lessonCategory) {

        lessonCategory.innerHTML = `

            <i class="fa-solid fa-folder"></i>

            ${escapeHTML(
                currentLesson.category ||
                currentLesson.section ||
                "Introduction"
            )}

        `;

    }


    // PAGE TITLE

    document.title =
        `${currentLesson.title} | Excel AI Academy`;

}


//==================================================
// RENDER LESSON
//==================================================

function renderLesson() {

    const container =
        document.getElementById("lessonContent");

    if (!container) {
        return;
    }


    let html = "";


    //================================================
    // 1. WHAT YOU'LL LEARN
    //================================================

    if (
        Array.isArray(
            currentLesson.learningObjectives
        ) &&
        currentLesson.learningObjectives.length
    ) {

        html += createListCard(

            "🎯 What You'll Learn",

            currentLesson.learningObjectives,

            "objectives-card"

        );

    }


//================================================
// 2. LEARN THE CONCEPT
//================================================

let conceptHTML = "";


if (currentLesson.whatIsExcel) {

    conceptHTML += `

        <div class="lesson-subsection">

            <h3>📖 ${currentLesson.title}</h3>

            ${formatText(
                currentLesson.whatIsExcel
            )}

        </div>

    `;

}


if (currentLesson.excelInSimpleWords) {

    conceptHTML += `

        <div class="lesson-subsection">

            <h3>🧠 Excel in Simple Words</h3>

            ${formatText(
                currentLesson.excelInSimpleWords
            )}

        </div>

    `;

}


if (conceptHTML) {

    html += createCard(

        "📖 Learn the Concept",

        conceptHTML,

        "concept-card"

    );

}
    //================================================
    // 3. PRACTICAL EXAMPLE
    //================================================

    if (currentLesson.practicalExample) {

        html += createPracticalExampleCard(
            currentLesson.practicalExample
        );

    }


    //================================================
    // 4. TRY IT YOURSELF
    //================================================

    if (currentLesson.tryItYourself) {

        html += createTryItCard(
            currentLesson.tryItYourself
        );

    }


    //================================================
    // 5. REAL-WORLD USE
    //================================================

    if (currentLesson.realBusinessUse) {

        html += createBusinessCard(
            currentLesson.realBusinessUse
        );

    }


    //================================================
    // 6. QUICK CHECK
    //================================================

    if (
        Array.isArray(
            currentLesson.quickCheck
        ) &&
        currentLesson.quickCheck.length
    ) {

        html += createQuizCard(
            currentLesson.quickCheck
        );

    }


    //================================================
    // 7. KEY TAKEAWAYS
    //================================================

    if (
        Array.isArray(
            currentLesson.keyTakeaways
        ) &&
        currentLesson.keyTakeaways.length
    ) {

        html += createListCard(

            "📚 Key Takeaways",

            currentLesson.keyTakeaways,

            "summary-card"

        );

    }


    //================================================
    // EMPTY CONTENT
    //================================================

    if (!html) {

        html = `

            <div class="lesson-card">

                <div class="card-body">

                    <h2>📚 Lesson Content</h2>

                    <p>
                        Content for this lesson
                        is coming soon.
                    </p>

                </div>

            </div>

        `;

    }


    container.innerHTML =
        html;


    //================================================
    // ACTIVATE QUIZ
    //================================================

    initializeQuiz();

}


//==================================================
// CREATE TEXT CARD
//==================================================

function createCard(
    title,
    content,
    className = ""
) {

    if (!content) {
        return "";
    }


    return `

        <section class="lesson-card ${className}">

            <div class="card-header">

                <h2>
                    ${title}
                </h2>

            </div>

            <div class="card-body">

                ${content}

            </div>

        </section>

    `;

}


//==================================================
// CREATE LIST CARD
//==================================================

function createListCard(
    title,
    items,
    className = ""
) {

    if (
        !Array.isArray(items) ||
        items.length === 0
    ) {

        return "";

    }


    return `

        <section class="lesson-card ${className}">

            <div class="card-header">

                <h2>
                    ${title}
                </h2>

            </div>

            <div class="card-body">

                <ul>

                    ${items
                        .map(item => `

                            <li>
                                ${formatInlineText(
                                    String(item)
                                )}
                            </li>

                        `)
                        .join("")}

                </ul>

            </div>

        </section>

    `;

}


//==================================================
// PRACTICAL EXAMPLE CARD
//==================================================

function createPracticalExampleCard(
    example
) {

    if (!example) {
        return "";
    }


    let html = `

        <section class="lesson-card example-card">

            <div class="card-header">

                <h2>
                    💡 Practical Example
                </h2>

            </div>

            <div class="card-body">

    `;


    //================================================
    // EXPLANATION
    //================================================

    if (example.explanation) {

        html += `

            <div class="example-introduction">

                ${formatText(
                    example.explanation
                )}

            </div>

        `;

    }

    //================================================
    // IMAGE
    //================================================

    if (example.image) {

        html += `

            <div class="lesson-example-image">

                <img
                    src="${escapeHTML(example.image)}"
                    alt="${escapeHTML(
                        example.imageAlt ||
                        "Excel Practical Example"
                    )}"
                    loading="lazy"
                >

                ${
                    example.imageCaption
                        ? `
                            <div class="image-caption">
                                ${escapeHTML(
                                    example.imageCaption
                                )}
                            </div>
                        `
                        : ""
                }

            </div>

        `;

    }

    //================================================
    // EXCEL TABLE
    //================================================

    if (
        Array.isArray(example.headers) &&
        Array.isArray(example.rows)
    ) {

        /*
        ----------------------------------------------
        EXCEL COLUMN LETTERS
        ----------------------------------------------
        */

        function getColumnLetter(number) {

            let letter = "";

            while (number > 0) {

                let remainder =
                    (number - 1) % 26;

                letter =
                    String.fromCharCode(
                        65 + remainder
                    ) + letter;

                number =
                    Math.floor(
                        (number - 1) / 26
                    );

            }

            return letter;

        }


        html += `

            <div class="excel-table-wrapper">

                <table class="excel-table">

                    <thead>

                        <tr>

                            <!-- CORNER -->

                            <th class="excel-corner">
                            </th>


                            <!-- COLUMN LETTERS -->

                            ${example.headers
                                .map((header, index) => `

                                    <th class="excel-column-letter">

                                        ${getColumnLetter(
                                            index + 1
                                        )}

                                    </th>

                                `)
                                .join("")}

                        </tr>


                        <!-- HEADER ROW -->

                        <tr>

                            <th class="excel-row-number">
                                1
                            </th>

                            ${example.headers
                                .map(header => `

                                    <th class="excel-header-cell">

                                        ${escapeHTML(
                                            header
                                        )}

                                    </th>

                                `)
                                .join("")}

                        </tr>

                    </thead>


                    <tbody>

                        ${example.rows
                            .map((row, rowIndex) => `

                                <tr>

                                    <!-- ROW NUMBER -->

                                    <th class="excel-row-number">

                                        ${rowIndex + 2}

                                    </th>


                                    ${row
                                        .map(cell => `

                                            <td>

                                                ${escapeHTML(
                                                    cell
                                                )}

                                            </td>

                                        `)
                                        .join("")}

                                </tr>

                            `)
                            .join("")}

                    </tbody>

                </table>

            </div>

        `;

    }


    //================================================
    // FORMULA
    //================================================

    if (example.formula) {

        html += `

            <div class="result-box">

                <strong>
                    🧮 Excel Formula:
                </strong>

                <code>
                    ${escapeHTML(
                        example.formula
                    )}
                </code>

            </div>

        `;

    }


    //================================================
    // RESULT
    //================================================

    if (example.result) {

        html += `

            <div class="result-box">

                <strong>
                    ✅ Result:
                </strong>

                ${formatText(
                    example.result
                )}

            </div>

        `;

    }


    //================================================
    // CLOSE CARD
    //================================================

    html += `

            </div>

        </section>

    `;


    return html;

}
//==================================================
// TRY IT YOURSELF CARD
//==================================================

function createTryItCard(
    practice
) {

    if (!practice) {
        return "";
    }


    let html = `

        <section class="lesson-card practice-card">

            <div class="card-header">

                <h2>
                    🛠️ Try It Yourself
                </h2>

            </div>

            <div class="card-body">

    `;


    // TASK

    if (practice.task) {

        html += `

            <div class="practice-task">

                <h3>
                    🎯 Your Task
                </h3>

                ${formatText(
                    practice.task
                )}

            </div>

        `;

    }


    // STEPS

    if (
        Array.isArray(practice.steps) &&
        practice.steps.length
    ) {

        html += `

            <div class="practice-steps">

                <h3>
                    📋 Follow These Steps
                </h3>

                <ol>

                    ${practice.steps
                        .map(step => `

                            <li>
                                ${formatInlineText(
                                    String(step)
                                )}
                            </li>

                        `)
                        .join("")}

                </ol>

            </div>

        `;

    }


    // CHALLENGE

    if (practice.challenge) {

        html += `

            <div class="challenge-box">

                <h3>
                    ⭐ Bonus Challenge
                </h3>

                ${formatText(
                    practice.challenge
                )}

            </div>

        `;

    }


    html += `

            </div>

        </section>

    `;


    return html;

}


//==================================================
// BUSINESS USE CARD
//==================================================

function createBusinessCard(
    business
) {

    if (!business) {
        return "";
    }


    let html = `

        <section class="lesson-card business-card">

            <div class="card-header">

                <h2>
                    💼 Real-World Use
                </h2>

            </div>

            <div class="card-body">

    `;


    if (business.introduction) {

        html += `

            ${formatText(
                business.introduction
            )}

        `;

    }


    if (
        Array.isArray(
            business.examples
        ) &&
        business.examples.length
    ) {

        html += `

            <div class="business-examples">

                <ul>

                    ${business.examples
                        .map(example => `

                            <li>
                                ${formatInlineText(
                                    String(example)
                                )}
                            </li>

                        `)
                        .join("")}

                </ul>

            </div>

        `;

    }


    html += `

            </div>

        </section>

    `;


    return html;

}


//==================================================
// QUIZ CARD
//==================================================

function createQuizCard(
    questions
) {

    if (
        !Array.isArray(questions) ||
        questions.length === 0
    ) {

        return "";

    }


    let html = `

        <section class="lesson-card quiz-card">

            <div class="card-header">

                <h2>
                    ❓ Quick Check
                </h2>

            </div>

            <div class="card-body">

                <p class="quiz-intro">
                    Chaliye check karte hain ki
                    aapne lesson kitna samjha.
                </p>

                <div class="quiz-container">

    `;


    questions.forEach(
        (question, index) => {

            html += `

                <div
                    class="quiz-question"
                    data-question="${index}"
                >

                    <h3>

                        Q${index + 1}.
                        ${escapeHTML(
                            question.question
                        )}

                    </h3>

                    <div class="quiz-options">

            `;


            if (
                Array.isArray(
                    question.options
                )
            ) {

                question.options.forEach(
                    (option, optionIndex) => {

                        html += `

                            <button
                                type="button"
                                class="quiz-option"
                                data-question="${index}"
                                data-option="${optionIndex}"
                            >

                                <span class="option-letter">
                                    ${String.fromCharCode(
                                        65 + optionIndex
                                    )}
                                </span>

                                <span>
                                    ${escapeHTML(
                                        option
                                    )}
                                </span>

                            </button>

                        `;

                    }
                );

            }


            html += `

                    </div>

                    <div
                        class="quiz-feedback"
                        id="quizFeedback-${index}"
                    ></div>

                </div>

            `;

        }
    );


    html += `

                </div>

                <div
                    class="quiz-score"
                    id="quizScore"
                >
                </div>

            </div>

        </section>

    `;


    return html;

}


//==================================================
// INITIALIZE QUIZ
//==================================================

function initializeQuiz() {

    const quizOptions =
        document.querySelectorAll(
            ".quiz-option"
        );


    if (!quizOptions.length) {
        return;
    }


    quizOptions.forEach(option => {

        option.addEventListener(
            "click",
            function () {

                const questionIndex =
                    Number(
                        this.dataset.question
                    );

                const selectedOption =
                    Number(
                        this.dataset.option
                    );


                const question =
                    currentLesson.quickCheck[
                        questionIndex
                    ];


                const questionContainer =
                    this.closest(
                        ".quiz-question"
                    );


                const feedback =
                    document.getElementById(
                        `quizFeedback-${questionIndex}`
                    );


                if (!question) {
                    return;
                }


                // Prevent multiple attempts

                if (
                    questionContainer.dataset.answered ===
                    "true"
                ) {

                    return;

                }


                questionContainer.dataset.answered =
                    "true";


                // Disable options

                const options =
                    questionContainer.querySelectorAll(
                        ".quiz-option"
                    );


                options.forEach(
                    button => {

                        button.disabled =
                            true;

                    }
                );


                // Check answer

                if (
                    selectedOption ===
                    Number(question.answer)
                ) {

                    this.classList.add(
                        "correct"
                    );


                    if (feedback) {

                        feedback.innerHTML = `

                            <div class="quiz-correct">

                                <strong>
                                    ✅ Correct!
                                </strong>

                                <p>
                                    ${escapeHTML(
                                        question.explanation ||
                                        "Bilkul sahi!"
                                    )}
                                </p>

                            </div>

                        `;

                    }

                } else {

                    this.classList.add(
                        "wrong"
                    );


                    // Highlight correct answer

                    options.forEach(
                        button => {

                            if (
                                Number(
                                    button.dataset.option
                                ) ===
                                Number(question.answer)
                            ) {

                                button.classList.add(
                                    "correct-answer"
                                );

                            }

                        }
                    );


                    if (feedback) {

                        feedback.innerHTML = `

                            <div class="quiz-wrong">

                                <strong>
                                    ❌ Not quite!
                                </strong>

                                <p>
                                    Correct answer highlighted in Green.
                                </p>

                                <p>
                                    ${escapeHTML(
                                        question.explanation ||
                                        ""
                                    )}
                                </p>

                            </div>

                        `;

                    }

                }


                updateQuizScore();

            }
        );

    });

}


//==================================================
// UPDATE QUIZ SCORE
//==================================================

function updateQuizScore() {

    const questions =
        document.querySelectorAll(
            ".quiz-question"
        );


    const answered =
        document.querySelectorAll(
            '.quiz-question[data-answered="true"]'
        );


    let correct = 0;


    answered.forEach(question => {

        if (
            question.querySelector(
                ".quiz-option.correct"
            )
        ) {

            correct++;

        }

    });


    const total =
        questions.length;


    const incorrect =
        answered.length - correct;


    const score =
        document.getElementById(
            "quizScore"
        );


    if (!score) {
        return;
    }


    //================================================
    // QUIZ STILL IN PROGRESS
    //================================================

    if (answered.length < total) {

        score.innerHTML = `

            <div class="quiz-progress">

                ${answered.length}
                / ${total}
                questions answered

            </div>

        `;

        return;

    }


    //================================================
    // FINAL SCORE
    //================================================

    const percentage =
        total > 0
            ? Math.round(
                (correct / total) * 100
            )
            : 0;


    //================================================
    // PERFORMANCE
    //================================================

    let performance = "";
    let performanceIcon = "";


    if (percentage === 100) {

        performance =
            "Excellent";

        performanceIcon =
            "🏆";

    }
    else if (percentage >= 80) {

        performance =
            "Very Good";

        performanceIcon =
            "🌟";

    }
    else if (percentage >= 60) {

        performance =
            "Good";

        performanceIcon =
            "👍";

    }
    else if (percentage >= 40) {

        performance =
            "Average";

        performanceIcon =
            "🙂";

    }
    else {

        performance =
            "Needs Practice";

        performanceIcon =
            "📚";

    }


    //================================================
    // FINAL RESULT UI
    //================================================

    score.innerHTML = `

        <div class="quiz-final-score">

            <div class="quiz-result-title">

                🎉 Quiz Complete!

            </div>


            <div class="quiz-result-stats">

                <div class="quiz-stat correct-stat">

                    <span class="quiz-stat-label">
                        Correct
                    </span>

                    <strong>
                        ${correct}
                    </strong>

                </div>


                <div class="quiz-stat incorrect-stat">

                    <span class="quiz-stat-label">
                        Incorrect
                    </span>

                    <strong>
                        ${incorrect}
                    </strong>

                </div>


                <div class="quiz-stat score-stat">

                    <span class="quiz-stat-label">
                        Score
                    </span>

                    <strong>
                        ${percentage}%
                    </strong>

                </div>

            </div>


            <div class="quiz-performance">

                <span>
                    ${performanceIcon}
                </span>

                <strong>
                    ${performance}
                </strong>

            </div>


            <p class="quiz-result-message">

                ${
                    percentage === 100
                        ? "Outstanding! Aapne lesson ko bahut achhe se samjha hai."
                        : percentage >= 80
                        ? "Great job! Aapki understanding bahut achhi hai."
                        : percentage >= 60
                        ? "Good work! Thodi aur practice se aap aur better kar sakte hain."
                        : percentage >= 40
                        ? "Aapko basic concepts samajh aa rahe hain. Thodi aur practice kijiye."
                        : "Don't worry! Lesson ko ek baar dobara revise kijiye aur quiz phir try kijiye."
                }

            </p>

        </div>

    `;

}

//==================================================
// LESSON PROGRESS
//==================================================

function updateLessonProgress() {

    const currentNumber =
        lessonIndex + 1;

    const totalLessons =
        lessonList.length;


    const progressText =
        document.getElementById(
            "lessonProgress"
        );


    if (progressText) {

        progressText.textContent =
            `Lesson ${currentNumber} of ${totalLessons}`;

    }


    const progressBar =
        document.getElementById(
            "lessonProgressBar"
        ) ||
        document.querySelector(
            ".lesson-progress .progress-bar"
        );


    if (
        progressBar &&
        totalLessons > 0
    ) {

        const percentage =
            (currentNumber / totalLessons) * 100;


        progressBar.style.width =
            `${percentage}%`;


        progressBar.setAttribute(
            "aria-valuenow",
            percentage
        );

    }

}


//==================================================
// NAVIGATION
//==================================================

function updateNavigation() {

    const prevButton =
        document.getElementById(
            "prevLesson"
        );

    const nextButton =
        document.getElementById(
            "nextLesson"
        );


    // PREVIOUS

    if (prevButton) {

        if (lessonIndex <= 0) {

            prevButton.disabled =
                true;

            prevButton.classList.add(
                "disabled"
            );

        } else {

            prevButton.disabled =
                false;

            prevButton.classList.remove(
                "disabled"
            );

        }

    }


    // NEXT

    if (nextButton) {

        if (
            lessonIndex >=
            lessonList.length - 1
        ) {

            nextButton.disabled =
                true;

            nextButton.classList.add(
                "disabled"
            );

        } else {

            nextButton.disabled =
                false;

            nextButton.classList.remove(
                "disabled"
            );

        }

    }

}


//==================================================
// PREVIOUS LESSON
//==================================================

const prevLesson =
    document.getElementById(
        "prevLesson"
    );


if (prevLesson) {

    prevLesson.onclick = () => {

        if (lessonIndex <= 0) {
            return;
        }


        const previousLesson =
            lessonList[
                lessonIndex - 1
            ];


        sessionStorage.setItem(
            "selectedModule",
            moduleId
        );


        sessionStorage.setItem(
            "selectedLesson",
            previousLesson.id
        );


        location.href =
    `lesson.html?module=${moduleId}&lesson=${nextLessonData.id}`;

    };

}


//==================================================
// NEXT LESSON
//==================================================

const nextLesson =
    document.getElementById(
        "nextLesson"
    );


if (nextLesson) {

    nextLesson.onclick = () => {

        if (
            lessonIndex >=
            lessonList.length - 1
        ) {

            return;

        }


        const nextLessonData =
            lessonList[
                lessonIndex + 1
            ];


        sessionStorage.setItem(
            "selectedModule",
            String(moduleId)
        );


        sessionStorage.setItem(
            "selectedLesson",
            String(nextLessonData.id)
        );


        location.href =
    `lesson.html?module=${moduleId}&lesson=${nextLessonData.id}`;

    };

}


//==================================================
// KEYBOARD NAVIGATION
//==================================================

document.addEventListener(
    "keydown",
    event => {

        const tag =
            document.activeElement?.tagName;


        if (
            tag === "INPUT" ||
            tag === "TEXTAREA" ||
            tag === "SELECT"
        ) {

            return;

        }


        // LEFT

        if (
            event.key === "ArrowLeft" &&
            lessonIndex > 0
        ) {

            const previousLesson =
                lessonList[
                    lessonIndex - 1
                ];


            sessionStorage.setItem(
    "selectedModule",
    String(moduleId)
);

sessionStorage.setItem(
    "selectedLesson",
    String(previousLesson.id)
);

location.href =
    `lesson.html?module=${moduleId}&lesson=${nextLessonData.id}`;

        }


        // RIGHT

        if (
            event.key === "ArrowRight" &&
            lessonIndex <
                lessonList.length - 1
        ) {

            const nextLessonData =
                lessonList[
                    lessonIndex + 1
                ];


sessionStorage.setItem(
    "selectedModule",
    String(moduleId)
);

sessionStorage.setItem(
    "selectedLesson",
    String(nextLessonData.id)
);

location.href =
    `lesson.html?module=${moduleId}&lesson=${nextLessonData.id}`;

        }

    }
);


//==================================================
// COMPLETE LESSON
//==================================================

const completeLesson =
    document.getElementById(
        "completeLesson"
    );


if (completeLesson) {

    completeLesson.addEventListener(
        "click",
        async function () {

            const user =
                auth.currentUser;


            // CHECK LOGIN

            if (!user) {

                alert(
                    "Please login to save your lesson progress."
                );

                window.location.href =
                    "login.html";

                return;

            }


            // DISABLE BUTTON

            completeLesson.disabled =
                true;


            completeLesson.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';


            try {

                const progressRef =
                    doc(
                        db,
                        "users",
                        user.uid
                    );


                await setDoc(

                    progressRef,

                    {

                        completedLessons:
                            arrayUnion(
                                `module-${moduleId}-lesson-${lessonId}`
                            ),

                        lastModule:
                            moduleId,

                        lastLesson:
                            lessonId,

                        progressUpdatedAt:
                            serverTimestamp()

                    },

                    {
                        merge: true
                    }

                );


                // SUCCESS

                completeLesson.innerHTML =
                    '<i class="fa-solid fa-circle-check"></i> Completed';


                completeLesson.classList.add(
                    "completed"
                );


            } catch (error) {

                console.error(
                    "Progress Save Error:",
                    error
                );


                alert(
                    "Unable to save your progress. Please try again."
                );


                completeLesson.disabled =
                    false;


                completeLesson.innerHTML =
                    '<i class="fa-solid fa-circle-check"></i> Complete Lesson';

            }

        }
    );

}


//==================================================
// LOAD COMPLETION STATUS
//==================================================

function loadCompletionStatus() {

    onAuthStateChanged(
        auth,
        async user => {

            const completeLesson =
                document.getElementById(
                    "completeLesson"
                );


            if (!completeLesson) {
                return;
            }


            if (!user) {
                return;
            }


            try {

                const progressRef =
                    doc(
                        db,
                        "users",
                        user.uid
                    );


                const progressSnap =
                    await getDoc(
                        progressRef
                    );


                if (!progressSnap.exists()) {
                    return;
                }


                const progressData =
                    progressSnap.data();


                const completedLessons =
                    progressData.completedLessons ||
                    [];


                const lessonKey =
                    `module-${moduleId}-lesson-${lessonId}`;


                if (
                    completedLessons.includes(
                        lessonKey
                    )
                ) {

                    completeLesson.disabled =
                        true;


                    completeLesson.innerHTML =
                        '<i class="fa-solid fa-circle-check"></i> Completed';


                    completeLesson.classList.add(
                        "completed"
                    );

                }


            } catch (error) {

                console.error(
                    "Load Progress Error:",
                    error
                );

            }

        }
    );

}


//==================================================
// START COMPLETION CHECK
//==================================================

loadCompletionStatus();
