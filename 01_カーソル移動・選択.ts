/* 
Shift+カーソル　範囲選択
Cmd+カーソル　端に移動
Option+左右　単語移動
Cmd+Shift+カーソル　範囲選択×端に移動
option+shift+カーソル　範囲選択×単語移動
手順：上記やってみる
 */
function sayHello (firstName: string) {
    console.log('Hello ' + firstName)
}



/* 
Cmd+D　複数範囲選択
関数名sayHello2にカーソルをあて、コマンドを叩く。sayHello2が順次選択されるのを確認
*/
function sayHello2 (firstName: string) {
    console.log('Hello ' + firstName)
}
sayHello2('abc')
sayHello2('def')
sayHello2('ghi')



/* 
Cmd+Shift+O　ファイル内のシンボルへ移動
手順：sayHello3とsayHello4へ移動する
 */
function sayHello3 (firstName: string) {
    console.log('Hello ' + firstName)
}
function sayHello4 (firstName: string) {
    console.log('Hello ' + firstName)
}



/* 
Cmd+F2　すべての検索一致を同時選択 
手順：sayHello５へカーソルをあて、コマンド押下ですべてのsayHello2が選択されるのを確認
*/
function sayHello5 (firstName: string) {
    console.log('Hello ' + firstName)
}
sayHello5('abc')
sayHello5('def')
sayHello5('ghi')