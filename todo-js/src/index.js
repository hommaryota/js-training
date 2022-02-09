// import "./style.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して、初期化する
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  // li生成
  const li = document.createElement("li");
  li.className = "list-row";
  console.log(li);

  // divタグ生成
  const div = document.createElement("div");
  div.innerText = inputText;
  console.log(div);

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  console.log(li);

  // 未完了リストに追加
  document.querySelector("#incomplete-list").appendChild(li);
};

document.querySelector("#add-button").addEventListener("click", () => onClickAdd());
