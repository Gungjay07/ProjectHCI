const nameRegis = document.getElementById('nama')
const form = document.getElementById('form-regis')

form.addEventListener('submit', function(event){
    let isInvalid = true;
    if (nameRegis.value.length < 5) {
        document.getElementById('name-error').textContent = 'Nama harus lebih dari 5 kata';
        isInvalid = false
    } else {
        document.getElementById('name-error').textContent = '';
    }
})