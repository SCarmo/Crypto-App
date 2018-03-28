$('div.js-tweet-text-container > p').each(function (index) {
    //encrypt all the tweets and shit
    var text = $(this).text();
    // var text is now cipher text but need encrypted object
    var ct = sjcl.encrypt(pair.pub, text);

    var cipherText = JSON.parse(ct);
    $(this).text(cipherText.ct);
});