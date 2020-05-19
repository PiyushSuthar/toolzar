let input = document.getElementById("input");
let result = document.getElementById("result");
let resultHead = document.getElementById("result-head");
let example = document.getElementById("example");

function copy() {
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
  }

  input.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        gen();
    }
});

function gen(){
    
    let e = input.value;
    n = e.indexOf("google.com");
    if (-1 != n) {
        var i = e.indexOf("d/");
        var d = e.indexOf("/view");
        var o = e.slice(i + 2, d);
        let link = "https://drive.google.com/uc?export=download&id="+o;
        document.getElementById("result-container").style = "display:flex;"
        resultHead.style = "display:block;"
        resultHead.innerText = "Result:";
        result.value = link;
    }
    else{
        const error = document.createElement("h4");
        error.innerText= "Link Is Not Valid";
        error.style = 'text-align:center;color:red;'
        example.appendChild(error)
        setTimeout(function(){
            error.remove();
          }, 5000);
    }
}
