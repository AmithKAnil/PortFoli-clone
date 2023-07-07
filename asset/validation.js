
      function validateForm() {
        var name = document.getElementById("name").value;
        var phoneno = document.getElementById("phoneno").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;        
        if (name == "") {
          Swal.fire({
            icon: 'error',
            title: "Error", 
            text: "Your Name should not be empty",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }

        if (/\d/.test(name)){
          Swal.fire({
            icon: 'error',
            title: "Error", 
            text: "Your Name should only contain letters",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        if (phoneno == "") {
          Swal.fire({
            icon: 'error',
            title: "Error", 
            text: "Your Mobile Number should not be empty",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }

        if (isNaN(phoneno)){
          Swal.fire({
            icon: 'error',
            title: "Error", 
            text: "Your Mobile Number should only contain numbers",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        if (phoneno.length<10){
          Swal.fire({
            icon: 'error',
            title: "Error", 
            text: "Your Mobile Number should have 10 digits",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        if (phoneno.length>10){
          Swal.fire({
            icon: 'error',
            title: "Error", 
            text: "Your Mobile Number should only have 10 digits",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
          Swal.fire({
            icon: 'error',
            title: "Error", 
            text: "Email address must be a vallid Email address",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }

        if (subject == "") {
          Swal.fire({
            icon: 'error',
            title: "Error", 
            text: "Subject should not be empty",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }
  
        if (message == "") {
          Swal.fire({
            icon: 'error',
            title: "Error", 
            text: "Message should not be empty",  
            confirmButtonText: "Close", 
          });
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }
        
        return Swal.fire({
          icon:'succcess',
          title: "Success", 
          html: "Submited Sucessfully",  
          confirmButtonText: "Ok",
        });
      }
      