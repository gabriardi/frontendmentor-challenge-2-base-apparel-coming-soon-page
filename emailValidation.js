const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Valid email

const showError = () => {
  errorIcon.classList.add('show-error');
  errorMessage.classList.add('show-error');
  inputElement.classList.add('hero__cta__input--error');
};

const validateEmail = (event) => {
  const email = inputElement.value;
  if (email && email.match(EMAIL_PATTERN)) return;

  event.preventDefault();
  showError();
};

const inputElement = document.getElementById('email');
const errorIcon = document.querySelector('.hero__cta__error__icon');
const errorMessage = document.querySelector('.hero__cta__error-message');
const submitButton = document.querySelector('.hero__cta__btn');

submitButton.addEventListener('click', validateEmail);
