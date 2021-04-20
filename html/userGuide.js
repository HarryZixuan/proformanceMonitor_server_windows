
userGuideRequestObj = {text: "QRCode"};
userGuideRequestJSON = JSON.stringify(userGuideRequestObj);
$.post("userGuide", userGuideRequestJSON, function (data, status) {
    //console.log("data: " + data);
    //console.log("typeof: " + typeof data);
    var responseObj = JSON.parse(data);
    QRCode = responseObj.text;
    console.log(QRCode);
    var image = document.createElement("img");
    image.src = QRCode;
    var  myp = document.getElementById('myp');
    myp.appendChild(image);
});



