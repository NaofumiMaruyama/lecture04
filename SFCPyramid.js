/*
 * この画面は JavaScript スクラッチパッドです。
 *
 * JavaScript を入力して、右クリックまたは “実行” メニューを選択してください。
 * 1. 実行: 選択したコードを実行します。(Cmd-R)
 * 2. 調査: 実行結果をオブジェクトインスペクタで表示します。(Cmd-I)
 * 3. 表示: 選択したコードの後ろに、実行結果をコメント形式で挿入します。(Cmd-L)
 */
var nSFC = function(n){
var message = "";
var counter = 0;

while(counter < n){
message = message + "SFC ";
counter = counter + 1;
}
return message;
};

var sfcPyramid = function(n){
var output;
var row = 1;
while(row <= n){
output= nSFC(row);
console.log(output);
row = row + 1;
}
};

sfcPyramid(5);
