/ Função para calcular o total
function calcularTotal() {
    const valores = document.querySelectorAll('table tr td:last-child');
    let total = 0;

    valores.forEach(valor => {
        if (!isNaN(valor.innerText)) {
            total += parseFloat(valor.innerText);
        }
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

// Chamar a função para calcular o total ao carregar a página
window.onload = calcularTotal;
