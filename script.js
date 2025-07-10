document.addEventListener('DOMContentLoaded', () => {
    const listaCarros = document.getElementById('lista-carros');

    const carros = [
        { modelo: 'Sedan', preco: 'R$ 50.000' },
        { modelo: 'SUV', preco: 'R$ 80.000' },
        { modelo: 'Hatch', preco: 'R$ 40.000' }
    ];

    carros.forEach(carro => {
        const li = document.createElement('li');
        li.textContent = `${carro.modelo} - ${carro.preco}`;
        listaCarros.appendChild(li);
    });

    const formContato = document.getElementById('form-contato');
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado pelo contato!');
        formContato.reset();
    });
});
