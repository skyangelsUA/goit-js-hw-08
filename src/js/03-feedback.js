import throttle from 'lodash.throttle';

const checkForm =document.querySelector('.feedback-form');
const formData = {
    email: '',
    message: '',
};


const LOCAL_STORAGE_KEY = "feedback-form-state";

checkForm.addEventListener('submit', onFormSubmit);
checkForm.addEventListener('input', throttle(onInput, 500));
onStorageData();

function onInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    
};
console.log(onInput)



function onFormSubmit(event) {
   
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    
    console.log(formData)
};


function onStorageData() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedDataParse = JSON.parse(savedData);
  if (savedDataParse) {
    returnDataInput(savedDataParse);
  }
}


  function returnDataInput(data) {
    formData.email = data.email;
    formData.message = data.message;
    checkForm.elements.email.value = formData.email;
    checkForm.elements.message.value = formData.message;
  }
