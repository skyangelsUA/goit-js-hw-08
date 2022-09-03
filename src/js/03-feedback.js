import throttle from 'lodash.throttle';

const checkForm = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');


const LOCAL_STORAGE_KEY = "feedback-form-state";

checkForm.addEventListener('submit', onFormSubmit);
checkForm.addEventListener('input', throttle(onInput, 500));


function onInput() {

    const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  
  console.log(formData)
  
};




function onFormSubmit(event) {
   
    event.preventDefault();
    event.currentTarget.reset();
    console.log(localStorage.getItem(LOCAL_STORAGE_KEY));
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    
    
};




localStorageSave();

function localStorageSave() {

  let storageSave = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (storageSave) {
    email.value = storageSave.email;
    message.value = storageSave.message;
  }

}