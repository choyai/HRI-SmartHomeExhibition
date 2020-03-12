var sen1 = "";
var sen2 = "";
var database;

function setup() {
    createCanvas(640, 480);

    var firebaseConfig = {
        apiKey: "AIzaSyAi_6w61FeRyj6H4hL3fUH8sr2FiQem3co",
        authDomain: "action-codelab-dphjua.firebaseapp.com",
        databaseURL: "https://action-codelab-dphjua.firebaseio.com",
        projectId: "action-codelab-dphjua",
        storageBucket: "action-codelab-dphjua.appspot.com",
        messagingSenderId: "186786341937",
        appId: "1:186786341937:web:0d5d533e12ea434e9ce110"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // console.log(firebase)

    database = firebase.database();
    var ref = database.ref('sen1');
    ref.on('value', gotData1, errData1);
    var ref2 = database.ref('sen2');
    ref2.on('value', gotData2, errData2);

    document.getElementById("block3").style.background = "#EEE9E9";
    document.getElementById("block4").style.background = "#EEE9E9";
    document.getElementById("block5").style.background = "#EEE9E9";
    document.getElementById("block6").style.background = "#EEE9E9";

    // 0-50 คุณภาพดี
    // 51-100 คุณภาพปานกลาง
    // 101-150 มีผลกระทบต่อสุขภาพต่อกลุ่มคนที่มีสัมผัสไวต่อมลพิษ
    // 151-200 มีผลกระทบต่อสุขภาพ
    // 201-300 มีผลกระทบต่อสุขภาพมาก
    // 300 อันตราย

}

function gotData1(data) {
    var values = data.val();
    for (var key in values) {
        // check if the property/key is defined in the object itself, not in parent
        if (values.hasOwnProperty(key)) {
            key = key;
            values[key] = values[key];
        }
    }
    sen1 = values[key];
    document.getElementById("aqi1").innerHTML = sen1;

    if(sen1 > 0 && sen1 <= 50) {
        document.getElementById("img1").src="img/level1.png";
        document.getElementById("txt1").innerHTML = "คุณภาพดี";
        document.getElementById("block1").style.background = "#ABEBC6";
    } else if(sen1 > 50 && sen1 <= 100){
        document.getElementById("img1").src="img/level2.png";
        document.getElementById("txt1").innerHTML = "คุณภาพปานกลาง";
        document.getElementById("block1").style.background = "#F7DC6F";
    } else if(sen1 > 100 && sen1 <= 150){
        document.getElementById("img1").src="img/level3.png";
        document.getElementById("txt1").innerHTML = "มีผลกระทบต่อสุขภาพต่อกลุ่มคนที่มีสัมผัสไวต่อมลพิษ";
        document.getElementById("block1").style.background = "#E59866";
    } else if(sen1 > 150 && sen1 <= 200){
        document.getElementById("img1").src="img/level4.png";
        document.getElementById("txt1").innerHTML = "มีผลกระทบต่อสุขภาพ";
        document.getElementById("block1").style.background = "#F1948A";
    } else if(sen1 > 200 && sen1 <= 300){
        document.getElementById("img1").src="img/level5.png";
        document.getElementById("txt1").innerHTML = "มีผลกระทบต่อสุขภาพมาก";
        document.getElementById("block1").style.background = "#BB8FCE";
    } else if(sen1 > 300){
        document.getElementById("img1").src="img/level6.png";
        document.getElementById("txt1").innerHTML = "อันตราย";
        document.getElementById("block1").style.background = "#CD6155";
    }
    console.log(values[key]);
}

function errData1(data) {
    console.log("Err!");
    console.log(data.val());
}

function gotData2(data) {
    var values = data.val();
    for (var key in values) {
        // check if the property/key is defined in the object itself, not in parent
        if (values.hasOwnProperty(key)) {
            key = key;
            values[key] = values[key];
        }
    }
    sen2 = values[key];
    document.getElementById("aqi2").innerHTML = sen2;

    if(sen2 > 0 && sen2 <= 50) {
        document.getElementById("img2").src="img/level1.png";
        document.getElementById("txt2").innerHTML = "คุณภาพดี";
        document.getElementById("block2").style.background = "#ABEBC6";
    } else if(sen2 > 50 && sen2 <= 100){
        document.getElementById("img2").src="img/level2.png";
        document.getElementById("txt2").innerHTML = "คุณภาพปานกลาง";
        document.getElementById("block2").style.background = "#F7DC6F";
    } else if(sen2 > 100 && sen2 <= 150){
        document.getElementById("img2").src="img/level3.png";
        document.getElementById("txt2").innerHTML = "มีผลกระทบต่อสุขภาพต่อกลุ่มคนที่มีสัมผัสไวต่อมลพิษ";
        document.getElementById("block2").style.background = "#E59866";
    } else if(sen2 > 150 && sen2 <= 200){
        document.getElementById("img2").src="img/level4.png";
        document.getElementById("txt2").innerHTML = "มีผลกระทบต่อสุขภาพ";
        document.getElementById("block2").style.background = "#F1948A";
    } else if(sen2 > 200 && sen2 <= 300){
        document.getElementById("img2").src="img/level5.png";
        document.getElementById("txt2").innerHTML = "มีผลกระทบต่อสุขภาพมาก";
        document.getElementById("block2").style.background = "#BB8FCE";
    } else if(sen2 > 300){
        document.getElementById("img2").src="img/level6.png";
        document.getElementById("txt2").innerHTML = "อันตราย";
        document.getElementById("block2").style.background = "#CD6155";
    }
    console.log(values[key]);
}

function errData2(data) {
    console.log("Err!");
    console.log(data.val());
}



function draw() {
    
    
}