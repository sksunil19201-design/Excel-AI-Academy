/*==================================================
EXCEL AI ACADEMY
COURSE DATA
excelCourse.js
==================================================*/

const EXCEL_COURSE = [

    {
        id: 1,

        title: "Excel Basics",

        description:
            "Learn Microsoft Excel from absolute beginner to advanced level.",

        icon: "fa-book-open",

        sections: [

            /*==================================================
            SECTION 1
            ==================================================*/

            {
                id: 1,

                title: "Introduction",

                lessons: [

                    /*==================================================
                    LESSON 1
                    ==================================================*/

                    {
                        id: 1,

                        title: "What is Microsoft Excel?",

                        completed: false,

                        duration: "15 Minutes",

                        difficulty: "Beginner",

                        category: "Introduction",

                        /*----------------------------------------------
                        1. LEARNING OBJECTIVES
                        ----------------------------------------------*/

                        learningObjectives: [

                            "Excel kya hai aur iska basic purpose samajhna.",

                            "Rows, Columns aur Cells ka basic idea samajhna.",

                            "Excel ka real-life aur business use samajhna.",

                            "Ek simple Excel workbook create karna."

                        ],


                        /*----------------------------------------------
                        2. WHAT IS EXCEL?
                        ----------------------------------------------*/

                        Introduction:
                            "Microsoft Excel ek spreadsheet software hai jo Microsoft ne develop kiya hai. Iska use data ko organize karne, calculations karne, information ko analyze karne aur reports banane ke liye hota hai. Simple words mein, Excel ek digital table ki tarah hai jisme hum data ko easily store aur manage kar sakte hain.",


                        /*----------------------------------------------
                        3. EXCEL IN SIMPLE WORDS
                        ----------------------------------------------*/

                        excelInSimpleWords:
                            "Agar aapke paas bahut saara data hai, jaise employee salary, monthly expenses, sales ya customer information, to Excel us data ko rows aur columns mein arrange karne mein help karta hai. Excel ki sabse powerful baat ye hai ki hum formulas aur functions ki help se calculations automatically kar sakte hain.",


                        /*----------------------------------------------
                        4. PRACTICAL EXAMPLE
                        ----------------------------------------------*/

practicalExample: {

    explanation:
        "Maan lijiye aap apne monthly household expenses track karna chahte hain. Aap Excel mein ek simple table bana sakte hain:",

                image: "Image/lessons/lesson1.png",

    headers: [
        "Date (A)",
        "Expense (B)",
        "Category (C)",
        "Amount (D)"
    ],

    rows: [

        [  
            "01-Aug",
            "Milk",
            "Food",
            "60"
        ],

        [
            "02-Aug",
            "Petrol",
            "Travel",
            "500"
        ],

        [
            "03-Aug",
            "Electricity Bill",
            "Bills",
            "1800"
        ],

        [
            "04-Aug",
            "Groceries",
            "Food",
            "1200"
        ]

    ],

    formula: "=SUM(D2:D5)",

    result:
        "Total Expenses = ₹3,560"

},

                        /*----------------------------------------------
                        5. TRY IT YOURSELF
                        ----------------------------------------------*/

                        tryItYourself: {

                            task:
                                "Apne computer par Excel open kijiye aur ek new blank workbook create kijiye.",

                            steps: [

                                "Excel open karein.",

                                "Blank Workbook select karein.",

                                "Cell A1 mein Name type karein.",

                                "Cell B1 mein Department type karein.",

                                "Cell C1 mein Salary type karein.",

                                "Neeche 3 employees ka sample data enter karein.",

                                "Workbook ko MyFirstWorkbook.xlsx naam se save karein."

                            ],

                            challenge:
                                "Bonus Challenge: Salary column ke neeche total salary calculate karne ki koshish karein."
                        },


                        /*----------------------------------------------
                        6. REAL BUSINESS USE
                        ----------------------------------------------*/

                        realBusinessUse: {

                            introduction:
                                "Excel sirf personal expenses ke liye nahi hai. Real companies mein bhi Excel ka bahut large-scale use hota hai.",

                            examples: [

                                "🏦 Banking: MIS reports, reconciliation, compliance tracking aur operational reports.",

                                "💰 Finance: Budgeting, forecasting, financial analysis aur expense tracking.",

                                "👥 HR: Employee records, attendance, salary aur workforce reports.",

                                "📈 Sales: Sales targets, revenue tracking, customer data aur performance reports.",

                                "📦 Operations: Inventory, daily activities, productivity aur management reports."

                            ]
                        },


                        /*----------------------------------------------
                        7. QUICK CHECK
                        ----------------------------------------------*/

                        quickCheck: [

                            {
                                question:
                                    "Microsoft Excel ka main use kya hai?",

                                options: [

                                    "Video editing",

                                    "Data organize aur analyze karna",

                                    "Website banana",

                                    "Games khelna"

                                ],

                                answer: 1,

                                explanation:
                                    "Correct! Excel ka main use data ko organize, calculate, analyze aur present karna hai."
                            },


                            {
                                question:
                                    "Excel mein data generally kis form mein organize hota hai?",

                                options: [

                                    "Rows aur Columns",

                                    "Slides",

                                    "Frames",

                                    "Pages"

                                ],

                                answer: 0,

                                explanation:
                                    "Correct! Excel mein data Rows aur Columns ke form mein organize hota hai."
                            },


                            {
                                question:
                                    "Excel ka use kis field mein ho sakta hai?",

                                options: [

                                    "Banking",

                                    "Finance",

                                    "HR",

                                    "All of the above"

                                ],

                                answer: 3,

                                explanation:
                                    "Absolutely! Excel Banking, Finance, HR, Sales aur almost har business function mein use hota hai."
                            }

                        ],


                        /*----------------------------------------------
                        8. KEY TAKEAWAYS
                        ----------------------------------------------*/

                        keyTakeaways: [

                            "Excel ek spreadsheet software hai.",

                            "Excel data ko Rows aur Columns mein organize karta hai.",

                            "Excel calculations aur data analysis ko easy banata hai.",

                            "Excel personal aur professional dono situations mein useful hai.",

                            "Excel seekhna business aur data-related careers ke liye valuable skill hai."

                        ]

                    },


                    /*==================================================
                    LESSON 2
                    ==================================================*/
                    /*==================================================
                    LESSON 2
                    ==================================================*/

                    {
                        id: 2,

                        title: "Why Learn Excel?",

                        completed: false,

                        duration: "15 Minutes",

                        difficulty: "Beginner",

                        category: "Introduction",

                        learningObjectives: [
                            "Excel seekhna kyun important hai ye samajhna.",
                            "Excel ke professional benefits samajhna.",
                            "Excel ka business use samajhna."
                        ],

                        whatIsExcel:
                            "Excel ek spreadsheet software hai jo data ko organize karne, calculations karne aur reports banane ke liye use hota hai.",

                        excelInSimpleWords:
                            "Simple words mein, Excel aapke daily kaam ko faster aur easier bana sakta hai.",

                        practicalExample: {

                            explanation:
                                "Maan lijiye ek company employee sales track karna chahti hai.",

                                image: "Image/lessons/lesson2.png",

                            headers: [
                                "Employee",
                                "Sales",
                                "Target"
                            ],

                            rows: [
                                [
                                    "Rahul",
                                    "85000",
                                    "100000"
                                ],
                                [
                                    "Priya",
                                    "120000",
                                    "100000"
                                ],
                                [
                                    "Amit",
                                    "95000",
                                    "100000"
                                ]
                            ],

                            formula:
                                "=B2/C2",

                            result:
                                "Rahul ka achievement 85% hoga."

                        },

                        tryItYourself: {

                            task:
                                "Excel mein ek simple sales table create kijiye.",

                            steps: [
                                "Excel open karein.",
                                "Blank Workbook select karein.",
                                "Employee, Sales aur Target columns create karein.",
                                "3 employees ka data enter karein.",
                                "Sales ko Target se divide karke achievement calculate karein."
                            ],

                            challenge:
                                "Bonus Challenge: Achievement ko Percentage format mein convert karein."

                        },

                        realBusinessUse: {

                            introduction:
                                "Excel ka use almost har business function mein hota hai.",

                            examples: [
                                "Banking: MIS aur reconciliation.",
                                "Finance: Budgeting aur reporting.",
                                "HR: Employee aur salary reports.",
                                "Sales: Target aur performance tracking.",
                                "Operations: Productivity aur inventory tracking."
                            ]

                        },

                        quickCheck: [

                            {
                                question:
                                    "Excel seekhne ka major benefit kya hai?",

                                options: [
                                    "Data organize karna",
                                    "Games khelna",
                                    "Video editing",
                                    "Internet speed badhana"
                                ],

                                answer: 0,

                                explanation:
                                    "Correct! Excel data organize aur calculate karne mein help karta hai."
                            },

                            {
                                question:
                                    "Excel ka use kis field mein ho sakta hai?",

                                options: [
                                    "Banking",
                                    "Finance",
                                    "HR",
                                    "All of the above"
                                ],

                                answer: 3,

                                explanation:
                                    "Correct! Excel almost every business function mein useful hai."
                            },

                            {
                                question:
                                    "Excel formulas ka benefit kya hai?",

                                options: [
                                    "Calculations automatically karna",
                                    "Computer restart karna",
                                    "Internet speed badhana",
                                    "Games run karna"
                                ],

                                answer: 0,

                                explanation:
                                    "Correct! Formulas calculations automatically perform karte hain."
                            }

                        ],

                        keyTakeaways: [

                            "Excel ek powerful spreadsheet software hai.",

                            "Excel data ko organize aur analyze karne mein help karta hai.",

                            "Excel calculations ko faster banata hai.",

                            "Excel Banking, Finance, HR aur Sales mein useful hai.",

                            "Excel ek valuable professional skill hai."

                        ]

                    },


/*==================================================
LESSON 3
==================================================*/

{
    id: 3,

    title: "Real-Life Uses of Excel",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Introduction",


    /*----------------------------------------------
    1. LEARNING OBJECTIVES
    ----------------------------------------------*/

    learningObjectives: [

        "Excel ka real-life mein kaha aur kaise use hota hai samajhna.",

        "Different business departments mein Excel ke use cases samajhna.",

        "Excel ka use data tracking aur reporting ke liye samajhna.",

        "Ek simple real-world Excel example banana."

    ],


    /*----------------------------------------------
    2. WHAT IS EXCEL USED FOR?
    ----------------------------------------------*/

    whatIsExcel:
        "Microsoft Excel ka use sirf numbers enter karne ke liye nahi hota. Excel ek powerful tool hai jiska use data ko organize, calculate, analyze aur report karne ke liye kiya jata hai. Personal life se lekar large organizations tak Excel ka use bahut common hai.",


    /*----------------------------------------------
    3. EXCEL IN SIMPLE WORDS
    ----------------------------------------------*/

    excelInSimpleWords:
        "Simple words mein, Excel ko aap ek smart digital notebook samajh sakte hain. Lekin normal notebook ke comparison mein Excel automatically calculations kar sakta hai, data ko sort aur filter kar sakta hai, charts bana sakta hai aur large amount of information ko analyze kar sakta hai.",


    /*----------------------------------------------
    4. PRACTICAL EXAMPLE
    ----------------------------------------------*/

    practicalExample: {

        explanation:
            "Maan lijiye ek company apne monthly sales ko track karna chahti hai. Excel mein employee-wise sales aur target maintain kiya ja sakta hai.",

            image: "Image/lessons/lesson3.png",

        headers: [
            "Employee",
            "Department",
            "Sales",
            "Target"
        ],

        rows: [

            [
                "Rahul",
                "Sales",
                "85000",
                "100000"
            ],

            [
                "Priya",
                "Sales",
                "120000",
                "100000"
            ],

            [
                "Amit",
                "Sales",
                "95000",
                "100000"
            ],

            [
                "Neha",
                "Sales",
                "110000",
                "100000"
            ]

        ],

        formula:
            "=SUM(C2:C5)",

        result:
            "Total Sales = ₹4,10,000"

    },


    /*----------------------------------------------
    5. TRY IT YOURSELF
    ----------------------------------------------*/

    tryItYourself: {

        task:
            "Excel mein ek simple monthly sales tracking table create kijiye.",

        steps: [

            "Excel open karein aur Blank Workbook select karein.",

            "Cell A1 mein Employee type karein.",

            "Cell B1 mein Department type karein.",

            "Cell C1 mein Sales type karein.",

            "Cell D1 mein Target type karein.",

            "4 employees ka sample data enter karein.",

            "Sales column ke neeche total calculate karne ke liye =SUM(C2:C5) formula use karein.",

            "Sales aur Target ko compare karke identify karein ki kaun target se above hai."

        ],

        challenge:
            "Bonus Challenge: Ek new column Achievement % create kijiye aur Sales ko Target se divide karke percentage calculate kijiye."

    },


    /*----------------------------------------------
    6. REAL BUSINESS USE
    ----------------------------------------------*/

    realBusinessUse: {

        introduction:
            "Real companies mein Excel ka use almost har department mein hota hai. Different teams apne daily data ko track aur analyze karne ke liye Excel ka use karti hain.",

        examples: [

            "🏦 Banking: Daily transaction tracking, reconciliation, MIS reports, compliance tracking aur exception reports.",

            "💰 Finance: Budgeting, forecasting, expense tracking, financial analysis aur management reporting.",

            "👥 HR: Employee master data, attendance, salary analysis, recruitment tracking aur employee reports.",

            "📈 Sales: Sales targets, revenue tracking, customer data, sales performance aur achievement reports.",

            "📦 Operations: Inventory tracking, productivity reports, daily activity tracking aur process monitoring.",

            "📊 Management: KPI tracking, dashboards, business reports aur decision-making analysis."

        ]

    },


    /*----------------------------------------------
    7. QUICK CHECK
    ----------------------------------------------*/

    quickCheck: [

        {
            question:
                "Excel ka real-life mein use kis purpose ke liye kiya ja sakta hai?",

            options: [

                "Data tracking",

                "Reporting",

                "Calculations",

                "All of the above"

            ],

            answer: 3,

            explanation:
                "Absolutely! Excel data tracking, calculations, analysis aur reporting ke liye widely use hota hai."

        },


        {
            question:
                "HR department Excel ka use kis kaam ke liye kar sakta hai?",

            options: [

                "Employee records maintain karna",

                "Employee reports banana",

                "Attendance aur salary data track karna",

                "All of the above"

            ],

            answer: 3,

            explanation:
                "Correct! HR teams employee records, attendance, salary aur various reports ke liye Excel use karti hain."

        },


        {
            question:
                "Sales team Excel ka use kis cheez ko track karne ke liye kar sakti hai?",

            options: [

                "Sales Target",

                "Revenue",

                "Sales Performance",

                "All of the above"

            ],

            answer: 3,

            explanation:
                "Correct! Sales teams targets, revenue aur employee performance ko Excel mein easily track kar sakti hain."

        }

    ],


    /*----------------------------------------------
    8. KEY TAKEAWAYS
    ----------------------------------------------*/

    keyTakeaways: [

        "Excel ka use personal aur professional dono situations mein hota hai.",

        "Excel Banking, Finance, HR, Sales aur Operations jaise departments mein widely used hai.",

        "Excel data ko organize, track, calculate aur analyze karne mein help karta hai.",

        "Companies Excel ka use MIS, reports, budgeting aur performance tracking ke liye karti hain.",

        "Excel ki knowledge almost har business professional ke liye valuable skill hai."

    ]

},

                    /*==================================================
                    LESSON 4
                    ==================================================*/


/*==================================================
LESSON 4
==================================================*/

{
    id: 4,

    title: "Excel Versions",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Introduction",


    /*----------------------------------------------
    1. LEARNING OBJECTIVES
    ----------------------------------------------*/

    learningObjectives: [

        "Microsoft Excel ke different versions ka basic idea samajhna.",

        "Excel 2010, 2013, 2016, 2019, 2021 aur Microsoft 365 ke differences samajhna.",

        "Excel ke latest versions mein available important features samajhna.",

        "Apne Excel version ko identify karna seekhna."

    ],


    /*----------------------------------------------
    2. WHAT ARE EXCEL VERSIONS?
    ----------------------------------------------*/

    whatIsExcel:
        "Microsoft Excel ko Microsoft ne different years mein update kiya hai. Har new version mein naye features, better performance, improved formulas aur security updates add kiye gaye. Isliye Excel ke different versions market mein available rahe hain.",


    /*----------------------------------------------
    3. EXCEL IN SIMPLE WORDS
    ----------------------------------------------*/

    excelInSimpleWords:
        "Simple words mein, Excel versions ko aap Excel ke different generations samajh sakte hain. Jaise-jaise technology improve hui, Excel mein bhi naye features add hote gaye. Purane versions mein basic Excel features available the, jabki newer versions mein advanced formulas, better data analysis tools aur modern collaboration features milte hain.",


    /*----------------------------------------------
    4. PRACTICAL EXAMPLE
    ----------------------------------------------*/

    practicalExample: {

        explanation:
            "Neeche kuch popular Excel versions aur unke commonly known features ka simple comparison diya gaya hai:",

            image: "Image/lessons/lesson4.png",

        headers: [
            "Version",
            "Year",
            "Popular Features",
            "Use"
        ],

        rows: [

            [
                "Excel 2010",
                "2010",
                "Sparklines, improved charts",
                "Basic to Intermediate"
            ],

            [
                "Excel 2013",
                "2013",
                "Flash Fill, Recommended Charts",
                "Intermediate"
            ],

            [
                "Excel 2016",
                "2016",
                "Power Query improvements, new charts",
                "Intermediate to Advanced"
            ],

            [
                "Excel 2019",
                "2018",
                "New functions, improved charts",
                "Advanced"
            ],

            [
                "Excel 2021",
                "2021",
                "XLOOKUP, Dynamic Arrays",
                "Advanced"
            ],

            [
                "Microsoft 365",
                "Subscription",
                "Dynamic Arrays, XLOOKUP, modern features",
                "Advanced / Professional"
            ]

        ],

        formula:
            "=IF(B6=\"Microsoft 365\",\"Latest Features\",\"Older Version\")",

        result:
            "Excel version ko identify karke aap samajh sakte hain ki aapke system mein kaunse Excel features available hain."

    },


    /*----------------------------------------------
    5. TRY IT YOURSELF
    ----------------------------------------------*/

    tryItYourself: {

        task:
            "Apne computer par installed Excel ka version identify kijiye.",

        steps: [

            "Microsoft Excel open karein.",

            "Excel mein File menu open karein.",

            "Account option par click karein.",

            "Product Information section dekhein.",

            "Apne Excel ka version ya Microsoft 365 information identify karein.",

            "Ek blank worksheet mein A1 mein apna Excel version type karein.",

            "A2 mein likhein ki aapka Excel subscription-based hai ya standalone version."

        ],

        challenge:
            "Bonus Challenge: Check kijiye ki aapke Excel mein XLOOKUP aur FILTER jaise modern functions available hain ya nahi."

    },


    /*----------------------------------------------
    6. REAL BUSINESS USE
    ----------------------------------------------*/

    realBusinessUse: {

        introduction:
            "Excel version ka knowledge professional environment mein important ho sakta hai, especially jab team ke different users different Excel versions use kar rahe hon.",

        examples: [

            "🏦 Banking: Different Excel versions ke users ke beech reports aur templates share karna.",

            "💰 Finance: Advanced formulas aur financial models ko compatible version mein maintain karna.",

            "👥 HR: Employee reports aur templates ko different users ke systems par run karna.",

            "📈 Sales: Modern Excel features jaise XLOOKUP aur Dynamic Arrays ka use karna.",

            "📊 Data Analysis: Power Query, PivotTables, Charts aur modern formulas ke through large datasets analyze karna.",

            "🤝 Team Collaboration: Microsoft 365 ke through files ko cloud mein store aur collaborate karna."

        ]

    },


    /*----------------------------------------------
    7. QUICK CHECK
    ----------------------------------------------*/

    quickCheck: [

        {
            question:
                "Excel versions time ke saath kyun update hote hain?",

            options: [

                "New features add karne ke liye",

                "Performance improve karne ke liye",

                "Security aur usability improve karne ke liye",

                "All of the above"

            ],

            answer: 3,

            explanation:
                "Correct! New Excel versions mein features, performance, security aur usability improve hoti hai."

        },


        {
            question:
                "XLOOKUP kis type ke Excel versions mein commonly available hai?",

            options: [

                "Only very old Excel versions",

                "Modern Excel versions",

                "Excel 2003 only",

                "None of the above"

            ],

            answer: 1,

            explanation:
                "Correct! XLOOKUP modern Excel versions, including Microsoft 365 and newer standalone versions, mein available hai."

        },


        {
            question:
                "Excel version check karna kyun useful hai?",

            options: [

                "Available features identify karne ke liye",

                "Formula compatibility samajhne ke liye",

                "Team file compatibility check karne ke liye",

                "All of the above"

            ],

            answer: 3,

            explanation:
                "Absolutely! Excel version check karne se features, formulas aur file compatibility ko better understand kiya ja sakta hai."

        }

    ],


    /*----------------------------------------------
    8. KEY TAKEAWAYS
    ----------------------------------------------*/

    keyTakeaways: [

        "Microsoft Excel ke different versions different years mein release hue hain.",

        "Newer Excel versions mein naye formulas aur advanced features available hote hain.",

        "Microsoft 365 modern Excel features aur cloud collaboration provide karta hai.",

        "Excel version identify karna feature aur formula compatibility ke liye important hai.",

        "Professional Excel users ko apne Excel version aur available features ka basic knowledge hona chahiye."

    ]

},

/*==================================================
LESSON 5
==================================================*/

{
    id: 5,

    title: "Excel Workbook & Worksheet",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Introduction",


    /*----------------------------------------------
    1. LEARNING OBJECTIVES
    ----------------------------------------------*/

    learningObjectives: [

        "Excel Workbook aur Worksheet ka basic concept samajhna.",

        "Workbook aur Worksheet ke beech difference samajhna.",

        "Rows, Columns, Cells aur Cell Address ko identify karna.",

        "Worksheet mein new sheet add, rename aur delete karna seekhna.",

        "Excel file ke basic structure ko practically samajhna."

    ],


    /*----------------------------------------------
    2. WHAT IS EXCEL WORKBOOK?
    ----------------------------------------------*/

    whatIsExcel:
        "Excel Workbook ek complete Excel file hoti hai jisme ek ya multiple Worksheets ho sakti hain. Jab aap Excel mein ek new file create karke save karte hain, to woh ek Workbook ke form mein save hoti hai, jaise Sales_Report.xlsx.",


    /*----------------------------------------------
    3. EXCEL IN SIMPLE WORDS
    ----------------------------------------------*/

    excelInSimpleWords:
        "Simple words mein, Workbook ko ek notebook samajhiye aur Worksheet ko us notebook ke individual pages. Ek Workbook ke andar multiple Worksheets ho sakti hain. Har Worksheet mein Rows aur Columns hote hain, aur Row aur Column ke intersection ko Cell kaha jata hai.",


    /*----------------------------------------------
    4. PRACTICAL EXAMPLE
    ----------------------------------------------*/

    practicalExample: {

        explanation:
            "Neeche Excel Workbook aur Worksheet ke important elements ka simple comparison diya gaya hai:",

            image: "Image/lessons/lesson5.png",

        headers: [
            "Element",
            "Example",
            "Meaning",
            "Use"
        ],

        rows: [

            [
                "Workbook",
                "Sales_Report.xlsx",
                "Complete Excel file",
                "Complete data store karna"
            ],

            [
                "Worksheet",
                "January Sales",
                "Workbook ke andar ek sheet",
                "Monthly data maintain karna"
            ],

            [
                "Row",
                "Row 5",
                "Horizontal line of cells",
                "Records store karna"
            ],

            [
                "Column",
                "Column B",
                "Vertical line of cells",
                "Data fields maintain karna"
            ],

            [
                "Cell",
                "B5",
                "Row aur Column ka intersection",
                "Individual data enter karna"
            ],

            [
                "Cell Address",
                "B5",
                "Column + Row reference",
                "Cell ko identify karna"
            ]

        ],

        formula:
            "=SUM(B2:B3)",

        result:
            "Formula B2 se B3 tak ke numbers ka total calculate karega."

    },


    /*----------------------------------------------
    5. TRY IT YOURSELF
    ----------------------------------------------*/

    tryItYourself: {

        task:
            "Ek new Excel Workbook create karke Workbook aur Worksheet ke basic elements practice kijiye.",

        steps: [

            "Microsoft Excel open karein.",

            "Ek Blank Workbook create karein.",

            "Sheet1 ko rename karke Sales Data naam dein.",

            "Ek new worksheet add karein aur uska naam Expenses rakhein.",

            "Sales Data sheet mein A1 mein Product aur B1 mein Sales likhein.",

            "A2 mein Laptop aur B2 mein 50000 enter karein.",

            "A3 mein Monitor aur B3 mein 25000 enter karein.",

            "B4 mein =SUM(B2:B3) formula enter karein.",

            "Workbook ko Sales_Report.xlsx naam se save karein."

        ],

        challenge:
            "Bonus Challenge: Ek third worksheet create karke uska naam Summary rakhiye aur Sales Data worksheet se Total Sales ko reference kijiye."

    },


    /*----------------------------------------------
    6. REAL BUSINESS USE
    ----------------------------------------------*/

    realBusinessUse: {

        introduction:
            "Workbook aur Worksheet ka proper structure professional Excel reporting ke liye bahut important hai. Different types ke data ko separate worksheets mein organize karke ek single Workbook mein manage kiya ja sakta hai.",

        examples: [

            "🏦 Banking: Customer data, transactions aur monthly reports ko separate worksheets mein maintain karna.",

            "💰 Finance: Income, Expenses, Budget aur Financial Summary ko ek Workbook mein organize karna.",

            "👥 HR: Employee Master, Attendance, Salary aur Leave data ko different worksheets mein maintain karna.",

            "📈 Sales: Monthly Sales, Product Data, Customer Data aur Sales Summary ko separate sheets mein manage karna.",

            "📊 Data Analysis: Raw Data, Clean Data, Calculations aur Dashboard ke liye separate worksheets use karna.",

            "🤝 Team Reporting: Different departments ya months ka data ek Workbook mein organized format mein maintain karna."

        ]

    },


    /*----------------------------------------------
    7. QUICK CHECK
    ----------------------------------------------*/

    quickCheck: [

        {
            question:
                "Excel Workbook kya hota hai?",

            options: [

                "Excel file jisme worksheets ho sakti hain",

                "Sirf ek cell",

                "Sirf ek column",

                "Excel ka ek formula"

            ],

            answer: 0,

            explanation:
                "Correct! Workbook ek complete Excel file hoti hai jisme ek ya multiple Worksheets ho sakti hain."

        },


        {
            question:
                "Worksheet kis cheez ka part hoti hai?",

            options: [

                "Cell",

                "Workbook",

                "Formula",

                "Column"

            ],

            answer: 1,

            explanation:
                "Correct! Worksheet ek Workbook ke andar hoti hai aur ismein Rows aur Columns hote hain."

        },


        {
            question:
                "Cell B5 ka kya meaning hai?",

            options: [

                "Column B aur Row 5",

                "Row B aur Column 5",

                "Workbook number 5",

                "Sheet B number 5"

            ],

            answer: 0,

            explanation:
                "Absolutely! B5 ka matlab hai Column B aur Row 5 ke intersection par located cell."

        }

    ],


    /*----------------------------------------------
    8. KEY TAKEAWAYS
    ----------------------------------------------*/

    keyTakeaways: [

        "Workbook ek complete Excel file hoti hai.",

        "Ek Workbook ke andar multiple Worksheets ho sakti hain.",

        "Worksheet mein Rows aur Columns hote hain.",

        "Row aur Column ke intersection ko Cell kaha jata hai.",

        "Cell Address Column letter aur Row number se banta hai, jaise A1 ya B5.",

        "Different types ke data ko separate Worksheets mein organize karna professional Excel reporting ke liye useful hai."

    ]

}

                ]

            },




            /*==================================================
            SECTION 2
            ==================================================*/

            {
                id: 2,

                title: "Excel Interface",

                lessons: [

                    

{
    id: 6,

    title: "Excel Start Screen",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Interface",


    /*----------------------------------------------
    1. LEARNING OBJECTIVES
    ----------------------------------------------*/

    learningObjectives: [

        "Excel Start Screen ka basic interface samajhna.",

        "Blank Workbook aur Templates ka difference samajhna.",

        "Recent Files aur Pinned Files ka use samajhna.",

        "Excel Start Screen se new Workbook create karna seekhna.",

        "Existing Excel Workbook ko open karna seekhna."

    ],


    /*----------------------------------------------
    2. WHAT IS EXCEL START SCREEN?
    ----------------------------------------------*/

    whatIsExcel:
        "Excel Start Screen woh screen hoti hai jo Microsoft Excel open karne ke baad sabse pehle show hoti hai. Is screen se aap new Blank Workbook create kar sakte hain, ready-made Templates use kar sakte hain aur recently opened Excel files ko quickly access kar sakte hain.",


    /*----------------------------------------------
    3. EXCEL IN SIMPLE WORDS
    ----------------------------------------------*/

    excelInSimpleWords:
        "Simple words mein, Excel Start Screen ko Excel ka starting point samajhiye. Yahin se aap decide karte hain ki aapko new Workbook banana hai ya pehle se saved Workbook open karni hai. Agar aapko khud se Excel file banana hai to Blank Workbook sabse common option hai.",


    /*----------------------------------------------
    4. PRACTICAL EXAMPLE
    ----------------------------------------------*/

    practicalExample: {

        explanation:
            "Excel Start Screen par different options available hote hain. Neeche unka simple comparison dekhiye:",

            image: "Image/lessons/lesson6.png",

        headers: [
            "Option",
            "Example",
            "Purpose",
            "Use"
        ],

        rows: [

            [
                "Blank Workbook",
                "New Excel File",
                "Empty Workbook create karna",
                "New data entry"
            ],

            [
                "Recent",
                "Sales_Report.xlsx",
                "Recently opened files",
                "Quick access"
            ],

            [
                "Pinned",
                "Monthly_MIS.xlsx",
                "Important file ko easily access karna",
                "Regular use"
            ],

            [
                "Templates",
                "Budget Template",
                "Ready-made format use karna",
                "Faster work"
            ],

            [
                "Open",
                "Existing Workbook",
                "Saved Excel file open karna",
                "Continue existing work"
            ]

        ],

        formula:
            "=COUNTA(A2:A6)",

        result:
            "Formula Excel table mein available options ki total count calculate karega."

    },


    /*----------------------------------------------
    5. TRY IT YOURSELF
    ----------------------------------------------*/

    tryItYourself: {

        task:
            "Excel Start Screen ke different options ko practically explore kijiye.",

        steps: [

            "Microsoft Excel open karein.",

            "Excel Start Screen ko observe karein.",

            "Blank Workbook option par click karke new Workbook create karein.",

            "Workbook ko Excel_Start_Screen.xlsx naam se save karein.",

            "Excel close karke dobara open karein.",

            "Recent section mein apni recently opened Workbook check karein.",

            "Open option ka use karke saved Workbook open karein."

        ],

        challenge:
            "Bonus Challenge: Excel Start Screen par available kisi ek Template ko open kijiye aur identify kijiye ki woh business mein kis kaam aa sakta hai."

    },


    /*----------------------------------------------
    6. REAL BUSINESS USE
    ----------------------------------------------*/

    realBusinessUse: {

        introduction:
            "Excel Start Screen ko efficiently use karna professional work mein time save karta hai. Frequently used files aur templates ko quickly access karke daily Excel work faster kiya ja sakta hai.",

        examples: [

            "🏦 Banking: Daily MIS ya reconciliation Workbook ko Recent Files se quickly open karna.",

            "💰 Finance: Budget aur financial reporting templates ko quickly access karna.",

            "👥 HR: Employee Master aur Attendance Workbook ko frequently open karna.",

            "📈 Sales: Daily ya monthly Sales Report Workbook ko Recent section se access karna.",

            "📊 Data Analysis: Existing datasets ko Open option se quickly load karke analysis continue karna.",

            "🤝 Team Reporting: Frequently used reporting templates ko organize karke daily work faster banana."

        ]

    },


    /*----------------------------------------------
    7. QUICK CHECK
    ----------------------------------------------*/

    quickCheck: [

        {
            question:
                "Excel Start Screen ka main purpose kya hai?",

            options: [

                "New Workbook create aur existing files open karna",

                "Computer shutdown karna",

                "Internet browse karna",

                "Video edit karna"

            ],

            answer: 0,

            explanation:
                "Correct! Excel Start Screen se aap new Workbook create kar sakte hain aur existing Excel files ko open kar sakte hain."

        },


        {
            question:
                "New empty Excel file create karne ke liye kaunsa option commonly use hota hai?",

            options: [

                "Recent",

                "Blank Workbook",

                "Pinned",

                "Open"

            ],

            answer: 1,

            explanation:
                "Correct! Blank Workbook ek new empty Excel Workbook create karta hai."

        },


        {
            question:
                "Recent section ka use kis liye hota hai?",

            options: [

                "Recently opened files access karne ke liye",

                "New computer purchase karne ke liye",

                "Excel uninstall karne ke liye",

                "Charts delete karne ke liye"

            ],

            answer: 0,

            explanation:
                "Absolutely! Recent section mein recently opened Excel files ko quickly access kiya ja sakta hai."

        }

    ],


    /*----------------------------------------------
    8. KEY TAKEAWAYS
    ----------------------------------------------*/

    keyTakeaways: [

        "Excel Start Screen Excel open karne ke baad starting point hoti hai.",

        "Blank Workbook se new empty Excel file create ki ja sakti hai.",

        "Recent section recently opened files ko quickly access karne mein help karta hai.",

        "Templates ready-made Excel formats provide karte hain.",

        "Open option ka use existing Excel Workbook open karne ke liye hota hai.",

        "Excel Start Screen ko efficiently use karna daily productivity improve kar sakta hai."

    ]

},

            {
    id: 7,

    title: "Workbook vs Worksheet",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Interface",


    /*----------------------------------------------
    1. LEARNING OBJECTIVES
    ----------------------------------------------*/

    learningObjectives: [

        "Excel Workbook aur Worksheet ko clearly understand karna.",

        "Workbook aur Worksheet ke beech main difference samajhna.",

        "Workbook ke andar multiple Worksheets kaise use hoti hain ye samajhna.",

        "Worksheet ko rename, add aur delete karna seekhna.",

        "Real-world reporting mein Workbook aur Worksheets ka proper use samajhna."

    ],


    /*----------------------------------------------
    2. WHAT IS WORKBOOK VS WORKSHEET?
    ----------------------------------------------*/

    whatIsExcel:
        "Workbook ek complete Excel file hoti hai, jaise Sales_Report.xlsx. Is Workbook ke andar ek ya multiple Worksheets ho sakti hain. Worksheet woh individual sheet hoti hai jahan hum actual data enter, calculate aur analyze karte hain.",


    /*----------------------------------------------
    3. EXCEL IN SIMPLE WORDS
    ----------------------------------------------*/

    excelInSimpleWords:
        "Simple words mein, Workbook ko ek notebook samajhiye aur Worksheet ko notebook ke individual pages. Notebook poori Workbook hai, jabki uske andar ke pages Worksheets hain. Ek Workbook mein January Sales, February Sales aur March Sales jaise multiple Worksheets ho sakti hain.",


    /*----------------------------------------------
    4. PRACTICAL EXAMPLE
    ----------------------------------------------*/

    practicalExample: {

        explanation:
            "Maan lijiye ek company apne yearly sales data ko manage karna chahti hai. Company ek Workbook ke andar different months ke liye separate Worksheets bana sakti hai:",

            image: "Image/lessons/lesson7.png",

        headers: [
            "Item",
            "Workbook",
            "Worksheet",
            "Purpose"
        ],

        rows: [

            [
                "Company Sales",
                "Sales_Report.xlsx",
                "January Sales",
                "January data"
            ],

            [
                "Company Sales",
                "Sales_Report.xlsx",
                "February Sales",
                "February data"
            ],

            [
                "Company Sales",
                "Sales_Report.xlsx",
                "March Sales",
                "March data"
            ],

            [
                "Company Sales",
                "Sales_Report.xlsx",
                "Summary",
                "Overall report"
            ]

        ],

        formula:
            "=SUM(B2:B5)",

        result:
            "Workbook ke andar multiple Worksheets ko organize karke complete sales report maintain ki ja sakti hai."

    },


    /*----------------------------------------------
    5. TRY IT YOURSELF
    ----------------------------------------------*/

    tryItYourself: {

        task:
            "Ek Excel Workbook create karke uske andar multiple Worksheets organize kijiye.",

        steps: [

            "Microsoft Excel open karein.",

            "Blank Workbook create karein.",

            "Workbook ko Sales_Report.xlsx naam se save karein.",

            "First Worksheet ka naam January Sales rakhein.",

            "Ek new Worksheet add karein aur uska naam February Sales rakhein.",

            "Ek third Worksheet add karke uska naam March Sales rakhein.",

            "Har Worksheet mein Product aur Sales columns create karein.",

            "Har month ke liye sample sales data enter karein.",

            "Ek fourth Worksheet create karke uska naam Summary rakhein."

        ],

        challenge:
            "Bonus Challenge: Summary Worksheet mein January, February aur March ki total sales ko calculate karke yearly sales total nikaliye."

    },


    /*----------------------------------------------
    6. REAL BUSINESS USE
    ----------------------------------------------*/

    realBusinessUse: {

        introduction:
            "Professional Excel reporting mein Workbook aur Worksheets ka proper organization bahut important hota hai. Ek single Workbook ke andar related data ko different Worksheets mein organize karke report ko easy to manage banaya ja sakta hai.",

        examples: [

            "🏦 Banking: Customer Data, Transactions, Reconciliation aur MIS ke liye separate Worksheets maintain karna.",

            "💰 Finance: Income, Expenses, Budget aur Financial Summary ko ek Workbook mein organize karna.",

            "👥 HR: Employee Master, Attendance, Leave aur Salary data ko separate Worksheets mein maintain karna.",

            "📈 Sales: January, February aur March jaise monthly sales data ko separate Worksheets mein maintain karna.",

            "📊 Data Analysis: Raw Data, Clean Data, Calculations aur Dashboard ko different Worksheets mein organize karna.",

            "🤝 Management Reporting: Multiple departments ki reports ko ek common Workbook mein organize karna."

        ]

    },


    /*----------------------------------------------
    7. QUICK CHECK
    ----------------------------------------------*/

    quickCheck: [

        {
            question:
                "Excel Workbook kya hoti hai?",

            options: [

                "Complete Excel file",

                "Sirf ek cell",

                "Sirf ek row",

                "Sirf ek formula"

            ],

            answer: 0,

            explanation:
                "Correct! Workbook ek complete Excel file hoti hai jisme ek ya multiple Worksheets ho sakti hain."

        },


        {
            question:
                "Worksheet kya hoti hai?",

            options: [

                "Workbook ke andar ek individual sheet",

                "Computer ka folder",

                "Excel ka formula",

                "Excel ka chart"

            ],

            answer: 0,

            explanation:
                "Correct! Worksheet Workbook ke andar ek individual sheet hoti hai jahan data enter aur manage kiya jata hai."

        },


        {
            question:
                "Ek Workbook mein kya ho sakta hai?",

            options: [

                "Sirf ek Worksheet",

                "Multiple Worksheets",

                "Sirf ek Cell",

                "Sirf ek Column"

            ],

            answer: 1,

            explanation:
                "Absolutely! Ek Workbook ke andar multiple Worksheets ho sakti hain, jisse related data ko organize karna easy hota hai."

        }

    ],


    /*----------------------------------------------
    8. KEY TAKEAWAYS
    ----------------------------------------------*/

    keyTakeaways: [

        "Workbook ek complete Excel file hoti hai.",

        "Worksheet Workbook ke andar ek individual sheet hoti hai.",

        "Ek Workbook ke andar multiple Worksheets ho sakti hain.",

        "Different types ke data ko separate Worksheets mein organize kiya ja sakta hai.",

        "Worksheets ko rename, add aur delete kiya ja sakta hai.",

        "Professional reporting mein proper Workbook aur Worksheet organization important hai."

    ]

},

              {
    id: 8,

    title: "Rows and Columns",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Interface",

    learningObjectives: [
        "Excel mein Rows aur Columns kya hote hain samajhna.",
        "Rows aur Columns ko identify karna seekhna.",
        "Row numbers aur Column letters ka difference samajhna.",
        "Rows aur Columns ka practical use samajhna.",
        "Excel worksheet mein data ko properly organize karna seekhna."
    ],

    whatIsExcel:
        "Excel worksheet mein data Rows aur Columns ke form mein organize hota hai. Rows horizontal direction mein hoti hain aur unhe numbers se identify kiya jata hai, jaise 1, 2, 3, 4. Columns vertical direction mein hote hain aur unhe letters se identify kiya jata hai, jaise A, B, C, D.",

    excelInSimpleWords:
        "Simple words mein, Row ko horizontal line aur Column ko vertical line samajhiye. Row numbers worksheet ke left side mein hote hain aur Column letters worksheet ke top par hote hain. Jab Row aur Column intersect karte hain, to ek Cell create hota hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aap Excel mein Employee Data maintain kar rahe hain. Har employee ka record ek Row mein hoga, jabki Employee Name, Department, Salary aur Location jaise fields Columns mein hongi.",

                image: "Image/lessons/lesson8.png",

        headers: [
            "Employee",
            "Department",
            "Salary",
            "Location"
        ],

        rows: [
            [
                "Rahul",
                "Finance",
                "55000",
                "Mumbai"
            ],
            [
                "Priya",
                "HR",
                "60000",
                "Pune"
            ],
            [
                "Amit",
                "Sales",
                "50000",
                "Nashik"
            ],
            [
                "Neha",
                "IT",
                "75000",
                "Bangalore"
            ]
        ],

        formula: "=SUM(C2:C5)",

        result:
            "Total Salary = ₹2,40,000"

    },

    tryItYourself: {

        task:
            "Excel mein Rows aur Columns ka use karke ek simple Employee Data table create kijiye.",

        steps: [
            "Microsoft Excel open karein.",
            "Blank Workbook create karein.",
            "Cell A1 mein Employee Name type karein.",
            "Cell B1 mein Department type karein.",
            "Cell C1 mein Salary type karein.",
            "Cell D1 mein Location type karein.",
            "Neeche 4 employees ka sample data enter karein.",
            "Notice karein ki Columns A, B, C aur D letters se identify ho rahe hain.",
            "Notice karein ki Rows 1, 2, 3 aur 4 numbers se identify ho rahe hain.",
            "Cell C6 mein =SUM(C2:C5) formula enter karke total salary calculate karein."
        ],

        challenge:
            "Bonus Challenge: Column E mein Experience add kijiye aur har employee ka experience years mein enter kijiye."

    },

    realBusinessUse: {

        introduction:
            "Professional Excel work mein Rows aur Columns ka proper understanding bahut important hai. Almost har Excel report, MIS, tracker aur dashboard Rows aur Columns ke structure par based hota hai.",

        examples: [
            "Banking: Customer transactions ko Rows mein aur Account Number, Date aur Amount jaise fields ko Columns mein maintain karna.",
            "Finance: Income, Expenses, Budget aur Actual Amount ko different Columns mein organize karna.",
            "HR: Employee Name, Employee ID, Department, Salary aur Joining Date ko Columns mein maintain karna.",
            "Sales: Har sales transaction ko ek Row aur Product, Customer, Sales Amount aur Target ko Columns mein maintain karna.",
            "Data Analysis: Large datasets ko structured Rows aur Columns mein organize karke analysis karna.",
            "MIS Reporting: Daily, weekly aur monthly records ko Rows mein maintain karke different data fields ko Columns mein organize karna."
        ]

    },

    quickCheck: [

        {
            question:
                "Excel mein Rows ko kaise identify kiya jata hai?",

            options: [
                "Letters se",
                "Numbers se",
                "Symbols se",
                "Colors se"
            ],

            answer: 1,

            explanation:
                "Correct! Excel mein Rows ko numbers se identify kiya jata hai, jaise 1, 2, 3 aur 4."
        },

        {
            question:
                "Excel mein Columns ko kaise identify kiya jata hai?",

            options: [
                "Numbers se",
                "Colors se",
                "Letters se",
                "Symbols se"
            ],

            answer: 2,

            explanation:
                "Correct! Excel mein Columns ko letters se identify kiya jata hai, jaise A, B, C aur D."
        },

        {
            question:
                "Row aur Column ke intersection ko kya kaha jata hai?",

            options: [
                "Workbook",
                "Worksheet",
                "Cell",
                "Ribbon"
            ],

            answer: 2,

            explanation:
                "Absolutely! Row aur Column ke intersection ko Cell kaha jata hai, jaise A1 ya B5."
        }

    ],

    keyTakeaways: [
        "Excel mein Rows horizontal direction mein hoti hain.",
        "Excel mein Columns vertical direction mein hote hain.",
        "Rows ko numbers se identify kiya jata hai.",
        "Columns ko letters se identify kiya jata hai.",
        "Row aur Column ke intersection ko Cell kaha jata hai.",
        "Rows aur Columns ka proper use Excel data ko organized aur easy to analyze banata hai."
    ]

},

{
    id: 9,

    title: "Cells and Cell Address",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Interface",

    learningObjectives: [
        "Excel mein Cell kya hota hai samajhna.",
        "Cell Address kya hota hai samajhna.",
        "Column Letter aur Row Number se Cell Address identify karna seekhna.",
        "Active Cell ko identify karna seekhna.",
        "Cell Address ka practical use samajhna."
    ],

    whatIsExcel:
        "Excel worksheet mein Row aur Column ke intersection ko Cell kaha jata hai. Har Cell ka ek unique address hota hai. Cell Address Column Letter aur Row Number ko combine karke banta hai, jaise A1, B5 ya D10.",

    excelInSimpleWords:
        "Simple words mein, Excel ki worksheet ko ek grid samajhiye. Is grid ka har small box ek Cell hai. Har Cell ko identify karne ke liye uska address hota hai. Agar Column B aur Row 5 intersect karte hain, to us Cell ka address B5 hoga.",

    practicalExample: {

        explanation:
            "Neeche kuch Cells aur unke Cell Addresses ka simple example diya gaya hai:",

            image: "Image/lessons/lesson9.png",

        headers: [
            "Cell Address",
            "Column",
            "Row",
            "Example Data"
        ],

        rows: [
            [
                "A1",
                "A",
                "1",
                "Employee"
            ],
            [
                "B2",
                "B",
                "2",
                "Rahul"
            ],
            [
                "C3",
                "C",
                "3",
                "55000"
            ],
            [
                "D4",
                "D",
                "4",
                "Mumbai"
            ]
        ],

        formula: "=B2+C3",

        result:
            "Excel formula B2 aur C3 ke values ko add karega. Cell Address ka use formulas mein specific cells ko reference karne ke liye hota hai."

    },

    tryItYourself: {

        task:
            "Excel mein different Cells aur unke Cell Addresses ko identify kijiye.",

        steps: [
            "Microsoft Excel open karein.",
            "Blank Workbook create karein.",
            "Cell A1 mein Employee Name type karein.",
            "Cell B1 mein Department type karein.",
            "Cell C1 mein Salary type karein.",
            "Cell A2 mein Rahul type karein.",
            "Cell B2 mein Finance type karein.",
            "Cell C2 mein 55000 type karein.",
            "Cell A3 mein Priya type karein.",
            "Cell B3 mein HR type karein.",
            "Cell C3 mein 60000 type karein.",
            "Different cells par click karke Formula Bar ke left side mein Cell Address observe karein."
        ],

        challenge:
            "Bonus Challenge: Cell C4 mein =SUM(C2:C3) formula enter kijiye aur check kijiye ki Excel kaise Cell Addresses ko formula mein use karta hai."

    },

    realBusinessUse: {

        introduction:
            "Cell Addresses Excel formulas, calculations aur data analysis ka foundation hain. Professional Excel users regularly cell references ka use formulas aur reports banane ke liye karte hain.",

        examples: [
            "Banking: Transaction Amount, Account Number aur Date jaise data ko specific Cells se reference karna.",
            "Finance: Different Cells ko reference karke totals, percentages aur financial calculations banana.",
            "HR: Employee Salary, Joining Date aur Department jaise information ko Cell References se use karna.",
            "Sales: Sales aur Target Cells ko reference karke Achievement Percentage calculate karna.",
            "Data Analysis: Different Cells aur ranges ko formulas mein reference karke calculations perform karna.",
            "MIS Reporting: Source data ke Cell References ko use karke automated reports prepare karna."
        ]

    },

    quickCheck: [

        {
            question:
                "Excel mein Cell kya hota hai?",

            options: [
                "Row aur Column ka intersection",
                "Sirf ek Row",
                "Sirf ek Column",
                "Complete Workbook"
            ],

            answer: 0,

            explanation:
                "Correct! Row aur Column ke intersection ko Cell kaha jata hai."
        },

        {
            question:
                "B5 mein B kya represent karta hai?",

            options: [
                "Row Number",
                "Column Letter",
                "Workbook Number",
                "Sheet Number"
            ],

            answer: 1,

            explanation:
                "Correct! B5 mein B Column Letter ko represent karta hai."
        },

        {
            question:
                "B5 mein 5 kya represent karta hai?",

            options: [
                "Column Number",
                "Sheet Number",
                "Row Number",
                "Workbook Number"
            ],

            answer: 2,

            explanation:
                "Absolutely! B5 mein 5 Row Number ko represent karta hai."
        }

    ],

    keyTakeaways: [
        "Excel worksheet ka har box ek Cell hota hai.",
        "Har Cell ka ek unique Cell Address hota hai.",
        "Cell Address Column Letter aur Row Number se banta hai.",
        "A1, B5 aur D10 Cell Address ke examples hain.",
        "Cell Addresses formulas mein specific Cells ko reference karne ke liye use hote hain.",
        "Cell References Excel calculations aur data analysis ka important foundation hain."
    ]

},

         {
    id: 10,
    title: "Ribbon",
    completed: false,
    duration: "15 Minutes",
    difficulty: "Beginner",
    category: "Excel Interface",

    learningObjectives: [
        "Excel Ribbon kya hai samajhna.",
        "Ribbon ke different Tabs ko identify karna.",
        "Home, Insert, Page Layout, Formulas aur Data Tabs ka basic use samajhna.",
        "Ribbon se common Excel commands access karna seekhna.",
        "Excel mein Ribbon ko efficiently use karna seekhna."
    ],

    whatIsExcel:
        "Excel Ribbon Excel window ke top area mein available command interface hai. Ismein different Tabs hote hain, jaise Home, Insert, Page Layout, Formulas, Data, Review aur View. Har Tab ke andar related commands aur tools available hote hain.",

    excelInSimpleWords:
        "Simple words mein, Ribbon ko Excel ka toolbox samajhiye. Jaise toolbox mein different tools hote hain, waise hi Excel Ribbon mein formatting, formulas, charts, data analysis aur other tasks ke tools available hote hain.",

    practicalExample: {
        explanation:
            "Neeche Excel Ribbon ke kuch important Tabs aur unke common uses ka simple example diya gaya hai:",

            image: "Image/lessons/lesson10.png",

        headers: [
            "Ribbon Tab",
            "Common Use",
            "Example"
        ],

        rows: [
            [
                "Home",
                "Formatting",
                "Bold, Font, Alignment"
            ],
            [
                "Insert",
                "Objects add karna",
                "Charts, Tables, Pictures"
            ],
            [
                "Page Layout",
                "Page settings",
                "Margins, Orientation"
            ],
            [
                "Formulas",
                "Functions",
                "SUM, IF, XLOOKUP"
            ],
            [
                "Data",
                "Data analysis",
                "Sort, Filter, Remove Duplicates"
            ],
            [
                "Review",
                "Review tools",
                "Comments, Protection"
            ],
            [
                "View",
                "Worksheet view",
                "Zoom, Freeze Panes"
            ]
        ],

        formula: "=SUM(B2:B5)",

        result:
            "Ribbon ke Formulas Tab se functions aur formulas related tools easily access kiye ja sakte hain."
    },

    tryItYourself: {
        task:
            "Excel Ribbon ke different Tabs ko open karke unke available commands ko explore kijiye.",

        steps: [
            "Microsoft Excel open karein.",
            "Blank Workbook create karein.",
            "Home Tab open karein aur Font aur Alignment options dekhein.",
            "Insert Tab open karein aur Table aur Chart options dekhein.",
            "Page Layout Tab open karein aur Margins aur Orientation options dekhein.",
            "Formulas Tab open karein aur Function Library dekhein.",
            "Data Tab open karein aur Sort aur Filter options dekhein.",
            "Review Tab open karein aur Comments aur Protection options dekhein.",
            "View Tab open karein aur Freeze Panes aur Zoom options dekhein."
        ],

        challenge:
            "Bonus Challenge: Kisi Excel table par Filter apply karke dekhiye aur phir Home Tab se us data ko format kijiye."
    },

    realBusinessUse: {
        introduction:
            "Excel Ribbon professional Excel users ke daily workflow ka important part hai. Different tasks ke liye correct Ribbon Tab identify karna kaam ko faster aur easier banata hai.",

        examples: [
            "Banking: Data ko Sort, Filter aur Format karke operational reports prepare karna.",
            "Finance: Formulas Tab se financial calculations aur functions use karna.",
            "HR: Home Tab se employee reports ko format karna aur Data Tab se records filter karna.",
            "Sales: Insert Tab se sales charts aur tables create karna.",
            "Data Analysis: Data Tab se Sort, Filter aur data cleaning tools use karna.",
            "MIS Reporting: Page Layout aur View Tabs se reports ko properly prepare aur present karna."
        ]
    },

    quickCheck: [
        {
            question:
                "Excel Ribbon kya hai?",

            options: [
                "Excel ka command interface",
                "Excel ka ek Cell",
                "Excel ka ek Row",
                "Excel ka ek Worksheet"
            ],

            answer: 0,

            explanation:
                "Correct! Ribbon Excel ka command interface hai jisme different Tabs aur commands available hote hain."
        },
        {
            question:
                "Charts insert karne ke liye commonly kaunsa Tab use hota hai?",

            options: [
                "Home",
                "Insert",
                "Review",
                "View"
            ],

            answer: 1,

            explanation:
                "Correct! Charts, Tables aur Pictures jaise objects insert karne ke liye Insert Tab commonly use hota hai."
        },
        {
            question:
                "Sort aur Filter options commonly kis Tab mein milte hain?",

            options: [
                "Data",
                "Review",
                "View",
                "Page Layout"
            ],

            answer: 0,

            explanation:
                "Absolutely! Sort aur Filter jaise data management tools Data Tab mein available hote hain."
        }
    ],

    keyTakeaways: [
        "Ribbon Excel window ke top area mein available command interface hai.",
        "Ribbon mein different Tabs hote hain.",
        "Home Tab formatting ke liye commonly use hota hai.",
        "Insert Tab Charts, Tables aur Pictures add karne ke liye use hota hai.",
        "Formulas Tab functions aur formulas ke liye useful hai.",
        "Data Tab Sort, Filter aur data analysis tools provide karta hai.",
        "Correct Ribbon Tab identify karna Excel mein kaam ko faster banata hai."
    ]

},


/*==================================================
SECTION 2 CLOSE
==================================================*/

                ]

            },


/*==================================================
SECTION 3
==================================================*/

            {
                id: 3,

                title: "Excel Ribbon & Tools",

                lessons: [

       /*==================================================
LESSON 11
==================================================*/

{
    id: 11,

    title: "Ribbon Tabs & Groups",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Ribbon & Tools",


    /*----------------------------------------------
    1. LEARNING OBJECTIVES
    ----------------------------------------------*/

    learningObjectives: [

        "Excel Ribbon ke Tabs aur Groups ko samajhna.",

        "Different Ribbon Tabs ka basic purpose samajhna.",

        "Ribbon Groups ke andar available commands ko identify karna.",

        "Home, Insert, Formulas aur Data Tabs ke important Groups samajhna.",

        "Correct Tab aur Group se Excel command quickly find karna seekhna."

    ],


    /*----------------------------------------------
    2. WHAT ARE RIBBON TABS & GROUPS?
    ----------------------------------------------*/

    whatIsExcel:
        "Excel Ribbon mein different Tabs aur Groups hote hain. Tabs Excel ke major work areas ko represent karte hain, jaise Home, Insert, Formulas, Data, Review aur View. Har Tab ke andar related commands ko Groups mein organize kiya jata hai.",


    /*----------------------------------------------
    3. EXCEL IN SIMPLE WORDS
    ----------------------------------------------*/

    excelInSimpleWords:
        "Simple words mein, Ribbon ko ek toolbox samajhiye. Ribbon Tab toolbox ka ek section hai aur Group us section ke andar related tools ka collection hai. Jaise Home Tab mein Clipboard, Font, Alignment, Number aur Styles jaise Groups hote hain.",


    /*----------------------------------------------
    4. PRACTICAL EXAMPLE
    ----------------------------------------------*/

    practicalExample: {

        explanation:
            "Neeche kuch important Excel Ribbon Tabs aur unke common Groups ka simple example diya gaya hai:",

            image: "Image/lessons/lesson11.png",

        headers: [
            "Ribbon Tab",
            "Group",
            "Common Commands",
            "Purpose"
        ],

        rows: [

            [
                "Home",
                "Font",
                "Bold, Italic, Font Size",
                "Text formatting"
            ],

            [
                "Home",
                "Alignment",
                "Left, Center, Right",
                "Data alignment"
            ],

            [
                "Home",
                "Number",
                "Currency, Percentage",
                "Number formatting"
            ],

            [
                "Insert",
                "Tables",
                "Table, PivotTable",
                "Data structure"
            ],

            [
                "Insert",
                "Charts",
                "Column, Line, Pie",
                "Visual analysis"
            ],

            [
                "Formulas",
                "Function Library",
                "SUM, IF, XLOOKUP",
                "Functions use karna"
            ],

            [
                "Data",
                "Sort & Filter",
                "Sort, Filter",
                "Data management"
            ]

        ],

        formula:
            "=SUM(B2:B5)",

        result:
            "Ribbon ke different Tabs aur Groups ko samajhne se Excel commands ko quickly locate karna easy ho jata hai."

    },


    /*----------------------------------------------
    5. TRY IT YOURSELF
    ----------------------------------------------*/

    tryItYourself: {

        task:
            "Excel Ribbon ke Tabs aur Groups ko practically explore kijiye.",

        steps: [

            "Microsoft Excel open karein.",

            "Blank Workbook create karein.",

            "Home Tab open karein.",

            "Font Group mein Bold aur Font Size options identify karein.",

            "Alignment Group mein Left, Center aur Right Alignment options identify karein.",

            "Number Group mein Currency aur Percentage options dekhein.",

            "Insert Tab open karein.",

            "Tables Group aur Charts Group identify karein.",

            "Formulas Tab open karke Function Library identify karein.",

            "Data Tab open karke Sort & Filter Group identify karein."

        ],

        challenge:
            "Bonus Challenge: Kisi sample data table par Home Tab se formatting, Insert Tab se Chart aur Data Tab se Filter apply karke dekhiye."

    },


    /*----------------------------------------------
    6. REAL BUSINESS USE
    ----------------------------------------------*/

    realBusinessUse: {

        introduction:
            "Ribbon Tabs aur Groups ka proper knowledge professional Excel work mein productivity improve karta hai. Agar aapko pata hai ki required command kis Tab aur Group mein available hai, to aap Excel mein faster kaam kar sakte hain.",

        examples: [

            "🏦 Banking: Home Tab se MIS reports format karna aur Data Tab se transactions filter karna.",

            "💰 Finance: Formulas Tab se financial functions use karna aur Number Group se currency formatting karna.",

            "👥 HR: Employee reports ko Home Tab ke Font aur Alignment Groups se format karna.",

            "📈 Sales: Insert Tab ke Charts Group se sales performance charts create karna.",

            "📊 Data Analysis: Data Tab ke Sort & Filter tools se large datasets analyze karna.",

            "🤝 Management Reporting: Different Ribbon tools ka use karke professional reports aur dashboards prepare karna."

        ]

    },


    /*----------------------------------------------
    7. QUICK CHECK
    ----------------------------------------------*/

    quickCheck: [

        {

            question:
                "Excel Ribbon mein commands ko organize karne ke liye kya use hota hai?",

            options: [

                "Tabs aur Groups",

                "Only Cells",

                "Only Rows",

                "Only Worksheets"

            ],

            answer: 0,

            explanation:
                "Correct! Excel Ribbon mein commands ko different Tabs aur Groups mein organize kiya jata hai."



        },


        {

            question:
                "Bold aur Font Size jaise commands commonly kis Group mein milte hain?",

            options: [

                "Font",

                "Charts",

                "Sort & Filter",

                "Function Library"

            ],

            answer: 0,

            explanation:
                "Correct! Bold, Italic, Font Size aur Font Color jaise commands Home Tab ke Font Group mein milte hain."



        },


        {

            question:
                "Sort aur Filter commands commonly kis Tab mein available hote hain?",

            options: [

                "Home",

                "Insert",

                "Data",

                "Review"

            ],

            answer: 2,

            explanation:
                "Absolutely! Sort aur Filter jaise data management commands Data Tab mein commonly available hote hain."

        }

    ],


    /*----------------------------------------------
    8. KEY TAKEAWAYS
    ----------------------------------------------*/

    keyTakeaways: [

        "Excel Ribbon mein different Tabs aur Groups hote hain.",

        "Tabs Excel ke different work areas ko represent karte hain.",

        "Groups related commands ko ek place par organize karte hain.",

        "Home Tab mein Font, Alignment aur Number jaise important Groups hote hain.",

        "Insert Tab mein Tables aur Charts jaise Groups available hote hain.",

        "Formulas Tab functions aur formulas ke liye useful hai.",

        "Data Tab Sort aur Filter jaise data management tools provide karta hai.",

        "Tabs aur Groups ka knowledge Excel mein kaam ko faster aur easier banata hai."

    ]

},

/*==================================================
LESSON 12
==================================================*/

{
    id: 12,

    title: "Home Tab & Formatting Tools",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Ribbon & Tools",


    /*----------------------------------------------
    1. LEARNING OBJECTIVES
    ----------------------------------------------*/

    learningObjectives: [

        "Excel Home Tab ka basic purpose samajhna.",

        "Home Tab ke important Groups ko identify karna.",

        "Font Group se text formatting karna seekhna.",

        "Alignment Group se data alignment samajhna.",

        "Number Group se numbers ko proper format karna seekhna.",

        "Styles aur basic formatting tools ka practical use samajhna."

    ],


    /*----------------------------------------------
    2. WHAT IS HOME TAB?
    ----------------------------------------------*/

    whatIsExcel:
        "Excel ka Home Tab sabse commonly used Ribbon Tab hai. Ismein Clipboard, Font, Alignment, Number, Styles, Cells aur Editing jaise important Groups available hote hain. Daily Excel work mein formatting aur basic editing ke liye Home Tab ka bahut use hota hai.",


    /*----------------------------------------------
    3. EXCEL IN SIMPLE WORDS
    ----------------------------------------------*/

    excelInSimpleWords:
        "Simple words mein, Home Tab ko Excel ka daily-use toolbox samajhiye. Agar aapko text ko Bold karna hai, color change karna hai, data ko Center align karna hai, Currency format lagana hai ya cells ko professionally format karna hai, to Home Tab mein ye tools easily mil jate hain.",


    /*----------------------------------------------
    4. PRACTICAL EXAMPLE
    ----------------------------------------------*/

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Employee Salary Report prepare kar rahe hain. Home Tab ke different Groups ka use karke report ko readable aur professional banaya ja sakta hai:",

            image: "Image/lessons/lesson12.png",

        headers: [
            "Group",
            "Common Tool",
            "Example",
            "Purpose"
        ],

        rows: [

            [
                "Clipboard",
                "Paste",
                "Paste Data",
                "Data paste karna"
            ],

            [
                "Font",
                "Bold",
                "Employee Name",
                "Text highlight karna"
            ],

            [
                "Alignment",
                "Center",
                "Department",
                "Data align karna"
            ],

            [
                "Number",
                "Currency",
                "₹55,000",
                "Salary format karna"
            ],

            [
                "Styles",
                "Cell Styles",
                "Good / Bad",
                "Professional formatting"
            ],

            [
                "Cells",
                "Insert / Delete",
                "New Row",
                "Cells manage karna"
            ],

            [
                "Editing",
                "AutoSum",
                "Total Salary",
                "Quick calculation"
            ]

        ],

        formula:
            "=SUM(C2:C5)",

        result:
            "Home Tab ke tools ka use karke employee salary report ko format aur calculate kiya ja sakta hai."

    },


    /*----------------------------------------------
    5. TRY IT YOURSELF
    ----------------------------------------------*/

    tryItYourself: {

        task:
            "Excel Home Tab ke different formatting tools ka use karke ek professional Employee Salary table create kijiye.",

        steps: [

            "Microsoft Excel open karein.",

            "Blank Workbook create karein.",

            "A1 mein Employee Name type karein.",

            "B1 mein Department type karein.",

            "C1 mein Salary type karein.",

            "A2:C5 mein 4 employees ka sample data enter karein.",

            "Header row ko Bold karein.",

            "Header text ko Center align karein.",

            "Salary column ko Currency format mein convert karein.",

            "Header cells par suitable Fill Color apply karein.",

            "Salary ke neeche =SUM(C2:C5) formula se Total Salary calculate karein."

        ],

        challenge:
            "Bonus Challenge: Table ke header par Border aur ek suitable Cell Style apply karke report ko professional look dijiye."

    },


    /*----------------------------------------------
    6. REAL BUSINESS USE
    ----------------------------------------------*/

    realBusinessUse: {

        introduction:
            "Home Tab professional Excel reporting mein daily basis par use hota hai. Formatting aur editing tools ki help se raw data ko readable aur professional report mein convert kiya ja sakta hai.",

        examples: [

            "🏦 Banking: MIS reports ko Bold, Alignment, Number Format aur Borders se professional banana.",

            "💰 Finance: Financial values ko Currency, Accounting aur Percentage formats mein maintain karna.",

            "👥 HR: Employee reports mein names, departments aur salary data ko properly format karna.",

            "📈 Sales: Sales reports ko formatting aur number formats ke through easy to read banana.",

            "📊 Data Analysis: Large datasets mein alignment, number formatting aur styles ka use karna.",

            "🤝 Management Reporting: Management reports ko professional formatting ke saath present karna."

        ]

    },


    /*----------------------------------------------
    7. QUICK CHECK
    ----------------------------------------------*/

    quickCheck: [

        {

            question:
                "Excel Home Tab ka main use kya hai?",

            options: [

                "Formatting aur common editing tasks",

                "Sirf charts banana",

                "Sirf printing",

                "Sirf formulas delete karna"

            ],

            answer: 0,

            explanation:
                "Correct! Home Tab mein formatting, editing aur commonly used Excel commands available hote hain."

        },


        {

            question:
                "Bold aur Font Color jaise commands commonly kis Group mein milte hain?",

            options: [

                "Font",

                "Number",

                "Editing",

                "Cells"

            ],

            answer: 0,

            explanation:
                "Correct! Bold, Italic, Font Color aur Font Size jaise commands Home Tab ke Font Group mein milte hain."

        },


        {

            question:
                "Salary ko ₹55,000 jaise format mein dikhane ke liye commonly kya use kiya jata hai?",

            options: [

                "Number Formatting",

                "Alignment",

                "Clipboard",

                "Editing"

            ],

            answer: 0,

            explanation:
                "Absolutely! Number Group ke Currency ya Accounting formats ka use salary aur financial values ko properly display karne ke liye kiya ja sakta hai."

        }

    ],


    /*----------------------------------------------
    8. KEY TAKEAWAYS
    ----------------------------------------------*/

    keyTakeaways: [

        "Home Tab Excel ka one of the most commonly used Ribbon Tabs hai.",

        "Home Tab mein Clipboard, Font, Alignment, Number, Styles, Cells aur Editing jaise Groups hote hain.",

        "Font Group text formatting ke liye useful hai.",

        "Alignment Group data ko Left, Center ya Right align karne ke liye use hota hai.",

        "Number Group Currency, Percentage aur other number formats provide karta hai.",

        "Styles Group data ko professional look dene mein help karta hai.",

        "Home Tab ke tools daily Excel work ko faster aur easier banate hain."

    ]

},

/*==================================================
LESSON 13
==================================================*/

{
    id: 13,

    title: "Clipboard & Editing Tools",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Ribbon & Tools",


    /*----------------------------------------------
    1. LEARNING OBJECTIVES
    ----------------------------------------------*/

    learningObjectives: [

        "Excel Home Tab ke Clipboard aur Editing Groups ko samajhna.",

        "Cut, Copy aur Paste commands ka use seekhna.",

        "Format Painter ka practical use samajhna.",

        "Undo aur Redo commands ka use seekhna.",

        "Find, Replace aur AutoSum jaise Editing tools ko samajhna."

    ],


    /*----------------------------------------------
    2. WHAT ARE CLIPBOARD & EDITING TOOLS?
    ----------------------------------------------*/

    whatIsExcel:
        "Excel ke Clipboard aur Editing tools ka use data ko copy, move, format aur manage karne ke liye kiya jata hai. Home Tab ke Clipboard Group mein Cut, Copy, Paste aur Format Painter jaise tools milte hain, jabki Editing Group mein Find & Select, Replace, AutoSum aur Fill jaise useful commands available hote hain.",


    /*----------------------------------------------
    3. EXCEL IN SIMPLE WORDS
    ----------------------------------------------*/

    excelInSimpleWords:
        "Simple words mein, Clipboard tools data ko ek place se doosre place par copy ya move karne mein help karte hain. Editing tools existing data ko quickly search, replace, fill aur calculate karne mein help karte hain.",


    /*----------------------------------------------
    4. PRACTICAL EXAMPLE
    ----------------------------------------------*/

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Employee Report bana rahe hain aur kuch data ko copy, move aur format karna hai. Clipboard aur Editing tools se ye tasks quickly complete kiye ja sakte hain:",

            image: "Image/lessons/lesson13.png",

        headers: [
            "Tool",
            "Example",
            "Purpose",
            "Use"
        ],

        rows: [

            [
                "Cut",
                "Ctrl + X",
                "Data move karna",
                "Data ko new location par move karna"
            ],

            [
                "Copy",
                "Ctrl + C",
                "Data duplicate karna",
                "Same data reuse karna"
            ],

            [
                "Paste",
                "Ctrl + V",
                "Copied data insert karna",
                "Data paste karna"
            ],

            [
                "Format Painter",
                "Paint Brush",
                "Formatting copy karna",
                "Same formatting apply karna"
            ],

            [
                "Undo",
                "Ctrl + Z",
                "Last action reverse karna",
                "Mistake correct karna"
            ],

            [
                "Redo",
                "Ctrl + Y",
                "Action repeat karna",
                "Undo ki hui action restore karna"
            ],

            [
                "Find & Replace",
                "Find / Replace",
                "Data search/change karna",
                "Large data update karna"
            ]

        ],

        formula:
            "=SUM(C2:C5)",

        result:
            "Clipboard aur Editing tools se data ko efficiently manage aur calculate kiya ja sakta hai."

    },


    /*----------------------------------------------
    5. TRY IT YOURSELF
    ----------------------------------------------*/

    tryItYourself: {

        task:
            "Excel mein Clipboard aur Editing tools ka practical use kijiye.",

        steps: [

            "Microsoft Excel open karein.",

            "Blank Workbook create karein.",

            "A1 mein Employee aur B1 mein Department type karein.",

            "A2:A5 mein 4 employee names enter karein.",

            "B2:B5 mein departments enter karein.",

            "Ek employee name ko Copy karke kisi empty cell mein Paste karein.",

            "Kisi employee record ko Cut karke doosri location par Paste karein.",

            "Header ki formatting ko Format Painter se doosre cells par apply karein.",

            "Ek action perform karke Undo command use karein.",

            "Phir Redo command use karke action restore karein."

        ],

        challenge:
            "Bonus Challenge: Find & Replace ka use karke kisi department name ko ek saath multiple records mein replace kijiye."

    },


    /*----------------------------------------------
    6. REAL BUSINESS USE
    ----------------------------------------------*/

    realBusinessUse: {

        introduction:
            "Clipboard aur Editing tools daily professional Excel work mein time save karte hain. Large reports mein data ko quickly copy, move, format aur update karna easy ho jata hai.",

        examples: [

            "🏦 Banking: Transaction reports mein records ko copy, move aur update karna.",

            "💰 Finance: Financial templates ki formatting ko Format Painter se quickly apply karna.",

            "👥 HR: Employee data mein department ya designation ko Find & Replace se update karna.",

            "📈 Sales: Sales records ko copy karke different reporting sheets mein reuse karna.",

            "📊 Data Analysis: Large datasets mein Find & Replace aur Fill tools ka use karna.",

            "🤝 MIS Reporting: Repetitive formatting aur data movement ko faster banana."

        ]

    },


    /*----------------------------------------------
    7. QUICK CHECK
    ----------------------------------------------*/

    quickCheck: [

        {

            question:
                "Excel mein data ko ek location se doosri location par move karne ke liye commonly kya use hota hai?",

            options: [

                "Cut aur Paste",

                "Only Copy",

                "Only Undo",

                "Only Find"

            ],

            answer: 0,

            explanation:
                "Correct! Cut aur Paste ka use data ko ek location se doosri location par move karne ke liye kiya jata hai."

        },


        {

            question:
                "Format Painter ka main purpose kya hai?",

            options: [

                "Formatting copy karna",

                "Formula delete karna",

                "Worksheet close karna",

                "Data sort karna"

            ],

            answer: 0,

            explanation:
                "Correct! Format Painter existing formatting ko copy karke doosre cells par apply karta hai."

        },


        {

            question:
                "Undo command ka use kis liye hota hai?",

            options: [

                "Last action reverse karna",

                "New Workbook create karna",

                "Chart insert karna",

                "Data filter karna"

            ],

            answer: 0,

            explanation:
                "Absolutely! Undo ka use previous action ko reverse karne ke liye hota hai."

        }

    ],


    /*----------------------------------------------
    8. KEY TAKEAWAYS
    ----------------------------------------------*/

    keyTakeaways: [

        "Clipboard Group mein Cut, Copy, Paste aur Format Painter jaise tools hote hain.",

        "Cut aur Paste ka use data move karne ke liye hota hai.",

        "Copy aur Paste ka use data duplicate karne ke liye hota hai.",

        "Format Painter formatting ko quickly copy karta hai.",

        "Undo previous action ko reverse karta hai.",

        "Redo undone action ko restore karta hai.",

        "Find & Replace large datasets mein data update karne ke liye useful hai."

    ]

},


/*==================================================
LESSON 14
==================================================*/

{
    id: 14,

    title: "Insert Tab & Tools",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Ribbon & Tools",


    /*----------------------------------------------
    1. LEARNING OBJECTIVES
    ----------------------------------------------*/

    learningObjectives: [

        "Excel Insert Tab ka basic purpose samajhna.",

        "Tables aur PivotTables ko identify karna.",

        "Charts aur visual elements insert karna seekhna.",

        "Pictures, Shapes aur Icons ka basic use samajhna.",

        "Insert Tab ko professional reports mein use karna seekhna."

    ],


    /*----------------------------------------------
    2. WHAT IS INSERT TAB?
    ----------------------------------------------*/

    whatIsExcel:
        "Excel Insert Tab ka use worksheet mein different objects aur analytical tools add karne ke liye kiya jata hai. Ismein Tables, PivotTables, Charts, Pictures, Shapes, Icons, Text aur other useful options available hote hain.",


    /*----------------------------------------------
    3. EXCEL IN SIMPLE WORDS
    ----------------------------------------------*/

    excelInSimpleWords:
        "Simple words mein, Insert Tab ko Excel ka Add Tools section samajhiye. Agar aapko data ko Table mein convert karna hai, Chart banana hai, Picture ya Shape add karna hai, to Insert Tab se ye kaam easily kiye ja sakte hain.",


    /*----------------------------------------------
    4. PRACTICAL EXAMPLE
    ----------------------------------------------*/

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Sales Report bana rahe hain. Insert Tab ki help se raw sales data ko table aur charts ke through visually present kiya ja sakta hai:",

            image: "Image/lessons/lesson14.png",

        headers: [
            "Tool",
            "Example",
            "Purpose",
            "Use"
        ],

        rows: [

            [
                "Table",
                "Sales Table",
                "Data organize karna",
                "Structured data"
            ],

            [
                "PivotTable",
                "Sales Summary",
                "Data summarize karna",
                "Analysis"
            ],

            [
                "Column Chart",
                "Monthly Sales",
                "Comparison",
                "Visual analysis"
            ],

            [
                "Line Chart",
                "Sales Trend",
                "Trend show karna",
                "Trend analysis"
            ],

            [
                "Pie Chart",
                "Category Share",
                "Percentage share",
                "Distribution"
            ],

            [
                "Pictures",
                "Company Logo",
                "Image add karna",
                "Report presentation"
            ],

            [
                "Shapes",
                "Arrow / Box",
                "Visual explanation",
                "Dashboard design"
            ]

        ],

        formula:
            "=SUM(C2:C5)",

        result:
            "Insert Tab ke tools ka use karke Excel data ko structured aur visually understandable report mein convert kiya ja sakta hai."

    },


    /*----------------------------------------------
    5. TRY IT YOURSELF
    ----------------------------------------------*/

    tryItYourself: {

        task:
            "Excel Insert Tab ka use karke ek simple Sales Report create kijiye.",

        steps: [

            "Microsoft Excel open karein.",

            "Blank Workbook create karein.",

            "Employee, Month aur Sales columns create karein.",

            "4 employees ka sample sales data enter karein.",

            "Data select karke Insert Tab se Table create karein.",

            "Insert Tab se Column Chart create karein.",

            "Chart mein Sales comparison observe karein.",

            "Insert Tab se ek Shape add karein.",

            "Shape mein Total Sales jaise text type karein."

        ],

        challenge:
            "Bonus Challenge: Sales data ka ek PivotTable create karke employee-wise total sales summarize kijiye."

    },


    /*----------------------------------------------
    6. REAL BUSINESS USE
    ----------------------------------------------*/

    realBusinessUse: {

        introduction:
            "Insert Tab professional reports aur dashboards create karne ke liye bahut useful hai. Tables, PivotTables aur Charts data ko understand aur present karna easier banate hain.",

        examples: [

            "🏦 Banking: Transaction data ko Tables aur Charts ke through summarize karna.",

            "💰 Finance: Financial reports mein Charts aur PivotTables se analysis present karna.",

            "👥 HR: Employee data ka summary aur department-wise charts create karna.",

            "📈 Sales: Monthly sales aur target performance ko Charts ke through visualize karna.",

            "📊 Data Analysis: PivotTables aur Charts ka use karke large datasets analyze karna.",

            "🤝 Management Reporting: Professional dashboards mein Charts, Shapes aur Tables use karna."

        ]

    },


    /*----------------------------------------------
    7. QUICK CHECK
    ----------------------------------------------*/

    quickCheck: [

        {

            question:
                "Excel mein Chart insert karne ke liye commonly kaunsa Tab use hota hai?",

            options: [

                "Insert",

                "Review",

                "View",

                "Data"

            ],

            answer: 0,

            explanation:
                "Correct! Charts insert karne ke liye Insert Tab commonly use hota hai."

        },


        {

            question:
                "PivotTable ka main purpose kya hai?",

            options: [

                "Data summarize aur analyze karna",

                "Computer shutdown karna",

                "Font color change karna",

                "Worksheet rename karna"

            ],

            answer: 0,

            explanation:
                "Correct! PivotTable large data ko summarize aur analyze karne ke liye powerful tool hai."

        },


        {

            question:
                "Excel mein data ko structured format mein convert karne ke liye kya use kiya ja sakta hai?",

            options: [

                "Table",

                "Picture",

                "Shape",

                "WordArt"

            ],

            answer: 0,

            explanation:
                "Absolutely! Excel Table data ko structured format mein organize karne mein help karti hai."

        }

    ],


    /*----------------------------------------------
    8. KEY TAKEAWAYS
    ----------------------------------------------*/

    keyTakeaways: [

        "Insert Tab ka use worksheet mein different tools aur objects add karne ke liye hota hai.",

        "Tables data ko structured format mein organize karti hain.",

        "PivotTables data ko summarize aur analyze karne ke liye useful hain.",

        "Charts data ko visual format mein present karte hain.",

        "Pictures aur Shapes reports ko visually attractive banane mein help karte hain.",

        "Insert Tab professional reports aur dashboards ke liye important hai."

    ]

},


/*==================================================
LESSON 15
==================================================*/

{
    id: 15,

    title: "Page Layout & View Basics",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Ribbon & Tools",


    /*----------------------------------------------
    1. LEARNING OBJECTIVES
    ----------------------------------------------*/

    learningObjectives: [

        "Excel Page Layout Tab ka basic purpose samajhna.",

        "Margins, Orientation aur Page Size ka use samajhna.",

        "Print Area aur Page Breaks ka basic concept samajhna.",

        "View Tab ke Zoom aur Freeze Panes tools ko samajhna.",

        "Excel worksheet ko printing aur viewing ke liye properly prepare karna."

    ],


    /*----------------------------------------------
    2. WHAT IS PAGE LAYOUT & VIEW?
    ----------------------------------------------*/

    whatIsExcel:
        "Excel ka Page Layout Tab worksheet ko printing aur page presentation ke liye prepare karne ke tools provide karta hai. View Tab worksheet ko different ways mein dekhne aur navigate karne ke tools provide karta hai, jaise Zoom, Gridlines, Formula Bar aur Freeze Panes.",


    /*----------------------------------------------
    3. EXCEL IN SIMPLE WORDS
    ----------------------------------------------*/

    excelInSimpleWords:
        "Simple words mein, Page Layout ka use ye decide karne ke liye hota hai ki Excel report print hone par page par kaise dikhegi. View Tab ka use worksheet ko screen par comfortably dekhne aur large data mein navigation easy banane ke liye hota hai.",


    /*----------------------------------------------
    4. PRACTICAL EXAMPLE
    ----------------------------------------------*/

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Monthly MIS Report print karna chahte hain. Page Layout aur View tools ki help se report ko proper page format mein prepare kiya ja sakta hai:",

            image: "Image/lessons/lesson15.png",

        headers: [
            "Tool",
            "Example",
            "Purpose",
            "Use"
        ],

        rows: [

            [
                "Margins",
                "Normal",
                "Page spacing",
                "Print layout"
            ],

            [
                "Orientation",
                "Landscape",
                "Page direction",
                "Wide reports"
            ],

            [
                "Size",
                "A4",
                "Paper size",
                "Printing"
            ],

            [
                "Print Area",
                "A1:F20",
                "Selected area print karna",
                "Report printing"
            ],

            [
                "Zoom",
                "120%",
                "Worksheet view size",
                "Easy viewing"
            ],

            [
                "Freeze Panes",
                "Top Row",
                "Headers visible rakhna",
                "Large data"
            ],

            [
                "Gridlines",
                "Show / Hide",
                "Cell lines display",
                "Worksheet view"
            ]

        ],

        formula:
            "=SUM(D2:D20)",

        result:
            "Page Layout aur View tools ka use karke Excel report ko printing aur screen viewing ke liye properly prepare kiya ja sakta hai."

    },


    /*----------------------------------------------
    5. TRY IT YOURSELF
    ----------------------------------------------*/

    tryItYourself: {

        task:
            "Excel mein ek sample report create karke Page Layout aur View tools ko practice kijiye.",

        steps: [

            "Microsoft Excel open karein.",

            "Blank Workbook create karein.",

            "A1:D10 mein sample employee data enter karein.",

            "Page Layout Tab open karein.",

            "Margins option se Normal margins select karein.",

            "Orientation ko Landscape mein change karke dekhein.",

            "Paper Size ko A4 select karein.",

            "View Tab open karein.",

            "Zoom ko 120% karke worksheet observe karein.",

            "Freeze Panes ka use karke Top Row freeze karein."

        ],

        challenge:
            "Bonus Challenge: Apne report ke required cells ko Print Area set kijiye aur Print Preview mein check kijiye ki report page par properly fit ho rahi hai ya nahi."

    },


    /*----------------------------------------------
    6. REAL BUSINESS USE
    ----------------------------------------------*/

    realBusinessUse: {

        introduction:
            "Page Layout aur View tools professional reporting aur printing ke liye important hain. Proper page settings se reports clean aur professional print hoti hain, jabki View tools large datasets ke saath kaam karna easy banate hain.",

        examples: [

            "🏦 Banking: Wide MIS reports ko Landscape orientation mein print karna.",

            "💰 Finance: Financial statements ko proper margins aur paper size ke saath prepare karna.",

            "👥 HR: Employee reports ko print-ready format mein prepare karna.",

            "📈 Sales: Monthly sales reports ko proper Print Area ke saath print karna.",

            "📊 Data Analysis: Large datasets mein Freeze Panes ka use karke headers visible rakhna.",

            "🤝 Management Reporting: Final reports ko professional page layout aur print settings ke saath present karna."

        ]

    },


    /*----------------------------------------------
    7. QUICK CHECK
    ----------------------------------------------*/

    quickCheck: [

        {

            question:
                "Excel mein page orientation change karne ke liye commonly kaunsa Tab use hota hai?",

            options: [

                "Page Layout",

                "Home",

                "Insert",

                "Review"

            ],

            answer: 0,

            explanation:
                "Correct! Page Layout Tab mein Orientation, Margins aur Size jaise page settings available hoti hain."

        },


        {

            question:
                "Large dataset mein header row ko visible rakhne ke liye kaunsa tool useful hai?",

            options: [

                "Freeze Panes",

                "Format Painter",

                "Find",

                "AutoSum"

            ],

            answer: 0,

            explanation:
                "Correct! Freeze Panes ka use large datasets mein important rows ya columns ko visible rakhne ke liye kiya jata hai."

        },


        {

            question:
                "Excel worksheet ko screen par bada ya chhota dekhne ke liye kya use hota hai?",

            options: [

                "Zoom",

                "Margins",

                "Print Area",

                "Orientation"

            ],

            answer: 0,

            explanation:
                "Absolutely! Zoom tool worksheet ko screen par larger ya smaller view mein dekhne ke liye use hota hai."

        }

    ],


    /*----------------------------------------------
    8. KEY TAKEAWAYS
    ----------------------------------------------*/

    keyTakeaways: [

        "Page Layout Tab printing aur page presentation ke liye important hai.",

        "Margins page ke surrounding space ko control karte hain.",

        "Orientation Portrait ya Landscape format set karta hai.",

        "Paper Size printing ke page size ko define karta hai.",

        "Print Area se selected worksheet area ko print kiya ja sakta hai.",

        "View Tab mein Zoom aur Freeze Panes jaise useful tools available hote hain.",

        "Freeze Panes large datasets mein headers ko visible rakhne mein help karta hai."

    ]

},

