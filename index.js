function alternarImagens() {
    const imagens = document.querySelectorAll('.print-instagram');
    let initalIndex = 0;

    function mostrarProximaImagem() {
        imagens.forEach((imagem, index) => {
            if (index === initalIndex) {
                imagem.classList.remove('hide');
            } else {
                imagem.classList.add('hide');
            }
        });

        initalIndex = (initalIndex + 1) % imagens.length;
    }

    setInterval(mostrarProximaImagem, 5000); // Alterna as imagens a cada 3 segundos
}

alternarImagens();