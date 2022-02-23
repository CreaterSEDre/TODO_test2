import "./styles.css";

const onclickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("inconplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの生成
  const li = document.createElement("li");
  li.innerText = text;

  //button（完了）タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を完了リストに移動、未完了リストから削除

    //未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const AddTarget = completeButton.parentNode;
    //TODO内容テキストの取得
    const text = AddTarget.firstElementChild.innerText;

    //div以下を初期化
    AddTarget.textContent = null;
    //liタグの生成
    const completeLi = document.createElement("li");
    completeLi.innerText = text;

    //buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押されたボタンの親タグを削除
      const DeleteTarget = backButton.parentNode;
      document.getElementById("conplete-list").removeChild(DeleteTarget);

      //完了リストに戻す
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    AddTarget.appendChild(completeLi);
    AddTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("conplete-list").appendChild(AddTarget);
  });

  //button（削除）タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("inconplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
