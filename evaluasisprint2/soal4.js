for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
        if (y<=9-x+1&&y<=x||y>=9-x+1&&x<=y) {
            document.write("0")
        }
        else {
            document.write("1")
        }
    }
    document.write("<br>")
}