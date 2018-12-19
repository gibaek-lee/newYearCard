//submit event makes sent mail node via form data of user input
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  let writtenData = {};
  for (var entry of formData.entries()) {
        writtenData[entry[0]] = entry[1];
  }
  writtenData["time"] = timeStamp();
  console.log(writtenData);

  createSentMailList(writtenData);
});

//create sent mail node
function createSentMailList(data){
  //create node
  const sentMailNode = document.createElement("div");
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
  sentMailNode.appendChild(comment);
  //get sent-box node to append now sent mail node
  const sentBoxNode = document.getElementsByClassName("sent-box");
  //append sent mail node
  if(sentBoxNode[0].children.length) sentBoxNode[0].insertBefore(sentMailNode, sentBoxNode[0].firstChild);
  else sentBoxNode[0].appendChild(sentMailNode);
}
