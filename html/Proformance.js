var cpuInfo = "cpuInfo";

var drawCanvas = function(){
    var context = Procormance.getContext('2d');

    context.fillStyle = 'white';
    context.fillRect(0,0,Procormance.width,Procormance.height); //erase canvas

    context.font = '20pt Arial';
    context.fillStyle = 'cornflowerblue';
    context.strokeStyle = 'blue';

    context.fillText(cpuInfo, 20, 20);
    context.strokeText(cpuInfo, 20, 20);

    context.stroke();

};

function handleTimer(){
    cpuInfoRequestObj = {text: "cpuInfo"};
    cpuInfoRequestJSON = JSON.stringify(cpuInfoRequestObj);

    $.post("cpuProformance", cpuInfoRequestJSON, function (data, status) {
        //console.log("data: " + data);
        //console.log("typeof: " + typeof data);
        var responseObj = JSON.parse(data);
        cpuInfo = responseObj.text;
        console.log(cpuInfo);
    });
    drawCanvas();
}

function handleSubmitButton (){
    var soundVolume = $('#soundVolumeTextField').val();
    if(soundVolume && soundVolume !=''){
        var setSoundvolRequestObj = {text: "setSoundVolume", value: soundVolume }; //make object to send to server
        var setSoundVolRequestJSON = JSON.stringify(setSoundvolRequestObj);
    }

    $.post("soundVolume", setSoundVolRequestJSON, function (data, status) {
        var responseObj = JSON.parse(data);
        alert(responseObj.text);
    });

}

$(document).ready(function(){
    timer = setInterval(handleTimer, 1000);
    //timer.clearInterval(); //to stop
    drawCanvas();
});