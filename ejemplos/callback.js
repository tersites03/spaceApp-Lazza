
function uno (dos) {
    console.log("uno")
    setTimeout(dos, 2000);
    
}

function dos (tres) {
    console.log("dos")
    setTimeout(tres, 2000)
    
}

function tres (cuatro) {
    console.log("tres")
    setTimeout(cuatro, 2000);
    
}

function cuatro () {
    console.log("cuatro")
    
}

setTimeout(()=> uno(dos),5000);

