var btn = document.getElementById('btn');
var content = document.getElementById('content');

//音声認識API
var speech = new webkitSpeechRecognition();

//日本語
speech.lang = "ja";

//ボタンクリックで開始
btn.addEventListener('click', function() {
  speech.start();
});

//音声をテキスト表示
speech.addEventListener('result', function(e) {
  console.log(e);
  var text = e.results[0][0].transcript;
  getTextContents(text);
});

//テキスト表示
function getTextContents(text) {
  content.innerHTML = '<p>あなたが話した言葉</p>' +
                   '<input type="text" value="' + text + '">';
}
