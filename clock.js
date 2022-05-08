
setInterval(() => {
        a = new Date();
    let date = a.toLocaleDateString();
    let time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
    let c = date + " _and_ " + time;
    document.getElementById("cl").innerHTML = c;   
    }, 1000);   

