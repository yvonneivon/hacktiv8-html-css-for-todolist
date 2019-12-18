//VARIABEL HTML YANG AKAN DIAKSES OLEH JS//
let letstart = document.getElementById("letstart");
let nambahkotak = document.getElementById("nambahkotak");
let inputan = document.getElementById("inputan");
let tombolkuning = document.getElementById("tombolkuning");
let tombolhijau = document.getElementById("tombolhijau");
let tombolmerah = document.getElementById("tombolmerah");

//localStorage.removeItem("arraytodo")
letstart.innerHTML = letstart.innerHTML + localStorage.getItem("username") + " !"
let array = []
let counter = 1

for (let i = 0; i<array.length;i++){
    nambahkotak.innerHTML = nambahkotak.innerHTML + "<div class='kotakactivity3'><div class='kotakkotak'><form><input class='input' name='type' type='text' placeholder='" + array[i] + "'></form></div><div id='tombolmerah' class='tombol' style='background-color: #FF6961;'></div><div id='tombolhijau' class='tombol' style='background-color: #77DD77;'></div><div id='tombolkuning' class='tombol' style='background-color: #FDDD5C;'></div><span id='waktu' class='timestamp'>8.00AM 12/12/12</span></div>";
}


function add(){
array.push(inputan.value)
localStorage.setItem("arraytodo",array)
nambahkotak.innerHTML = nambahkotak.innerHTML + "<div id='task"+ counter +"' class='kotakactivity3'><div class='kotakkotak'><form><input class='input' name='type' type='text' placeholder='" + inputan.value + "'></form></div><div id='tombolmerah' class='tombol' style='background-color: #FF6961;' onclick='hapus("+ "task" + counter + ")'></div><div id='tombolhijau' class='tombol' style='background-color: #77DD77;' onclick='selesai("+ "task" + counter + ")'></div><div id='tombolkuning' class='tombol' style='background-color: #FDDD5C;'></div><span id='waktu' class='timestamp'>8.00AM 12/12/12</span></div>";
counter++

}
function kuning(){
    tombolkuning.style.backgroundColor = "transparent";
}
function next(){
    window.location.href = "indextiga.html"
} 
function previous(){
    window.location.href = "indexsatu.html"
}
function hapus(x){
    x.remove()
}
function selesai(x){
    x.style.backgroundColor = "black"
}
