const btnClear = document.querySelector('.clear')

const filter = document.querySelector('#filter');

const input = document.querySelector('.input-task')

const formInput = document.querySelector('.formInput')

const  taskList = document.querySelector('.collection')




loadEventListener();







function loadEventListener(){


	formInput.addEventListener('submit', addTask);
	//Remove Events
	taskList.addEventListener('click', removeTask)
	
	btnClear.addEventListener('click', clearTasks)
	
	filter.addEventListener('keyup', filterTask)
}




function addTask(e){

	if(input.value === ""){
		
		alert('Añade algo a la lista...');
	

	} else if(e){
		// CREATE NEW LINK ELEMENT


 storeTaskInLocalStorage(input.value);

	const li = document.createElement('li')
	li.className = 'li-task';
	li.appendChild(document.createTextNode(input.value));
	const link = document.createElement('p');
	link.className = 'remove';
	link.innerHTML = ' <p class="fas fa-trash-alt"></p>';
	li.appendChild(link);
	taskList.appendChild(li);
	input.value = '';
						}

e.preventDefault();


	
}


function storeTaskInLocalStorage(task){
	let tasks;

	if (localStorage.getItem('tasks') === null){
		tasks =[];
	} else{
		tasks = JSON.parse(localStorage.getItem('tasks')) 
	}

	tasks.push(task)
	localStorage.setItem('tasks', JSON.stringify(tasks))
}




 
 
function removeTask(e){
	if(e.target.classList.contains('fas')){
		
		if(confirm('¿Estas suguro?')){
		e.target.parentElement.parentElement.remove();
			}
	 	
	}
	
	
	
	
	e.preventDefault();
}






function  clearTasks(){
	//taskList.innnerHTML = '';
	
	while(taskList.firstChild){
		taskList.removeChild(taskList.firstChild)
	}
}




function filterTask(e){
	const text = e.target.value.toLowerCase();
	document.querySelectorAll('.li-task').forEach(
	function (task){
		const item = task.firstChild.textContent;
	if(item.toLowerCase().indexOf(text) != -1){
		task.style.display = '';
	}else{
		task.style.display = 'none';
	 }
	}
	);
	
	e.preventDefault();
}















