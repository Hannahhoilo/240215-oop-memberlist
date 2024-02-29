// GET DOM ELEMENTS

const firstnameInput = document.querySelector(".firstname");
const lastnameInput = document.querySelector(".lastname");
const phoneInput = document.querySelector(".phonenumber");
const isProInput = document.querySelector(".pro-member");
const memberList = document.querySelector(".member-list");

const submitButton = document.querySelector(".submit-button");

const allMembers = [];

class Member {
	constructor(firstname, lastname, phonenumber) {
		this.firstname = firstname
		this.lastname = lastname
		this.phonenumber = phonenumber
		this.id = Date.now()
	}

	static createMember() {
		const newMember = new Member(firstnameInput.value, lastnameInput.value, phoneInput.value);
		return newMember;
	}

	static removeMember(id, list) {
		const index = list.findIndex((member) => member.id.toString() === id.toString());
		if(index !== -1) {
			list.splice(index, 1);
			UI.renderList();
		}
	}
}

class ProMember extends Member {
	constructor(firstname, lastname, phonenumber, isProMember) {
		super(firstname, lastname, phonenumber)
		this.isProMember = isProMember
	}

	static createProMember() {
		const newProMember = new ProMember(firstnameInput.value, lastnameInput.value, phoneInput.value, isProInput.checked);
		return newProMember;
	}
}

submitButton.addEventListener("click", (event)=> {
	event.preventDefault();
	if(isProInput.checked) {
		allMembers.push(ProMember.createProMember());
	} else {
		allMembers.push(Member.createMember());
	}
	UI.renderList()
	console.log(allMembers);
});


// RENDER LIST

class UI {
	static renderList() {
		memberList.textContent = "";
		allMembers.forEach((member)=> {
			const memberLi = document.createElement("li");
			memberLi.dataset.id = member.id;
			memberList.appendChild(memberLi);
			memberLi.textContent = member.firstname + member.lastname;	
			const deleteButton = document.createElement("button")
			deleteButton.textContent = "Delete"
			memberLi.append(deleteButton)
				
			if(member.isProMember) {
				memberLi.classList.add("pro-bold");
			}
			deleteButton.addEventListener('click', (event)=> {
				event.preventDefault();
				const currentId = event.currentTarget.parentElement.dataset.id;
				console.log();
				Member.removeMember(currentId, allMembers)
			})
		});

	}
}

