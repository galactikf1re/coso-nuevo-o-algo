
const querryString = window.location.search;
const urlParams = new URLSearchParams(querryString);

document,addEventListener('DOMContentLoaded', () => {
    if(urlParams.get('fname')!=null){
        console.log(urlParams.get('fname'));
        console.log(urlParams.get('lname'));
        console.log(urlParams.get('Usu'));
        console.log(urlParams.get('Contra'));
        console.log(urlParams.get('CContra'));

        const nom = document.getElementById('fname');
        const ape = document.getElementById('lname');
        const usu = document.getElementById('Usu');
        const con = document.getElementById('Contra');
        const ccon = document.getElementById('CContra');


    }
});

