function buscar() {
    let busca_input = document.querySelector('input#busca')
    let resultado_da_busca = document.querySelector('div.resultado_da_busca')
    let busca = String(busca_input.value)
    if (busca == 'loja') {
        resultado_da_busca.innerHTML = `<p class="resultado_da_busca"><a href="./loja/loja.html" rel="next">Loja</a></p>`
    }
    
    else {
        resultado_da_busca.innerHTML = `<p>Resultado não encontrado</p>`
    }

}