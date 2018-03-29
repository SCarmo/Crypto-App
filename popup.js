var pair;
var encryptedObjects = [];
if (window.location.href.indexOf("twitter.com") > -1) { // only work on twitter

    pair = sjcl.ecc.elGamal.generateKeys(256); // generate keys


    // for each tweet
    $('div.js-tweet-text-container > p').each(function (index) {
        //encrypt all the tweets and shit
        var text = $(this).text();
        var ct = sjcl.encrypt(pair.pub, text);
        encryptedObjects.push(ct);
        //var pt = sjcl.decrypt(pair.sec, ct);
        var cipherText = JSON.parse(ct);
        $(this).text(cipherText.ct);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var addOrRemove = document.getElementById('addOrRemove');
    addOrRemove.addEventListener('click', function () {
        var user = document.getElementById("user").value;
        var button;
        // user doesn't exist
        if (document.getElementById(user) == null) {
            button = document.createElement("button");
            button.innerHTML = user;
            button.id = user;
            button.className = "verified"; // allow user to see text
            button.style.color = "blue";
            var body = document.getElementsByTagName("body")[0];
            body.appendChild(button);

            button.addEventListener("click", function () {
                // user is verified
                if (button.className == "verified") {
                    // decrypt the posts
                    chrome.tabs.executeScript({
                        file: "decrypt.js"
                    });
                } else {
                    // make new keys
                    // decrypt again
                    chrome.tabs.executeScript({
                        file: "encrypt.js"
                    });
                }
            });
        }
        // user already exists
        // if user is verified then unverify and vice versa
        else {
            button = document.getElementById(user);
            if (button.className == "verified") {
                button.style.color = "red";
                button.className = "unverified";
            } else { // user is not verified
                button.style.color = "blue";
                button.className = "verified";
                // give out new keys
                pair = sjcl.ecc.elGamal.generateKeys(256); // generate keys
                
            }
        }

    }, false);
}, false);