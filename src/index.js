document.addEventListener("DOMContentLoaded", (e) => {
  let sortArray = []
  const textBox = document.getElementById('textBox')
  let form = document.getElementById('create-task-form')
  let submit = document.getElementById('submit')
  submit.addEventListener('click', (e)=> {
  e.preventDefault();
  if(textBox.value !== ''){handleToDo(textBox.value)}
})


function handleToDo(toDo) {
   let li = document.createElement('li');
   li.textContent = `${toDo}  `
   li.append(setPriority(), createDelete())
   document.querySelector('#tasks').appendChild(li)
   form.reset()
   
   
   
  }
})
  
  const handleDelete = (e) => e.target.parentNode.remove();
  
  
function setPriority () {
    let priority = document.getElementById('priority').value;
    return priority
}


function createDelete() {
  let removeBtn = document.createElement('button');
  removeBtn.textContent = "X"
  removeBtn.addEventListener('click', handleDelete) 
  return removeBtn
 }



