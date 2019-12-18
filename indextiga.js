let ready = document.getElementById("ready");

ready.innerHTML = ready.innerHTML + localStorage.getItem("username") + " !"

function balik() {
    window.location.href = "indexsatu.html"
}

function screenshot() {
    html2canvas(document.querySelector('body')).then(canvas => {
        document.getElementById("wrapper").appendChild(canvas)
        
    });
}


