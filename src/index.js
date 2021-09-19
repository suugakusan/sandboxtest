import "./styles.css";

const onClickAdd = () => {
  //テキストの取得
  const inputText = document.getElementById("add-text").value;
  //空文字へ
  document.getElementById("add-text").value = "";
  //<div class="list-row">
  const div = document.createElement("div");
  div.className = "list-row";
  //<li>inputText</li>
  const li = document.createElement("li");
  li.innerText = inputText;

  //<button>完了</button>を作成
  const compButton = document.createElement("button");
  compButton.innerText = "完了";

  //完了ボタンを押したとき
  compButton.addEventListener("click", () => {
    //完了ボタンのdivを取得
    const deleteTarget = compButton.parentNode;
    //完了ボタンが含まれたdivごと削除
    document.getElementById("imcomp-list").removeChild(deleteTarget);
    //完了ボタンのdivを取得
    const addTarget = compButton.parentNode;
    //<li></li>の中身を取得
    const text = addTarget.firstElementChild.innerText;
    //divの中身を空にする
    addTarget.textContent = null;
    //<li></li>を作る
    const li = document.createElement("li");
    //<li></li>の中にテキストを入れる
    li.innerText = text;
    //<button>戻す<button>
    const backButton = document.createElement("button");
    backButton.innerText = "戻す"; //<div><li></li><div>
    addTarget.appendChild(li);
    //<div><li></li><button>戻す</button><div>
    addTarget.appendChild(backButton);
    //<ul></ul>の中へ上記を入れる
    document.getElementById("comp-list").appendChild(addTarget);
  });
  //<button></button>の作成
  const deleButton = document.createElement("button");
  //<button>削除</button>の作成
  deleButton.innerText = "削除";

  //削除ボタンを押したとき
  deleButton.addEventListener("click", () => {
    //削除ボタンのdivを取得
    const deleteTarget = deleButton.parentNode;
    //そのdivを削除
    document.getElementById("imcomp-list").removeChild(deleteTarget);
  });
  //divに<li>を入れる
  div.appendChild(li);
  //divの<li>あとに<完了>を入れる
  div.appendChild(compButton);
  //divの<完了>あとに<削除>を入れる
  div.appendChild(deleButton);
  //<ul>の中にdivを入れる
  document.getElementById("imcomp-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
