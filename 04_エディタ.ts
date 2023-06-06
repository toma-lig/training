/* 
Option+上下　行の入れ替え 
手順：console.logの行を関数の外側へ移動して再度元に戻す
*/
function sayHello10(firstName: string) {
    console.log('Hello ' + firstName)
}



/* 
Cmd+/　ラインコメントをトグル(コメント) 
手順：console.logをコメントアウトしてコメント解除する
*/
console.log('Hello ' + firstName)



/* 
Option+Shift+A　ブロックコメントをトグル 
手順：sayHello11をブロックコメントで囲む
*/
function sayHello11(firstName: string) {
    console.log('Hello ' + firstName)
}



/* 
Cmd+Shift+¥　カッコの始まり・終わりに移動 
手順：if (1 == 1) のカッコの始まりにカーソルをあてて、終わりのカッコに移動する
*/
function sayHello12(firstName: string) {
    if (1 == 1) {
        if (true) {
            console.log('Hello ' + firstName)
        }
        console.log('Hello ' + firstName)
    }
}



/* 
Option+Shift+F　コードのフォーマット 
手順：適当にスペースとかタブとか入れてフォーマット整形してみる
*/
function sayHello13(firstName: string) {
    if (1 == 1) {
        if (true) {
            console.log('Hello ' + firstName)
        }
        console.log('Hello ' + firstName)
    }
}



/* 
Option+cmd+上下　マルチカーソル 
手順：Helloを123Helloに一斉に書き換える
*/
console.log('Hello ' + firstName)
console.log('Hello ' + firstName)
console.log('Hello ' + firstName)
console.log('Hello ' + firstName)
console.log('Hello ' + firstName)



/* 
Cmd+Enter　下に一行インサート
Cmd+Shift+Enter　上に一行インサート
手順：真ん中のconsole.logにカーソルをあてて、下に行インサート。再度真ん中のconsole.logにカーソルを戻し、上に行インサート
 */
console.log('Hello ' + firstName)
console.log('Hello ' + firstName)
console.log('Hello ' + firstName)



/* 
Ctrl+G　指定行へ移動 
手順：適当な行へ移動してみる
*/


/*
F2　シンボル名を変更
手順：sayHello15をsayHello16に変えてみる(呼び出しているとこも変更されるのを確認)
 */
function sayHello15(firstName: string) {
    if (1 == 1) {
        if (true) {
            console.log('Hello ' + firstName)
        }
        console.log('Hello ' + firstName)
    }
}
sayHello15('abc')