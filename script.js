function clicked(val){
    document.getElementById("screen").value += val

}

function clearscrn(){
    document.getElementById("screen").value = 0
}

function equalclick(){
    var txt = document.getElementById("screen").value
    var res = eval(txt)
    document.getElementById("screen").value = res
}