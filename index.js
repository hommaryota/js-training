// // const、let等の変数宣言
// var val1 = "var変数";
// // var変数は代入が可能
// val1 = "val1を上書き";
// // var変数は際宣言も可能
// var val1 = "val1変数を再宣言";
// console.log(val1);

// // PJが大きくなっていくと変数が被ってエラーが出る可能性もある

// // let
// let val2 = "let変数";
// // let変数は再代入が可能
// val2 = "let変数を再代入";
// // let変数は再宣言は不可
// console.log(val2);

// // const
// const val3 = "const変数";
// // const変数は上書き不可
// // const変数は再宣言も不可
// console.log(val3);
// // constで定義してもオブジェクトであればプロパティの上書き、追加は可能
// const val4 = {
//   name: "かぶ",
//   age: 27,
// };
// val4.name = "kabu";
// val4.address = "Tokyo";
// console.log(val4);

// // constで適宜した配列もプロパティの変更、追加は可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// // テンプレート文字列
// const name = "かぶ";
// const age = 28;
// // 「私の名前はかぶです。年齢は28歳です。」
// // 上の文をコンソールで表示させる方法 従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// // テンプレート文字列使用
// const message2 = `私の名前は${name}です。年齢は、${age}です。`;
// console.log(message2);

// // アロー関数
// // 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 10));

// // 分割代入
// const myProfile = {
//   name: "かぶ",
//   age: 28,
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);
// // オブジェクトの中身を取り出すのにテンプレート文字列で毎回myProfileと記述するのは面倒
// // myProfileからnameとageをnameとageという変数で取り出す。
// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["かぶ", 27];
// const message3 = `私の名前は${myProfile[0]}です。年練は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年練は${age}歳です。`;
// console.log(message4);

// デフォルト値、引数など
// アロー関数の引数にnameを設定 関数実行時に引数を渡さないとundefinedと表示される。
// デフォルト値を設定して引数を渡さない場合の初期値を決められる
// 引数を渡した場合は初期値は表示されない
const sayHello = (name = "ゲスト") => {
  console.log(`こんにちは！${name}さん！`);
};
sayHello();
