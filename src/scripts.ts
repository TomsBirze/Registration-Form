import axios from "axios";


const form = document.querySelector<HTMLFormElement>('.js-form')

type DataToSend = { [key: string]: unknown }

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const finalData: DataToSend = {};

    for (const pair of formData.entries()) {
        finalData[pair[0]] = pair[1]
    }
    console.log(finalData)

    axios.post('http://localhost:3004/registrations', Object.fromEntries(formData))
        .then(() => {
            displayMessage('Registration successful!', 'success');
        })
        .catch(() => {
            displayMessage('Registration failed. Please try again.', 'error');
        });
  

});

function displayMessage(message: string, type: string) {
    const messageBox = document.createElement('div');
    messageBox.className = `message-box ${type}-message`;
    messageBox.textContent = message;
    form.appendChild(messageBox);
}
