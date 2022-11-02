//JS BASIC
// let mahasiswa = {
//     nama : "Putra Andhika Bagaskara",
//     nim : "10118268",
//     email : "putraandhika28@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));

//VANILLA JAVASCRIPT
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function (){
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

// JQUERY
$.getJSON('coba.json', function(data){
    console.log(data);
});
