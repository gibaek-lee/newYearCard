(() => { //prevent global variable. Capsuling via IIFE and Closure pattern.

  let timer; //for throttle
  const submitNode = document.querySelector('#submit'); //for disable toggle

  //submit event
  document.querySelector('form').addEventListener('submit', (event) => {
    assert(event,'event is not defined');
    event.preventDefault();//submit 후 refresh 방지

    //make entries array
    const formData = new FormData(event.target);
    const formEntriesArray = Array.from(formData.entries());//Array.from(arrayLike) : an iterator(array like) to an array

    //주요기록 체크. 일단 모두 기록해야 메일전송이 가능하게 된다.
    for(let i = 0; i < formEntriesArray.length; i++){
      if(!formEntriesArray[i][1]){
        alert(`${formEntriesArray[i][0]}을 기록해주세요.`);
        return -1;
      }
    }

    //throttle. 메일 전송중에 계속 이벤트가 발생하지 않도록 한다. disabled와 이중잠금
    if(!timer) {
      timer = setTimeout(() => {
        timer = null;
        submitNode.disabled = false;//submit button reactivated
        console.log('Throttling end. 보내기 button reactivated.');
      }, 500);

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
