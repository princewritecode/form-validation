// const userNameInput = document.getElementById('username');
// const userEmail = document.getElementById('email');
// const userPassword = document.getElementById('password');
// const confirmPassword = document.getElementById('confirm-password');
// document.getElementById('button').addEventListener('click', function (e)
// {
//     e.preventDefault();
//     if (userNameInput.value === "" && userPassword.value === '' && confirmPassword.value === '' && userEmail.value === '')
//     {
//         for (let i of document.getElementsByClassName('form-control'))
//         {
//             i.classList.add('error');
//         };
//     }
// });
const form = document.getElementById('form');
const userNameInput = document.getElementById('username');
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
function showError(input, message)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//function show success outline
function showSuccess(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
form.addEventListener('submit', function (e)
{
    e.preventDefault();
    if (userNameInput.value == '')
    {
        showError(userNameInput, 'username is required');
    }
    else
    {
        showSuccess(userNameInput);
    }

    if (userPassword.value == '')
    {
        showError(userPassword, 'username is required');
    }
    else
    {
        showSuccess(userPassword);
    }
    if (userEmail.value == '')
    {
        showError(userEmail, 'username is required');
    }
    else
    {
        showSuccess(userEmail);
    }
    if (confirmPassword.value == '')
    {
        showError(confirmPassword, 'username is required');
    }
    else
    {
        showSuccess(confirmPassword);
    }
});