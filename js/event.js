//submit event makes sent mail node via form data of user input
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  //get user input
  const formData = new FormData(event.target);
  //Array.from(arrayLike) : an iterator(array like) to an array
  const formEntriesArray = Array.from(formData.entries());
  //get current time
  const currentTime = timeStamp();
  //make node FormData
  const extractedData = extractDataFromFormSubmit(formEntriesArray,currentTime);
  //make new sent mail node
  const sentMailNode = createSentMailNode(extractedData);

  //append new node as a first child of sent-box
  const sentBoxNode = document.getElementsByClassName("sent-box");
  if(sentBoxNode[0].children.length){
    sentBoxNode[0].insertBefore(sentMailNode, sentBoxNode[0].firstChild);
  }else{
    sentBoxNode[0].appendChild(sentMailNode);
  }
});
