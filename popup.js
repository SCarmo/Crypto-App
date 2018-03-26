if (window.location.href.indexOf("twitter.com") > -1) {
    $("div.js-tweet-text-container > p").text("ERROR");
}

function check(form) {
    /*the following code checkes whether the entered userid and password are matching*/
    if (form.userid.value == "shane" && form.pswrd.value == "gay") {
        alert("correct")
    } else {
        alert("Error Password or Username") /*displays error message*/
    }
}




document.addEventListener('DOMContentLoaded', function () {
    var checkCredentials = document.getElementById('checkCredentials');
    checkCredentials.addEventListener('click', function () {
        var usr = document.getElementById("username").value;
        var psw = document.getElementById("password").value;
        if (usr == "shane" && psw == "gay") {
            alert("correct");
            
        } else {
            alert("incorrect");
        }

    }, false);
}, false);