/*==================================================
SECTION 3 CLOSE
==================================================*/

                ]

            },


/*==================================================
SECTION 4
==================================================*/

            {
                id: 4,

                title: "cel Navigation & Basic Operations",

                lessons: [

/*==================================================
LESSON 16
==================================================*/


{
    id: 16,

    title: "Selecting Cells & Ranges",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Interface",

    learningObjectives: [
        "Excel mein single Cell select karna seekhna.",
        "Multiple Cells aur Cell Range select karna samajhna.",
        "Mouse aur Keyboard se range select karna seekhna.",
        "Rows aur Columns ko select karna samajhna.",
        "Selected Range ka practical use samajhna."
    ],

    whatIsExcel:
        "Excel mein kisi Cell ya Cells ke group par kaam karne ke liye pehle unhe select karna padta hai. Ek single Cell, multiple Cells, complete Row, complete Column ya ek complete Range select ki ja sakti hai.",

    excelInSimpleWords:
        "Simple words mein, Selection ka matlab hai Excel ko batana ki aap kis Cell ya kis data area par kaam karna chahte hain. Jaise A1 select karne par sirf A1 active hota hai, aur A1:C5 select karne par poora range select ho jata hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aapke paas employee data hai aur aap Salary column ko format karna chahte hain. Iske liye pehle required Cells ya Range select karni hogi.",

                image: "Image/lessons/lesson16.png",

        headers: [
            "Selection",
            "Example",
            "Meaning",
            "Use"
        ],

        rows: [
            [
                "Single Cell",
                "A1",
                "Ek Cell select",
                "Individual data"
            ],
            [
                "Cell Range",
                "A1:C5",
                "Multiple Cells select",
                "Data formatting"
            ],
            [
                "Row",
                "Row 5",
                "Complete horizontal Row",
                "Complete record"
            ],
            [
                "Column",
                "Column C",
                "Complete vertical Column",
                "Salary data"
            ],
            [
                "Multiple Columns",
                "A:C",
                "Multiple Columns",
                "Bulk formatting"
            ]
        ],

        formula:
            "=SUM(C2:C5)",

        result:
            "Selected Salary Range ka total calculate kiya ja sakta hai."
    },

    tryItYourself: {

        task:
            "Excel mein different Cells aur Ranges ko select karke practice kijiye.",

        steps: [
            "Microsoft Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee aur B1 mein Salary type karein.",
            "A2:A5 mein 4 employee names enter karein.",
            "B2:B5 mein salary values enter karein.",
            "Sirf A1 Cell select karein.",
            "Mouse se A1:B5 range select karein.",
            "Column B par click karke complete Salary Column select karein.",
            "Row 1 par click karke complete Header Row select karein.",
            "Selected Salary Range ke neeche =SUM(B2:B5) formula enter karein."
        ],

        challenge:
            "Bonus Challenge: Keyboard ka use karke A1:C10 range select karne ki practice kijiye."
    },

    realBusinessUse: {

        introduction:
            "Professional Excel work mein correct Cells aur Ranges select karna daily activity hai. Formatting, formulas, sorting aur data analysis ke liye selection ka knowledge important hai.",

        examples: [
            "🏦 Banking: Transaction records ki specific range select karke formatting aur analysis karna.",
            "💰 Finance: Financial data range select karke formulas aur calculations apply karna.",
            "👥 HR: Employee records ke selected Columns ko format karna.",
            "📈 Sales: Sales data range select karke charts aur analysis create karna.",
            "📊 Data Analysis: Large datasets ki required ranges select karke filtering aur calculations karna.",
            "🤝 MIS Reporting: Complete report ranges select karke professional formatting apply karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein A1:C5 kya represent karta hai?",

            options: [
                "Single Cell",
                "Cell Range",
                "Complete Workbook",
                "Complete Worksheet"
            ],

            answer: 1,

            explanation:
                "Correct! A1:C5 ek Cell Range hai jisme multiple Cells included hain."
        },

        {
            question:
                "Complete Column select karne ke liye kya click kar sakte hain?",

            options: [
                "Column Letter",
                "Row Number",
                "Formula Bar",
                "Sheet Tab"
            ],

            answer: 0,

            explanation:
                "Correct! Column Letter par click karne se complete Column select ho jata hai."
        },

        {
            question:
                "Complete Row select karne ke liye kya click karte hain?",

            options: [
                "Column Letter",
                "Row Number",
                "Cell Address",
                "Formula Bar"
            ],

            answer: 1,

            explanation:
                "Absolutely! Row Number par click karne se complete Row select hoti hai."
        }

    ],

    keyTakeaways: [
        "Excel mein kaam karne se pehle required Cell ya Range select ki ja sakti hai.",
        "Single Cell jaise A1 ko individually select kiya ja sakta hai.",
        "A1:C5 jaise multiple Cells ko ek Range ke form mein select kiya ja sakta hai.",
        "Column Letter par click karke complete Column select hota hai.",
        "Row Number par click karke complete Row select hoti hai.",
        "Correct selection Excel mein formatting aur data operations ko easier banati hai."
    ]
},


/*==================================================
LESSON 17
==================================================*/

{
    id: 17,

    title: "Entering & Editing Data",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Interface",

    learningObjectives: [
        "Excel mein data enter karna seekhna.",
        "Text, Numbers aur Dates enter karna samajhna.",
        "Existing data ko edit karna seekhna.",
        "Cell ke andar data modify karna samajhna.",
        "Excel mein basic data entry techniques practice karna."
    ],

    whatIsExcel:
        "Excel worksheet mein information enter karne ke process ko Data Entry kaha jata hai. Excel mein text, numbers, dates aur formulas jaise different types ka data enter kiya ja sakta hai. Existing data ko edit bhi kiya ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, Excel ko ek digital register samajhiye. Aap kisi Cell par click karke information type karte hain aur Enter press karke data save kar dete hain. Agar data mein mistake ho, to Cell ko dobara edit karke correct kiya ja sakta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aap employee information maintain kar rahe hain. Aap Employee Name, Department, Salary aur Joining Date enter kar sakte hain.",

                image: "Image/lessons/lesson17.png",

        headers: [
            "Employee",
            "Department",
            "Salary",
            "Joining Date"
        ],

        rows: [
            [
                "Rahul",
                "Finance",
                "55000",
                "01-Jan-2024"
            ],
            [
                "Priya",
                "HR",
                "60000",
                "15-Feb-2024"
            ],
            [
                "Amit",
                "Sales",
                "50000",
                "10-Mar-2024"
            ],
            [
                "Neha",
                "IT",
                "75000",
                "20-Apr-2024"
            ]
        ],

        formula:
            "=SUM(C2:C5)",

        result:
            "Total Salary = ₹2,40,000"
    },

    tryItYourself: {

        task:
            "Excel mein employee data enter aur edit karke practice kijiye.",

        steps: [
            "Microsoft Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee Name type karein.",
            "B1 mein Department type karein.",
            "C1 mein Salary type karein.",
            "D1 mein Joining Date type karein.",
            "4 employees ka sample data enter karein.",
            "Kisi ek employee ka Department change karein.",
            "Kisi ek employee ki Salary edit karein.",
            "C6 mein =SUM(C2:C5) formula enter karein."
        ],

        challenge:
            "Bonus Challenge: Kisi existing Cell ko double-click karke uske andar directly data edit karke dekhiye."
    },

    realBusinessUse: {

        introduction:
            "Accurate data entry professional Excel reporting ka foundation hai. Daily business reports aur trackers mein large amount of data enter aur update kiya jata hai.",

        examples: [
            "🏦 Banking: Customer aur transaction information enter aur update karna.",
            "💰 Finance: Income, Expense aur Budget data maintain karna.",
            "👥 HR: Employee master aur attendance information update karna.",
            "📈 Sales: Customer, Product aur Sales data enter karna.",
            "📦 Operations: Daily activity aur inventory information update karna.",
            "📊 MIS Reporting: Daily records ko accurately enter karke monthly reports prepare karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein data enter karne ke liye sabse pehle kya karte hain?",

            options: [
                "Cell select karte hain",
                "Computer restart karte hain",
                "Worksheet delete karte hain",
                "Chart insert karte hain"
            ],

            answer: 0,

            explanation:
                "Correct! Data enter karne ke liye pehle required Cell select kiya jata hai."
        },

        {
            question:
                "Existing Cell data ko edit karne ke liye kya kiya ja sakta hai?",

            options: [
                "Cell par double-click",
                "Computer shutdown",
                "Workbook delete",
                "Sheet close"
            ],

            answer: 0,

            explanation:
                "Correct! Cell par double-click karke existing content ko directly edit kiya ja sakta hai."
        },

        {
            question:
                "Excel mein kaunsa data type enter kiya ja sakta hai?",

            options: [
                "Text",
                "Numbers",
                "Dates",
                "All of the above"
            ],

            answer: 3,

            explanation:
                "Absolutely! Excel mein Text, Numbers, Dates aur formulas jaise different data types enter kiye ja sakte hain."
        }

    ],

    keyTakeaways: [
        "Excel mein Text, Numbers aur Dates jaise data enter kiye ja sakte hain.",
        "Data enter karne ke liye pehle Cell select kiya jata hai.",
        "Enter key se entered data confirm kiya ja sakta hai.",
        "Existing data ko edit ya modify kiya ja sakta hai.",
        "Accurate data entry professional Excel work ke liye important hai.",
        "Proper data entry se reporting aur analysis reliable banta hai."
    ]
},


