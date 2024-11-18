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
16) Check filter from Z to A
17) Check filter from low to high
18) Check first item details
19) Check add item to cart
20) Check that user has posibility to add few items to the cart
21) Check remove item from cart
22) Check that after relogin, item will be in the cart
23) Check footer

Cart Page:
24) Check that header is present
25) Check burger menu form (all elements are present, close button)
26) Check logout functionality from burger menu
27) Check about functionality from burger menu
28) Check item added from items page is same as shown in cart page
29) Check remove button
30) Check continue shopping button
31) Check checkout button
32) Check footer

Checkout information Page:
33) Check that header is present
34) Check burger menu form (all elements are present, close button)
35) Check logout functionality from burger menu
36) Check about functionality from burger menu
37) Check checkout form
38) Check checkout details with empty data
39) Check checkout details with empty First name
40) Check checkout details with empty Last name
41) Check checkout details with empty zip code
42) Check the button for clearing checkout form from errors
43) Check checkout details with all correct data
44) Check cancel functionality
45) Check footer

Checkout Overview Page: 
46) Check that header is present
47) Check that burger menu is present
48) Check logout functionality from burger menu
49) Check about functionality from burger menu
50) Check item added from items page is same as shown in cart page
51) Check payment information block
52) Check shipping information block
53) Check price breakdown
54) Check tax percentage 
55) Check price total price
56) Check Finish button 
57) Check cancel button
58) Check footer

Checkout Complete Page:
59) Check that header is present
60) Check that cart bagde is not displayed 
61) Check logout functionality from burger menu 
62) Check about functionality from burger menu
63) Check item container
64) Check Back to home functionality
65) Check footer

Item Page:
66) Check that header is present
67) Check that burger menu is present
68) Check logout functionality from burger menu
69) Check about functionality from burger menu
70) Check added item from product page is same as shown in item page
71) Check added item from checkout overview page is same as shown in owerview page
72) Check add to cart button
73) Check go back to products page button
74) Check if user add item to the cart and then go back to products page - badge counter will should be visible
75) Check footer






