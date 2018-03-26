if (window.location.href.indexOf("twitter.com") > -1) { // only work on twitter
    //$("div.js-tweet-text-container > p").text("ERROR");

    // for each tweet
    $('div.js-tweet-text-container > p').each(function (index) {
        //encrypt all the tweets and shit
    });
}

document.addEventListener('DOMContentLoaded', function () {

    var addOrRemove = document.getElementById('addOrRemove');
    addOrRemove.addEventListener('click', function () {
        var user = document.getElementById("user").value;
        // user doesn't exist
        if (document.getElementById(user) == null) {
            var button = document.createElement("button");
            button.innerHTML = user;
            button.id = user;

            var body = document.getElementsByTagName("body")[0];
            body.appendChild(button);
        }
        // user is laready there
        else{
            document.getElementById(user).remove();
        }

    }, false);

    // for login
    var checkCredentials = document.getElementById('checkCredentials');
    checkCredentials.addEventListener('click', function () {
        var usr = document.getElementById("username").value;
        var psw = document.getElementById("password").value;
        if (usr == psw) {

            alert("success");

        } else {
            alert("incorrect");
        }

    }, false);
}, false);