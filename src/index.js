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
    const deleteTarget = compButton.parentNode;
    document.getElementById("imcomp-list").removeChild(deleteTarget);
    const addTarget = compButton.parentNode;

    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("comp-list").appendChild(addTarget);
  });

  const deleButton = document.createElement("button");
  deleButton.innerText = "削除";
  deleButton.addEventListener("click", () => {
    const deleteTarget = deleButton.parentNode;
    document.getElementById("imcomp-list").removeChild(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(compButton);
  div.appendChild(deleButton);

  document.getElementById("imcomp-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
