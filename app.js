var btn = document.getElementById('btn');
var content = document.getElementById('content');

//音声認識API
var speech = new webkitSpeechRecognition();

//日本語
speech.lang = "ja";

//クリック
btn.addEventListener('click', function() {
  //音声認識開始
  speech.start();
});

//音声をテキストにして出力
speech.addEventListener('result', function(e) {
  console.log(e);
  var text = e.results[0][0].transcript;
  getTextContents(text);
});

//テキスト表示
function getTextContents(text) {
  content.innerHTML = '<input type="text" value="' + text + '">';
}
