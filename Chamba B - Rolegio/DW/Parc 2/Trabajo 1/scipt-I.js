
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

document.addEventListener('DOMContentLoaded', () => {
    if(urlParams.get('fname')!=null){
        console.log(urlParams.get('fname'));
        console.log(urlParams.get('lname'));
        console.log(urlParams.get('Usu'));
        console.log(urlParams.get('Contra'));
        console.log(urlParams.get('CContra'));

        document.getElementById('fname').innerHTML = urlParams.get('fname');
        document.getElementById('lname').innerHTML = urlParams.get('lname');
        document.getElementById('Usu').innerHTML = urlParams.get('Usu');
        document.getElementById('Contra').innerHTML = urlParams.get('Contra');
        document.getElementById('CContra').innerHTML = urlParams.get('CContra');
    }
});

