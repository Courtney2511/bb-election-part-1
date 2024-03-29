$(document).ready(function pollResults(){

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    data: { },
    dataType: 'JSON'
  }).done(function(responseData){
    var candidateJSON = responseData;
    var candidateList = candidateJSON["candidates"];
    $('#results').empty();

    for(i=0; i< candidateList.length; i++) {
      var listItem = document.createElement('li');
      var candidate = candidateList[i];
      $('#results').append(listItem);
      var vote = $(listItem).html(candidate.name + ': ' + candidate.votes);
    }

  });

  $('button').on("click", pollResults);

});
