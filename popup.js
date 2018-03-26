if (window.location.href.indexOf("twitter.com") > -1) { // only work on twitter
    //$("div.js-tweet-text-container > p").text("ERROR");

    // for each tweet
    $('div.js-tweet-text-container > p').each(function (index) {
        //encrypt all the tweets and shit
        $(this).text(index + " ERROR");
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
            button.className = "verified"; // allow user to see text
            button.style.color = "blue";
            var body = document.getElementsByTagName("body")[0];
            body.appendChild(button);

            button.addEventListener("click", function () {
                if (button.className == "verified")
                    alert("you are verified");
                else
                    alert("you arent verified asshole");
            });
        }
        // user is aready there
        else {
            var button = document.getElementById(user);
            if (button.className == "verified") {
                button.style.color = "red";
                button.className = "unverified";
            }
            else{
                button.style.color = "blue";
                button.className = "verified";
            }
        }

    }, false);
}, false);