/*==================================================
LESSON 18
==================================================*/

{
    id: 18,

    title: "Copy, Cut & Paste",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Interface",

    learningObjectives: [
        "Excel mein Copy, Cut aur Paste ka difference samajhna.",
        "Data ko copy karke kisi other location par paste karna seekhna.",
        "Data ko move karne ke liye Cut aur Paste use karna seekhna.",
        "Keyboard shortcuts Ctrl+C, Ctrl+X aur Ctrl+V samajhna.",
        "Copy, Cut aur Paste ka practical business use samajhna."
    ],

    whatIsExcel:
        "Excel mein Copy, Cut aur Paste commands ka use data ko duplicate ya move karne ke liye kiya jata hai. Copy original data ko same place par rakhta hai aur uski duplicate copy banata hai, jabki Cut data ko ek location se doosri location par move karta hai.",

    excelInSimpleWords:
        "Simple words mein, Copy ka matlab hai 'same data ki ek aur copy banana'. Cut ka matlab hai 'data ko ek jagah se uthana' aur Paste ka matlab hai 'data ko new location par rakhna'.",

    practicalExample: {

        explanation:
            "Maan lijiye aapke paas sales data hai aur aap same employee list ko ek Summary Sheet par bhi use karna chahte hain.",

            image: "Image/lessons/lesson18.png",

        headers: [
            "Action",
            "Shortcut",
            "Purpose",
            "Example"
        ],

        rows: [
            [
                "Copy",
                "Ctrl + C",
                "Duplicate banana",
                "Employee List copy"
            ],
            [
                "Cut",
                "Ctrl + X",
                "Data move karna",
                "Data ko new column mein move"
            ],
            [
                "Paste",
                "Ctrl + V",
                "Data place karna",
                "Copied data paste"
            ],
            [
                "Copy + Paste",
                "Ctrl+C → Ctrl+V",
                "Duplicate data",
                "Summary create karna"
            ]
        ],

        formula:
            "=SUM(B2:B5)",

        result:
            "Copied sales data ko new location par paste karke same information reuse ki ja sakti hai."
    },

    tryItYourself: {

        task:
            "Excel mein Copy, Cut aur Paste commands ko practice kijiye.",

        steps: [
            "Microsoft Excel open karein.",
            "Blank Workbook create karein.",
            "A1:B5 mein sample Employee aur Salary data enter karein.",
            "A1:B5 range select karein.",
            "Ctrl + C press karein.",
            "D1 par click karke Ctrl + V press karein.",
            "Original A1:B5 data ko observe karein.",
            "D1:E5 data select karke Ctrl + X press karein.",
            "G1 par click karke Ctrl + V press karein.",
            "Check karein ki Cut kiya hua data new location par move ho gaya hai."
        ],

        challenge:
            "Bonus Challenge: Mouse Right Click menu ka use karke Copy aur Paste perform kijiye."
    },

    realBusinessUse: {

        introduction:
            "Copy, Cut aur Paste professional Excel work mein frequently used commands hain. Inka proper use repetitive data entry ko reduce karta hai aur productivity improve karta hai.",

        examples: [
            "🏦 Banking: Common report formats aur data ranges ko copy karke new reports prepare karna.",
            "💰 Finance: Previous month ke templates ko copy karke current month report banana.",
            "👥 HR: Employee data ko required worksheets mein copy ya move karna.",
            "📈 Sales: Sales data ko Summary aur Analysis sheets mein copy karna.",
            "📊 Data Analysis: Required data ranges ko different analysis areas mein copy karna.",
            "🤝 MIS Reporting: Existing report structures ko copy karke new reporting periods create karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Copy command ka shortcut kya hai?",

            options: [
                "Ctrl + C",
                "Ctrl + X",
                "Ctrl + V",
                "Ctrl + Z"
            ],

            answer: 0,

            explanation:
                "Correct! Ctrl + C Copy command ka keyboard shortcut hai."
        },

        {
            question:
                "Cut command ka shortcut kya hai?",

            options: [
                "Ctrl + C",
                "Ctrl + X",
                "Ctrl + V",
                "Ctrl + Y"
            ],

            answer: 1,

            explanation:
                "Correct! Ctrl + X selected data ko Cut karne ke liye use hota hai."
        },

        {
            question:
                "Paste command ka shortcut kya hai?",

            options: [
                "Ctrl + P",
                "Ctrl + C",
                "Ctrl + V",
                "Ctrl + X"
            ],

            answer: 2,

            explanation:
                "Absolutely! Ctrl + V copied ya cut data ko paste karne ke liye use hota hai."
        }

    ],

    keyTakeaways: [
        "Copy ka use data ki duplicate copy banane ke liye hota hai.",
        "Cut ka use data ko ek location se doosri location par move karne ke liye hota hai.",
        "Paste ka use copied ya cut data ko new location par place karne ke liye hota hai.",
        "Ctrl + C = Copy.",
        "Ctrl + X = Cut.",
        "Ctrl + V = Paste.",
        "Copy, Cut aur Paste Excel productivity ke important tools hain."
    ]
},


