window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    if (window.scrollY > 20) { // Ajuste a altura conforme necessário
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Função para adicionar uma entrega à tabela de entregas abertas
    function addEntregaToAbertasTable(entrega) {
        const tbody = document.querySelector('#entregas-abertas-table tbody');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entrega.id}</td>
            <td>${entrega.bairroOrigem}</td>
            <td>${entrega.bairroDestino}</td>
            <td>${entrega.tempoEstimado}</td>
            <td>${entrega.distancia}</td>
            <td>${entrega.valor}</td>
            <td><button class="aceitar-entrega-btn" data-id="${entrega.id}">Aceitar</button></td>
        `;
        tbody.appendChild(row);
    }

    // Função para adicionar uma entrega à tabela de entregas do motoboy
    function addEntregaToMinhasTable(entrega) {
        const tbody = document.querySelector('#minhas-entregas-table tbody');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entrega.id}</td>
            <td>${entrega.cliente}</td>
            <td>${entrega.enderecoOrigem}</td>
            <td>${entrega.enderecoDestino}</td>
            <td>${entrega.status}</td>
            <td><button class="finalizar-entrega-btn" data-id="${entrega.id}">Finalizar</button></td>
        `;
        tbody.appendChild(row);
    }

    // Função para adicionar a pontuação das entregas à tabela de pontos
    function addPontosEntregaToTable(entrega) {
        const tbody = document.querySelector('#pontos-entrega-table tbody');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entrega.id}</td>
            <td>${entrega.bairroOrigem}</td>
            <td>${entrega.bairroDestino}</td>
            <td>${entrega.distancia}</td>
            <td>${entrega.avaliacaoCliente}</td>
            <td>${entrega.pontos}</td>
        `;
        tbody.appendChild(row);
    }

    // Função para calcular e atribuir pontos às entregas com base na distância e avaliação do cliente
    function calcularPontosEntrega(entregas) {
        entregas.forEach(entrega => {
            // Exemplo simples de cálculo de pontos - você pode ajustar conforme necessário
            const distancia = parseFloat(entrega.distancia.replace(' km', ''));
            const avaliacaoCliente = entrega.avaliacaoCliente;

            // Cálculo de pontos hipotético - pode ser ajustado conforme a lógica do seu sistema
            const pontos = Math.round(distancia * 0.5 + avaliacaoCliente * 10);

            entrega.pontos = pontos;

            // Adiciona a entrega à tabela de pontos
            addPontosEntregaToTable(entrega);
        });
    }

    // Exemplo de entregas com pontuação (dados fictícios)
    const entregasComPontuacao = [
        { id: 1, bairroOrigem: 'Centro', bairroDestino: 'Bairro Alto', distancia: '5 km', avaliacaoCliente: 4 },
        { id: 2, bairroOrigem: 'Jardim', bairroDestino: 'Praia', distancia: '10 km', avaliacaoCliente: 5 },
        // Adicione mais entregas conforme necessário
    ];

    // Carrega e calcula os pontos das entregas ao iniciar a página
    calcularPontosEntrega(entregasComPontuacao);

    // Handler para aceitar uma entrega
    document.querySelector('#entregas-abertas-table').addEventListener('click', function(e) {
        if (e.target.classList.contains('aceitar-entrega-btn')) {
            const id = e.target.getAttribute('data-id');
            alert(`Entrega ${id} aceita com sucesso!`);
            // Aqui você pode adicionar a lógica para mover a entrega da tabela de abertas para a tabela de minhas entregas
        }
    });

    // Handler para finalizar uma entrega
    document.querySelector('#minhas-entregas-table').addEventListener('click', function(e) {
        if (e.target.classList.contains('finalizar-entrega-btn')) {
            const id = e.target.getAttribute('data-id');
            alert(`Entrega ${id} finalizada com sucesso!`);
            // Aqui você pode adicionar a lógica para atualizar o status da entrega
        }
    });

});
