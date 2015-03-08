$(document).ready(function(){
  var $divs = $('.l-container > div');
  $tags = $('#tags')

  var uniqTags = _.uniq($divs, function(div){
    return $(div).attr('class');
  });

  _.forEach(uniqTags, function(div) {
    var myDiv = $(div).attr('class');
    var myTags = []
    myTags.push("<li><a class='toc' data-toc='" + myDiv + "' href='" + myDiv + "'>" + myDiv + "</a></li>");
    $tags.append(myTags);
  });

  $('.toc').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log($(this).data());
  });

  var $sortedDivs = $divs.sort(SortByName);

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
