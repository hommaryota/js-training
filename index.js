// const、let等の変数宣言
var val1 = "var変数";
// var変数は代入が可能
val1 = "val1を上書き";
// var変数は際宣言も可能
var val1 = "val1変数を再宣言";
console.log(val1);

// PJが大きくなっていくと変数が被ってエラーが出る可能性もある

// let
let val2 = "let変数";
// let変数は再代入が可能
val2 = "let変数を再代入";
// let変数は再宣言は不可
console.log(val2);

// const
const val3 = "const変数";
// const変数は上書き不可
// const変数は再宣言も不可
console.log(val3);
// constで定義してもオブジェクトであればプロパティの上書き、追加は可能
const val4 = {
  name: "かぶ",
  age: 27,
};
val4.name = "kabu";
val4.address = "Tokyo";
console.log(val4);

// constで適宜した配列もプロパティの変更、追加は可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
