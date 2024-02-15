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
	}

	static createMember() {
		const newMember = new Member(firstnameInput.value, lastnameInput.value, phoneInput.value);
		return newMember;
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
			memberList.appendChild(memberLi);
			memberLi.textContent = member.firstname + member.lastname;	
				
			if(member.isProMember) {
				memberLi.classList.add("pro-bold");
			}
		});

	}
}


allMembers