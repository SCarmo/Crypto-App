$('div.js-tweet-text-container > p').each(function (index) {
    //encrypt all the tweets and shit
    var text = $(this).text();
    var obj = encryptedObjects[index];
    var pt = sjcl.decrypt(pair.sec, obj);

    $(this).text(pt);
});