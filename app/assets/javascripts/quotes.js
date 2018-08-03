$(document).on("turbolinks:load", function(){
  $(".selectize").selectize({
    create: function(input, callback) {
      $.post('/artists.json', { artist: { name: input } })
        .done(function(response){
          console.log(response)
          callback({value: response.id, text: response.name });
        })
    }
    });
})