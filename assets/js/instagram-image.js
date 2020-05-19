//setting variables
let input = document.getElementById('input');
let downLink = document.getElementById('down-link');
let resultIMg = document.getElementById('result-img');

// a function so that when someone click enter it should run.
input.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
      get();
  }
});

//async function script
async function getBase64ImageFromUrl(imageUrl) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          resolve(reader.result);
        },
        false
      );

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    });
  }
 
//lets get the image

  function get(){

    try {
        var apiUrl = new URL(input.value);
        if (apiUrl.hostname == "instagram.com"||"www.instagram.com" ) {
        
            let api = "https://"+apiUrl.hostname+apiUrl.pathname+"?__a=1"
    
         var request = new XMLHttpRequest();
    
          request.open("Get",api,true);
    
          request.onload = function(){
            document.getElementById("result-cont").style = "display:flex"
              var data = JSON.parse(this.response);
    
              var ig = data.graphql.shortcode_media;
    
               var img = ig.display_resources[ig.display_resources.length -1].src;
              getBase64ImageFromUrl(img)
              .then(result => {resultIMg.src = result; downLink.href = result})
              .catch(err => console.error(err));
    
              console.log(data);
          }
          request.send()
    
    
        } else {
            
            console.log("error")
            document.getElementById("error").innerHTML="Enter Valid URL!"
            setTimeout(() => {
                document.getElementById("error").innerHTML=""
           }, 5000);    
    
        }
          }
      catch(err) {
        
            document.getElementById("error").innerHTML="Enter Valid URL!"


      };

      setTimeout(() => {
             document.getElementById("error").innerHTML=""
        }, 5000);    

   
    
    }
