

function verificarIdade() {
    const anoNascimento = document.getElementById('anoNasc').value
    const data = new Date()
    const anoAtual = data.getFullYear()

    if (anoNascimento < anoAtual - 120|| anoNascimento > anoAtual) {
        alert ('Dado Inválido, por favor, tente novamente.')
    }else {
        const sexo = document.querySelector('input[name="sexo"]:checked').value;
        const resultado = document.getElementById('result')
        const idade = anoAtual - anoNascimento
        resultado.innerHTML = `<p>Você tem ${idade} anos de idade e seu gênero é ${sexo}</p>`
        resultado.style.textAlign = 'center'
        const img = document.createElement('img')
        img.setAttribute('id','foto')

        if (sexo=='masculino') {
            if (idade < 12) {
                img.setAttribute('src', 'Imagens/criancaM.jpg')
            }else if (idade < 18){
                img.setAttribute('src', 'Imagens/jovemM.jpg')
            }else if (idade < 60) {
                img.setAttribute('src', 'Imagens/adultoM.jpg')
            }else {
                img.setAttribute('src', 'Imagens/senhorM.jpg')
            }
        }else {
            if (idade < 12) {
                img.setAttribute('src', 'Imagens/criancaF.jpg')
            }else if (idade < 18){
                img.setAttribute('src', 'Imagens/jovemF.jpg')
            }else if (idade < 60) {
                img.setAttribute('src', 'Imagens/adultoF.jpg')
            }else {
                img.setAttribute('src', 'Imagens/senhoraF.jpg')    
            } 
        }
        resultado.appendChild(img)
    }
}