/*==================================================
LESSON 19
==================================================*/

{
    id: 19,

    title: "Undo, Redo & Repeat",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Interface",

    learningObjectives: [
        "Undo command ka purpose samajhna.",
        "Redo command ka purpose samajhna.",
        "Repeat action ka basic concept samajhna.",
        "Ctrl+Z aur Ctrl+Y shortcuts samajhna.",
        "Excel mein mistakes ko quickly correct karna seekhna."
    ],

    whatIsExcel:
        "Excel mein Undo ka use previous action ko reverse karne ke liye hota hai. Redo ka use undone action ko dobara apply karne ke liye hota hai. Repeat command ka use previous action ko repeat karne ke liye kiya ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, Undo Excel ka 'back' button jaisa hai. Agar aapne galti se koi formatting ya data change kar diya hai, to Undo se previous state par wapas ja sakte hain. Redo se undone action ko dobara apply kiya ja sakta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aapne kisi report mein galti se wrong formatting apply kar di. Undo ki help se aap previous formatting par return kar sakte hain.",

                image: "Image/lessons/lesson19.png",

        headers: [
            "Command",
            "Shortcut",
            "Purpose",
            "Example"
        ],

        rows: [
            [
                "Undo",
                "Ctrl + Z",
                "Previous action reverse",
                "Wrong formatting remove"
            ],
            [
                "Redo",
                "Ctrl + Y",
                "Undone action restore",
                "Formatting restore"
            ],
            [
                "Repeat",
                "F4",
                "Previous action repeat",
                "Same formatting apply"
            ]
        ],

        formula:
            "=SUM(B2:B5)",

        result:
            "Undo aur Redo formulas ko calculate nahi karte; ye workbook actions ko reverse ya restore karne ke liye use hote hain."
    },

    tryItYourself: {

        task:
            "Excel mein Undo aur Redo commands ko practically test kijiye.",

        steps: [
            "Microsoft Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee type karein.",
            "A1 ko Bold format karein.",
            "Ctrl + Z press karein.",
            "Observe karein ki Bold formatting remove ho gayi.",
            "Ctrl + Y press karein.",
            "Observe karein ki Bold formatting wapas aa gayi.",
            "Kisi Cell mein sample data enter karke Undo aur Redo ko dobara test karein."
        ],

        challenge:
            "Bonus Challenge: Kisi formatting action ko repeat karne ke liye F4 key test kijiye."
    },

    realBusinessUse: {

        introduction:
            "Professional Excel work mein mistakes common ho sakti hain. Undo aur Redo commands accidental changes ko quickly correct karne mein bahut useful hain.",

        examples: [
            "🏦 Banking: Report formatting mein accidental changes ko quickly reverse karna.",
            "💰 Finance: Financial model mein unwanted formatting ya edits ko undo karna.",
            "👥 HR: Employee report mein accidental changes ko correct karna.",
            "📈 Sales: Sales report editing ke during mistakes ko quickly reverse karna.",
            "📊 Data Analysis: Data preparation ke during unwanted actions ko undo karna.",
            "📋 MIS Reporting: Repeated formatting actions ko efficiently apply karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Undo ka shortcut kya hai?",

            options: [
                "Ctrl + Z",
                "Ctrl + Y",
                "Ctrl + C",
                "Ctrl + V"
            ],

            answer: 0,

            explanation:
                "Correct! Ctrl + Z previous action ko Undo karne ke liye use hota hai."
        },

        {
            question:
                "Redo ka shortcut commonly kya hai?",

            options: [
                "Ctrl + X",
                "Ctrl + Y",
                "Ctrl + C",
                "Ctrl + Z"
            ],

            answer: 1,

            explanation:
                "Correct! Ctrl + Y undone action ko Redo karne ke liye commonly use hota hai."
        },

        {
            question:
                "Undo ka main purpose kya hai?",

            options: [
                "Previous action reverse karna",
                "Workbook close karna",
                "New sheet create karna",
                "Chart insert karna"
            ],

            answer: 0,

            explanation:
                "Absolutely! Undo previous action ko reverse karne ke liye use hota hai."
        }

    ],

    keyTakeaways: [
        "Undo previous action ko reverse karta hai.",
        "Ctrl + Z Undo ka common shortcut hai.",
        "Redo undone action ko dobara apply karta hai.",
        "Ctrl + Y Redo ka common shortcut hai.",
        "Repeat previous action ko dobara perform karne mein useful ho sakta hai.",
        "Undo aur Redo accidental changes ko quickly correct karne mein help karte hain."
    ]
},


/*==================================================
LESSON 20
==================================================*/

{
    id: 20,

    title: "Find & Replace",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Interface",

    learningObjectives: [
        "Excel mein Find command ka use samajhna.",
        "Replace command ka purpose samajhna.",
        "Specific data ko quickly search karna seekhna.",
        "Multiple entries ko efficiently replace karna seekhna.",
        "Find & Replace ka professional use samajhna."
    ],

    whatIsExcel:
        "Excel ka Find & Replace feature large worksheet mein specific text, number ya value ko quickly search aur replace karne ke liye use hota hai. Find se information locate ki ja sakti hai aur Replace se existing value ko new value se change kiya ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, agar worksheet mein 500 records hain aur aapko 'Mumbai' search karna hai, to manually har Row check karne ki zarurat nahi hai. Find feature se Mumbai instantly search kiya ja sakta hai. Agar Mumbai ko Pune se replace karna ho, to Replace feature use kiya ja sakta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye employee data mein Location column mein kuch records 'Mumbai' hain aur company chahti hai ki unhe 'Nashik' se update kiya jaye.",

                image: "Image/lessons/lesson20.png",

        headers: [
            "Employee",
            "Location",
            "Action",
            "Result"
        ],

        rows: [
            [
                "Rahul",
                "Mumbai",
                "Find Mumbai",
                "Record found"
            ],
            [
                "Priya",
                "Pune",
                "Find Mumbai",
                "No match"
            ],
            [
                "Amit",
                "Mumbai",
                "Replace Mumbai",
                "Nashik"
            ],
            [
                "Neha",
                "Mumbai",
                "Replace All",
                "Nashik"
            ]
        ],

        formula:
            "=COUNTIF(B2:B5,\"Mumbai\")",

        result:
            "Formula Mumbai location wale records ki count calculate karega."
    },

    tryItYourself: {

        task:
            "Excel mein Find & Replace feature ko practically use kijiye.",

        steps: [
            "Microsoft Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee aur B1 mein Location type karein.",
            "A2:A6 mein employee names enter karein.",
            "B2:B6 mein Mumbai, Pune aur Nashik jaise locations enter karein.",
            "Ctrl + F press karke Find window open karein.",
            "Mumbai search karein.",
            "Search result ko observe karein.",
            "Ctrl + H press karke Find and Replace window open karein.",
            "Find what mein Mumbai enter karein.",
            "Replace with mein Pune enter karein.",
            "Replace ya Replace All ka use karke data update karein."
        ],

        challenge:
            "Bonus Challenge: Find & Replace ka use karke kisi department name ko ek new department name se replace kijiye."
    },

    realBusinessUse: {

        introduction:
            "Find & Replace large Excel datasets mein data correction aur updating ke liye extremely useful feature hai. Isse manual editing ka time significantly reduce ho sakta hai.",

        examples: [
            "🏦 Banking: Customer records mein incorrect branch names search aur update karna.",
            "💰 Finance: Reports mein incorrect labels ya account categories replace karna.",
            "👥 HR: Employee data mein department ya location names update karna.",
            "📈 Sales: Product names ya sales categories ko bulk update karna.",
            "📊 Data Analysis: Dataset mein incorrect values identify aur replace karna.",
            "📋 MIS Reporting: Monthly reports mein old labels ko new labels se quickly replace karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein Find feature ka use kis liye hota hai?",

            options: [
                "Data search karne ke liye",
                "Workbook delete karne ke liye",
                "Computer shutdown karne ke liye",
                "Chart insert karne ke liye"
            ],

            answer: 0,

            explanation:
                "Correct! Find feature worksheet mein specific text ya value search karne ke liye use hota hai."
        },

        {
            question:
                "Find and Replace window open karne ka common shortcut kya hai?",

            options: [
                "Ctrl + F",
                "Ctrl + H",
                "Ctrl + C",
                "Ctrl + Z"
            ],

            answer: 1,

            explanation:
                "Correct! Ctrl + H se Find and Replace window open ki ja sakti hai."
        },

        {
            question:
                "Replace All ka use kis liye hota hai?",

            options: [
                "Sirf ek value replace karne ke liye",
                "Multiple matching values ko replace karne ke liye",
                "Workbook close karne ke liye",
                "New worksheet create karne ke liye"
            ],

            answer: 1,

            explanation:
                "Absolutely! Replace All multiple matching entries ko ek saath replace karne ke liye useful hai."
        }

    ],

    keyTakeaways: [
        "Find feature worksheet mein specific data search karne ke liye use hota hai.",
        "Ctrl + F Find ka common shortcut hai.",
        "Replace existing value ko new value se change karta hai.",
        "Ctrl + H Find and Replace window open karta hai.",
        "Replace All multiple matching values ko ek saath update kar sakta hai.",
        "Find & Replace large datasets mein time save karta hai.",
        "Bulk data correction aur updating ke liye Find & Replace ek useful Excel tool hai."
    ]
}


/*==================================================
SECTION 4 CLOSE
==================================================*/

                ]

            },


/*==================================================
SECTION 5
==================================================*/

{
    id: 5,

    title: "Excel Formatting Basics",

    lessons: [

  

/*==================================================
LESSON 21
==================================================*/

{
    id: 21,

    title: "Cell Formatting Basics",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Formatting",


    /*----------------------------------------------
    1. LEARNING OBJECTIVES
    ----------------------------------------------*/

    learningObjectives: [

        "Cell formatting ka basic concept samajhna.",

        "Excel mein cells ko readable aur professional banana seekhna.",

        "Formatting aur actual cell data ke difference ko samajhna.",

        "Basic formatting ka practical use samajhna."

    ],


    /*----------------------------------------------
    2. LEARN THE CONCEPT
    ----------------------------------------------*/

    whatIsExcel:

        "Excel mein Cell Formatting ka matlab hai cell ke data ko better look dena. Aap font, size, color, alignment, borders aur background jaise options use karke data ko easy to read bana sakte hain.",


    excelInSimpleWords:

        "Simple words mein, formatting data ko change nahi karti — sirf data ka appearance change karti hai. Jaise kisi Sales Report mein heading ko Bold karna, background color dena ya numbers ko properly align karna.",


    /*----------------------------------------------
    3. PRACTICAL EXAMPLE
    ----------------------------------------------*/

    practicalExample: {

        explanation:

            "Maan lijiye aapke paas monthly sales ka data hai. Agar sabhi cells plain hain, to report samajhna thoda difficult ho sakta hai. Hum heading ko Bold aur background color dekar report ko professional bana sakte hain.",


        image:

            "Image/lessons/lesson21.png",


        imageAlt:

            "Excel cells with basic formatting highlighted",


        imageCaption:

            "Excel mein basic cell formatting ka example.",


        headers: [

            "Employee",
            "Department",
            "Sales"

        ],


        rows: [

            ["Rahul", "Sales", "₹45,000"],

            ["Priya", "Sales", "₹52,000"],

            ["Amit", "Marketing", "₹38,000"],

            ["Neha", "Sales", "₹61,000"]

        ]

    },


    /*----------------------------------------------
    4. TRY IT YOURSELF
    ----------------------------------------------*/

    tryItYourself: {

        task:

            "Ek simple Sales Report create kijiye aur uski heading ko professional format dijiye.",


        steps: [

            "Excel mein Employee, Department aur Sales headings enter kijiye.",

            "Kuch sample employee data enter kijiye.",

            "Heading row select kijiye.",

            "Heading ko Bold kijiye.",

            "Heading ka background color change kijiye.",

            "Data ko properly align kijiye.",

            "Report ko ek baar review kijiye."

        ],


        challenge:

            "Apni report mein Borders aur suitable Font Size bhi apply karke dekhiye."

    },


    /*----------------------------------------------
    5. REAL-WORLD USE
    ----------------------------------------------*/

    realBusinessUse: {

        introduction:

            "Real business reports mein formatting bahut important hoti hai kyunki properly formatted data ko read aur understand karna easy hota hai.",


        examples: [

            "Monthly Sales Report mein headings ko highlight karna.",

            "Employee Attendance Report ko readable banana.",

            "Financial Reports mein important numbers ko highlight karna.",

            "Management MIS ko professional presentation dena.",

            "Large Excel reports mein important sections ko visually separate karna."

        ]

    },


    /*----------------------------------------------
    6. QUICK CHECK
    ----------------------------------------------*/

    quickCheck: [

        {

            question:
                "Excel mein Cell Formatting ka main purpose kya hai?",

            options: [

                "Data ko delete karna",

                "Data ka appearance improve karna",

                "Workbook close karna",

                "Formula remove karna"

            ],

            answer: 1,

            explanation:
                "Correct! Formatting mainly cell ke appearance ko improve karti hai."

        },


        {

            question:
                "Cell formatting se actual data normally kya hota hai?",

            options: [

                "Delete ho jata hai",

                "Automatically change ho jata hai",

                "Data same rehta hai, sirf appearance change hota hai",

                "Workbook delete ho jati hai"

            ],

            answer: 2,

            explanation:
                "Bilkul sahi! Formatting data ko normally change nahi karti, sirf uska appearance change karti hai."

        },


        {

            question:
                "Sales Report ki heading ko easily identify karne ke liye kya use kar sakte hain?",

            options: [

                "Bold aur Fill Color",

                "Delete",

                "Cut",

                "Close Workbook"

            ],

            answer: 0,

            explanation:
                "Correct! Bold aur Fill Color heading ko clearly highlight karne mein help karte hain."

        }

    ],


    /*----------------------------------------------
    7. KEY TAKEAWAYS
    ----------------------------------------------*/

    keyTakeaways: [

        "Cell Formatting Excel data ko readable aur professional banati hai.",

        "Formatting mainly cell ke appearance ko change karti hai.",

        "Bold, Font, Color, Borders aur Alignment common formatting options hain.",

        "Professional reports mein proper formatting important hoti hai.",

        "Good formatting se large Excel reports ko samajhna easier ho jata hai."

    ]

},

/*==================================================
LESSON 22
==================================================*/

{
    id: 22,

    title: "Font, Size & Color",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Formatting Basics",

    learningObjectives: [
        "Excel mein Font kya hota hai samajhna.",
        "Font Size change karna seekhna.",
        "Bold, Italic aur Underline ka use samajhna.",
        "Font Color ka practical use samajhna.",
        "Professional reports mein font formatting ka proper use seekhna."
    ],

    whatIsExcel:
        "Excel mein Font formatting ka use text ka appearance change karne ke liye hota hai. Aap Font Family, Font Size, Bold, Italic, Underline aur Font Color jaise options use kar sakte hain.",

    excelInSimpleWords:
        "Simple words mein, Font formatting text ko attractive aur readable banane ka tarika hai. Heading ko large aur Bold rakha ja sakta hai, jabki normal data ko simple font mein rakha ja sakta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Monthly Sales Report bana rahe hain. Report title ko large Bold Font aur important values ko different Font Color se highlight kiya ja sakta hai.",

        image: "image/lessons/lesson22.png",

        headers: [
            "Formatting",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "Font Size",
                "16",
                "Heading highlight" 
            ],
            [
                "Bold",
                "Total Sales",
                "Important information"
            ],
            [
                "Italic",
                "Note",
                "Special message"
            ],
            [
                "Underline",
                "Report Title",
                "Emphasis"
            ],
            [
                "Font Color",
                "Important Value",
                "Visual highlight"
            ]
        ],

        formula:
            "=SUM(B2:B5)",

        result:
            "Font formatting ke through important information ko easily identify kiya ja sakta hai."
    },

    tryItYourself: {

        task:
            "Excel mein ek professional report heading create kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Monthly Sales Report type karein.",
            "A1 ka Font Size 16 karein.",
            "A1 ko Bold karein.",
            "A1 par suitable Font Color apply karein.",
            "A3 mein Employee aur B3 mein Sales type karein.",
            "Header Row ko Bold karein.",
            "Total Sales ko Bold karke highlight karein."
        ],

        challenge:
            "Bonus Challenge: Report title ko Center align karke professional heading banaiye."
    },

    realBusinessUse: {

        introduction:
            "Font formatting ka proper use business reports ko readable aur professional banata hai.",

        examples: [
            "🏦 Banking: MIS report headings aur important figures ko highlight karna.",
            "💰 Finance: Financial totals aur key metrics ko Bold karna.",
            "👥 HR: Employee report headings ko properly format karna.",
            "📈 Sales: Sales targets aur achievement figures highlight karna.",
            "📊 Data Analysis: Important KPIs ko visually emphasize karna.",
            "📋 Management Reporting: Report titles aur key results ko professional appearance dena."
        ]
    },

    quickCheck: [

        {
            question:
                "Text ko Bold karne ke liye kaunsa option use hota hai?",

            options: [
                "B",
                "I",
                "U",
                "X"
            ],

            answer: 0,

            explanation:
                "Correct! B option text ko Bold banata hai."
        },

        {
            question:
                "Font Size ka use kis liye hota hai?",

            options: [
                "Text ka size change karne ke liye",
                "Data delete karne ke liye",
                "Formula calculate karne ke liye",
                "Worksheet rename karne ke liye"
            ],

            answer: 0,

            explanation:
                "Correct! Font Size text ko smaller ya larger display karne ke liye use hota hai."
        },

        {
            question:
                "Font Color ka use kya hai?",

            options: [
                "Text ka color change karna",
                "Cell delete karna",
                "Data sort karna",
                "Workbook save karna"
            ],

            answer: 0,

            explanation:
                "Absolutely! Font Color text ko different colors mein display karne ke liye use hota hai."
        }

    ],

    keyTakeaways: [
        "Font formatting text ka appearance change karti hai.",
        "Font Size se text ko smaller ya larger banaya ja sakta hai.",
        "Bold important information ko highlight karta hai.",
        "Italic aur Underline special emphasis ke liye useful hain.",
        "Font Color important information ko visually highlight kar sakta hai.",
        "Professional reports mein simple aur consistent font formatting use karni chahiye."
    ]
},


