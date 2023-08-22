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
// let b = '';

// function function4(){
//         //  b = b.slice(0,-1);
//     document.getElementById('inpf').value = b.slice(0,-1);
// }
    let displayValue = '';
function clearLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('inpf').value = displayValue;
}

