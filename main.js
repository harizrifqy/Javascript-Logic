// alert(1 + 1);
// console.log('hello world!');


// console.log('Sebelum pembanding')
// if(1 + 1 === 2) {  /* akan dijalankan ketika bernilai true atau benar*/
//     console.log('Perhitungannya Betul')
// }
// console.log('Setelah pembanding')


// IF STATEMENT 

// let angka = Math.random(); variable angka akan menampilkan angka secara random ketika direfresh
// console.log(angka);

// if(angka >= 0.5) {
//     console.log('angka lebih besar dari 0.5')
// }

// if(angka <= 0.5) {
//     console.log('angka lebih kecil dari 0.5')
// }

// ELSE IF STATMENT

// const iniHari = 'Senin'; 
/* ketika saya tidak menginputkan hari senin dan jumat 
maka console.log akan kosong

// if(iniHari === 'Jumat') {
//     console.log('Sebentar lagi libur kawan..')
// } else if (iniHari === 'Senin') {
//     console.log('Tetap semangat kawan....')
// }


// const nilai = '50';

// if (nilai < 50 ) {
//     console.log('E');
// } else if (nilai < 60 ) {
//     console.log('D');
// } else if (nilai < 70 ) {
//     console.log('C');
// } else if (nilai < 80 ) {
//     console.log('B');
// } else if (nilai < 100 ) {
//     console.log('A');
// } 


// const iniHari = prompt('Isi hari sesuai dengan hari favoritmu!!').toLowerCase();

// if(iniHari === 'sabtu') {
//     console.log('Healingg dulu masss..')
// } else if (iniHari === 'senin') {
//     console.log('Tetap semangat ya...')
// } else {
    // console.log('Santai dulu kawan..') 
    /* ketika saya tidak menginputkan hari sabtu dan senin 
    else otomatis berjalan */
// }

// NESTED IF ( IF BERLAPIS ATAU DIDALAM IF ADA IF LAGI ) 

// const password = prompt('Silahkan buat password terlebih dahulu');

// password minimal 6 karakter
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) { 
//         console.log('password valid');
//         /* jika  password sudah 6 karakter dan tidak ada spasi
//          maka akan menampilakan password valid */
//     } else {
//         console.log('password tidak boleh ada spasi');
//         /* jika  password sudah 6 karakter namun ada spasi
//         maka akan menampilakan password tidak boleh ada spasi*/
//     }
// } else {
//     console.log('password minimal 6 karakter');
// }


// OPERATOR LOGIC AND (&&)

const password = prompt('Silahkan buat password terlebih dahulu');

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('Password valid');
    /* jika  password sudah 6 karakter dan tidak ada spasi
     maka akan menampilakan password valid */
} else {
    console.log('Password tidak memenuhi syarat')
}