/*==================================================
LESSON 23
==================================================*/

{
    id: 23,

    title: "Alignment & Text Orientation",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Formatting Basics",

    learningObjectives: [
        "Excel mein Cell Alignment samajhna.",
        "Left, Center aur Right Alignment ka use seekhna.",
        "Vertical Alignment samajhna.",
        "Text Orientation ka basic use samajhna.",
        "Professional tables mein alignment ka importance samajhna."
    ],

    whatIsExcel:
        "Excel mein Alignment ka use Cell ke andar data ki position control karne ke liye hota hai. Data ko Left, Center ya Right align kiya ja sakta hai. Vertical alignment aur Text Orientation se data ki presentation ko further customize kiya ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, Alignment decide karta hai ki Cell ke andar text ya number kahan appear hoga. Text ko left, center ya right side par rakha ja sakta hai. Text Orientation se text ko rotate bhi kiya ja sakta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aap Employee Report bana rahe hain. Employee Name ko Left, Department ko Center aur Salary ko Right align karne se table more readable ho sakti hai.",

        image:
            "image/lessons/lesson23.png",

        headers: [
            "Data",
            "Recommended Alignment",
            "Reason"
        ],

        rows: [
            [
                "Employee Name",
                "Left",
                "Text readability"
            ],
            [
                "Department",
                "Center",
                "Clean presentation"
            ],
            [
                "Salary",
                "Right",
                "Number readability"
            ],
            [
                "Header",
                "Center",
                "Professional look"
            ]
        ],

        formula:
            "=SUM(C2:C5)",

        result:
            "Proper Alignment se Excel table clean aur easy to read ban sakti hai."
    },

    tryItYourself: {

        task:
            "Excel table mein different Alignment options apply kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee, B1 mein Department aur C1 mein Salary type karein.",
            "3 employees ka sample data enter karein.",
            "Employee Name ko Left Align karein.",
            "Department ko Center Align karein.",
            "Salary ko Right Align karein.",
            "Header Row ko Center Align karein.",
            "Vertical Alignment options ko test karein.",
            "Text Orientation option ko kisi heading par test karein."
        ],

        challenge:
            "Bonus Challenge: Kisi narrow column mein heading ko rotate karke dekhiye."
    },

    realBusinessUse: {

        introduction:
            "Proper alignment business reports ko structured aur readable banata hai. Especially large tables mein alignment kaafi important hoti hai.",

        examples: [
            "🏦 Banking: Transaction reports mein dates, account numbers aur amounts ko properly align karna.",
            "💰 Finance: Financial figures ko consistent alignment mein display karna.",
            "👥 HR: Employee master data ko clean table format mein maintain karna.",
            "📈 Sales: Product names, quantities aur sales values ko properly align karna.",
            "📊 Data Analysis: Large datasets mein readable table structure maintain karna.",
            "📋 MIS Reporting: Management reports ko professional layout dena."
        ]
    },

    quickCheck: [

        {
            question:
                "Text ko Cell ke left side par place karne ke liye kya use hota hai?",

            options: [
                "Left Alignment",
                "Right Alignment",
                "Center Alignment",
                "Text Rotation"
            ],

            answer: 0,

            explanation:
                "Correct! Left Alignment data ko Cell ke left side par place karta hai."
        },

        {
            question:
                "Text ko Cell ke center mein place karne ke liye kya use hota hai?",

            options: [
                "Left",
                "Center",
                "Right",
                "Bottom"
            ],

            answer: 1,

            explanation:
                "Correct! Center Alignment data ko horizontal center mein place karta hai."
        },

        {
            question:
                "Text Orientation ka use kis liye ho sakta hai?",

            options: [
                "Text ko rotate karne ke liye",
                "Data delete karne ke liye",
                "Formula calculate karne ke liye",
                "Workbook close karne ke liye"
            ],

            answer: 0,

            explanation:
                "Absolutely! Text Orientation ka use text ko rotate ya different direction mein display karne ke liye kiya ja sakta hai."
        }

    ],

    keyTakeaways: [
        "Alignment Cell ke andar data ki position control karta hai.",
        "Left, Center aur Right common horizontal alignments hain.",
        "Vertical Alignment se data ki vertical position control hoti hai.",
        "Text Orientation se text ko rotate kiya ja sakta hai.",
        "Proper alignment Excel tables ko clean aur readable banati hai.",
        "Professional reports mein consistent alignment maintain karna important hai."
    ]
},


/*==================================================
LESSON 24
==================================================*/

{
    id: 24,

    title: "Number Formats",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Formatting Basics",

    learningObjectives: [
        "Excel Number Format ka basic concept samajhna.",
        "Number ko Currency format mein convert karna seekhna.",
        "Percentage format ka use samajhna.",
        "Date aur Decimal formats samajhna.",
        "Business reports mein correct Number Format choose karna seekhna."
    ],

    whatIsExcel:
        "Excel Number Format ka use numbers ko different readable formats mein display karne ke liye hota hai. Common formats mein Number, Currency, Accounting, Percentage, Date aur Decimal formats include hote hain.",

    excelInSimpleWords:
        "Simple words mein, Number Format actual value ko change nahi karta, sirf uska display style change karta hai. Jaise 55000 ko Currency format mein ₹55,000 aur 0.85 ko Percentage format mein 85% display kiya ja sakta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye ek Sales Report mein Sales Amount, Achievement aur Date maintain ki ja rahi hai. Har value ko appropriate Number Format dena chahiye.",

        image:
            "image/lessons/lesson24.png",

        headers: [
            "Value",
            "Format",
            "Display Example",
            "Use"
        ],

        rows: [
            [
                "55000",
                "Currency",
                "₹55,000",
                "Salary / Sales"
            ],
            [
                "0.85",
                "Percentage",
                "85%",
                "Achievement"
            ],
            [
                "12.5",
                "Number",
                "12.50",
                "Quantity"
            ],
            [
                "01-Jan-2026",
                "Date",
                "01-Jan-2026",
                "Transaction Date"
            ]
        ],

        formula:
            "=B2/C2",

        result:
            "Number Format apply karke calculated value ko Percentage jaise readable format mein display kiya ja sakta hai."
    },

    tryItYourself: {

        task:
            "Excel mein different Number Formats apply karke practice kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee aur B1 mein Salary type karein.",
            "3 employees ki salary enter karein.",
            "Salary Column ko Currency format dein.",
            "C1 mein Achievement type karein.",
            "C2 mein 0.85 enter karein.",
            "C2 ko Percentage format dein.",
            "D1 mein Joining Date type karein.",
            "D2 mein ek date enter karke Date format apply karein."
        ],

        challenge:
            "Bonus Challenge: Salary values ko Currency aur Accounting format dono mein compare kijiye."
    },

    realBusinessUse: {

        introduction:
            "Correct Number Format business reports mein data ko immediately understandable banata hai.",

        examples: [
            "🏦 Banking: Transaction Amount ko Currency aur transaction dates ko Date format mein display karna.",
            "💰 Finance: Financial values ko Currency ya Accounting format mein maintain karna.",
            "👥 HR: Salary ko Currency aur employee joining date ko Date format mein display karna.",
            "📈 Sales: Revenue ko Currency aur Achievement ko Percentage format mein display karna.",
            "📊 Data Analysis: Decimal, Percentage aur Number formats ka appropriate use karna.",
            "📋 MIS Reporting: Business KPIs ko readable formats mein present karna."
        ]
    },

    quickCheck: [

        {
            question:
                "0.85 ko 85% display karne ke liye kaunsa format use hoga?",

            options: [
                "Currency",
                "Percentage",
                "Date",
                "Text"
            ],

            answer: 1,

            explanation:
                "Correct! Percentage format 0.85 ko 85% ke form mein display kar sakta hai."
        },

        {
            question:
                "55000 ko ₹55,000 display karne ke liye kya use kar sakte hain?",

            options: [
                "Currency Format",
                "Percentage Format",
                "Date Format",
                "Text Orientation"
            ],

            answer: 0,

            explanation:
                "Correct! Currency Format monetary values ko currency symbol ke saath display karne ke liye useful hai."
        },

        {
            question:
                "Number Format generally kya change karta hai?",

            options: [
                "Value ka display",
                "Computer memory",
                "Worksheet name",
                "Workbook location"
            ],

            answer: 0,

            explanation:
                "Absolutely! Number Format generally value ka display style change karta hai."
        }

    ],

    keyTakeaways: [
        "Number Format numbers ko readable format mein display karta hai.",
        "Currency Format monetary values ke liye useful hai.",
        "Percentage Format ratios aur achievement values ke liye useful hai.",
        "Date Format dates ko consistent format mein display karta hai.",
        "Decimal aur Number formats numerical data ke liye useful hain.",
        "Correct Number Format professional reports ko easier to understand banata hai."
    ]
},


/*==================================================
LESSON 25
==================================================*/

{
    id: 25,

    title: "Borders, Fill & Cell Styles",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Excel Formatting Basics",

    learningObjectives: [
        "Excel mein Borders ka use samajhna.",
        "Cell Fill Color ka practical use seekhna.",
        "Cell Styles ka basic concept samajhna.",
        "Tables ko visually organize karna seekhna.",
        "Professional Excel reports mein Borders aur Styles ka proper use samajhna."
    ],

    whatIsExcel:
        "Excel mein Borders, Fill aur Cell Styles ka use worksheet ko visually organize aur professional banane ke liye hota hai. Borders data areas ko separate karte hain, Fill Colors important Cells ko highlight karte hain aur Cell Styles predefined formatting provide karte hain.",

    excelInSimpleWords:
        "Simple words mein, Borders table ke around lines create karte hain, Fill Cell ke background ko highlight karta hai aur Cell Styles ready-made formatting provide karte hain. In tools ki help se simple data ko professional report mein convert kiya ja sakta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Monthly Sales Report prepare kar rahe hain. Header par Fill Color, table par Borders aur Total Row par special Cell Style apply ki ja sakti hai.",

        image:
            "image/lessons/lesson25.png",

        headers: [
            "Formatting Tool",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "Borders",
                "Table Border",
                "Data separation"
            ],
            [
                "Fill",
                "Header Background",
                "Highlight heading"
            ],
            [
                "Cell Style",
                "Total Style",
                "Professional formatting"
            ],
            [
                "Border + Fill",
                "Summary Row",
                "Important result"
            ]
        ],

        formula:
            "=SUM(C2:C5)",

        result:
            "Borders, Fill aur Styles ke use se Sales Report visually organized aur professional ban sakti hai."
    },

    tryItYourself: {

        task:
            "Ek professional Sales Table create karke Borders, Fill aur Cell Styles apply kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee, B1 mein Department aur C1 mein Sales type karein.",
            "4 employees ka sample data enter karein.",
            "Complete table select karein.",
            "All Borders apply karein.",
            "Header Row par Fill Color apply karein.",
            "Header ko Bold karein.",
            "Total Sales Row create karein.",
            "Total Row par suitable Cell Style apply karein."
        ],

        challenge:
            "Bonus Challenge: Table ke outer border ko thick border mein change karke professional report look create kijiye."
    },

    realBusinessUse: {

        introduction:
            "Borders, Fill aur Cell Styles reports ko visually structured aur easy to understand banane mein help karte hain.",

        examples: [
            "🏦 Banking: MIS tables aur reconciliation reports mein data sections separate karna.",
            "💰 Finance: Total aur key financial figures ko highlight karna.",
            "👥 HR: Employee tables mein headers aur important information highlight karna.",
            "📈 Sales: Sales summary aur target tables ko professional format dena.",
            "📊 Data Analysis: Summary sections aur important metrics ko visually distinguish karna.",
            "📋 Management Reporting: Management reports ko clean aur presentation-ready banana."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein Borders ka main use kya hai?",

            options: [
                "Cells ko visually separate karna",
                "Formula calculate karna",
                "Data delete karna",
                "Workbook close karna"
            ],

            answer: 0,

            explanation:
                "Correct! Borders Cells aur data areas ko visually separate karne mein help karte hain."
        },

        {
            question:
                "Fill Color ka use kis liye hota hai?",

            options: [
                "Cell background highlight karna",
                "Formula create karna",
                "Data sort karna",
                "Worksheet delete karna"
            ],

            answer: 0,

            explanation:
                "Correct! Fill Color Cell ke background ko highlight karne ke liye use hota hai."
        },

        {
            question:
                "Cell Styles ka benefit kya hai?",

            options: [
                "Ready-made formatting apply karna",
                "Computer restart karna",
                "Internet browse karna",
                "Excel uninstall karna"
            ],

            answer: 0,

            explanation:
                "Absolutely! Cell Styles predefined formatting ko quickly apply karne mein help karte hain."
        }

    ],

    keyTakeaways: [
        "Borders Excel tables ko visually organize karte hain.",
        "Fill Color important Cells aur Headers ko highlight karta hai.",
        "Cell Styles ready-made formatting provide karte hain.",
        "Headers aur Total Rows ko formatting se easily highlight kiya ja sakta hai.",
        "Professional reports mein consistent Borders aur Styles use karna useful hai.",
        "Proper formatting Excel reports ko clean, readable aur presentation-ready banati hai."
    ]
}


/*==================================================
SECTION 5 CLOSE
==================================================*/

                ]

            },


/*==================================================
SECTION 6
==================================================*/

{
    id: 6,

    title: "SMART DATA ENTRY & AUTOMATION",

    lessons: [

/*==================================================
LESSON 26
==================================================*/

{
    id: 26,

    title: "AutoFill & Fill Handle",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Smart Data Entry & Automation",

    learningObjectives: [
        "Excel mein AutoFill ka use samajhna.",
        "Fill Handle ka basic concept samajhna.",
        "Numbers aur Dates ko automatically fill karna seekhna.",
        "Formulas ko quickly copy karna seekhna.",
        "Repetitive data entry ko fast aur efficient banana seekhna."
    ],

    whatIsExcel:
        "Excel mein AutoFill aur Fill Handle ka use repetitive data entry ko fast aur easy banane ke liye hota hai. Fill Handle ki help se numbers, dates, months aur formulas ko automatically next Cells mein fill kiya ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, Fill Handle Cell ke bottom-right corner par ek small square hota hai. Isko drag karne par Excel existing pattern ko samajhkar next Cells mein data ya formula automatically fill kar deta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Monthly Sales Report prepare kar rahe hain. Employee Sales calculate karne ke liye ek formula likhne ke baad Fill Handle se us formula ko multiple rows mein quickly copy kiya ja sakta hai.",

        image:
            "image/lessons/lesson26.png",

        headers: [
            "Data Type",
            "Example",
            "AutoFill Result"
        ],

        rows: [
            [
                "Numbers",
                "1, 2",
                "3, 4, 5, 6..."
            ],
            [
                "Months",
                "January",
                "February, March, April..."
            ],
            [
                "Dates",
                "01-Jan-2026",
                "02-Jan-2026, 03-Jan-2026..."
            ],
            [
                "Formula",
                "=B2*C2",
                "Formula automatically adjusts"
            ]
        ],

        formula:
            "=B2*C2",

        result:
            "AutoFill ki help se formula automatically next rows mein copy hota hai aur Cell references accordingly adjust ho jaate hain."
    },

    tryItYourself: {

        task:
            "Ek simple Sales Table create karke AutoFill aur Fill Handle ka practical use kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee, B1 mein Quantity aur C1 mein Price type karein.",
            "A2:A5 mein 4 employee names enter karein.",
            "B2:B5 mein quantity values enter karein.",
            "C2:C5 mein price values enter karein.",
            "D1 mein Total Sales type karein.",
            "D2 mein =B2*C2 formula enter karein.",
            "D2 ke Fill Handle ko drag karke D5 tak le jaiye.",
            "Check kijiye ki formula automatically har row mein adjust hua hai."
        ],

        challenge:
            "Bonus Challenge: A10 mein January aur A11 mein February enter karke Fill Handle se December tak months automatically fill kijiye."
    },

    realBusinessUse: {

        introduction:
            "AutoFill aur Fill Handle repetitive Excel tasks ko quickly complete karne mein help karte hain aur manual data entry ka time reduce karte hain.",

        examples: [
            "🏦 Banking: Monthly MIS reports mein dates aur formulas quickly fill karna.",
            "💰 Finance: Financial calculations ko multiple rows mein apply karna.",
            "👥 HR: Employee records mein serial numbers aur calculations quickly fill karna.",
            "📈 Sales: Sales reports mein formulas ko multiple employees ke liye copy karna.",
            "📊 Data Analysis: Large datasets mein calculations quickly apply karna.",
            "📋 Management Reporting: Monthly periods aur report formulas ko quickly extend karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein Fill Handle kahan hota hai?",

            options: [
                "Cell ke bottom-right corner par",
                "Ribbon ke top-left corner par",
                "Formula Bar ke andar",
                "Worksheet ke bottom par"
            ],

            answer: 0,

            explanation:
                "Correct! Fill Handle selected Cell ke bottom-right corner par small square ke form mein hota hai."
        },

        {
            question:
                "AutoFill ka main benefit kya hai?",

            options: [
                "Repeated data aur formulas quickly fill karna",
                "Workbook close karna",
                "Excel uninstall karna",
                "Computer restart karna"
            ],

            answer: 0,

            explanation:
                "Correct! AutoFill repetitive data, patterns aur formulas ko quickly fill karne mein help karta hai."
        },

        {
            question:
                "Agar D2 mein =B2*C2 hai aur Fill Handle ko D5 tak drag karein, to kya hoga?",

            options: [
                "Formula automatically next rows mein adjust hoga",
                "Formula delete ho jayega",
                "Workbook close ho jayega",
                "Sirf D2 ka result change hoga"
            ],

            answer: 0,

            explanation:
                "Absolutely! Excel relative Cell references ko automatically adjust karke formula ko next rows mein apply karta hai."
        }

    ],

    keyTakeaways: [
        "AutoFill repetitive data entry ko fast aur easy banata hai.",
        "Fill Handle selected Cell ke bottom-right corner par hota hai.",
        "Numbers, Dates aur Months ko AutoFill se quickly extend kiya ja sakta hai.",
        "Formulas ko Fill Handle se multiple rows mein quickly copy kiya ja sakta hai.",
        "Excel existing patterns ko recognize karke data automatically fill kar sakta hai.",
        "AutoFill Excel mein productivity aur efficiency improve karne ka useful tool hai."
    ]
},

/*==================================================
LESSON 27
==================================================*/

{
    id: 27,

    title: "Flash Fill",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Smart Data Entry & Automation",

    learningObjectives: [
        "Excel mein Flash Fill ka basic concept samajhna.",
        "Flash Fill ka use text patterns ko automatically complete karne ke liye seekhna.",
        "Names aur text ko separate karna seekhna.",
        "Combined data se required information extract karna seekhna.",
        "Flash Fill se repetitive data cleaning ko fast banana seekhna."
    ],

    whatIsExcel:
        "Excel mein Flash Fill ek smart data entry feature hai jo aapke example ko recognize karke remaining Cells mein same pattern automatically fill karta hai. Iska use names split karne, text extract karne aur data ko required format mein convert karne ke liye kiya ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, aap Excel ko ek example dete hain aur Flash Fill us example ka pattern samajhkar baaki data automatically fill kar deta hai. Isse repetitive text work manually karne ki zarurat kam ho jaati hai.",

    practicalExample: {

        explanation:
            "Maan lijiye Column A mein Full Names diye gaye hain aur aapko First Name alag Column mein chahiye. Pehle Cell mein First Name manually type karne ke baad Flash Fill use karne par Excel remaining First Names automatically identify karke fill kar sakta hai.",

        image:
            "image/lessons/lesson27.png",

        headers: [
            "Original Data",
            "Example Entry",
            "Flash Fill Result"
        ],

        rows: [
            [
                "Rahul Sharma",
                "Rahul",
                "Rahul"
            ],
            [
                "Amit Kumar",
                "Amit",
                "Amit"
            ],
            [
                "Priya Singh",
                "",
                "Priya"
            ],
            [
                "Neha Verma",
                "",
                "Neha"
            ]
        ],

        formula:
            "Flash Fill",

        result:
            "Flash Fill example pattern ko recognize karke remaining Cells mein First Names automatically fill kar deta hai."
    },

    tryItYourself: {

        task:
            "Full Names ki list se Flash Fill ka use karke First Names automatically extract kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Full Name aur B1 mein First Name type karein.",
            "A2:A5 mein Rahul Sharma, Amit Kumar, Priya Singh aur Neha Verma enter karein.",
            "B2 mein Rahul type karein.",
            "B3 Cell select karein.",
            "Data Tab mein Flash Fill option select karein.",
            "Excel remaining First Names automatically fill karega.",
            "Check kijiye ki B3:B5 mein correct First Names aaye hain."
        ],

        challenge:
            "Bonus Challenge: Full Names se Last Names automatically extract karne ke liye Flash Fill ka use kijiye."
    },

    realBusinessUse: {

        introduction:
            "Flash Fill repetitive text formatting aur data preparation tasks ko quickly complete karne mein help karta hai.",

        examples: [
            "🏦 Banking: Customer names ko First Name aur Last Name mein separate karna.",
            "💰 Finance: Reference data se required text pattern extract karna.",
            "👥 HR: Employee Full Names se First Name ya Last Name create karna.",
            "📈 Sales: Customer information ko required reporting format mein convert karna.",
            "📊 Data Analysis: Raw text data ko analysis-ready format mein prepare karna.",
            "📋 Management Reporting: Names aur text fields ko consistent format mein convert karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein Flash Fill ka main use kya hai?",

            options: [
                "Pattern recognize karke data automatically fill karna",
                "Formula calculate karna",
                "Worksheet delete karna",
                "Workbook close karna"
            ],

            answer: 0,

            explanation:
                "Correct! Flash Fill example ke pattern ko recognize karke remaining data automatically fill karta hai."
        },

        {
            question:
                "Flash Fill use karne se pehle kya karna useful hai?",

            options: [
                "Ek example manually enter karna",
                "Workbook close karna",
                "Worksheet delete karna",
                "Computer restart karna"
            ],

            answer: 0,

            explanation:
                "Correct! Ek example dene se Excel ko required pattern samajhne mein help milti hai."
        },

        {
            question:
                "Flash Fill ka use kis type ke kaam mein useful hai?",

            options: [
                "Names aur text patterns ko automatically format karna",
                "Computer restart karna",
                "Excel uninstall karna",
                "Internet browse karna"
            ],

            answer: 0,

            explanation:
                "Absolutely! Flash Fill names, text patterns aur repetitive data preparation tasks ke liye very useful hai."
        }

    ],

    keyTakeaways: [
        "Flash Fill Excel ka smart data entry feature hai.",
        "Flash Fill example ke pattern ko recognize karta hai.",
        "Names ko First Name aur Last Name mein separate karne ke liye use kiya ja sakta hai.",
        "Flash Fill repetitive text tasks ko fast banata hai.",
        "Ek example manually enter karke Excel ko required pattern samjhaya ja sakta hai.",
        "Flash Fill data preparation aur cleaning tasks mein useful hai."
    ]
},

/*==================================================
LESSON 28
==================================================*/

{
    id: 28,

    title: "Paste Special",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Smart Data Entry & Automation",

    learningObjectives: [
        "Excel mein Paste Special ka basic concept samajhna.",
        "Values, Formulas aur Formatting ko separately paste karna seekhna.",
        "Paste Special se unwanted formatting avoid karna seekhna.",
        "Data ko quickly copy aur transform karna seekhna.",
        "Excel mein repetitive copy-paste tasks ko efficient banana seekhna."
    ],

    whatIsExcel:
        "Excel mein Paste Special ek useful feature hai jo copied data ko different ways mein paste karne ki facility deta hai. Iski help se sirf Values, Formulas, Formatting ya doosre selected elements ko paste kiya ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, normal Paste mein Excel poora data copy karta hai. Paste Special mein aap decide kar sakte hain ki exactly kya paste karna hai, jaise sirf Values, sirf Formulas ya sirf Formatting.",

    practicalExample: {

        explanation:
            "Maan lijiye ek Sales Report mein formulas se calculated Total Sales values generate hui hain. Ab aapko formulas nahi balki sirf final results chahiye. Paste Special → Values ka use karke formulas ko fixed values mein convert kiya ja sakta hai.",

        image:
            "image/lessons/lesson28.png",

        headers: [
            "Paste Special Option",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "Values",
                "12500",
                "Sirf final result paste karna"
            ],
            [
                "Formulas",
                "=B2*C2",
                "Sirf formula paste karna"
            ],
            [
                "Formats",
                "Currency / Border",
                "Sirf formatting paste karna"
            ],
            [
                "Values + Number Formats",
                "₹12,500",
                "Value aur number format paste karna"
            ]
        ],

        formula:
            "=B2*C2",

        result:
            "Paste Special ki help se required data element ko selectively paste kiya ja sakta hai, jaise sirf Values, Formulas ya Formatting."
    },

    tryItYourself: {

        task:
            "Ek Sales Report create karke Paste Special ka use karke formulas ko Values mein convert kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Product, B1 mein Quantity aur C1 mein Price type karein.",
            "A2:A5 mein product names enter karein.",
            "B2:B5 mein quantity values enter karein.",
            "C2:C5 mein price values enter karein.",
            "D1 mein Total Sales type karein.",
            "D2 mein =B2*C2 formula enter karein.",
            "D2 ke Fill Handle ko drag karke D5 tak le jaiye.",
            "D2:D5 range ko Copy karein.",
            "Paste Special → Values select karke kisi new location par paste karein.",
            "Check kijiye ki pasted data mein formulas nahi balki sirf final values hain."
        ],

        challenge:
            "Bonus Challenge: Kisi formatted table ko copy karke Paste Special → Formats ka use karke doosre table par sirf same formatting apply kijiye."
    },

    realBusinessUse: {

        introduction:
            "Paste Special reporting, data cleaning aur analysis ke time unnecessary formulas aur formatting ko control karne mein bahut useful hai.",

        examples: [
            "🏦 Banking: MIS reports mein formulas ko final Values mein convert karna.",
            "💰 Finance: Financial reports mein calculated results ko fixed values ke form mein save karna.",
            "👥 HR: Employee reports mein required values ko formatting ke bina copy karna.",
            "📈 Sales: Sales calculations ko final results ke form mein share karna.",
            "📊 Data Analysis: Raw data ko required format mein convert karke analysis karna.",
            "📋 Management Reporting: Existing report ki formatting ko doosre report section mein quickly apply karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Paste Special ka main benefit kya hai?",

            options: [
                "Data ke specific elements ko selectively paste karna",
                "Workbook close karna",
                "Worksheet delete karna",
                "Excel uninstall karna"
            ],

            answer: 0,

            explanation:
                "Correct! Paste Special ki help se aap Values, Formulas, Formats aur other elements ko selectively paste kar sakte hain."
        },

        {
            question:
                "Agar formula ko final value mein convert karna ho to kya use karenge?",

            options: [
                "Paste Special → Values",
                "Paste Special → Formats",
                "Paste Special → Comments",
                "Paste Special → Column Widths"
            ],

            answer: 0,

            explanation:
                "Correct! Paste Special → Values formula ka result paste karta hai, formula ko nahi."
        },

        {
            question:
                "Sirf formatting copy karne ke liye kaunsa Paste Special option useful hai?",

            options: [
                "Formats",
                "Values",
                "Formulas",
                "Text"
            ],

            answer: 0,

            explanation:
                "Absolutely! Paste Special → Formats se sirf formatting jaise Font, Border, Fill aur Number Format apply kiye ja sakte hain."
        }

    ],

    keyTakeaways: [
        "Paste Special normal Paste se zyada control provide karta hai.",
        "Paste Special se Values, Formulas aur Formats separately paste kiye ja sakte hain.",
        "Paste Special → Values formulas ko final values mein convert karne ke liye useful hai.",
        "Paste Special → Formats se sirf formatting copy ki ja sakti hai.",
        "Paste Special reporting aur data preparation tasks mein useful hai.",
        "Paste Special Excel mein copy-paste workflow ko more efficient banata hai."
    ]
},

/*==================================================
LESSON 29
==================================================*/

