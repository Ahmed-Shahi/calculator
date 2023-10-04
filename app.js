var a=document.getElementById('inpf')

function function1(z){
    a.value += z
}

function function2(){
    a.value = eval(a.value)
}

function function3(){
    a.value = ''
}
function function5(){
    a.value = a.value.slice(0, -1)
}
