(function () { //prevent global variable. Capsuling via IIFE and Closure pattern.

  let timer; //for throttle
  const submitNode = document.querySelector('#submit'); //for disable toggle

  //submit event
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); //submit 후 refresh 방지

    if (!timer) {//throttle
       timer = setTimeout(function() {
         timer = null;
         submitNode.disabled = false;//submit button reactivated
         alert('Throttling end. 보내기 button reactivated.');
       }, 1000);

      //make entries array
      const formEntriesArray = makeFormEntriesArray(event);
      //get current time
      const currentTime = timeStamp();
      //extract data object
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

      submitNode.disabled = true;//submit button disabled
    }
  });

})();
