/**
 * Pseudo Random Number Generator with No Repeat
 * @copyright 2018 github/lingkaryamediaformasi
 */

/** Array kosakatanya */
var kosakata = [
    "mantan", "pacar", "kamu", "saya", "dia", "penjahat", "pesawat", "lampu", "tiang",
    "masak", "panci", "piring", "anjing", "kucing", "buku", "botol", "galon", "muka"
];

/**
 * Mengacak urutan array secara semu kemudian
 * mengambil isi array dan tidak lupa menghapus keberadaannya dalam array
 * agar tidak terjadi duplikasi ketika perintah mengacak urutan mengambil nomor yang sama.
 * 
 * Catatan 1, fungsi ini tidak bisa menggunakan shorthand.
 * 
 * Catatan 2, anda dapat mengganti String[] kosakata ini menjadi variabel sesuka hati anda,
 * asalkan anda mengganti namanya juga di dalam variabel maupun di luar variabel.
 * 
 * Catatan 3, ini local var.
 * 
 * Catatan 4, simpelnya, ini mirip ama Arrow Function, cuma untuk JS versi jadul.
 */
function notRepeat() {
    // Apabila isi array yang telah digandakan kosong
    // maka tiadakan pengulangan dan function ini akan menghasilkan
    // output yaitu undefined.
    if (kosakata.length < 1) {
        clearInterval(ngulang);
        return undefined;
    }
    // Memilih urutan array secara acak.
    var index = Math.floor(Math.random() * kosakata.length);
    // Mengambil item dari urutan array yang telah diacak.
    var item = kosakata[index];
    // Menghapus keberadaan item dari array.
    kosakata.splice(index, 1);
    // Item yang telah diambil dikembalikan untuk dijadikan output.
    return item;
}

/**
 * Alternatif dari document.write();
 * 
 * Menghindari proses pencetakan dari yang namanya Eval is Evil
 * @description http://www.jameswiseman.com/blog/2011/01/18/jslint-messages-eval-is-evil/
 * @param {String} tag Nama tag yang diinginkan
 * @param {String} value Isi tagnya
 */
function cetakAman(tag, value) {
    var btn = document.createElement(tag);
    var t = document.createTextNode(value);
    btn.appendChild(t);
    document.body.appendChild(btn);
}

/**
 * Perintah untuk mengulangi kode di dalam balok kode dalam
 * interval tertentu. Dalam kasus ini, setiap 500ms atau 0.5 detik sampai kosakatanya habis.
 */
const ngulang = setInterval(() => {
    /**
     * Penyimpanan sementara untuk notRepeat()
     * agar ketika pada pencabangan mudah untuk dicabangkan karena
     * argumennya jelas.
     */
    var acak = notRepeat();
    
    // Defaultnya, kalau notRepeat() itu sudah habis akan menjadi undefined.
    if (acak === undefined) {
        cetakAman("div", "kosakatanya dah abis kontol");
    }
    else {
        cetakAman("div", `${acak} kontol`);
    }
}, 500);