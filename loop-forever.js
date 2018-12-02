/**
 * Pseudo Random Number Generator with No Repeat
 * Tapi, ini ngulangnya selamanya.
 * @copyright 2018 github/lingkaryamediaformasi
 */

/** Array kosakatanya */
var kosakata = [
    "mantan", "pacar", "kamu", "saya", "dia", "penjahat", "pesawat", "lampu", "tiang",
    "masak", "panci", "piring", "anjing", "kucing", "buku", "botol", "galon", "muka"
];

/** Array yang telah diganda */
var copy = kosakata.slice(0);

/**
 * Mengacak urutan array secara semu kemudian
 * mengambil isi array dan tidak lupa menghapus keberadaannya dalam array
 * agar tidak terjadi duplikasi ketika perintah mengacak urutan mengambil nomor yang sama.
 * 
 * Catatan 1, fungsi ini tidak bisa menggunakan shorthand.
 * 
 * Catatan 2, anda dapat mengganti String[] copy ini menjadi variabel sesuka hati anda,
 * asalkan anda mengganti namanya juga di dalam variabel maupun di luar variabel.
 * 
 * Catatan 3, ini local var.
 * 
 * Catatan 4, simpelnya, ini mirip ama Arrow Function, cuma untuk JS versi jadul.
 * @returns {String} Item yang telah diacak.
 */
function notRepeat() {
    // Apabila isi array yang telah digandakan kosong
    // maka gandakan ulang isi kosakatanya.
    if (copy.length < 1) {
        copy = kosakata.slice(0);
    }
    // Memilih urutan array secara acak.
    var index = Math.floor(Math.random() * copy.length);
    // Mengambil item dari urutan array yang telah diacak.
    var item = copy[index];
    // Menghapus keberadaan item dari array.
    copy.splice(index, 1);
    // Item yang telah diambil dikembalikan untuk dijadikan output.
    return item;
}

/**
 * Perintah untuk mengulangi kode di dalam balok kode dalam
 * interval tertentu. Dalam kasus ini, setiap satu detik sekali.
 */
const ngulang = setInterval(() => {
    // Cetak kata yang telah diacak plus kata kontol dibelakangnya.
    // Jangan lupa beri tag <br/> agar kalimat selanjutnya akan turun kebawah.
    document.write(`${notRepeat()} kontol<br/>`);
}, 1000);