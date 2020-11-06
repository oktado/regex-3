let kalimat1 = "Status covid hari ini"

let testRegex = /^Bagaimana cara memulai bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/
let test = testRegex.test(kalimat1)
function cari () {
    if (test) {
        return "Kalimat yang anda cari ditemukan."
    } else {
        return "Kalimat yang anda cari tidak ditemukan."
    }
}

console.log(cari());