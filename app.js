function function1(z){
    document.getElementById('inpf').value += z
}

function function2(){
    var a=document.getElementById('inpf')
    a.value = eval(a.value)
}

function function3(){
    document.getElementById('inpf').value = ''
}
function function5(){
    var u =document.getElementById('inpf')
    u.value = u.value.slice(0, -1)
}
