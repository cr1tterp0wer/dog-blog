document.addEventListener("turbolinks:load",function(){

  //Contact-Form Ajax callback 
  $("#contact-form").on("ajax:success", function(event){
    let data = event.detail
    let message = "";
       
    console.log( data )
    $("#errors").remove();
    $("#notice").remove();
       
    if( data[0].status == "failure"){
  
      data[0].message.forEach(function(e,i){
        message += e + '! \n';          
      });
      $('<p id="errors">'+message+'</p>')
        .insertBefore('#contact-form')
        .delay(3000).fadeOut('slow')    
    }else{ 
      $('.contact-form input').val('')
      $('.contact-form textarea').val('')
         
      message =  "Thank you, Your Message has been sent."
      $('<p id="notice">'+message+'<p>')
        .insertBefore('#contact-form')
        .delay(3000).fadeOut('slow')    
    } 
  }).on("ajax:error", function(event){ 
      alert('error')           
      $("#notice").append("<p>ERROR</p>")
     });

});
