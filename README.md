# Happ New Year Card

## Code Structure
1. New Year Card 코드
- html: index.html | Header, Section, Footer
- javascript: source.js | Source functions for event callback. Using namspace 'source'.
- javascript: event.js | Submit event handling. IIFE and Closure pattern apply.
- css: style.js

2. Test 코드
Using mocha and chai library
- html: test.html
- js: source.test.js | Test return value of functions only which has return.

Scaffolding technique using custom assert function
- js: source.js | assert()

3. Libraries
- Mocha and Chai, only.
- Reason: For testing vanilla javascript code. Jest and Enzyme need node.js enviroment, it's too heavy to small application like this.
- Weakness Mocah/Chai compare to Jest/Enzyme: No mock event test, but can overcome with a scaffolding technique using custom assert function .
