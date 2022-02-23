import throttle from 'lodash.throttle';

const checkForm = {form: document.querySelector('.feedback-form'),};
const formData = {
    email: '',
    message: '',
};
const LOCAL_STORAGE_KEY = "feedback-form-state";

checkForm.form.addEventListener('submit', onFormSubmit);
checkForm.form.addEventListener('input', throttle(onInput, 500));
onStorageData(); 

function onInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    
};
console.log(onInput)

function onFormSubmit(event) {
  if (formData) 
    console.log(formData);
    event.preventDefault();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    event.currentTarget.reset();
};


function onStorageData() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedDataParse = JSON.parse(savedData);
  if (savedDataParse) {
  
        returnDataInput(savedDataParse);
  }
}
console.log(onStorageData)

function returnDataInput(data) {
  formData.email = data.email;
  formData.message = data.message;
  checkForm.form.elements.email.value = formData.email;
  checkForm.form.elements.message.value = formData.message;
}
console.log(returnDataInput)