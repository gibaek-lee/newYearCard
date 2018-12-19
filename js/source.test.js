describe('timeStamp function', () => {
  it('returns current time correctly.', () => {
    const mockGetTime = () => {
      const currentTime = new Date();
      const date = currentTime.getDate();
      const month = currentTime.getMonth() + 1;
      const year = currentTime.getFullYear();
      const seconds = currentTime.getSeconds();
      const minutes = currentTime.getMinutes();
      const hours = currentTime.getHours();
      return `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`;
    }
    chai.expect(timeStamp()).to.equal(mockGetTime());
  });
});

describe('extractDataFromFormSubmit function', () => {
  it('extract user input data correctly', () => {
    const mockEntriesArray = [
      ["category","가족"],
      ["desitination","이기백"],
      ["title","안녕"],
      ["comment","안녕 2018년!"],
    ]
    const mockCurrentTime = "2018년 12월 19일 20시 02분";
    const mockExtractedData = {
      category: "가족",
      desitination: "이기백",
      title: "안녕",
      comment: "안녕 2018년!",
      time: "2018년 12월 19일 20시 02분"
    }
    //object 비교는 깊게 해야하므로 간단하게 string으로 비교한다.
    chai.expect(String(extractDataFromFormSubmit(mockEntriesArray,mockCurrentTime)))
        .to.equal(String(mockExtractedData));
  });
});

describe('createSentMainNode function', () => {
  it('returns new <div> node include information of form user input data.', () => {
    const mockInput = {
      category:"가족",
      desitination:"이기백",
      title:"안녕",
      time:"2018년 12월 19일 20시 02분",
      comment:"안녕 2018년!",
    }
    const mockNode = '<div>분류: 가족  받는사람: 이기백  제목: 안녕  보낸시간: 2018년 12월 19일 20시 02분  내용: 안녕 2018년!  </div>'
    chai.expect(createSentMailNode(mockInput).outerHTML).to.equal(mockNode);
  });
});
