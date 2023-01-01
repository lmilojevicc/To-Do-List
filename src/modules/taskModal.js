import { createNewTask } from "./populateMainContent";

let projects = JSON.parse(localStorage.getItem("myProjects"));

export function showTaskModal() {
	const modal = document.querySelector("#modal-task");
	const cancelButton = document.querySelector("#cancel-button-task");
	const createTaskButton = document.querySelector("#nav-create-task");
	const saveButton = document.querySelector("#save-button-task");
	const inputTaskName = document.querySelector("#task-input-name");
	const inputTaskDescription = document.querySelector("#task-input-description");
	const inputTaskDate = document.querySelector("#task-input-date");
	const selectProject = document.querySelector("#task-select-project");
	const selectPriority = document.querySelector("#task-select-priority");

	// Making inputTaskDescription expand as you type
	inputTaskDescription.addEventListener("input", () => {
		inputTaskDescription.style.height = "auto";
		inputTaskDescription.style.height = `${inputTaskDescription.scrollHeight}px`;
	});

	createTaskButton.onclick = () => {
		modal.style.display = "block";
	};

	cancelButton.onclick = () => resetStyles();

	window.onclick = function (event) {
		if (event.target == modal) {
			resetStyles();
		}
	};

	saveButton.onclick = () => {
		createNewTask(
			inputTaskName,
			inputTaskDescription,
			inputTaskDate,
			selectProject,
			selectPriority
		);
		resetStyles();
	};

	const resetStyles = () => {
		inputTaskDescription.value = "";
		inputTaskName.value = "";
		modal.classList.add("modal-going-out");
		setTimeout(() => {
			modal.classList.remove("modal-going-out");
			modal.style.display = "none";
		}, 300);
	};
}
