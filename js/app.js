
const form = document.querySelector('.signupform')
const number = document.querySelector('.text')

form.addEventListener('submit', (e) => {
 e.preventDefault()
 let numberValue = number.value


 if (!numberValue) {
  form.classList.add('was-validated')
 } else {
  form.classList.remove('was-validated')
 }


 number.value = ''
})


const loginform = document.querySelector('.loginform')

const loginNumber = document.querySelector('#number')
const Email = document.querySelector('.email')
const checkBox = document.querySelector('.checkbox')
const invalidEmail = document.querySelector('.invalidEmail')
const invalidPassword = document.querySelector('.invalidPassword')




loginform.addEventListener('submit', (e) => {
 e.preventDefault()

 let logNumInput = loginNumber.value
 let emailInput = Email.value


 if (!logNumInput) {
  loginNumber.style.border = '2px solid red'
  invalidPassword.style.display = 'block'
 } else {
  loginNumber.style.border = '2px solid black'
  invalidPassword.style.display = 'none'

 }

 if (!emailInput) {
  Email.style.border = '2px solid red'
  invalidEmail.style.display = 'block'
 } else {
  Email.style.border = '2px solid black'
  invalidEmail.style.display = 'none'
 }

 if (!emailInput || !logNumInput) {
  loginNumber.style.border = '2px solid red'
  invalidPassword.style.display = 'block'
  Email.style.border = '2px solid red'
  invalidEmail.style.display = 'block'
 } else {
  window.location.href = 'product.html'
 }

 if (checkBox.checked) {
  console.log('checked');
 } else {
  console.log('unchecked');
 }


 loginNumber.value = ''

 Email.value = ''



})

const eyeIcon = document.querySelector('.eyeIcon')

const eyeOpen = document.querySelector('.eyeOpen')

const eyeslash = document.querySelector('.eyeslash')



eyeIcon.addEventListener('click', () => {
 if (loginNumber.type === 'password') {
  loginNumber.type = 'text'
  eyeslash.style.display = 'block'
  eyeOpen.style.display = 'none'
 } else {
  loginNumber.type = 'password'
  eyeslash.style.display = 'none'
  eyeOpen.style.display = 'block'
 }
})

// Navigating through login and sign-in page

const register = document.querySelector('.register')
const signup = document.querySelector('.signup')
const login = document.querySelector('.login')
const loginPage = document.querySelector('.loginPage')

register.addEventListener('click', () => {
 signup.style.display = 'flex'
 login.style.display = 'none'
})

loginPage.addEventListener('click', () => {
 signup.style.display = 'none'
 login.style.display = 'flex'
})
