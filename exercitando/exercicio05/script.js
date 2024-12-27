function tabuada() {
    const numero = document.getElementById('idnumbase').value;
    let tabuada= document.getElementById('idtabuada');

    if (numero == "") {
        alert('Erro ! Faltam dados.');
    }else {
        let n = Number(numero);
        let c = 0
        tabuada.innerHTML = ''

        while (c <= 10) {
            let valores = document.createElement('option');       
            valores.text = `${n} x ${c} = ${n*c}`
            valores.value = `tabuada${c}`
            //usado para dar uso nessa opção.
            tabuada.appendChild(valores)
            c++
        }
    }
}