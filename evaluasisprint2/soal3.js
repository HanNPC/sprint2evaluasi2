function pp(p, l) {
    luas = p * l
    document.write("Panjang : " + p + "<br>")
    document.write("Lebar : " + l + "<br>")
    document.write("Luas Persegi panjang : " + luas)
}
p = prompt("Masukan Nilai Panjang")
l = prompt("Masukan Nilai Lebar")
pp(p, l)