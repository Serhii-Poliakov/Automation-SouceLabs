<!-- Project Description
Project Name: Automation of Saucedemo Page Using Playwright in JavaScript

Project Goal:
To develop automated tests for the page https://www.saucedemo.com/ by creating regression (smoke, and E2E to be done) test suites. The project aims to quality of the web application through automated testing of key functionalities and user scenarios.

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
│    ├── smoke -to be done
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
11) Check cart button is available
12) Check burger menu form (all elements are present, close button)
13) Check logout functionality from burger menu
14) Check about functionality from burger menu
15) Check filter from high to low price
16) Check first item details
17) Check add item to cart
18) Check remove item from cart
19) Check footer

Item Page: - To be done

Cart Page:
20) Check that header is present
21) Check burger menu form (all elements are present, close button)
22) Check logout functionality from burger menu
23) Check about functionality from burger menu
24) Check item added from items page is same as shown in cart page
25) Check remove button
26) Check continue shopping button
27) Check checkout button

Checkout information Page:
28) Check that header is present
29) Check burger menu form (all elements are present, close button)
30) Check logout functionality from burger menu
31) Check about functionality from burger menu
32) Check checkout form
33) Check checkout details with empty data
34) Check checkout details with empty First name
35) Check checkout details with empty Last name
36) Check checkout details with empty zip code
37) Check the button for clearing checkout form from errors
38) Check checkout details with all correct data
39) Check checkout details with all correct data

Checkout Overview Page: 
40) Check that header is present
41) Check that burger menu is present
42) Check logout functionality from burger menu
43) Check about functionality from burger menu
44) Check item added from items page is same as shown in cart pag
45) Check payment information block
46) Check shipping information block
47) Check price breakdown
48) Check tax percentage 
49) Check price total price
50) Check Finish button 
51) Check cancel button

Checkout Complete Page - to be done






