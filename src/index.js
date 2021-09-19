import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    alert("完了");
  });
  const deleButton = document.createElement("button");
  deleButton.innerText = "削除";
  deleButton.addEventListener("click", () => {
    alert("削除");
  });

  div.appendChild(li);
  div.appendChild(compButton);
  div.appendChild(deleButton);

  document.getElementById("imcomp-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
