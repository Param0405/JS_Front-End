let todoList = [];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#input-text');
  let dateElement = document.querySelector('#input-date');
  let inputItem = inputElement.value;
  let inputDate = dateElement.value;
  todoList.push({item:inputItem,dueDate:inputDate});
  inputElement.value='';
  dateElement.value='';
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('#display-container');
  let newHTML = '';
  
  for(let i=0; i<todoList.length; i++){
    newHTML += `
      <span>${todoList[i].item}</span>
      <span>${todoList[i].dueDate}</span>
      <button class="btn-delete" onClick="todoList.splice(${i},1);displayItems();">Delete</button>
    `
  }

  containerElement.innerHTML = newHTML;
}