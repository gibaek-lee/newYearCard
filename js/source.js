const assert = (isTrue, memo) => { //test scaffolding
  if(!isTrue) {
    throw new Error(`Test failed, ${memo}`);
  }
}

const source = { //namespace 활용. 외부 파일에서 접근시 어느 파일의 함수인지 확인
  checkEmptyInput : (entries) => {
    assert(entries, 'entries is not defined');
    for(let i = 0; i < entries.length; i++){
      if(!entries[i][1]){
        alert('기록되지 않은 것이 있습니다!');
        return false;
      }
    }
  },

  timeStamp : () => { //get current time
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
  },

  extractDataFromFormSubmit : (entriesArray, currentTime) => { //extract user input data object from from submit
    assert(entriesArray, 'entriesArray parameter is not defined');
    assert(currentTime, 'currentTime parameter is not defined.');

    let extractedData = {};
    for (let entry of entriesArray) {
        extractedData[entry[0]] = entry[1];
    }
    extractedData["time"] = currentTime;
    console.log(extractedData);

    assert(Object.keys(extractedData).length === 5, 'less than five datas come.')
    return extractedData
  },

  createSentMailNode : (data) => { //create sent mail node via form data user written
    assert(data, 'data is empty');

    //create node
    const sentMailNode = document.createElement("div");
    const paragraphNode = document.createElement("P");

    //create textnode
    const category = document.createTextNode(`분류: ${data.category} `);
    const desitination = document.createTextNode(`받는사람: ${data.desitination} `);
    const title = document.createTextNode(`제목: ${data.title} `);
    const time = document.createTextNode(`보낸시간: ${data.time} `);
    const comment = document.createTextNode(`내용: ${data.comment} `);

    //make one sent mail node via appendchild
    sentMailNode.appendChild(category);
    sentMailNode.appendChild(desitination);
    sentMailNode.appendChild(title);
    sentMailNode.appendChild(time);
    paragraphNode.appendChild(comment);
    sentMailNode.appendChild(paragraphNode);

    assert(sentMailNode.childNodes.length===5, 'sentMailNode children less than 5.');
    return sentMailNode;
  },

  clearInput : (target) => {
    assert(target, 'target paramter is not defined');
    for(let i = 3; i < 6; i++){
      target[i].value='';
    }
  }

}
