// Definindo os estados e suas respectivas cidades
const cidadesPorEstado = {
    AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá"],
    AL: ["Maceió", "Arapiraca", "Palmeira dos Índios", "Rio Largo"],
    AP: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque"],
    AM: ["Manaus", "Parintins", "Itacoatiara", "Tefé"],
    BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari"],
    CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú"],
    DF: ["Brasília"],
    ES: ["Vitória", "Vila Velha", "Serra", "Cariacica"],
    GO: ["Goiânia", "Anápolis", "Aparecida de Goiânia", "Rio Verde"],
    MA: ["São Luís", "Imperatriz", "Timon", "Caxias"],
    MT: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop"],
    MS: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá"],
    MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"],
    PA: ["Belém", "Ananindeua", "Santarém", "Marabá"],
    PB: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos"],
    PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa"],
    PE: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru"],
    PI: ["Teresina", "Parnaíba", "Picos", "Piripiri"],
    RJ: ["Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu"],
    RN: ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante"],
    RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas"],
    RO: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Cacoal"],
    RR: ["Boa Vista", "Rorainópolis", "Caracaraí", "Mucajaí"],
    SC: ["Florianópolis", "Joinville", "Blumenau", "Chapecó"],
    SP: ["São Paulo", "Campinas", "Santos", "Sorocaba"],
    SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana"],
    TO: ["Palmas", "Araguaína", "Gurupi", "Porto Nacional"]
};

// Seleciona os elementos de estado e cidade
const selectEstado = document.getElementById('estado');
const selectCidade = document.getElementById('cidade');

// Função para preencher as cidades com base no estado selecionado
selectEstado.addEventListener('change', function() {
    const estadoSelecionado = this.value;

    // Limpa as opções anteriores de cidade
    selectCidade.innerHTML = '<option value="">Selecione</option>';
    
    // Desabilita o campo de cidade por padrão
    selectCidade.disabled = true;

    // Se um estado for selecionado, popula as cidades correspondentes e habilita o campo de cidades
    if (estadoSelecionado && cidadesPorEstado[estadoSelecionado]) {
        const cidades = cidadesPorEstado[estadoSelecionado];
        cidades.forEach(function(cidade) {
            const option = document.createElement('option');
            option.value = cidade;
            option.text = cidade;
            selectCidade.appendChild(option);
        });
        
        // Habilita o campo de cidade após preencher as opções
        selectCidade.disabled = false;
    } else {
        // Se não houver estado selecionado, exibe a opção padrão e mantém desabilitado
        selectCidade.innerHTML = '<option value="">Selecione o estado primeiro</option>';
        selectCidade.disabled = true;
    }
});
