function layoutHora() {
    const data= new Date();
    const hora = 8;
    const paragrafo=document.getElementById('text');
    const imagemHora=document.getElementById('image');
    
    if (hora >= 6 && hora < 12) {
        paragrafo.innerHTML = `Agora são ${hora} horas da Manhã`;
        imagemHora.src = "Imagens/manha.jpg"
    } else if (hora >=12 && hora <18) {
        document.body.style.backgroundImage = "linear-gradient(to bottom,  rgb(255, 166, 0), rgba(0, 0, 139, 0.6))";
        paragrafo.innerHTML = `Agora são ${hora} horas da Tarde`;
        imagemHora.src = "Imagens/tarde.jpg"
    }else {
        document.body.style.backgroundImage = "linear-gradient(to bottom,  darkgreen, darkblue)";
        paragrafo.innerHTML = `Agora são ${hora} horas da Noite`;
        imagemHora.src = "Imagens/noite.jpg"
    }
}

window.onload = layoutHora;