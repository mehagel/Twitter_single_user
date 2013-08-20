$(document).ready(function(){
  $(document).on('click','#fetch_button', function(e){
    e.preventDefault();

    $('#spinner').show();
var data = {username: $('input[name="username"]').val()};
console.log(data)

    $.ajax ({
      type: 'post',
      url: '/username',
      data: data
      }).done(function(server_response){
      $("#spinner").hide();
      $('#tweets').html(server_response);
    }).fail(function(){
      });
    });



  $(document).on('click','#post_button', function(e){
    e.preventDefault();

    $('#spinner').show();
var data = {tweet: $('input[name="tweet"]').val()};
console.log(data)

    $.ajax ({
      type: 'post',
      url: '/tweet',
      data: data
      }).done(function(server_response){
      $("#spinner").hide();
      $('#tweets').html("Great Tweet!");
    }).fail(function(){
      $("#spinner").hide();
      $('#tweets').html("Houston we have a problem!")
      });
    });

});