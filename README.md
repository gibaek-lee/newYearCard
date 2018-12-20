# Happ New Year Card

## 실행
- index.html | 새해 인사 카드 웹 실행
- test.html | 테스트 코드 웹 실행

## Code Structure
### New Year Card 코드
- html: index.html | Header, Section, Footer
- javascript: source.js | Source functions for event callback. Using namspace 'source'.
- javascript: event.js | Submit event handling. IIFE and Closure pattern apply.
- css: style.js

### Test 코드
#### Using mocha and chai library
- html: test.html
- js: source.test.js | Test return value of functions only which has return.

#### Scaffolding technique using custom assert function
- js: source.js | assert()

### 안정성 확보
- 전제조건
  1. Functional Programming을 만족하는 함수
- Mocha and Chai
  1. 함수의 처음 확인 | 자바스크립트 엔진 가동 시 함수가 정의 되었는지 확인
  2. 함수의 끝 확인 | 함수가 가상의 매개변수로부터 원하는 결과값을 반환하는지 확인
- assert 단정문
  1. 함수 내부에서 점검
  2. 함수 내부 실행의 처음 확인 | 함수로 들어오는 매개변수 유효성 확인
  3. 함수 내부 실행의 끝 확인 | 함수가 만든 반환값의 유효성 확인

### 서버와 연동
- eventListener의 콜백 안의 timer 콜백함수를 사용 | 서버 reponse 성공 시 timer 콜백함수가 실행되도록 해야함.

## Libraries
- Mocha and Chai, only.
- Reason: For testing vanilla javascript code. Jest and Enzyme need node.js enviroment, it's too heavy to small application like this.
- Weakness Mocah/Chai compare to Jest/Enzyme: No mock event test, but can overcome with a scaffolding technique using custom assert function .

## Reference
- about Scaffolding and Test code : Jon Bentley. Programming Pearls 2/E. insight. 칼럼5.
- Mocha and Chai : Medium blog[Running Mocha Tests as Native ES6 Modules in a Browser](https://medium.com/dailyjs/running-mocha-tests-as-native-es6-modules-in-a-browser-882373f2ecb0)
