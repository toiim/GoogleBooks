$(document).ready(function () {

  var bookList = $(".book").map(function () {
    return this.id;
  }).get();

  console.log(bookList);

  var thelink = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
  var allresults = [];

  for (var i = 0; i < bookList.length; i++) {
    $.ajax({
      url: thelink + bookList[i],
      dataType: 'json',
      type: 'get',
      cache: true,
      success: function (data) {
        nowGo(data);
      }
    })
  };

  n = 0;

  function nowGo(a) {
    allresults.push(a.items[0].volumeInfo);
    console.log(allresults);
    console.log(allresults[n].title);
    //$("#resultContainer").append("<a href='" + allresults[n].previewLink + "'><div id='" + bookList[n] + "'><img width=128 height=190 src='" + allresults[n].imageLinks.thumbnail + "'></div></a>");
    $("#resultContainer").append("<a href='https://www.amazon.com/dp/" + bookList[n] + "'><div id='" + bookList[n] + "'><img width=128 height=190 src='" + allresults[n].imageLinks.thumbnail + "'></div></a>");
    n++;

  }


});