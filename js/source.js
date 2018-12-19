//get current time
function timeStamp() {
  const currentTime = new Date();
  const date = currentTime.getDate();
  const month = currentTime.getMonth() + 1; //January: 0
  const year = currentTime.getFullYear();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();

  return `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`;
};

//extract user input data from from submit
function extractDataFromFormSubmit(entriesArray,currentTime) {
  let extractedData = {};
  for (let entry of entriesArray) {
      extractedData[entry[0]] = entry[1];
  }
  extractedData["time"] = currentTime;
  console.log(extractedData);

  return extractedData
}

//create sent mail node via form data user written
function createSentMailNode(formData) {
  //create node
  const sentMailNode = document.createElement("div");
  //create textnode
  const category = document.createTextNode(`분류: ${formData.category}  `);
  const desitination = document.createTextNode(`받는사람: ${formData.desitination}  `);
  const title = document.createTextNode(`제목: ${formData.title}  `);
  const time = document.createTextNode(`보낸시간: ${formData.time}  `);
  const comment = document.createTextNode(`내용: ${formData.comment}  `);
  //make one sent mail node via appendchild
  sentMailNode.appendChild(category);
  sentMailNode.appendChild(desitination);
  sentMailNode.appendChild(title);
  sentMailNode.appendChild(time);
  sentMailNode.appendChild(comment);

  return sentMailNode;
}
