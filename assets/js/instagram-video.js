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

let video = document.getElementById('video');
let link = document.getElementById('link');
let input = document.getElementById('input');


input.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        get()
    }
});

function get(){

        var apiUrl = new URL(input.value);
        if (apiUrl.hostname == "instagram.com"||"www.instagram.com" ) {
        
            let api = "https://"+apiUrl.hostname+apiUrl.pathname+"?__a=1"
            
            document.getElementById('vid-parent').style = "display:flex;"
            link.style = "display:flex;"
         var request = new XMLHttpRequest();
    
          request.open("Get",api,true);
    
          request.onload = function(){
            //document.getElementById("result-cont").style = "display:flex"
              var data = JSON.parse(this.response);
    
              var ig = data.graphql.shortcode_media;
    
               var newvideo = ig.video_url;
               video.src = newvideo;
              getBase64ImageFromUrl(newvideo)
              .then(result => {link.href = result;console.log(result)})
              .catch(err => console.error(err));
    
              console.log(ig.video_url);
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