//submit event makes sent mail node via form data of user input
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  let writtenData = {};
  for (var entry of formData.entries()) {
        writtenData[entry[0]] = entry[1];
  }
  writtenData["time"] = timeStamp(":");
  console.log(writtenData);

  createSentMailList(writtenData);
});

//get current time
function timeStamp(){
  const currentTime = new Date();
  const date = currentTime.getDate();
  const month = currentTime.getMonth() + 1; //January: 0
  const year = currentTime.getFullYear();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();

  if(date<10) date = `0${date}`;
  if(month<10) month = `0${month}`;

  result = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`
  return result;
};

//create sent mail node
function createSentMailList(data){
  //create node
  const sentMailNode = document.createElement("div");
  //create textnode
  const category = document.createTextNode(`분류: ${data.category}  `);
  const desitination = document.createTextNode(`받는사람: ${data.desitination}  `);
  const title = document.createTextNode(`제목: ${data.title}  `);
  const comment = document.createTextNode(`내용: ${data.comment}  `);
  const time = document.createTextNode(`보낸시간: ${data.time}  `);
  //make one sent mail node via appendchild
  sentMailNode.appendChild(category);
  sentMailNode.appendChild(desitination);
  sentMailNode.appendChild(title);
  sentMailNode.appendChild(time);
  sentMailNode.appendChild(comment);
  //get sent-box node to append now sent mail node
  const sentBoxNode = document.getElementsByClassName("sent-box");
  //append sent mail node
  if(sentBoxNode[0].children.length) sentBoxNode[0].insertBefore(sentMailNode, sentBoxNode[0].firstChild);
  else sentBoxNode[0].appendChild(sentMailNode);
}
