//VARIABEL HTML YANG AKAN DIAKSES OLEH JS//
let username = document.getElementById("username");
let dropdown = document.getElementById("dropdown");

//FUNCTION UNTUK MENYIMPAN DI STORAGE BROWSER//
function letsgo() {
    localStorage.setItem('username', username.value);
    confirm('Please tell your friend about this app!');

    //FUNCTION IF-ELSE UNTUK MEMILIH//
    if (dropdown.value == "daily") {
        window.location.href = "indexdua.html";
        return false;
    } else {
        window.location.href = "indextiga.html";
        return false;
    }
}