{
    id: 29,

    title: "Data Validation Basics",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Smart Data Entry & Automation",

    learningObjectives: [
        "Excel mein Data Validation ka basic concept samajhna.",
        "Cell mein allowed data ko control karna seekhna.",
        "Drop-down list create karna seekhna.",
        "Incorrect data entry ko prevent karna seekhna.",
        "Data entry ko consistent aur error-free banana seekhna."
    ],

    whatIsExcel:
        "Excel mein Data Validation ek useful feature hai jo Cells mein enter kiye jaane wale data ko control karta hai. Iski help se aap specific values, numbers, dates ya predefined options ko allow kar sakte hain.",

    excelInSimpleWords:
        "Simple words mein, Data Validation Excel ko batata hai ki kisi Cell mein kya type kar sakte hain aur kya nahi. Iska sabse common use Drop-down List create karna hai, jisse user predefined options mein se value select kar sakta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aap Employee Report prepare kar rahe hain aur Status Column mein sirf Active, Inactive ya On Leave options allow karne hain. Data Validation ka use karke ek Drop-down List create ki ja sakti hai.",

        image:
            "image/lessons/lesson29.png",

        headers: [
            "Validation Type",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "Drop-down List",
                "Active, Inactive",
                "Predefined option select karna"
            ],
            [
                "Whole Number",
                "1 to 100",
                "Specific number range allow karna"
            ],
            [
                "Date",
                "01-Jan-2026",
                "Valid dates control karna"
            ],
            [
                "Text Length",
                "Maximum 10 characters",
                "Text length control karna"
            ]
        ],

        formula:
            "=COUNTIF(D2:D10,\"Active\")",

        result:
            "Data Validation se user ko allowed data enter karne ke liye guide kiya ja sakta hai aur incorrect entries ko reduce kiya ja sakta hai."
    },

    tryItYourself: {

        task:
            "Employee Status ke liye Data Validation Drop-down List create kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee Name aur B1 mein Status type karein.",
            "A2:A5 mein 4 employee names enter karein.",
            "B2:B5 range select karein.",
            "Data Tab mein Data Validation option open karein.",
            "Allow mein List select karein.",
            "Source mein Active,Inactive,On Leave type karein.",
            "OK par click karein.",
            "B2:B5 Cells mein Drop-down List check karein.",
            "Har Cell mein available options mein se ek Status select karein."
        ],

        challenge:
            "Bonus Challenge: Ek Attendance Sheet create karke Attendance Column mein Present, Absent aur Leave ki Drop-down List banaiye."
    },

    realBusinessUse: {

        introduction:
            "Data Validation business reports mein incorrect data entry ko reduce karne aur data ko consistent format mein maintain karne ke liye very useful hai.",

        examples: [
            "🏦 Banking: Customer records mein Account Status ke liye predefined options use karna.",
            "💰 Finance: Financial reports mein approved categories ke liye Drop-down List create karna.",
            "👥 HR: Employee Status, Department aur Location ke liye predefined options maintain karna.",
            "📈 Sales: Sales reports mein Product Category ya Sales Status ko control karna.",
            "📊 Data Analysis: Clean aur consistent data collect karna.",
            "📋 Management Reporting: Standardized data entry ke liye Drop-down Lists use karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein Data Validation ka main purpose kya hai?",

            options: [
                "Data entry ko control aur validate karna",
                "Workbook close karna",
                "Worksheet delete karna",
                "Excel uninstall karna"
            ],

            answer: 0,

            explanation:
                "Correct! Data Validation Cells mein allowed data ko control karta hai aur incorrect entries ko reduce karta hai."
        },

        {
            question:
                "Data Validation se commonly kya create kiya jata hai?",

            options: [
                "Drop-down List",
                "Chart",
                "Pivot Table",
                "Workbook"
            ],

            answer: 0,

            explanation:
                "Correct! Data Validation ka common use predefined options ke saath Drop-down List create karna hai."
        },

        {
            question:
                "Agar Status mein sirf Active, Inactive aur On Leave allow karna ho to kya use karenge?",

            options: [
                "Data Validation → List",
                "Data Validation → Date",
                "Data Validation → Decimal",
                "Data Validation → Text Length"
            ],

            answer: 0,

            explanation:
                "Absolutely! Data Validation → List se predefined Status options ka Drop-down create kiya ja sakta hai."
        }

    ],

    keyTakeaways: [
        "Data Validation Excel mein data entry ko control karta hai.",
        "Data Validation se Drop-down Lists create ki ja sakti hain.",
        "Numbers, Dates aur Text Length ko bhi validate kiya ja sakta hai.",
        "Data Validation incorrect data entry ko reduce karta hai.",
        "Drop-down Lists data ko consistent format mein maintain karne mein help karti hain.",
        "Data Validation business reports aur data collection mein very useful feature hai."
    ]
},

/*==================================================
LESSON 30
==================================================*/

{
    id: 30,

    title: "Text to Columns",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Smart Data Entry & Automation",

    learningObjectives: [
        "Excel mein Text to Columns ka basic concept samajhna.",
        "Combined data ko multiple Columns mein split karna seekhna.",
        "Delimiter ka use karke data separate karna seekhna.",
        "Comma, Space aur other separators ka use samajhna.",
        "Raw data ko clean aur analysis-ready format mein convert karna seekhna."
    ],

    whatIsExcel:
        "Excel mein Text to Columns ek useful data preparation feature hai jo ek Column ke combined data ko multiple Columns mein separate karta hai. Iska use Names, Addresses, Product Codes aur other text data ko split karne ke liye kiya ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, agar ek Cell mein multiple information ek saath stored hai, to Text to Columns us information ko separate Columns mein divide kar deta hai. Aap Space, Comma, Tab ya kisi other Delimiter ko use karke data split kar sakte hain.",

    practicalExample: {

        explanation:
            "Maan lijiye Column A mein Full Names stored hain, jaise Rahul Sharma. Aapko First Name aur Last Name alag Columns mein chahiye. Text to Columns mein Space ko Delimiter select karke Full Name ko automatically two Columns mein split kiya ja sakta hai.",

        image:
            "image/lessons/lesson30.png",

        headers: [
            "Original Data",
            "Delimiter",
            "Separated Data"
        ],

        rows: [
            [
                "Rahul Sharma",
                "Space",
                "Rahul | Sharma"
            ],
            [
                "Amit Kumar",
                "Space",
                "Amit | Kumar"
            ],
            [
                "Sales,North",
                "Comma",
                "Sales | North"
            ],
            [
                "Excel-Advanced",
                "Hyphen",
                "Excel | Advanced"
            ]
        ],

        formula:
            "=SUM(B2:B5)",

        result:
            "Text to Columns ki help se combined text data ko selected Delimiter ke according multiple Columns mein quickly split kiya ja sakta hai."
    },

    tryItYourself: {

        task:
            "Full Names ko First Name aur Last Name mein separate karne ke liye Text to Columns ka use kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Full Name type karein.",
            "A2:A5 mein Rahul Sharma, Amit Kumar, Priya Singh aur Neha Verma enter karein.",
            "A2:A5 range select karein.",
            "Data Tab mein Text to Columns option select karein.",
            "Delimited option select karke Next par click karein.",
            "Space ko Delimiter select karein.",
            "Next par click karein.",
            "Destination mein required starting Cell select karein.",
            "Finish par click karein.",
            "Check kijiye ki First Name aur Last Name separate Columns mein aa gaye hain."
        ],

        challenge:
            "Bonus Challenge: Sales,North jaise data ko Comma Delimiter ka use karke Product aur Region ke separate Columns mein split kijiye."
    },

    realBusinessUse: {

        introduction:
            "Text to Columns raw aur combined data ko structured format mein convert karne ke liye very useful hai, especially jab data analysis ya reporting ke liye clean data required ho.",

        examples: [
            "🏦 Banking: Customer names aur account-related text data ko separate fields mein convert karna.",
            "💰 Finance: Combined financial reference data ko separate Columns mein split karna.",
            "👥 HR: Employee Full Names ko First Name aur Last Name mein separate karna.",
            "📈 Sales: Product aur Region jaise combined information ko separate Columns mein divide karna.",
            "📊 Data Analysis: Raw imported data ko analysis-ready structured format mein convert karna.",
            "📋 Management Reporting: Combined report fields ko separate Columns mein organize karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein Text to Columns ka main purpose kya hai?",

            options: [
                "Ek Column ke data ko multiple Columns mein split karna",
                "Worksheet delete karna",
                "Workbook close karna",
                "Chart create karna"
            ],

            answer: 0,

            explanation:
                "Correct! Text to Columns combined data ko multiple Columns mein separate karne ke liye use hota hai."
        },

        {
            question:
                "Rahul Sharma ko First Name aur Last Name mein split karne ke liye kaunsa Delimiter use karenge?",

            options: [
                "Space",
                "Comma",
                "Slash",
                "Colon"
            ],

            answer: 0,

            explanation:
                "Correct! Rahul aur Sharma ke beech Space hai, isliye Space ko Delimiter select karke data split kiya ja sakta hai."
        },

        {
            question:
                "Sales,North data ko separate karne ke liye kaunsa Delimiter useful hoga?",

            options: [
                "Comma",
                "Space",
                "Hyphen",
                "Colon"
            ],

            answer: 0,

            explanation:
                "Absolutely! Sales aur North ke beech Comma hai, isliye Comma Delimiter use karke data split kiya ja sakta hai."
        }

    ],

    keyTakeaways: [
        "Text to Columns combined data ko multiple Columns mein split karta hai.",
        "Space, Comma, Tab aur other Delimiters ka use data separate karne ke liye kiya ja sakta hai.",
        "Full Names ko First Name aur Last Name mein split kiya ja sakta hai.",
        "Text to Columns raw data cleaning aur preparation mein useful hai.",
        "Imported aur combined data ko structured format mein convert kiya ja sakta hai.",
        "Text to Columns Excel mein data preparation ka important tool hai."
    ]
}


/*==================================================
SECTION 6 CLOSE
==================================================*/

                ]

            },


/*==================================================
SECTION 7
==================================================*/

{
    id: 7,

    title: "WORKSHEET MANAGEMENT",

    lessons: [


/*==================================================
LESSON 31
==================================================*/

{
    id: 31,

    title: "Insert & Delete Rows and Columns",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Worksheet Management",

    learningObjectives: [
        "Excel mein Rows aur Columns insert karna seekhna.",
        "Existing Rows aur Columns delete karna seekhna.",
        "Multiple Rows aur Columns ko efficiently manage karna seekhna.",
        "Worksheet structure ko requirement ke according modify karna seekhna.",
        "Data ko safely organize aur maintain karna seekhna."
    ],

    whatIsExcel:
        "Excel mein Insert aur Delete options ki help se Worksheet ke Rows aur Columns ko add ya remove kiya ja sakta hai. Iska use existing data structure ko change kiye bina required space create karne ya unnecessary Rows aur Columns remove karne ke liye kiya jata hai.",

    excelInSimpleWords:
        "Simple words mein, agar aapko existing data ke beech ek new Row ya Column add karna hai, to Insert ka use karein. Agar koi Row ya Column required nahi hai, to Delete ka use karke usse remove kar sakte hain.",

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Employee Report maintain kar rahe hain. Report mein ek new employee add karne ke liye existing records ke beech new Row insert ki ja sakti hai. Agar Department information ke liye ek new field chahiye, to new Column insert kiya ja sakta hai.",

        image:
            "image/lessons/lesson31.png",

        headers: [
            "Action",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "Insert Row",
                "New Employee",
                "New record add karna"
            ],
            [
                "Insert Column",
                "Department",
                "New field add karna"
            ],
            [
                "Delete Row",
                "Old Employee Record",
                "Unwanted record remove karna"
            ],
            [
                "Delete Column",
                "Unused Field",
                "Unnecessary field remove karna"
            ]
        ],

        formula:
            "=SUM(C2:C5)",

        result:
            "Insert aur Delete options ki help se Worksheet ka structure business requirement ke according easily modify kiya ja sakta hai."
    },

    tryItYourself: {

        task:
            "Ek Employee Report create karke Rows aur Columns ko insert aur delete karke practice kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee Name, B1 mein Department aur C1 mein Salary type karein.",
            "A2:C5 mein employee data enter karein.",
            "Row 3 select karein.",
            "Right-click karke Insert select karein.",
            "Check kijiye ki ek new Row add ho gayi hai.",
            "Column B select karein.",
            "Right-click karke Insert select karein.",
            "Check kijiye ki ek new Column add ho gaya hai.",
            "New Row select karke Right-click → Delete karein.",
            "New Column select karke Right-click → Delete karein.",
            "Check kijiye ki Worksheet original structure mein aa gayi hai."
        ],

        challenge:
            "Bonus Challenge: Ek saath 3 Rows select karke Insert karein aur observe karein ki Excel mein kitni new Rows add hoti hain."
    },

    realBusinessUse: {

        introduction:
            "Insert aur Delete Rows aur Columns daily Excel reporting mein Worksheet structure ko quickly update aur maintain karne ke liye very useful hain.",

        examples: [
            "🏦 Banking: Customer ya transaction records ke liye new Rows add karna.",
            "💰 Finance: Financial reports mein new calculation fields ke liye Columns insert karna.",
            "👥 HR: New employees ke records add karne ke liye Rows insert karna.",
            "📈 Sales: New Product ya Sales Category ke liye Columns add karna.",
            "📊 Data Analysis: Unnecessary Rows aur Columns remove karke data structure clean karna.",
            "📋 Management Reporting: Report requirements change hone par Rows aur Columns modify karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein new Row add karne ke liye kya use karenge?",

            options: [
                "Insert",
                "Delete",
                "Filter",
                "Sort"
            ],

            answer: 0,

            explanation:
                "Correct! Insert option ki help se Worksheet mein new Row add ki ja sakti hai."
        },

        {
            question:
                "Agar kisi Column ki zarurat nahi hai to kya karenge?",

            options: [
                "Delete Column",
                "Insert Column",
                "Freeze Column",
                "Hide Workbook"
            ],

            answer: 0,

            explanation:
                "Correct! Unnecessary Column ko remove karne ke liye Delete Column option use kiya jata hai."
        },

        {
            question:
                "Agar 3 Rows select karke Insert kiya jaye to kya hoga?",

            options: [
                "3 new Rows insert hongi",
                "Sirf 1 Row insert hogi",
                "3 Columns delete honge",
                "Worksheet close ho jayegi"
            ],

            answer: 0,

            explanation:
                "Absolutely! Jitni Rows select ki jaati hain, Insert karne par utni hi new Rows add hoti hain."
        }

    ],

    keyTakeaways: [
        "Insert option se new Rows aur Columns add kiye ja sakte hain.",
        "Delete option se unnecessary Rows aur Columns remove kiye ja sakte hain.",
        "Multiple Rows ya Columns ko ek saath insert ya delete kiya ja sakta hai.",
        "Worksheet structure ko business requirements ke according modify kiya ja sakta hai.",
        "Insert aur Delete daily Excel reporting mein frequently used tools hain.",
        "Rows aur Columns ko carefully modify karke data ko organized rakha ja sakta hai."
    ]
},

/*==================================================
LESSON 32
==================================================*/

{
    id: 32,

    title: "Row Height & Column Width",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Worksheet Management",

    learningObjectives: [
        "Excel mein Row Height ka basic concept samajhna.",
        "Column Width ko adjust karna seekhna.",
        "Data ke according Rows aur Columns ko resize karna seekhna.",
        "AutoFit ka use karna seekhna.",
        "Worksheet ko clean aur readable banana seekhna."
    ],

    whatIsExcel:
        "Excel mein Row Height aur Column Width ka use Cells ke size ko adjust karne ke liye hota hai. Agar data properly visible nahi ho raha hai, to Row Height ya Column Width ko increase ya AutoFit karke data ko clearly display kiya ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, Row Height se Row ki vertical size change hoti hai aur Column Width se Column ki horizontal size change hoti hai. AutoFit ki help se Excel data ke according automatically suitable size set kar sakta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye Employee Report mein Employee Name properly visible nahi ho raha hai kyunki Column narrow hai. Column Width increase ya AutoFit karke complete name ko easily visible banaya ja sakta hai.",

        image:
            "image/lessons/lesson32.png",

        headers: [
            "Tool",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "Row Height",
                "25",
                "Row ki vertical size adjust karna"
            ],
            [
                "Column Width",
                "20",
                "Column ki horizontal size adjust karna"
            ],
            [
                "AutoFit Row Height",
                "Automatic",
                "Content ke according Row adjust karna"
            ],
            [
                "AutoFit Column Width",
                "Automatic",
                "Content ke according Column adjust karna"
            ]
        ],

        formula:
            "=SUM(C2:C5)",

        result:
            "Row Height aur Column Width ko adjust karke Excel data ko properly visible, readable aur professionally organized banaya ja sakta hai."
    },

    tryItYourself: {

        task:
            "Ek Employee Report create karke Row Height, Column Width aur AutoFit ka practical use kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee Name, B1 mein Department aur C1 mein Salary type karein.",
            "A2:A5 mein employee names enter karein.",
            "B2:B5 mein department names enter karein.",
            "C2:C5 mein salary values enter karein.",
            "Column A ki width ko manually increase karein.",
            "Row 1 ki height ko manually increase karein.",
            "Column B select karein.",
            "Column boundary par double-click karke AutoFit Column Width apply karein.",
            "Row 1 select karein.",
            "Row boundary par double-click karke AutoFit Row Height apply karein.",
            "Check kijiye ki data properly visible aur readable hai."
        ],

        challenge:
            "Bonus Challenge: Ek long sentence ko Cell mein Wrap Text ke saath enter karke Row Height ko AutoFit karke dekhiye."
    },

    realBusinessUse: {

        introduction:
            "Proper Row Height aur Column Width professional Excel reports mein readability improve karte hain aur data ko clean format mein present karne mein help karte hain.",

        examples: [
            "🏦 Banking: Customer aur transaction reports mein long information ko clearly display karna.",
            "💰 Finance: Financial reports mein numbers aur headings ko properly fit karna.",
            "👥 HR: Employee names, departments aur designations ko clearly display karna.",
            "📈 Sales: Product names aur sales figures ko readable format mein present karna.",
            "📊 Data Analysis: Large datasets mein Columns ko required width ke according adjust karna.",
            "📋 Management Reporting: Final reports ko clean aur professional appearance dena."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein Column Width ka use kis liye hota hai?",

            options: [
                "Column ki horizontal size adjust karne ke liye",
                "Row delete karne ke liye",
                "Formula calculate karne ke liye",
                "Workbook close karne ke liye"
            ],

            answer: 0,

            explanation:
                "Correct! Column Width se Column ki horizontal size ko increase ya decrease kiya ja sakta hai."
        },

        {
            question:
                "Data ke according Column ko automatically adjust karne ke liye kya use karenge?",

            options: [
                "AutoFit Column Width",
                "Delete Column",
                "Freeze Column",
                "Hide Column"
            ],

            answer: 0,

            explanation:
                "Correct! AutoFit Column Width data ke according Column ki suitable width automatically set karta hai."
        },

        {
            question:
                "Row Height kis direction mein Row ka size change karti hai?",

            options: [
                "Vertical",
                "Horizontal",
                "Diagonal",
                "Circular"
            ],

            answer: 0,

            explanation:
                "Absolutely! Row Height Row ki vertical size ko control karti hai."
        }

    ],

    keyTakeaways: [
        "Row Height se Row ki vertical size adjust hoti hai.",
        "Column Width se Column ki horizontal size adjust hoti hai.",
        "AutoFit data ke according Row ya Column ka size automatically adjust karta hai.",
        "Proper sizing se Excel data more readable aur professional dikhta hai.",
        "Long text aur headings ke liye Column Width adjust karna useful hai.",
        "Row Height aur Column Width professional Excel reports ke liye important formatting tools hain."
    ]
},

/*==================================================
LESSON 33
==================================================*/

{
    id: 33,

    title: "Hide & Unhide Rows, Columns & Sheets",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Worksheet Management",

    learningObjectives: [
        "Excel mein Rows aur Columns hide karna seekhna.",
        "Hidden Rows aur Columns ko unhide karna seekhna.",
        "Worksheet ko temporarily hide aur unhide karna seekhna.",
        "Sensitive ya unnecessary information ko temporarily hide karna seekhna.",
        "Large Excel Worksheets ko clean aur manageable banana seekhna."
    ],

    whatIsExcel:
        "Excel mein Hide aur Unhide feature ki help se Rows, Columns aur Worksheets ko temporarily hide kiya ja sakta hai. Hidden data delete nahi hota, balki Worksheet mein temporarily invisible ho jata hai.",

    excelInSimpleWords:
        "Simple words mein, agar koi Row ya Column abhi screen par nahi dikhana hai lekin data ko delete bhi nahi karna hai, to usse Hide kar sakte hain. Baad mein Unhide karke data ko wapas visible kiya ja sakta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye ek Sales Report mein kuch supporting calculation Columns hain jo final report mein show nahi karne hain. Un Columns ko Hide karke report ko clean rakha ja sakta hai. Jab calculation check karni ho, to Columns ko Unhide kiya ja sakta hai.",

        image:
            "image/lessons/lesson33.png",

        headers: [
            "Action",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "Hide Row",
                "Row 5",
                "Temporary information hide karna"
            ],
            [
                "Hide Column",
                "Column D",
                "Supporting data hide karna"
            ],
            [
                "Unhide Row",
                "Row 5",
                "Hidden Row ko visible karna"
            ],
            [
                "Hide Sheet",
                "Sheet2",
                "Worksheet ko temporarily hide karna"
            ]
        ],

        formula:
            "=SUM(B2:B5)",

        result:
            "Hide aur Unhide features ki help se unnecessary information ko temporarily hide karke Worksheet ko clean aur easy to use banaya ja sakta hai."
    },

    tryItYourself: {

        task:
            "Ek simple Sales Report create karke Rows, Columns aur Worksheet ko Hide aur Unhide karke practice kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Product, B1 mein Quantity, C1 mein Price aur D1 mein Total Sales type karein.",
            "A2:D5 mein sample sales data enter karein.",
            "D2 mein =B2*C2 formula enter karein.",
            "Column C select karein.",
            "Right-click karke Hide select karein.",
            "Check kijiye ki Column C temporarily hide ho gaya hai.",
            "Hidden Column B aur D ke beech area select karke Right-click → Unhide karein.",
            "Ek Worksheet Tab par Right-click karke Hide select karein.",
            "Kisi visible Worksheet Tab par Right-click karke Unhide select karein.",
            "Hidden Worksheet select karke OK karein.",
            "Check kijiye ki Worksheet wapas visible ho gayi hai."
        ],

        challenge:
            "Bonus Challenge: Ek supporting calculation Column create karke usse Hide karein aur phir Unhide karke verify karein ki data delete nahi hua."
    },

    realBusinessUse: {

        introduction:
            "Hide aur Unhide features large reports ko clean rakhne aur supporting information ko temporarily manage karne ke liye useful hain.",

        examples: [
            "🏦 Banking: Supporting calculation Columns ko final MIS report mein hide karna.",
            "💰 Finance: Detailed calculation data ko temporarily hide karke summary report present karna.",
            "👥 HR: Unused employee information Columns ko temporarily hide karna.",
            "📈 Sales: Supporting sales calculations ko hide karke clean management report banana.",
            "📊 Data Analysis: Large datasets mein unnecessary Columns ko temporarily hide karna.",
            "📋 Management Reporting: Detailed supporting Worksheets ko hide karke main report ko organized rakhna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein Row ko Hide karne se kya hota hai?",

            options: [
                "Row temporarily invisible ho jaati hai",
                "Row permanently delete ho jaati hai",
                "Workbook close ho jata hai",
                "Formula automatically delete ho jata hai"
            ],

            answer: 0,

            explanation:
                "Correct! Hide karne par Row temporarily invisible hoti hai, lekin data delete nahi hota."
        },

        {
            question:
                "Hidden Column ko wapas visible karne ke liye kya use karenge?",

            options: [
                "Unhide",
                "Delete",
                "Filter",
                "Freeze"
            ],

            answer: 0,

            explanation:
                "Correct! Unhide option ki help se hidden Row ya Column ko wapas visible kiya ja sakta hai."
        },

        {
            question:
                "Worksheet ko Hide karne se kya hota hai?",

            options: [
                "Worksheet temporarily invisible ho jaati hai",
                "Worksheet permanently delete ho jaati hai",
                "Workbook delete ho jata hai",
                "All formulas remove ho jaate hain"
            ],

            answer: 0,

            explanation:
                "Absolutely! Worksheet Hide karne par sheet temporarily invisible hoti hai aur baad mein Unhide ki ja sakti hai."
        }

    ],

    keyTakeaways: [
        "Hide feature Rows, Columns aur Worksheets ko temporarily invisible karta hai.",
        "Hidden data delete nahi hota.",
        "Unhide option se hidden Rows aur Columns ko wapas visible kiya ja sakta hai.",
        "Worksheets ko bhi Hide aur Unhide kiya ja sakta hai.",
        "Supporting calculations ko hide karke reports ko clean rakha ja sakta hai.",
        "Hide aur Unhide large Excel Worksheets ko manage karne ke liye useful features hain."
    ]
},

/*==================================================
LESSON 34
==================================================*/

{
    id: 34,

    title: "Freeze Panes & Split Window",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Worksheet Management",

    learningObjectives: [
        "Excel mein Freeze Panes ka basic concept samajhna.",
        "Top Row aur First Column ko freeze karna seekhna.",
        "Large datasets mein headings ko visible rakhna seekhna.",
        "Split Window ka basic use samajhna.",
        "Large Worksheets ko easily navigate karna seekhna."
    ],

    whatIsExcel:
        "Excel mein Freeze Panes aur Split Window Worksheet ko navigate karne ke useful tools hain. Freeze Panes ki help se selected Rows ya Columns ko scroll karte waqt visible rakha ja sakta hai, jabki Split Window Worksheet ko separate viewing sections mein divide karta hai.",

    excelInSimpleWords:
        "Simple words mein, agar aapke paas bahut bada data hai aur neeche scroll karne par headings disappear ho jaati hain, to Freeze Panes ka use karke headings ko screen par fixed rakha ja sakta hai. Split Window se same Worksheet ke different areas ko ek saath view kiya ja sakta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye ek Sales Report mein 5000 rows hain. Jab aap neeche scroll karenge to Product, Quantity aur Sales jaise headings screen se disappear ho sakti hain. Freeze Top Row use karke headings ko continuously visible rakha ja sakta hai.",

        image:
            "image/lessons/lesson34.png",

        headers: [
            "Tool",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "Freeze Top Row",
                "Row 1",
                "Column headings visible rakhna"
            ],
            [
                "Freeze First Column",
                "Column A",
                "Important labels visible rakhna"
            ],
            [
                "Freeze Panes",
                "Rows + Columns",
                "Multiple headings aur labels fixed rakhna"
            ],
            [
                "Split Window",
                "Worksheet Sections",
                "Different areas ek saath view karna"
            ]
        ],

        formula:
            "=SUM(D2:D5000)",

        result:
            "Freeze Panes large datasets mein important headings aur labels ko visible rakhta hai, jabki Split Window Worksheet ke different sections ko simultaneously view karne mein help karta hai."
    },

    tryItYourself: {

        task:
            "Ek large Sales Report create karke Freeze Panes aur Split Window ka practical use kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Product, B1 mein Quantity, C1 mein Price aur D1 mein Total Sales type karein.",
            "Multiple rows mein sample sales data enter karein.",
            "View Tab mein Freeze Panes option open karein.",
            "Freeze Top Row select karein.",
            "Worksheet mein neeche scroll karein.",
            "Check kijiye ki Row 1 ki headings visible hain.",
            "View Tab mein Split option select karein.",
            "Worksheet ko separate viewing sections mein observe karein.",
            "Split ko remove karke normal Worksheet view par wapas aayein."
        ],

        challenge:
            "Bonus Challenge: Freeze First Column ka use karke dekhiye aur horizontally scroll karne par Column A ko visible rakhiye."
    },

    realBusinessUse: {

        introduction:
            "Freeze Panes aur Split Window large reports aur datasets ko navigate karne mein time save karte hain aur important information ko easily accessible rakhte hain.",

        examples: [
            "🏦 Banking: Large transaction reports mein Customer ID aur headings ko visible rakhna.",
            "💰 Finance: Financial reports mein important Row headings ko scroll karte waqt fixed rakhna.",
            "👥 HR: Large employee databases mein Employee Name Column ko visible rakhna.",
            "📈 Sales: Thousands of sales records mein Product headings ko continuously visible rakhna.",
            "📊 Data Analysis: Large datasets ke different sections ko efficiently review karna.",
            "📋 Management Reporting: Long reports mein important labels ko screen par visible rakhna."
        ]
    },

    quickCheck: [

        {
            question:
                "Large dataset mein headings ko scroll karte waqt visible rakhne ke liye kya use karenge?",

            options: [
                "Freeze Panes",
                "Delete",
                "Sort",
                "Find & Replace"
            ],

            answer: 0,

            explanation:
                "Correct! Freeze Panes ki help se important Rows aur Columns ko scroll karte waqt visible rakha ja sakta hai."
        },

        {
            question:
                "Sirf first Row ko fixed rakhne ke liye kaunsa option useful hai?",

            options: [
                "Freeze Top Row",
                "Freeze First Column",
                "Split",
                "Hide"
            ],

            answer: 0,

            explanation:
                "Correct! Freeze Top Row Row 1 ko scrolling ke time visible rakhta hai."
        },

        {
            question:
                "Split Window ka basic purpose kya hai?",

            options: [
                "Worksheet ke different areas ko ek saath view karna",
                "Worksheet delete karna",
                "Formula calculate karna",
                "Workbook close karna"
            ],

            answer: 0,

            explanation:
                "Absolutely! Split Window Worksheet ko separate viewing sections mein divide karta hai, jisse different areas ko simultaneously view kiya ja sakta hai."
        }

    ],

    keyTakeaways: [
        "Freeze Panes large datasets mein important information ko visible rakhta hai.",
        "Freeze Top Row se headings scrolling ke time visible rehti hain.",
        "Freeze First Column se important labels horizontally scroll karte waqt visible rehte hain.",
        "Freeze Panes se Rows aur Columns ko simultaneously freeze kiya ja sakta hai.",
        "Split Window Worksheet ke different areas ko ek saath view karne mein help karta hai.",
        "Large Excel reports aur datasets ko navigate karne ke liye ye tools very useful hain."
    ]
},

/*==================================================
LESSON 35
==================================================*/

