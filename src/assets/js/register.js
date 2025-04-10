
    
 //esempio funzionante:       https://regionelombardia.github.io/bootstrap-lombardia/docs/form/autocompletamento/
 //esempio che non funziona:  

 //const provinceJson = await (await fetch('assets/js/province.json')).json();
 //console.log(provinceJson)
// console.log("x");

$().ready(function() {
  
  $("#registrationForm").submit(function(event) {
    event.preventDefault(); 
    // const formData = {
    //   username: $("#username").val(),
    //   email: $("#email").val(),
    //   password: $("#password").val()
    // };

    //const formData = $("#registrationForm").serialize();
    const formData = Object.fromEntries($("#registrationForm").serializeArray().map(item => [item.name, item.value]));
    console.log(formData);

    $.ajax({
      url: "/api/auth/register",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(formData),
      success: function(response) {
          $("#responseMessage").text(response.success ? "Registrazione riuscita!" : "Errore: " + response.message)
                               .css("color", response.success ? "green" : "red");
      },
      error: function() {
          $("#responseMessage").text("Errore di connessione!").css("color", "red");
      }
  });


  });  

});
  