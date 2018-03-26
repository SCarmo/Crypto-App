if (window.location.href.indexOf("twitter.com") > -1) { // only work on twitter
    //$("div.js-tweet-text-container > p").text("ERROR");

    // for each tweet
    $('div.js-tweet-text-container > p').each(function (index) {
        //encrypt all the tweets and shit
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var checkCredentials = document.getElementById('checkCredentials');
    checkCredentials.addEventListener('click', function () {
        var usr = document.getElementById("username").value;
        var psw = document.getElementById("password").value;
        if (usr == psw) { 
            var ciphertext = sjcl.encrypt("password", "Hello World!");
            var plaintext = sjcl.decrypt("password", ciphertext);

            console.log(ciphertext);
            console.log(plaintext);

        } else {
            alert("incorrect");
        }

    }, false);
}, false);