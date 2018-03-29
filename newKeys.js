$('div.js-tweet-text-container > p').each(function (index) {
    //encrypt all the tweets and shit
    var text = $(this).text();
    var ct = sjcl.encrypt(pair.pub, text);
    encryptedObjects.push(ct);
    //var pt = sjcl.decrypt(pair.sec, ct);
    var cipherText = JSON.parse(ct);
    $(this).text(cipherText.ct);
});