/*
 * この画面は JavaScript スクラッチパッドです。
 *
 * JavaScript を入力して、右クリックまたは “実行” メニューを選択してください。
 * 1. 実行: 選択したコードを実行します。(Cmd-R)
 * 2. 調査: 実行結果をオブジェクトインスペクタで表示します。(Cmd-I)
 * 3. 表示: 選択したコードの後ろに、実行結果をコメント形式で挿入します。(Cmd-L)
 */

var randomSFCPyramid = function(n){
  var message = "";
  var counter = 0;

  while(counter < n){
  message = message + "SFC ";
  counter = counter + 1;
  } 
  return message;
};

var output;
var counter = 1;
var n = Math.random() * 100;
Math.floor(n);

while(counter <= n){
  output = nSFC(counter);
  console.log(output);
  counter = counter + 1;
}
console.log(output);