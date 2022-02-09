// import "./style.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して、初期化する
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定のリストを削除
const deleteFromIncompleteList = (target) => {
  document.querySelector("#incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // divタグ生成
  const div = document.createElement("div");
  div.innerText = text;

  // buttonタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 未完了リストに追加する
    const addTarget = completeButton.parentNode;

    // TODO内容のテキストを取得する
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻るボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.querySelector("#complete-list").removeChild(deleteTarget);

      // テキストを取得する
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // liタグの子要素に各要素を追加
    addTarget.appendChild(div);
    addTarget.appendChild(backButton);

    document.querySelector("#complete-list").appendChild(addTarget);
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.querySelector("#incomplete-list").appendChild(li);
};

document.querySelector("#add-button").addEventListener("click", () => onClickAdd());
