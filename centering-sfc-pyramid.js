/*
 * この画面は JavaScript スクラッチパッドです。
 *
 * JavaScript を入力して、右クリックまたは “実行” メニューを選択してください。
 * 1. 実行: 選択したコードを実行します。(Cmd-R)
 * 2. 調査: 実行結果をオブジェクトインスペクタで表示します。(Cmd-I)
 * 3. 表示: 選択したコードの後ろに、実行結果をコメント形式で挿入します。(Cmd-L)
 */

var centeringSfcPyramid = function(n){
  var message = "";
  var counter = 0;
  var a = 1;
  var b = 5; 
  var kuhaku = "  ";
  

  while(counter < n){
    var apple = b - a;
    var supermen = kuhaku.repeat (apple); 
    message =  message + "SFC ";
    counter = counter + 1;
    a = a + 1;
  }
  return supermen + message;
}

var output;
var counter = 1;
var a = 1;
var b = 5;
while(counter <= b){
  output= centeringSfcPyramid(counter);
  console.log(output);
  counter = counter + 1;
};
/*
6
*/