{
    id: 35,

    title: "Working with Multiple Worksheets",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Worksheet Management",

    learningObjectives: [
        "Excel Workbook mein multiple Worksheets ka concept samajhna.",
        "New Worksheet add karna seekhna.",
        "Worksheet rename karna seekhna.",
        "Worksheets ko move aur copy karna seekhna.",
        "Worksheets ko organize karke efficiently manage karna seekhna."
    ],

    whatIsExcel:
        "Excel Workbook ke andar multiple Worksheets create ki ja sakti hain. Har Worksheet mein different type ka data maintain kiya ja sakta hai, jaise Sales, Expenses, Employees aur Summary. Multiple Worksheets ki help se large Workbook ko properly organize kiya ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, ek Excel Workbook ko ek folder samajh sakte hain aur Worksheets ko us folder ke andar separate pages. Har Worksheet mein alag data rakha ja sakta hai aur zarurat ke according unhe rename, move, copy ya delete kiya ja sakta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Monthly Business Report prepare kar rahe hain. Ek Worksheet mein Sales Data, doosri mein Expenses, teesri mein Employee Data aur fourth mein Summary rakhi ja sakti hai. Isse complete Workbook organized aur easy to manage rahega.",

        image:
            "image/lessons/lesson35.png",

        headers: [
            "Worksheet",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "Sheet1",
                "Sales",
                "Sales data maintain karna"
            ],
            [
                "Sheet2",
                "Expenses",
                "Expense data maintain karna"
            ],
            [
                "Sheet3",
                "Employees",
                "Employee information maintain karna"
            ],
            [
                "Sheet4",
                "Summary",
                "Final business summary prepare karna"
            ]
        ],

        formula:
            "=SUM(Sales!D2:D10)",

        result:
            "Multiple Worksheets ki help se different business data ko separate aur organized rakha ja sakta hai, jabki formulas ke through Worksheets ke data ko connect bhi kiya ja sakta hai."
    },

    tryItYourself: {

        task:
            "Ek Business Report Workbook create karke multiple Worksheets ko add, rename, copy aur move kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "First Worksheet ko Sales rename karein.",
            "Ek new Worksheet add karein.",
            "New Worksheet ko Expenses rename karein.",
            "Ek aur Worksheet add karke Employees rename karein.",
            "Sales Worksheet mein sample sales data enter karein.",
            "Expenses Worksheet mein sample expense data enter karein.",
            "Employees Worksheet mein employee information enter karein.",
            "Sales Worksheet par Right-click karke Move or Copy option open karein.",
            "Create a copy select karke Sales Worksheet ki copy create karein.",
            "Worksheet Tabs ko drag karke unka order change karein.",
            "Check kijiye ki Workbook mein multiple organized Worksheets available hain."
        ],

        challenge:
            "Bonus Challenge: Ek Summary Worksheet create karke Sales Worksheet se total sales calculate kijiye using =SUM(Sales!D2:D10)."
    },

    realBusinessUse: {

        introduction:
            "Multiple Worksheets large business Workbooks ko organized rakhne aur different types ke data ko logically separate karne ke liye very useful hain.",

        examples: [
            "🏦 Banking: Customer Data, Transactions, MIS aur Summary ko separate Worksheets mein maintain karna.",
            "💰 Finance: Income, Expenses, Budget aur Financial Summary ko different Worksheets mein organize karna.",
            "👥 HR: Employee Data, Attendance, Salary aur Department information ko separate Worksheets mein maintain karna.",
            "📈 Sales: Monthly Sales, Product Data, Customer Data aur Sales Summary ko separate rakhna.",
            "📊 Data Analysis: Raw Data, Clean Data, Calculations aur Final Analysis ko different Worksheets mein manage karna.",
            "📋 Management Reporting: Detailed Data aur Management Summary ko separate Worksheets mein maintain karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Ek Excel Workbook mein kya multiple Worksheets ho sakti hain?",

            options: [
                "Yes, multiple Worksheets ho sakti hain",
                "No, sirf ek Worksheet hoti hai",
                "Sirf 2 Worksheets ho sakti hain",
                "Sirf 3 Worksheets ho sakti hain"
            ],

            answer: 0,

            explanation:
                "Correct! Ek Excel Workbook mein multiple Worksheets create aur manage ki ja sakti hain."
        },

        {
            question:
                "Worksheet ka naam change karne ke liye kya kar sakte hain?",

            options: [
                "Worksheet Tab par Right-click → Rename",
                "Workbook close karein",
                "Formula Bar delete karein",
                "Column hide karein"
            ],

            answer: 0,

            explanation:
                "Correct! Worksheet Tab par Right-click karke Rename option se Worksheet ka naam change kiya ja sakta hai."
        },

        {
            question:
                "Do Worksheets ke data ko formula ke through connect karne ke liye kya use kiya ja sakta hai?",

            options: [
                "Sheet Reference",
                "Hide",
                "Freeze Panes",
                "Text to Columns"
            ],

            answer: 0,

            explanation:
                "Absolutely! Sheet Reference ka use karke ek Worksheet ke data ko doosri Worksheet ke formulas mein reference kiya ja sakta hai."
        }

    ],

    keyTakeaways: [
        "Ek Excel Workbook mein multiple Worksheets create ki ja sakti hain.",
        "Different types of data ko separate Worksheets mein organize kiya ja sakta hai.",
        "Worksheets ko Rename, Move aur Copy kiya ja sakta hai.",
        "Worksheet Tabs ko drag karke unka order change kiya ja sakta hai.",
        "Sheet References ki help se different Worksheets ke data ko connect kiya ja sakta hai.",
        "Multiple Worksheets large business Workbooks ko organized aur easy to manage banati hain."
    ]
}


/*==================================================
SECTION 7 CLOSE
==================================================*/

                ]

            },


/*==================================================
SECTION 8
==================================================*/

{
    id: 8,

    title: "WORKING WITH EXCEL DATA",

    lessons: [

/*==================================================
LESSON 36
==================================================*/

{
    id: 36,

    title: "Sorting Data",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Working with Excel Data",

    learningObjectives: [
        "Excel mein Sorting ka basic concept samajhna.",
        "Data ko Ascending aur Descending order mein sort karna seekhna.",
        "Text, Numbers aur Dates ko sort karna seekhna.",
        "Multiple Columns ke basis par data sort karna seekhna.",
        "Large datasets ko organized aur easy to analyze banana seekhna."
    ],

    whatIsExcel:
        "Excel mein Sorting ek data management feature hai jo data ko specific order mein arrange karta hai. Text ko A to Z ya Z to A, numbers ko Smallest to Largest ya Largest to Smallest aur Dates ko Oldest to Newest ya Newest to Oldest order mein sort kiya ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, Sorting ka matlab data ko proper order mein arrange karna hai. Jaise employee names ko A to Z, salary ko highest to lowest ya transaction dates ko oldest to newest arrange karna.",

    practicalExample: {

        explanation:
            "Maan lijiye aapke paas Employee Sales Report hai aur aapko highest sales wale employees sabse upar dekhne hain. Sales Column ko Largest to Smallest sort karke highest sales se lowest sales tak complete data arrange kiya ja sakta hai.",

        image:
            "image/lessons/lesson36.png",

        headers: [
            "Sort Type",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "A to Z",
                "Amit, Rahul, Sunil",
                "Text ascending order"
            ],
            [
                "Z to A",
                "Sunil, Rahul, Amit",
                "Text descending order"
            ],
            [
                "Smallest to Largest",
                "100, 250, 500",
                "Numbers ascending order"
            ],
            [
                "Largest to Smallest",
                "500, 250, 100",
                "Numbers descending order"
            ]
        ],

        formula:
            "=SORT(A2:D10,4,-1)",

        result:
            "Sorting ki help se complete data ko required order mein arrange kiya ja sakta hai, jisse important records ko quickly identify aur analyze karna easy ho jata hai."
    },

    tryItYourself: {

        task:
            "Ek Sales Report create karke Employee Sales ko highest se lowest order mein sort kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee, B1 mein Department aur C1 mein Sales type karein.",
            "A2:C6 mein sample employee data enter karein.",
            "Complete data range select karein.",
            "Data Tab mein Sort option select karein.",
            "Sort By mein Sales Column select karein.",
            "Order mein Largest to Smallest select karein.",
            "OK par click karein.",
            "Check kijiye ki highest Sales wala employee sabse upar aa gaya hai.",
            "Ab same data ko Smallest to Largest order mein sort karke dekhiye."
        ],

        challenge:
            "Bonus Challenge: Employee names ko A to Z order mein sort karein aur phir Sales Column ko Largest to Smallest order mein sort karke difference observe karein."
    },

    realBusinessUse: {

        introduction:
            "Sorting business reports aur large datasets mein important records ko quickly arrange, compare aur analyze karne ke liye very useful hai.",

        examples: [
            "🏦 Banking: Transactions ko highest amount, date ya customer name ke according sort karna.",
            "💰 Finance: Financial values ko highest to lowest order mein arrange karna.",
            "👥 HR: Employee names, salaries ya joining dates ko required order mein sort karna.",
            "📈 Sales: Highest performing employees ya products ko identify karna.",
            "📊 Data Analysis: Large datasets ko analysis requirement ke according arrange karna.",
            "📋 Management Reporting: Top performers aur high-value records ko quickly identify karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein Sorting ka main purpose kya hai?",

            options: [
                "Data ko specific order mein arrange karna",
                "Data delete karna",
                "Worksheet hide karna",
                "Workbook close karna"
            ],

            answer: 0,

            explanation:
                "Correct! Sorting data ko selected order mein arrange karne ke liye use hoti hai."
        },

        {
            question:
                "Numbers ko highest se lowest order mein arrange karne ke liye kya select karenge?",

            options: [
                "Largest to Smallest",
                "Smallest to Largest",
                "A to Z",
                "Z to A"
            ],

            answer: 0,

            explanation:
                "Correct! Largest to Smallest numbers ko highest value se lowest value tak arrange karta hai."
        },

        {
            question:
                "Employee names ko alphabetical order mein arrange karne ke liye kaunsa option useful hai?",

            options: [
                "A to Z",
                "Largest to Smallest",
                "Newest to Oldest",
                "Smallest to Largest"
            ],

            answer: 0,

            explanation:
                "Absolutely! A to Z text data ko alphabetical ascending order mein arrange karta hai."
        }

    ],

    keyTakeaways: [
        "Sorting data ko specific order mein arrange karta hai.",
        "Text ko A to Z ya Z to A order mein sort kiya ja sakta hai.",
        "Numbers ko Smallest to Largest ya Largest to Smallest sort kiya ja sakta hai.",
        "Dates ko bhi required chronological order mein sort kiya ja sakta hai.",
        "Sorting large datasets ko organize aur analyze karne mein help karti hai.",
        "Excel mein Sorting important records ko quickly identify karne ka useful feature hai."
    ]
},

/*==================================================
LESSON 37
==================================================*/

{
    id: 37,

    title: "Filtering Data",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Working with Excel Data",

    learningObjectives: [
        "Excel mein Filtering ka basic concept samajhna.",
        "Specific data ko Filter karke display karna seekhna.",
        "Text, Numbers aur Dates par Filters apply karna seekhna.",
        "Multiple conditions ke basis par data Filter karna seekhna.",
        "Large datasets mein required information quickly find karna seekhna."
    ],

    whatIsExcel:
        "Excel mein Filtering ek data management feature hai jo large dataset mein se sirf required records ko temporarily display karta hai. Filter apply karne par unwanted records hide ho jaate hain, lekin original data delete nahi hota.",

    excelInSimpleWords:
        "Simple words mein, Filtering ka matlab hai bade data mein se sirf wahi records dekhna jo aapko chahiye. Jaise sirf Mumbai employees, sirf Active accounts ya sirf ₹50,000 se zyada sales wale records dekhna.",

    practicalExample: {

        explanation:
            "Maan lijiye aapke paas Employee Sales Report mein different cities ke employees hain. Agar aapko sirf Mumbai employees ki sales dekhni hai, to City Column par Mumbai ka Filter apply karke sirf Mumbai ke records display kiye ja sakte hain.",

        image:
            "image/lessons/lesson37.png",

        headers: [
            "Filter Type",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "Text Filter",
                "City = Mumbai",
                "Specific text records display karna"
            ],
            [
                "Number Filter",
                "Sales > 50000",
                "Specific number range display karna"
            ],
            [
                "Date Filter",
                "January 2026",
                "Specific date records display karna"
            ],
            [
                "Multiple Filter",
                "Mumbai + Sales > 50000",
                "Multiple conditions apply karna"
            ]
        ],

        formula:
            "=FILTER(A2:D10,D2:D10>50000)",

        result:
            "Filtering ki help se large dataset mein sirf required records temporarily display kiye ja sakte hain, bina original data ko delete kiye."
    },

    tryItYourself: {

        task:
            "Ek Sales Report create karke City aur Sales ke basis par Filters apply kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee, B1 mein City, C1 mein Department aur D1 mein Sales type karein.",
            "A2:D8 mein sample employee data enter karein.",
            "Complete data range select karein.",
            "Data Tab mein Filter option select karein.",
            "City Column ke Filter Arrow par click karein.",
            "Sirf Mumbai select karein.",
            "OK par click karein.",
            "Check kijiye ki sirf Mumbai employees display ho rahe hain.",
            "City Filter clear karein.",
            "Sales Column par Number Filter apply karke Greater Than 50000 select karein.",
            "Check kijiye ki sirf ₹50,000 se zyada Sales wale records display ho rahe hain."
        ],

        challenge:
            "Bonus Challenge: City = Mumbai aur Sales > 50000 dono conditions ko apply karke dekhiye ki kitne records match karte hain."
    },

    realBusinessUse: {

        introduction:
            "Filtering large business datasets mein required records ko quickly identify karne aur unnecessary information ko temporarily hide karne ke liye very useful hai.",

        examples: [
            "🏦 Banking: Sirf specific branch, city ya transaction type ke records dekhna.",
            "💰 Finance: High-value transactions ya specific financial categories ko filter karna.",
            "👥 HR: Specific department, location ya employee status ke records display karna.",
            "📈 Sales: High-performing products, cities ya salespersons ko identify karna.",
            "📊 Data Analysis: Large datasets mein required subset of data ko quickly analyze karna.",
            "📋 Management Reporting: Specific business conditions ke according records ko review karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein Filtering ka main purpose kya hai?",

            options: [
                "Required records ko temporarily display karna",
                "Data permanently delete karna",
                "Workbook close karna",
                "Worksheet rename karna"
            ],

            answer: 0,

            explanation:
                "Correct! Filtering required records ko display karta hai aur unwanted records ko temporarily hide karta hai."
        },

        {
            question:
                "Filter apply karne par unwanted data ka kya hota hai?",

            options: [
                "Temporarily hide hota hai",
                "Permanently delete ho jata hai",
                "Workbook se remove ho jata hai",
                "Formula mein convert ho jata hai"
            ],

            answer: 0,

            explanation:
                "Correct! Filter unwanted records ko temporarily hide karta hai. Original data delete nahi hota."
        },

        {
            question:
                "Sales mein sirf ₹50,000 se zyada records dekhne ke liye kya use karenge?",

            options: [
                "Number Filter → Greater Than",
                "Text Filter → Begins With",
                "Sort → A to Z",
                "Freeze Panes"
            ],

            answer: 0,

            explanation:
                "Absolutely! Number Filter → Greater Than ka use karke ₹50,000 se zyada values wale records display kiye ja sakte hain."
        }

    ],

    keyTakeaways: [
        "Filtering large datasets mein required records ko quickly display karta hai.",
        "Filter apply karne par unwanted records temporarily hide hote hain.",
        "Text, Numbers aur Dates ke basis par Filters apply kiye ja sakte hain.",
        "Multiple conditions ko combine karke specific records identify kiye ja sakte hain.",
        "Filtering original data ko delete nahi karta.",
        "Excel mein Filtering data analysis aur reporting ke liye very useful feature hai."
    ]
},

/*==================================================
LESSON 38
==================================================*/

{
    id: 38,

    title: "Excel Tables Basics",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Working with Excel Data",

    learningObjectives: [
        "Excel Table ka basic concept samajhna.",
        "Normal data range ko Excel Table mein convert karna seekhna.",
        "Table Headers aur Table Style ka use samajhna.",
        "Excel Table mein automatically expanding data ko samajhna.",
        "Tables ko Sorting aur Filtering ke saath use karna seekhna."
    ],

    whatIsExcel:
        "Excel Table ek structured data range hota hai jo data ko organized format mein manage karne mein help karta hai. Table create karne ke baad Excel automatically Headers, Filters, Formatting aur data expansion jaise useful features provide karta hai.",

    excelInSimpleWords:
        "Simple words mein, Excel Table normal data range ko smart aur organized format mein convert karta hai. Table mein new data add karne par Excel usse automatically Table ka part bana sakta hai aur har Column mein Filter option available hota hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aapke paas Sales Data mein Product, Quantity, Price aur Total Sales Columns hain. Is range ko Excel Table mein convert karne par Filters automatically add ho jaate hain aur new records add karna bhi easier ho jata hai.",

        image:
            "image/lessons/lesson38.png",

        headers: [
            "Table Feature",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "Table Headers",
                "Product, Quantity, Sales",
                "Columns ko identify karna"
            ],
            [
                "Filter Buttons",
                "Sales > 50000",
                "Required records filter karna"
            ],
            [
                "Table Style",
                "Banded Rows",
                "Data ko readable banana"
            ],
            [
                "Auto Expansion",
                "New Sales Row",
                "Table ko automatically expand karna"
            ]
        ],

        formula:
            "=SUM(SalesTable[Total Sales])",

        result:
            "Excel Table data ko structured format mein organize karta hai aur Sorting, Filtering, Formatting aur dynamic formulas jaise features ko easier banata hai."
    },

    tryItYourself: {

        task:
            "Ek Sales Data range ko Excel Table mein convert karke Table ke basic features practice kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Product, B1 mein Quantity, C1 mein Price aur D1 mein Total Sales type karein.",
            "A2:D6 mein sample sales data enter karein.",
            "Complete data range select karein.",
            "Insert Tab mein Table option select karein.",
            "My table has headers option check karein.",
            "OK par click karein.",
            "Check kijiye ki data Excel Table mein convert ho gaya hai.",
            "Table Header ke Filter Arrow par click karke available options dekhiye.",
            "Table Design Tab mein different Table Styles try kijiye.",
            "Table ke neeche ek new record enter karke check kijiye ki Table automatically expand hota hai."
        ],

        challenge:
            "Bonus Challenge: Table ka naam SalesTable rakhiye aur =SUM(SalesTable[Total Sales]) formula use karke complete Sales ka total calculate kijiye."
    },

    realBusinessUse: {

        introduction:
            "Excel Tables business data ko structured aur manageable format mein maintain karne ke liye very useful hain, especially jab data regularly update hota hai.",

        examples: [
            "🏦 Banking: Customer aur transaction data ko structured Tables mein maintain karna.",
            "💰 Finance: Monthly financial transactions aur calculations ko Table format mein organize karna.",
            "👥 HR: Employee database ko structured Table ke form mein maintain karna.",
            "📈 Sales: Daily sales transactions ko Table mein manage aur filter karna.",
            "📊 Data Analysis: Structured Tables ko formulas aur analysis ke liye use karna.",
            "📋 Management Reporting: Dynamic business reports ke liye Tables ka use karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel Table create karne ka main benefit kya hai?",

            options: [
                "Data ko structured aur organized format mein manage karna",
                "Workbook close karna",
                "Data permanently delete karna",
                "Excel uninstall karna"
            ],

            answer: 0,

            explanation:
                "Correct! Excel Table data ko structured format mein organize karta hai aur useful features provide karta hai."
        },

        {
            question:
                "Excel Table create karne ke baad Headers par commonly kya available hota hai?",

            options: [
                "Filter Buttons",
                "Computer Settings",
                "Desktop Icons",
                "Print Buttons"
            ],

            answer: 0,

            explanation:
                "Correct! Excel Table ke Headers par Filter Buttons automatically available hote hain."
        },

        {
            question:
                "Excel Table mein new data add karne par generally kya hota hai?",

            options: [
                "Table automatically expand ho sakta hai",
                "Workbook delete ho jata hai",
                "All formulas remove ho jaate hain",
                "Worksheet automatically hide ho jaati hai"
            ],

            answer: 0,

            explanation:
                "Absolutely! Table ke directly adjacent new data ko Excel automatically Table ka part bana sakta hai."
        }

    ],

    keyTakeaways: [
        "Excel Table normal data range ko structured format mein convert karta hai.",
        "Table Headers par Filter Buttons automatically available hote hain.",
        "Table Styles data ko readable aur professional banate hain.",
        "New data add karne par Table automatically expand ho sakta hai.",
        "Excel Tables Sorting aur Filtering ke saath easily work karte hain.",
        "Structured References ki help se Table data ke saath dynamic formulas create kiye ja sakte hain."
    ]
},

/*==================================================
LESSON 39
==================================================*/

{
    id: 39,

    title: "Conditional Formatting Basics",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Working with Excel Data",

    learningObjectives: [
        "Excel mein Conditional Formatting ka basic concept samajhna.",
        "Cell values ke basis par automatic formatting apply karna seekhna.",
        "Highlight Cells Rules ka use karna seekhna.",
        "Data Bars, Color Scales aur Icon Sets ka basic use samajhna.",
        "Important data ko quickly identify aur analyze karna seekhna."
    ],

    whatIsExcel:
        "Excel mein Conditional Formatting ek smart formatting feature hai jo Cell ke data ya value ke basis par automatically formatting apply karta hai. Iski help se important, high, low ya duplicate values ko easily highlight kiya ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, Conditional Formatting Excel ko batata hai ki kisi condition ke according Cell ka look change karna hai. Jaise Sales ₹50,000 se zyada ho to Cell highlight karna ya low values ko different formatting dena.",

    practicalExample: {

        explanation:
            "Maan lijiye aapke paas Employee Sales Report hai aur aapko ₹50,000 se zyada Sales wale employees ko quickly identify karna hai. Conditional Formatting mein Greater Than rule apply karke matching Sales Cells ko automatically highlight kiya ja sakta hai.",

        image:
            "image/lessons/lesson39.png",

        headers: [
            "Conditional Format",
            "Example",
            "Purpose"
        ],

        rows: [
            [
                "Greater Than",
                "Sales > 50000",
                "High values highlight karna"
            ],
            [
                "Less Than",
                "Sales < 20000",
                "Low values identify karna"
            ],
            [
                "Data Bars",
                "Sales Values",
                "Values ka visual comparison karna"
            ],
            [
                "Color Scales",
                "High / Low Values",
                "Data ko color intensity se compare karna"
            ]
        ],

        formula:
            "=C2>50000",

        result:
            "Conditional Formatting ki help se Excel data ke according Cells ko automatically highlight karta hai, jisse important information quickly identify ki ja sakti hai."
    },

    tryItYourself: {

        task:
            "Ek Sales Report create karke ₹50,000 se zyada Sales values ko Conditional Formatting se highlight kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee aur B1 mein Sales type karein.",
            "A2:B8 mein sample employee aur sales data enter karein.",
            "B2:B8 Sales range select karein.",
            "Home Tab mein Conditional Formatting option select karein.",
            "Highlight Cells Rules mein Greater Than select karein.",
            "Value mein 50000 enter karein.",
            "Required formatting select karein.",
            "OK par click karein.",
            "Check kijiye ki ₹50,000 se zyada Sales automatically highlight ho gayi hain.",
            "Ab Data Bars option apply karke Sales values ka visual comparison dekhiye."
        ],

        challenge:
            "Bonus Challenge: Sales Column par Color Scale apply karke highest aur lowest Sales values ko visually identify kijiye."
    },

    realBusinessUse: {

        introduction:
            "Conditional Formatting large datasets aur business reports mein important values ko automatically highlight karke quick analysis aur decision-making mein help karta hai.",

        examples: [
            "🏦 Banking: High-value transactions aur unusual values ko highlight karna.",
            "💰 Finance: Budget variance aur financial values ko quickly identify karna.",
            "👥 HR: Attendance, performance ya salary-related data mein important values highlight karna.",
            "📈 Sales: High-performing aur low-performing sales values ko identify karna.",
            "📊 Data Analysis: Large datasets mein patterns aur unusual values ko visually identify karna.",
            "📋 Management Reporting: KPI values aur business performance indicators ko automatically highlight karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Conditional Formatting ka main purpose kya hai?",

            options: [
                "Condition ke basis par Cells ko automatically format karna",
                "Workbook close karna",
                "Worksheet delete karna",
                "Data permanently delete karna"
            ],

            answer: 0,

            explanation:
                "Correct! Conditional Formatting data ki condition ke according Cells par automatic formatting apply karta hai."
        },

        {
            question:
                "₹50,000 se zyada Sales values ko highlight karne ke liye kya use karenge?",

            options: [
                "Greater Than Rule",
                "Less Than Rule",
                "Text to Columns",
                "Freeze Panes"
            ],

            answer: 0,

            explanation:
                "Correct! Greater Than Rule ka use karke ₹50,000 se greater Sales values ko automatically highlight kiya ja sakta hai."
        },

        {
            question:
                "Data Bars ka main purpose kya hai?",

            options: [
                "Values ka visual comparison karna",
                "Rows delete karna",
                "Worksheet rename karna",
                "Formula remove karna"
            ],

            answer: 0,

            explanation:
                "Absolutely! Data Bars values ko visual bars ke form mein show karke comparison easy banate hain."
        }

    ],

    keyTakeaways: [
        "Conditional Formatting data ki condition ke basis par automatic formatting apply karta hai.",
        "Greater Than aur Less Than jaise rules se important values highlight ki ja sakti hain.",
        "Data Bars values ka visual comparison easy banate hain.",
        "Color Scales high aur low values ko visually identify karne mein help karte hain.",
        "Conditional Formatting large datasets mein important information quickly identify karne mein useful hai.",
        "Business reports aur data analysis mein Conditional Formatting decision-making ko easier banata hai."
    ]
},

/*==================================================
LESSON 40
==================================================*/

{
    id: 40,

    title: "Excel Productivity & Best Practices",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Working with Excel Data",

    learningObjectives: [
        "Excel mein productivity improve karne ke basic methods samajhna.",
        "Excel data ko clean aur organized rakhna seekhna.",
        "Consistent formatting aur naming ka importance samajhna.",
        "Common Excel mistakes ko avoid karna seekhna.",
        "Professional Excel Worksheets ko maintain karna seekhna."
    ],

    whatIsExcel:
        "Excel Productivity ka matlab Excel mein kaam ko faster, organized aur accurate way mein complete karna hai. Best Practices follow karne se data clean rehta hai, formulas easily manage hote hain aur reports professional dikhti hain.",

    excelInSimpleWords:
        "Simple words mein, Excel mein sirf formula banana important nahi hai. Data ko proper structure mein rakhna, consistent formatting use karna, unnecessary data avoid karna aur important files ko properly maintain karna bhi equally important hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Monthly Sales Report prepare kar rahe hain. Agar Headers clear hain, data Excel Table mein hai, formulas consistent hain, unnecessary blank Rows avoid ki gayi hain aur formatting properly maintained hai, to report ko update aur analyze karna much easier ho jata hai.",

        image:
            "image/lessons/lesson40.png",

        headers: [
            "Best Practice",
            "Example",
            "Benefit"
        ],

        rows: [
            [
                "Clear Headers",
                "Employee, Sales, Date",
                "Data ko easily understand karna"
            ],
            [
                "Excel Table",
                "SalesTable",
                "Data ko structured rakhna"
            ],
            [
                "Consistent Formulas",
                "=B2*C2",
                "Calculation errors reduce karna"
            ],
            [
                "Regular Save",
                "Ctrl + S",
                "Work loss prevent karna"
            ]
        ],

        formula:
            "=SUM(SalesTable[Sales])",

        result:
            "Excel Best Practices follow karne se Workbook organized, accurate, readable aur easy to maintain banata hai."
    },

    tryItYourself: {

        task:
            "Ek professional Sales Report create karke Excel Best Practices apply kijiye.",

        steps: [
            "Excel open karein.",
            "Blank Workbook create karein.",
            "A1 mein Employee, B1 mein Department, C1 mein Sales aur D1 mein Date type karein.",
            "Sample sales data enter karein.",
            "Data ko Excel Table mein convert karein.",
            "Headers ko clear aur consistent format mein rakhein.",
            "Sales Column mein consistent number format apply karein.",
            "Date Column mein proper Date Format use karein.",
            "Required calculations ke liye consistent formulas use karein.",
            "Unnecessary blank Rows aur Columns ko avoid karein.",
            "Worksheet ko meaningful name dein, jaise Sales Report.",
            "Workbook ko regularly save karein.",
            "Final report ko check karke ensure karein ki data aur formulas correct hain."
        ],

        challenge:
            "Bonus Challenge: Apni Sales Report ko professional format mein organize karke Table, Filters, Conditional Formatting aur proper Number Formats apply kijiye."
    },

    realBusinessUse: {

        introduction:
            "Excel Best Practices professional reporting, data analysis aur daily business work mein accuracy improve karne aur time save karne mein help karti hain.",

        examples: [
            "🏦 Banking: MIS aur operational reports ko standardized format mein maintain karna.",
            "💰 Finance: Financial calculations aur reports mein consistent formulas aur formats use karna.",
            "👥 HR: Employee databases ko clean aur structured format mein maintain karna.",
            "📈 Sales: Sales reports ko Tables, Filters aur consistent formatting ke saath maintain karna.",
            "📊 Data Analysis: Clean data structure maintain karke accurate analysis karna.",
            "📋 Management Reporting: Professional, readable aur error-free reports prepare karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel Best Practices follow karne ka main benefit kya hai?",

            options: [
                "Workbook ko organized, accurate aur easy to maintain banana",
                "Workbook automatically delete karna",
                "Excel uninstall karna",
                "Data permanently hide karna"
            ],

            answer: 0,

            explanation:
                "Correct! Best Practices Workbook ko organized, accurate, readable aur easy to maintain banati hain."
        },

        {
            question:
                "Sales Report mein dates ko consistently display karne ke liye kya important hai?",

            options: [
                "Consistent Date Format",
                "Random Formatting",
                "Blank Columns",
                "Hidden Worksheet"
            ],

            answer: 0,

            explanation:
                "Correct! Consistent Date Format report ko readable aur professional banata hai."
        },

        {
            question:
                "Excel Workbook mein important data loss prevent karne ke liye kya habit useful hai?",

            options: [
                "Workbook regularly save karna",
                "Data delete karna",
                "Rows hide karna",
                "Worksheet rename karna"
            ],

            answer: 0,

            explanation:
                "Absolutely! Workbook ko regularly save karna important changes aur work loss ko prevent karne mein help karta hai."
        }

    ],

    keyTakeaways: [
        "Excel Productivity ka goal work ko faster, accurate aur organized banana hai.",
        "Clear Headers aur proper data structure maintain karna important hai.",
        "Excel Tables large datasets ko structured aur manageable banati hain.",
        "Consistent formulas aur formatting errors ko reduce karte hain.",
        "Unnecessary blank Rows aur Columns ko avoid karna good practice hai.",
        "Workbook ko regularly save karna important hai.",
        "Professional Excel reports ke liye clean, consistent aur organized approach follow karni chahiye."
    ]
},

                ]

            }


        ]

    },


