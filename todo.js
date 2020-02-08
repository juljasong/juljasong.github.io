const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'; // LocalStorage
let toDos = [];

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        }); 
    }
}

// html에서 먼저 지운 후, li에 남아있는 요소를 기반으로 지울 요소를 찾아 제외한 후 
// 새로운 배열을 생성하여 기존의 toDos 교체하고 toDos 저장
function deleteToDo(event) { 
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); // 리스트에 포함되지 않은 id 리턴 -> 삭제할 요소
    });
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text) {
    const image = new Image();
    image.src = `images/x.png`;
    image.classList.add("bt-img")
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.appendChild(image);
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text + ` `;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
}


init();