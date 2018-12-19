describe('timeStamp function', function() {
  it('returns current time', function() {
    var mockGetTime = function() {
      const currentTime = new Date();
      const date = currentTime.getDate();
      const month = currentTime.getMonth() + 1; //January: 0
      const year = currentTime.getFullYear();
      const seconds = currentTime.getSeconds();
      const minutes = currentTime.getMinutes();
      const hours = currentTime.getHours();

      if(date<10) date = `0${date}`;
      if(month<10) month = `0${month}`;

      const result = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`
      return result;
    }
    chai.expect(timeStamp()).to.equal(mockGetTime());
  });
});
