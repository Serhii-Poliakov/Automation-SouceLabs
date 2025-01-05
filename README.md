<!-- Project Description
Project Name: Automation of Saucedemo Page Using Playwright in JavaScript

Project Goal:
To develop automated tests for the page https://www.saucedemo.com/ by creating regression (E2E to be done) test suites. The project aims to quality of the web application through automated testing of key functionalities and user scenarios.

Framework and Technology:
Programming Language: JavaScript
Testing Framework: Playwright

project-root
│
├──.github
├── Data
│   ├── checkoutDetails.js
│   ├── loginCredentials.js
│   ├── pageUrl.js
├── Helper
│   ├──burgerMenu.js
│   ├──footer.js
├── node_modules
├── pages
│   ├── cartPage.js
│   ├── checkoutCompletePage.js
│   ├── checkoutInformationPage.js
│   ├── checkoutOverviewPage.js
│   ├── itemPage.js
│   ├── loginPage.js
│   └── productsPage.js
├── playwright-report
├── test-results
└── tests
│    ├── smoke
│   ├── E2E -to be done
│    └── regression
│        ├── cartPage.spec.js
│        ├── checkoutCompletePage.spec.js -to be done
│        ├── checkoutInformationPage.spec.js
│        ├── checkoutOverviewPage.spec.js -to be done
│        ├── itemPage.spec.js -to be done
│        ├── loginPage.spec.js
│        └── productsPage.spec.js
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
├── README.md

Project Features:
Exploratory Testing: The project was created without existing documentation, based on exploratory testing. This approach allowed for the identification of key usage scenarios and functionalities to automate.

Use of Playwright: Leveraging Playwright’s capabilities ensures reliable and scalable testing, including support for multiple browsers and platforms.

Implementation Steps:
1) Exploratory Testing of the Application:
    - Analyze and explore the functionality of the Saucedemo application.
    - Identify key usage scenarios.
2) Development of Automated Tests:
    - Write tests in JavaScript using Playwright.
    - Set up the environment for test execution.
3) Creation and Execution of Test Suites:
    - Develop regression, smoke, and E2E test suites.
4) How to run tests using tags:
    - Regression: npx playwright test --grep "@regression"
    - Smoke: npx playwright test --grep "@smoke"


    Automation Checklist:

Login page:
1) Check that header logo is present
2) Check that login form is present
3) Check login with empty fields
4) Check that after clicking the Clear Error button, the error message disappears.
5) Check login with invalid username and valid password
6) Check login with correct username and invalid password
7) Check login with correct password and empty username
8) Check login with correct username and empty password
9) Check login login with valid credentials

Products Page:
10) Check that header is present
11) Check that cart badge is hidden 
12) Check that filter is present
13) Check that quantity icon is hidden
14) Check that page title is present
15) Check cart button is available
16) Check burger menu form (all elements are present, close button)
17) Check logout functionality from burger menu
18) Check about functionality from burger menu
19) Check filter from high to low price
20) Check filter from Z to A
21) Check filter from low to high
22) Check first item details
23) Check add item to cart
24) Check that user has posibility to add few items to the cart
25) Check remove item from cart
26) Check that after relogin, item will be in the cart
27) Check footer

Cart Page:
28) Check that header is present
29) Check that cart badge is present
30) Check that filter is hidden
31) Check that quantity icon is visible
32) Check that page title is present
33) Check burger menu form (all elements are present, close button)
34) Check All Items functionality from burger menu
35) Check logout functionality from burger menu
36) Check about functionality from burger menu
37) Check item added from items page is same as shown in cart page
38) Check remove button
39) Check continue shopping button
40) Check checkout button
41) Check footer

Checkout information Page:
42) Check that header is present
43) Check that cart badge is present
44) Check that filter is hidden
45) Check that quantity icon is hidden
46) Check that page title is present
47) Check burger menu form (all elements are present, close button)
48) Check All Items functionality from burger menu
49) Check logout functionality from burger menu
50) Check about functionality from burger menu
51) Check checkout form
52) Check checkout details with empty data
53) Check checkout details with empty First name
54) Check checkout details with empty Last name
55) Check checkout details with empty zip code
56) Check the button for clearing checkout form from errors
57) Check checkout details with all correct data
58) Check cancel functionality
59) Check footer

Checkout Overview Page: 
60) Check that header is present
61) Check that cart badge is present
62) Check that filter is hidden
63) Check that quantity icon is visible
64) Check that page title is present
65) Check burger menu form (all elements are present, close button)
66) Check All Items functionality from burger menu
67) Check logout functionality from burger menu 
68) Check about functionality from burger menu
69) Check item added from items page is same as shown in cart page
70) Check payment information block
71) Check shipping information block
72) Check price breakdown
73) Check tax percentage 
74) Check price total price
75) Check Finish button 
76) Check cancel button
77) Check footer

Checkout Complete Page:
78) Check that header is present
79) Check that cart badge is hidden 
80) Check that filter is present
81) Check that quantity icon is hidden
82) Check that page title is present
83) Check burger menu form (all elements are present, close button)
84) Check All Items functionality from burger menu
85) Check logout functionality from burger menu
86) Check about functionality from burger menu
87) Check item container
88) Check Back to home functionality
89) Check footer

Item Page:
90) Check that header is present
91) Check that cart badge is hidden
92) Check that filter is hidden
93) Check that quantity icon is hidden
94) Check that page title is hidden
95) Check that burger menu is present
96) Check All Items functionality from burger menu
97) Check logout functionality from burger menu
98) Check about functionality from burger menu
99) Check added item from product page is same as shown in item page
100) Check added item from checkout overview page is same as shown in owerview page
101) Check add to cart button
102) Check go back to products page button
103) Check if user add item to the cart and then go back to products page - badge counter will should be visible
104) Check footer






