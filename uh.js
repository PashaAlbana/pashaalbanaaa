// No.1

function cetakFunction(){
    return`Hallo nama saya` + a
}

console.log(cetakFunction("Pasha Albana"));

//no2

function myFunction(a,b){

    return hasil = a + b;
}
let a = 20;
let b= 7;
let output = myFunction(a,b);
console.log("hasil soal no 2 " + output);

//no3 
const hello = () => {
    return "hello";
}
console.log(hello);
// no4

let obj = {
    nama : "john",
    umur : 22,
    bahasa: "Indonesia"
}
console.log(obj.bahasa);

//no5"
let daftar = ["john doe", "laki-laki", "baca buku",1992]
let objdaftar = {
    nama : daftar[0],
    gender : daftar [1],
    hobi : daftar[2],
    tahunLahir : daftar[3],

}
console.log("soal no 5")
console.log(objdaftar)


//no6

let buah = [{
    nama : `nanas`,
    warna: `kuning`,
    adaBijinya : `tidak`,
    harga: 9000,
},{
    nama: `semangka`,
    warna: `hijau & merah`,
    adaBijinya: `ada`,
    harga: 9000,
},{
    nama: `pisang`,
    warna: `kurang`,
    adaBijinya: `tidak ada`,
    harga:7000,
}
];

let buahadaBijinya = users.filter((buah) => buah.adaBijinya === 'tidak');

console.log(buahadaBijinya);