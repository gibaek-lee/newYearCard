//test scaffolding
function assert(isTrue, memo) {
  if(!isTrue) {
    throw new Error(`Test failed, ${memo}`);
  }
};

//get current time
function timeStamp() {
  const currentTime = new Date();
  assert(currentTime, 'cannot get new Date.');

  const date = currentTime.getDate();
  const month = currentTime.getMonth() + 1; //January: 0
  const year = currentTime.getFullYear();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();

  const result = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`;

  assert(result.indexOf('undefined')===-1, 'some Date value is undefined');
  return result;
};

//extract user input data object from from submit
function extractDataFromFormSubmit(entriesArray,currentTime) {
  assert(entriesArray, 'first parameter is empty');
  assert(currentTime, 'second parameter is empty.');

  let extractedData = {};
  for (let entry of entriesArray) {
      extractedData[entry[0]] = entry[1];
  }
  extractedData["time"] = currentTime;
  console.log(extractedData);

  assert(Object.keys(extractedData).length === 5, 'less than five datas come.')
  return extractedData
}

//create sent mail node via form data user written
function createSentMailNode(data) {
  assert(data, 'first parameter is empty');

  //create node
  const sentMailNode = document.createElement("div");
  const paragraphNode = document.createElement("P");

  //create textnode
  const category = document.createTextNode(`분류: ${data.category}  `);
  const desitination = document.createTextNode(`받는사람: ${data.desitination}  `);
  const title = document.createTextNode(`제목: ${data.title}  `);
  const time = document.createTextNode(`보낸시간: ${data.time}  `);
  const comment = document.createTextNode(`내용: ${data.comment}  `);
  
  //make one sent mail node via appendchild
  sentMailNode.appendChild(category);
  sentMailNode.appendChild(desitination);
  sentMailNode.appendChild(title);
  sentMailNode.appendChild(time);
  paragraphNode.appendChild(comment);
  sentMailNode.appendChild(paragraphNode);

  assert(sentMailNode.childNodes.length===5, 'sentMailNode children less than 5.');
  return sentMailNode;
}
