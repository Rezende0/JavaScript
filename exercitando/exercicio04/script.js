function iniciarContagem() {
    let inicio = document.getElementById('idini').value;
    const ofim = document.getElementById('idfim').value;
    let passarinho = document.getElementById('idpasso').value;
    const res = document.getElementById('result');

    if (inicio == "" || ofim == "") {
        alert('Erro ! Faltam dados.')
    }else {
        if (passarinho <= 0 ) {
            passarinho = 1
            alert('Nenhum valor válido para passos, portanto, ele valerá 1')
        }

        let i = Number(inicio)
        let f = Number(ofim)
        let p = Number(passarinho)
        
        
        if (i < f) {
            res.innerHTML = ""
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`;
                if (c + p == f) {
                    res.innerHTML += `${c+p}`
                    break
                }
            }
        } else if (i > f) {
            res.innerHTML = ""
            for (let c = i; c > f; c -= p) {
                res.innerHTML += `${c} 👉`;
                if (c - p == f) {
                    res.innerHTML += `${c-p}`
                    break
                }
            }
        }else {
            alert('Os números de início e fim são iguais')
        }
    }
}
