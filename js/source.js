const assert = (isTrue, memo) => { //test scaffolding
  if(!isTrue) {
    throw new Error(`Test failed, ${memo}`);
  }
}

const source = { //namespace 활용. 외부 파일에서 접근시 어느 파일의 함수인지 확인
  checkEmptyInput : (entries) => {
    assert(entries, 'entries is not defined');

    let emptyEntries = [];
    entries.forEach((entry) => {
      if(!entry[1]) emptyEntries.push(entry[0]);
      /* entries = [["key1", "value1"], ["key2", "value2"], ... ]
         entry[0]: key: name attribute of form <input>s which are "category", "destination", "title", "comment"
         entry[1]: value: user input value of "category", "destination", "title", "comment"
      */
    });

    if(emptyEntries.length) {
      let message = emptyEntries.reduce((accum, value) => {
        if(value === 'destination') value = '받는 사람';
        else if(value === 'title') value = '제목';
        else value = '내용';
        return accum + value + ', ';
      }, '');
      message = message.slice(0,-2);//get rid of ', ' which is last character and space of alert message
      alert(`${message}을(를) 입력해주세요.`);
      return false;
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

    //confirm whether get---() methods of Date function operate correctly.
    assert(result.indexOf('undefined') === -1, 'some Date value is undefined');
    return result;
  },

  extractDataFromFormSubmit : (entriesArray, currentTime) => { //extract user input data object from from submit
    assert(entriesArray, 'entriesArray parameter is not defined');
    assert(currentTime, 'currentTime parameter is not defined.');

    let extractedData = {};
    for (let entry of entriesArray) {
        extractedData[entry[0]] = entry[1];// entry[0]: name attribute of form <input>s, entry[1]: user input
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
    const paragraphNode = document.createElement("p");

    //createTextnode vs innerHTML: innerHTML is a 'html like' string. It would be better to use createTextNode if you want to supervise user input as childNodes.
    const category = document.createTextNode(`분류: ${data.category} `);
    const destination = document.createTextNode(`받는사람: ${data.destination} `);
    const title = document.createTextNode(`제목: ${data.title} `);
    const time = document.createTextNode(`보낸시간: ${data.time} `);
    const comment = document.createTextNode(`내용: ${data.comment} `);

    //make one sent mail node via appendchild
    sentMailNode.appendChild(category);
    sentMailNode.appendChild(destination);
    sentMailNode.appendChild(title);
    sentMailNode.appendChild(time);
    paragraphNode.appendChild(comment);
    sentMailNode.appendChild(paragraphNode);

    assert(sentMailNode.childNodes.length===5, 'sentMailNode children less than 5.');
    return sentMailNode;
  },

  clearInput : (targets) => {
    assert(targets, 'target paramter is not defined');
    const indexOfDestination = 3;
    const indexOfComment = 5;//4 is index of title
    //index 0, 1, 2 values of targets are <input> named "category" which are "동료", "친구", and "가족"
    for(let i = indexOfDestination; i <= indexOfComment; i++) {
      targets[i].value = '';
    }
  }

}
