document.querySelector('form').addEventListener('submit', submitEventCallback(event));

function submitEventCallback() { //prevent global variable. Capsuling via Closure pattern.
  let timer; //for throttle
  const submitNode = document.querySelector('#submit'); //for disable toggle

  const closure = (event) => {
    assert(event,'event is not defined');
    event.preventDefault();//submit 후 refresh 방지

    //make entries array
    const formData = new FormData(event.target);
    const formEntriesArray = Array.from(formData.entries());//Array.from(arrayLike) : an iterator(array like) to an array

    //주요기록 체크. 일단 모두 기록해야 메일전송이 가능하게 된다.
    let isEmpty = source.checkEmptyInput(formEntriesArray);
    if(isEmpty===false) return -1;

    //throttle. 메일 전송중에 계속 이벤트가 발생하지 않도록 한다. disabled와 이중잠금
    if(!timer) {
      timer = setTimeout(() => {//서버와 연결할시 response가 오면 이 callback을 수행하면 된다.
        console.log('Throttling end. 보내기 button reactivated.');

        //append new node as a first child of sent-box
        const sentBoxNode = document.getElementsByClassName("sent-box");
        if(sentBoxNode[0].children.length){
          sentBoxNode[0].insertBefore(sentMailNode, sentBoxNode[0].firstChild);
        }else{
          sentBoxNode[0].appendChild(sentMailNode);
        }

        //정리
        timer = null;
        submitNode.disabled = false;//submit button reactivated
        source.clearInput(event.target);//받는사람, 제목, 글 reset
      }, 500);

      //node make processing
      const currentTime = source.timeStamp();//get current time
      const extractedData = source.extractDataFromFormSubmit(formEntriesArray,currentTime);//extract data object
      const sentMailNode = source.createSentMailNode(extractedData);//make new sent mail node

      submitNode.disabled = true;//submit button disabled
    }
  }
  return closure;
};
