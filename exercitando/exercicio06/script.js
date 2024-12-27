let l = []
let res = document.getElementById('result');

function lista() {
    const numero = document.getElementById('idnumBase').value;
    let numList= document.getElementById('idtabuada');

    res.innerHTML = ''

    if (l.length <= 9) {
        if (numero == "") {
            alert('Erro ! Você não digitou nenhum número.');
        }else {
            let n = Number(numero);
            if (l.indexOf(n) == -1 && n>=0 && n<=100) {
                l.push(n);
                let valores = document.createElement('option');
                valores.text = `O número ${n} foi adicionado!`;
                numList.appendChild(valores);
            }else {
                alert('Valor inválido ou já adicionado!');
            }
        //poderia usar a variavel se colocasse ela com escopo global, sem o '.value'
        document.getElementById('idnumBase').value = '';
        document.getElementById('idnumBase').focus()
        }
    }else {
        alert('Somente 10 valores podem ser adicionados');
    }
}

function resultado() {
    if (l.length === 0) {
        alert ('Nenhum número foi adicionado.')
        return;
    }

    maior = menor = soma = l[0]
    for (let c = 1; c <= l.length-1; c++) {
        soma += l[c]
        if (maior < l[c]) {
            maior = l[c]
        }
        if (menor > l[c]) {
            menor = l[c]
        }
    }
    
    res.innerHTML = `Ao todo, temos ${l.length} números cadastrados<br>`;
    res.innerHTML += `O maior valor informado foi ${maior}<br>`;
    res.innerHTML += `O menor valor informado foi ${menor}<br>`
    res.innerHTML += `A soma dos valores é ${soma}<br>`
    res.innerHTML += `A média dos valores informados é ${soma/(l.length).toFixed(2)}<br>`
}