/*==================================================
MODULE 2
==================================================*/

{
    id: 2,

    title: "Basic Formulas",

    description:
        "Learn Excel formulas from basic calculations to practical business applications.",

    icon: "fa-calculator",

    sections: [

/*==================================================
SECTION 1
==================================================*/

{
    id: 1,

    title: "Formula Fundamentals",

    lessons: [

/*==================================================
LESSON 41
==================================================*/

{
    id: 41,

    title: "What is an Excel Formula?",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Formula Fundamentals",

    learningObjectives: [
        "Excel formula kya hota hai samajhna.",
        "Formula ka basic structure samajhna.",
        "Excel mein formula kaise enter karte hain samajhna.",
        "Simple calculation formulas banana seekhna.",
        "Cell references ka basic use samajhna."
    ],

    whatIsExcel:
        "Excel Formula ek instruction hota hai jo Excel ko batata hai ki kisi calculation ko kaise perform karna hai. Formula generally = sign se start hota hai aur ismein numbers, operators aur cell references use kiye ja sakte hain.",

    excelInSimpleWords:
        "Simple words mein, formula Excel ko calculation karne ka command deta hai. Jaise agar A1 mein 100 aur B1 mein 200 hai, to =A1+B1 likhne par Excel automatically 300 calculate karega.",

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Sales Report prepare kar rahe hain. Product ka Price aur Quantity diya hua hai. Total Sales calculate karne ke liye Price ko Quantity se multiply kar sakte hain.",

        image:
            "image/lessons/lesson41.png",

        headers: [
            "Product",
            "Price",
            "Quantity",
            "Total Sales"
        ],

        rows: [
            [
                "Laptop",
                "50000",
                "2",
                "100000"
            ],
            [
                "Mouse",
                "1000",
                "5",
                "5000"
            ],
            [
                "Keyboard",
                "2000",
                "3",
                "6000"
            ]
        ],

        formula:
            "=B2*C2",

        result:
            "100000"
    },

    tryItYourself: {

        task:
            "Ek simple Sales Calculation worksheet create karke formula ka use kijiye.",

        steps: [
            "Excel open karein.",
            "A1 mein Product, B1 mein Price, C1 mein Quantity aur D1 mein Total Sales type karein.",
            "Product ka naam enter karein.",
            "Price aur Quantity enter karein.",
            "D2 cell mein =B2*C2 formula enter karein.",
            "Enter press karein.",
            "Formula ko neeche drag karke remaining products ka Total Sales calculate karein."
        ],

        challenge:
            "Bonus Challenge: Apni worksheet mein Total Sales ke saath Total Revenue bhi calculate karke dekhiye."
    },

    realBusinessUse: {

        introduction:
            "Excel formulas daily business calculations ko fast aur accurate banane mein help karte hain.",

        examples: [
            "🏦 Banking: Transaction amounts aur balances calculate karna.",
            "💰 Finance: Revenue, expenses aur profit calculate karna.",
            "👥 HR: Salary aur employee-related calculations karna.",
            "📈 Sales: Product Price × Quantity se Total Sales calculate karna.",
            "📊 Data Analysis: Large datasets par calculations perform karna.",
            "📋 MIS Reporting: Daily aur monthly reports mein automated calculations karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel formula generally kis symbol se start hota hai?",

            options: [
                "=",
                "+",
                "#",
                "@"
            ],

            answer: 0,

            explanation:
                "Correct! Excel formulas generally = sign se start hote hain."
        },

        {
            question:
                "A1 mein 100 aur B1 mein 200 hai. =A1+B1 ka result kya hoga?",

            options: [
                "100",
                "200",
                "300",
                "400"
            ],

            answer: 2,

            explanation:
                "Correct! 100 + 200 = 300."
        },

        {
            question:
                "Price B2 mein aur Quantity C2 mein hai. Total Sales calculate karne ke liye kaunsa formula sahi hai?",

            options: [
                "=B2+C2",
                "=B2-C2",
                "=B2*C2",
                "=B2/C2"
            ],

            answer: 2,

            explanation:
                "Correct! Price × Quantity se Total Sales calculate hota hai."
        }

    ],

    keyTakeaways: [
        "Excel Formula calculation perform karne ke liye use hota hai.",
        "Formula generally = sign se start hota hai.",
        "Formula mein numbers, operators aur cell references use kar sakte hain.",
        "Cell references formula ko dynamic aur useful banate hain.",
        "Simple formulas daily business calculations ko fast aur accurate banate hain."
    ]
},

/*==================================================
LESSON 42
==================================================*/

{
    id: 42,

    title: "Excel Operators: +, -, *, /",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Formula Fundamentals",

    learningObjectives: [
        "Excel operators kya hote hain samajhna.",
        "Addition (+) operator ka use samajhna.",
        "Subtraction (-) operator ka use samajhna.",
        "Multiplication (*) operator ka use samajhna.",
        "Division (/) operator ka use samajhna."
    ],

    whatIsExcel:
        "Excel Operators woh symbols hote hain jo Excel ko batate hain ki calculation mein kaunsa mathematical operation perform karna hai. Basic Excel calculations mein + addition, - subtraction, * multiplication aur / division ke liye use kiye jaate hain.",

    excelInSimpleWords:
        "Simple words mein, operators Excel ke calculation symbols hain. Jaise =A1+B1 addition ke liye, =A1-B1 subtraction ke liye, =A1*B1 multiplication ke liye aur =A1/B1 division ke liye use hota hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aap ek business expense report prepare kar rahe hain. Aapke paas Revenue aur Expenses ki information hai. Different calculations ke liye +, -, * aur / operators ka use kiya ja sakta hai.",

        image:
            "image/lessons/lesson42.png",

        headers: [
            "Calculation",
            "Value 1",
            "Value 2",
            "Formula",
            "Result"
        ],

        rows: [
            [
                "Total Amount",
                "5000",
                "2000",
                "=B2+C2",
                "7000"
            ],
            [
                "Remaining Amount",
                "5000",
                "2000",
                "=B3-C3",
                "3000"
            ],
            [
                "Total Sales",
                "1000",
                "5",
                "=B4*C4",
                "5000"
            ],
            [
                "Average Amount",
                "10000",
                "5",
                "=B5/C5",
                "2000"
            ]
        ],

        formula:
            "=B2+C2",

        result:
            "7000"
    },

    tryItYourself: {

        task:
            "Excel mein basic mathematical operators ka use karke different calculations create kijiye.",

        steps: [
            "Excel open karein.",
            "A1 mein Calculation, B1 mein Value 1, C1 mein Value 2 aur D1 mein Result type karein.",
            "B2 mein 5000 aur C2 mein 2000 enter karein.",
            "D2 cell mein =B2+C2 formula enter karein.",
            "B3 mein 5000 aur C3 mein 2000 enter karke D3 mein =B3-C3 formula use karein.",
            "B4 mein 1000 aur C4 mein 5 enter karke D4 mein =B4*C4 formula use karein.",
            "B5 mein 10000 aur C5 mein 5 enter karke D5 mein =B5/C5 formula use karein.",
            "Har formula ka result check karein."
        ],

        challenge:
            "Bonus Challenge: Apni worksheet mein +, -, * aur / operators ka use karke 4 different business calculations create karke dekhiye."
    },

    realBusinessUse: {

        introduction:
            "Basic Excel operators daily business calculations mein frequently use hote hain aur simple calculations ko quickly perform karne mein help karte hain.",

        examples: [
            "🏦 Banking: Amounts ko add aur subtract karke balances calculate karna.",
            "💰 Finance: Revenue aur expenses ke difference se remaining amount calculate karna.",
            "👥 HR: Employee salary ya working days ke calculations perform karna.",
            "📈 Sales: Price × Quantity se Total Sales calculate karna.",
            "📊 Data Analysis: Values ko divide karke ratios aur averages calculate karna.",
            "📋 MIS Reporting: Reports mein basic calculations automate karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein Addition ke liye kaunsa operator use hota hai?",

            options: [
                "+",
                "-",
                "*",
                "/"
            ],

            answer: 0,

            explanation:
                "Correct! + operator Addition ke liye use hota hai."
        },

        {
            question:
                "Excel mein Multiplication ke liye kaunsa operator use hota hai?",

            options: [
                "+",
                "-",
                "*",
                "/"
            ],

            answer: 2,

            explanation:
                "Correct! * operator Multiplication ke liye use hota hai."
        },

        {
            question:
                "B2 mein 10000 aur C2 mein 5 hai. Amount ko 5 se divide karne ke liye kaunsa formula sahi hai?",

            options: [
                "=B2+C2",
                "=B2-C2",
                "=B2*C2",
                "=B2/C2"
            ],

            answer: 3,

            explanation:
                "Correct! / operator Division ke liye use hota hai, isliye =B2/C2 sahi formula hai."
        }

    ],

    keyTakeaways: [
        "Excel Operators calculations perform karne ke liye use hote hain.",
        "+ operator Addition ke liye use hota hai.",
        "- operator Subtraction ke liye use hota hai.",
        "* operator Multiplication ke liye use hota hai.",
        "/ operator Division ke liye use hota hai."
    ]
},

/*==================================================
LESSON 43
==================================================*/

{
    id: 43,

    title: "Cell References in Formulas",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Formula Fundamentals",

    learningObjectives: [
        "Cell reference kya hota hai samajhna.",
        "Excel formula mein cell references ka use samajhna.",
        "Cell address jaise A1, B2 aur C3 ko identify karna seekhna.",
        "Cell references ke through calculation karna seekhna.",
        "Cell values change hone par formula result kaise update hota hai samajhna."
    ],

    whatIsExcel:
        "Cell Reference Excel mein kisi specific cell ka address hota hai. Ye column letter aur row number se milkar banta hai, jaise A1, B2 ya C5. Formula mein cell reference use karke Excel directly us cell ki value ko calculation mein use karta hai.",

    excelInSimpleWords:
        "Simple words mein, Cell Reference Excel ko batata hai ki calculation ke liye kaunsi cell ki value use karni hai. Jaise agar B2 mein Price aur C2 mein Quantity hai, to =B2*C2 formula Excel ko B2 aur C2 ki values multiply karne ke liye bolta hai.",

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Sales Report prepare kar rahe hain. Product ka Price column B mein aur Quantity column C mein hai. Total Sales calculate karne ke liye hum B2 aur C2 cell references ko formula mein use karenge.",

        image:
            "image/lessons/lesson43.png",

        headers: [
            "Product",
            "Price",
            "Quantity",
            "Total Sales"
        ],

        rows: [
            [
                "Laptop",
                "50000",
                "2",
                "100000"
            ],
            [
                "Mouse",
                "1000",
                "5",
                "5000"
            ],
            [
                "Keyboard",
                "2000",
                "3",
                "6000"
            ]
        ],

        formula:
            "=B2*C2",

        result:
            "100000"
    },

    tryItYourself: {

        task:
            "Cell references ka use karke ek simple Sales Calculation worksheet create kijiye.",

        steps: [
            "Excel open karein.",
            "A1 mein Product, B1 mein Price, C1 mein Quantity aur D1 mein Total Sales type karein.",
            "Product ka naam enter karein.",
            "Price ko B2 cell mein enter karein.",
            "Quantity ko C2 cell mein enter karein.",
            "D2 cell mein =B2*C2 formula enter karein.",
            "Enter press karke result check karein.",
            "B2 ya C2 ki value change karke dekhein ki Total Sales automatically update hoti hai."
        ],

        challenge:
            "Bonus Challenge: B2 mein Price aur C2 mein Quantity change karke dekhiye ki =B2*C2 formula ka result automatically kaise change hota hai."
    },

    realBusinessUse: {

        introduction:
            "Cell references Excel formulas ko dynamic banate hain. Business worksheets mein input values change hone par formula automatically updated result provide karta hai.",

        examples: [
            "🏦 Banking: Transaction values ko reference karke balance calculations karna.",
            "💰 Finance: Revenue aur expense cells ko reference karke financial calculations karna.",
            "👥 HR: Employee salary cells ko reference karke salary calculations karna.",
            "📈 Sales: Price aur Quantity cells ko reference karke Total Sales calculate karna.",
            "📊 Data Analysis: Different cells ki values ko formulas mein reference karke analysis karna.",
            "📋 MIS Reporting: Input cells change hone par reports ke calculated results automatically update karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein B2 kya represent karta hai?",

            options: [
                "Formula",
                "Cell Reference",
                "Worksheet",
                "Function"
            ],

            answer: 1,

            explanation:
                "Correct! B2 ek Cell Reference hai jo column B aur row 2 ko identify karta hai."
        },

        {
            question:
                "B2 mein Price aur C2 mein Quantity hai. Total Sales ke liye kaunsa formula sahi hai?",

            options: [
                "=B2+C2",
                "=B2-C2",
                "=B2*C2",
                "=B2/C2"
            ],

            answer: 2,

            explanation:
                "Correct! B2 mein Price aur C2 mein Quantity hai, isliye =B2*C2 se Total Sales calculate hogi."
        },

        {
            question:
                "Agar B2 ki value change kar di jaye aur formula =B2*C2 hai, to kya hoga?",

            options: [
                "Formula delete ho jayega",
                "Result automatically update hoga",
                "Excel close ho jayega",
                "Formula text ban jayega"
            ],

            answer: 1,

            explanation:
                "Correct! Cell reference use hone ki wajah se B2 ki value change hone par formula ka result automatically update hota hai."
        }

    ],

    keyTakeaways: [
        "Cell Reference Excel mein kisi specific cell ka address hota hai.",
        "Cell Reference column letter aur row number se milkar banta hai, jaise B2.",
        "Formulas mein cell references use karke cell ki values ko calculation mein use kar sakte hain.",
        "Cell reference use karne se formula dynamic aur useful banta hai.",
        "Referenced cell ki value change hone par formula ka result automatically update hota hai."
    ]
},

/*==================================================
LESSON 44
==================================================*/

{
    id: 44,

    title: "Relative vs Absolute Cell References",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Formula Fundamentals",

    learningObjectives: [
        "Relative Cell Reference kya hota hai samajhna.",
        "Absolute Cell Reference kya hota hai samajhna.",
        "Relative reference aur absolute reference ke beech difference samajhna.",
        "Dollar ($) sign ka use samajhna.",
        "Formula copy karte waqt cell reference ka behavior samajhna."
    ],

    whatIsExcel:
        "Excel mein Relative Reference aur Absolute Reference formula ko copy karte waqt cells ko kaise refer kiya jayega ye control karte hain. Relative Reference copy hone par change hota hai, jabki Absolute Reference mein $ sign use karke cell reference ko fixed rakha ja sakta hai.",

    excelInSimpleWords:
        "Simple words mein, Relative Reference formula copy karne par automatically change hota hai. Jaise =B2*C2 ko next row mein copy karne par =B3*C3 ho jayega. Absolute Reference mein $ sign use karne par reference fixed rehta hai, jaise =$B$2*C2.",

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Sales Report prepare kar rahe hain jahan har product ki Price aur Quantity di gayi hai. Pehle hum Relative Reference se Total Sales calculate karenge. Phir ek fixed Discount Rate ko har product ke Total Sales par apply karne ke liye Absolute Reference use karenge.",

        image:
            "image/lessons/lesson44.png",

        headers: [
            "Product",
            "Price",
            "Quantity",
            "Total Sales",
            "Discount Rate",
            "Discount Amount"
        ],

        rows: [
            [
                "Laptop",
                "50000",
                "2",
                "100000",
                "10%",
                "10000"
            ],
            [
                "Mouse",
                "1000",
                "5",
                "5000",
                "10%",
                "500"
            ],
            [
                "Keyboard",
                "2000",
                "3",
                "6000",
                "10%",
                "600"
            ]
        ],

        formula:
            "=$E$2*D2",

        result:
            "10000"
    },

    tryItYourself: {

        task:
            "Relative aur Absolute Cell References ka use karke ek Sales Discount worksheet create kijiye.",

        steps: [
            "Excel open karein.",
            "A1 mein Product, B1 mein Price, C1 mein Quantity, D1 mein Total Sales, E1 mein Discount Rate aur F1 mein Discount Amount type karein.",
            "Products ke Price aur Quantity enter karein.",
            "D2 cell mein =B2*C2 formula enter karein.",
            "D2 formula ko neeche drag karke remaining products ka Total Sales calculate karein.",
            "E2 mein 10% Discount Rate enter karein.",
            "F2 cell mein =$E$2*D2 formula enter karein.",
            "F2 formula ko neeche drag karke remaining products ka Discount Amount calculate karein.",
            "Check karein ki formula copy hone ke baad E2 reference fixed rahta hai, jabki D2 row reference change hota hai."
        ],

        challenge:
            "Bonus Challenge: Discount Rate ko 10% se 15% change karke dekhiye ki sabhi products ka Discount Amount automatically update hota hai."
    },

    realBusinessUse: {

        introduction:
            "Relative aur Absolute References business worksheets mein formulas ko efficiently copy karne aur fixed values ko multiple calculations mein use karne ke liye bahut useful hote hain.",

        examples: [
            "🏦 Banking: Fixed interest rate ko multiple transaction calculations mein use karna.",
            "💰 Finance: Fixed tax ya discount rate ko different amounts par apply karna.",
            "👥 HR: Fixed percentage ko employee salary calculations mein apply karna.",
            "📈 Sales: Fixed discount rate ko different products ke Total Sales par apply karna.",
            "📊 Data Analysis: Fixed assumptions ko multiple rows ke calculations mein use karna.",
            "📋 MIS Reporting: Fixed parameters ko report ke multiple calculations mein reference karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Formula copy karne par Relative Cell Reference ka kya hota hai?",

            options: [
                "Reference automatically change ho sakta hai",
                "Reference hamesha delete ho jata hai",
                "Reference hamesha fixed rehta hai",
                "Formula automatically text ban jata hai"
            ],

            answer: 0,

            explanation:
                "Correct! Relative Cell Reference formula copy karne par position ke according automatically change ho sakta hai."
        },

        {
            question:
                "Excel mein cell reference ko fixed rakhne ke liye kaunsa symbol use hota hai?",

            options: [
                "#",
                "@",
                "$",
                "%"
            ],

            answer: 2,

            explanation:
                "Correct! $ sign ka use Absolute Cell Reference banane ke liye kiya jata hai."
        },

        {
            question:
                "Agar E2 mein Discount Rate hai aur use fixed rakhna hai, to kaunsa reference sahi hai?",

            options: [
                "E2",
                "$E$2",
                "E$2",
                "$E2"
            ],

            answer: 1,

            explanation:
                "Correct! $E$2 mein column aur row dono fixed hain, isliye formula copy karne par E2 reference change nahi hoga."
        }

    ],

    keyTakeaways: [
        "Relative Reference formula copy karne par automatically change ho sakta hai.",
        "Absolute Reference formula copy karne par fixed rehta hai.",
        "$ sign ka use Absolute Reference banane ke liye hota hai.",
        "=$E$2 mein column E aur row 2 dono fixed hain.",
        "Relative aur Absolute References ko samajhna formula copying ke liye important hai."
    ]
},

/*==================================================
LESSON 45
==================================================*/

{
    id: 45,

    title: "Formula Copying & Fill Handle",

    completed: false,

    duration: "15 Minutes",

    difficulty: "Beginner",

    category: "Formula Fundamentals",

    learningObjectives: [
        "Formula Copying kya hota hai samajhna.",
        "Excel Fill Handle kya hota hai samajhna.",
        "Formula ko ek cell se doosre cells mein copy karna seekhna.",
        "Fill Handle ka use karke multiple rows mein calculation karna seekhna.",
        "Formula copy hone par cell references kaise change hote hain samajhna."
    ],

    whatIsExcel:
        "Excel Fill Handle ek small square hota hai jo selected cell ke bottom-right corner par दिखाई deta hai. Iska use formula ya data ko quickly adjacent cells mein copy karne ke liye kiya ja sakta hai. Formula copy karte waqt relative cell references automatically adjust ho sakte hain.",

    excelInSimpleWords:
        "Simple words mein, agar aapne ek formula pehle cell mein banaya hai, to us formula ko manually baar-baar type karne ki zarurat nahi hoti. Fill Handle ko drag karke formula ko neeche ya side mein copy kar sakte hain.",

    practicalExample: {

        explanation:
            "Maan lijiye aap ek Sales Report prepare kar rahe hain jisme multiple products ke Price aur Quantity diye gaye hain. Pehle product ke Total Sales ke liye formula banakar Fill Handle se neeche copy kar sakte hain. Excel har row ke according cell references automatically adjust karega.",

        image:
            "image/lessons/lesson45.png",

        headers: [
            "Product",
            "Price",
            "Quantity",
            "Total Sales"
        ],

        rows: [
            [
                "Laptop",
                "50000",
                "2",
                "100000"
            ],
            [
                "Mouse",
                "1000",
                "5",
                "5000"
            ],
            [
                "Keyboard",
                "2000",
                "3",
                "6000"
            ]
        ],

        formula:
            "=B2*C2",

        result:
            "100000"
    },

    tryItYourself: {

        task:
            "Fill Handle ka use karke multiple products ka Total Sales automatically calculate kijiye.",

        steps: [
            "Excel open karein.",
            "A1 mein Product, B1 mein Price, C1 mein Quantity aur D1 mein Total Sales type karein.",
            "Teen products ke naam, Price aur Quantity enter karein.",
            "D2 cell mein =B2*C2 formula enter karein.",
            "Enter press karke D2 ka result check karein.",
            "D2 cell ko select karein.",
            "Cell ke bottom-right corner par chhote square Fill Handle ko identify karein.",
            "Fill Handle ko D4 tak neeche drag karein.",
            "Check karein ki D3 mein formula =B3*C3 aur D4 mein formula =B4*C4 automatically create ho gaya hai."
        ],

        challenge:
            "Bonus Challenge: Ek fourth product add karke Fill Handle ka use karke uska Total Sales bhi calculate karke dekhiye."
    },

    realBusinessUse: {

        introduction:
            "Formula Copying aur Fill Handle large Excel worksheets mein repetitive calculations ko quickly complete karne mein help karte hain. Isse same formula ko baar-baar manually type karne ki zarurat nahi hoti.",

        examples: [
            "🏦 Banking: Multiple transactions ke liye repeated calculations apply karna.",
            "💰 Finance: Multiple records par financial calculations quickly apply karna.",
            "👥 HR: Multiple employees ke salary-related calculations copy karna.",
            "📈 Sales: Multiple products ka Total Sales calculate karna.",
            "📊 Data Analysis: Large datasets mein formulas ko multiple rows tak apply karna.",
            "📋 MIS Reporting: Repetitive calculations ko Fill Handle ke through quickly complete karna."
        ]
    },

    quickCheck: [

        {
            question:
                "Excel mein Fill Handle generally kahan hota hai?",

            options: [
                "Selected cell ke bottom-right corner par",
                "Worksheet ke top-left corner par",
                "Formula Bar ke andar",
                "Ribbon ke bottom par"
            ],

            answer: 0,

            explanation:
                "Correct! Fill Handle selected cell ke bottom-right corner par small square ke form mein hota hai."
        },

        {
            question:
                "D2 mein =B2*C2 formula hai. Is formula ko D3 mein copy karne par kya formula banega?",

            options: [
                "=B2*C2",
                "=B3*C3",
                "=B4*C4",
                "=C2*D2"
            ],

            answer: 1,

            explanation:
                "Correct! Relative references ki wajah se formula next row mein copy hone par =B3*C3 ban jayega."
        },

        {
            question:
                "Fill Handle ka main purpose kya hai?",

            options: [
                "Worksheet delete karna",
                "Formula ya data ko quickly copy karna",
                "Excel close karna",
                "Cell formatting remove karna"
            ],

            answer: 1,

            explanation:
                "Correct! Fill Handle ka use formula ya data ko adjacent cells mein quickly copy karne ke liye kiya jata hai."
        }

    ],

    keyTakeaways: [
        "Fill Handle selected cell ke bottom-right corner par small square hota hai.",
        "Fill Handle ka use formula aur data ko quickly copy karne ke liye kiya ja sakta hai.",
        "Formula copy karne par Relative Cell References automatically adjust ho sakte hain.",
        "Ek formula ko multiple rows mein apply karne ke liye Fill Handle useful hai.",
        "Formula Copying repetitive Excel calculations ko fast aur efficient banata hai."
    ]
},

/*==================================================
SECTION 1 CLOSED
SECTION 2 START
==================================================*/

{
    id: 2,
    title: "Basic Calculation Functions",

    lessons: [

                /*==================================================
                LESSON 46
                ==================================================*/

                {
                    id: 46,

                    title: "SUM Function: Add Numbers Easily",

                    completed: false,

                    duration: "15 Minutes",

                    difficulty: "Beginner",

                    category: "Basic Calculation Functions",

                    learningObjectives: [
                        "SUM function kya hota hai samajhna.",
                        "SUM function ka basic syntax samajhna.",
                        "Multiple cells ko SUM function se add karna seekhna.",
                        "Cell range ka use SUM function mein karna seekhna.",
                        "Business calculations mein SUM function ka practical use samajhna."
                    ],

                    whatIsExcel:
                        "SUM Excel ka ek basic calculation function hai jo multiple numbers ya cells ki values ko add karke total calculate karta hai. SUM function ka use manually har value ko + operator se add karne ke instead quickly total calculate karne ke liye kiya ja sakta hai.",

                    excelInSimpleWords:
                        "Simple words mein, agar A2 se A5 tak sales amounts diye hain aur humein unka total chahiye, to =SUM(A2:A5) formula use kar sakte hain. Excel automatically range ke sabhi numbers ko add karke total dega.",

                    practicalExample: {

                        explanation:
                            "Maan lijiye aap ek Daily Sales Report prepare kar rahe hain. A2 se A5 cells mein different days ki sales amount di gayi hai. Total Sales calculate karne ke liye SUM function ka use karke poori range ka total ek hi formula se nikala ja sakta hai.",

                        image:
                            "image/lessons/lesson46.png",

                        headers: [
                            "Day",
                            "Sales"
                        ],

                        rows: [
                            [
                                "Monday",
                                "25000"
                            ],
                            [
                                "Tuesday",
                                "30000"
                            ],
                            [
                                "Wednesday",
                                "22000"
                            ],
                            [
                                "Thursday",
                                "28000"
                            ]
                        ],

                        formula:
                            "=SUM(B2:B5)",

                        result:
                            "105000"
                    },

                    tryItYourself: {

                        task:
                            "SUM function ka use karke daily sales ka total calculate kijiye.",

                        steps: [
                            "Excel open karein.",
                            "A1 mein Day aur B1 mein Sales type karein.",
                            "Monday, Tuesday, Wednesday aur Thursday enter karein.",
                            "Har day ki Sales amount B2 se B5 tak enter karein.",
                            "B6 cell mein =SUM(B2:B5) formula enter karein.",
                            "Enter press karein.",
                            "Check karein ki B2 se B5 tak sabhi sales values ka total B6 mein calculate ho gaya hai."
                        ],

                        challenge:
                            "Bonus Challenge: Friday ki sales add karke new total calculate karne ke liye formula range ko update karke dekhiye."
                    },

                    realBusinessUse: {

                        introduction:
                            "SUM function business reports mein total values calculate karne ke liye bahut commonly use hota hai. Large datasets mein multiple values ko manually add karne ke bajay SUM function calculation ko fast banata hai.",

                        examples: [
                            "🏦 Banking: Multiple transactions ka total amount calculate karna.",
                            "💰 Finance: Monthly expenses ya revenue ka total calculate karna.",
                            "👥 HR: Employee salary amounts ka total calculate karna.",
                            "📈 Sales: Daily ya monthly sales ka total calculate karna.",
                            "📊 Data Analysis: Dataset ke numeric values ka total calculate karna.",
                            "📋 MIS Reporting: Daily, weekly aur monthly totals automatically calculate karna."
                        ]
                    },

                    quickCheck: [

                        {
                            question:
                                "Excel mein numbers ko quickly add karne ke liye kaunsa function use hota hai?",

                            options: [
                                "SUM",
                                "COUNT",
                                "MAX",
                                "MIN"
                            ],

                            answer: 0,

                            explanation:
                                "Correct! SUM function multiple numbers ya cells ki values ko add karke total calculate karta hai."
                        },

                        {
                            question:
                                "A2 se A5 tak values ka total calculate karne ke liye kaunsa formula sahi hai?",

                            options: [
                                "=SUM(A2:A5)",
                                "=SUM(A2-A5)",
                                "=SUM(A2*A5)",
                                "=SUM(A2/A5)"
                            ],

                            answer: 0,

                            explanation:
                                "Correct! =SUM(A2:A5) A2 se A5 tak poori cell range ki values ko add karta hai."
                        },

                        {
                            question:
                                "A2:A5 mein 25000, 30000, 22000 aur 28000 hain. =SUM(A2:A5) ka result kya hoga?",

                            options: [
                                "95000",
                                "100000",
                                "105000",
                                "110000"
                            ],

                            answer: 2,

                            explanation:
                                "Correct! 25000 + 30000 + 22000 + 28000 = 105000."
                        }

                    ],

                    keyTakeaways: [
                        "SUM Excel ka basic calculation function hai.",
                        "SUM function multiple numbers ya cells ki values ko add karta hai.",
                        "Cell range ko SUM function mein use kiya ja sakta hai.",
                        "=SUM(B2:B5) B2 se B5 tak ki values ka total calculate karta hai.",
                        "SUM function business reports mein totals calculate karne ke liye bahut useful hai."
                    ]
                }

            ]
        }

        // Section 3 yahan se continue hoga






                ]

            }

        ]

    }

];



