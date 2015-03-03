$(document).ready(function(){
  var $divs = $('.l-container > div');
  $tags = $('#tags')
  var $sortedDivs = $divs.sort(SortByName);

  $.each($sortedDivs, function(i, div) {
    var myDiv = $(div).attr('class');
    var myTags = []
    myTags.push(myDiv + ", ");
    $tags.append(myTags);
  })

  var $book = $.each($sortedDivs, function(index, div){
    var myClass = $(div).attr('class');
    $(div).prepend("<p class='type'>" + myClass + "</p>")
  })
  $('.l-container').html($book);

  function SortByName(a, b){
    var aName = a.className.toLowerCase();
    var bName = b.className.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
  }
})
