// GET DOM ELEMENTS

const firstnameInput = document.querySelector(".firstname");
const lastnameInput = document.querySelector(".lastname");
const phoneInput = document.querySelector(".phonenumber");

const submitButton = document.querySelector(".submit-button");

allMembers = [];

class Member {
	constructor(firstname, lastname, phonenumber) {
		this.firstname = firstname
		this.lastname = lastname
		this.phonenumber = phonenumber
	}

	createMember() {
		const newMember = new Member(firstnameInput.value, lastnameInput.value, phoneInput.value);
		return newMember;
	}
}
