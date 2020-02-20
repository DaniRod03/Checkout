let config = {
    method: "GET"
}

let inputCPF = document.getElementById('cpf');
let senha = document.getElementById('pass');
let conf = document.getElementById('confpass');
let cep = document.getElementById('cep');
let cartao = document.getElementById('cartao');
let titcpf = document.getElementById('titcpf');
let numero = document.getElementById('numero');
let seg = document.getElementById('seg');
let endereco = document.getElementById('end');
let cidade = document.getElementById('city');
let bairro = document.getElementById('bairro');


inputCPF.addEventListener('keyup', (event) => {
    if (isNaN(inputCPF.value)) {
        inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length - 1));
    }

    if (inputCPF.value.length >= 11) {
        inputCPF.value = inputCPF.value.substring(0, 11)
    }
})

conf.addEventListener('keyup',(e)=>{
    if(conf.value != senha.value){
        conf.setAttribute("class", "form-control is-invalid")
    } else {
        conf.setAttribute("class", "form-control is-valid")
    }
})

cep.addEventListener('keyup', (event) => {
    if (isNaN(cep.value)) {
        cep.value = cep.value.substring(0, (cep.value.length - 1));
    }

    if (cep.value.length >= 8) {
        cep.value = cep.value.substring(0, 8)
    }
})

function buscarCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`, config)
    .then(response => response.json())
    .then(dados =>{
        if(dados.erro){
            return cep.setAttribute('class', 'form-control is-invalid')
        }
        cep.setAttribute("class", "form-control is-valid")
        endereco.value = dados.logradouro
        bairro.value = dados.bairro
        cidade.value = dados.cidade
        }
    )
}

cartao.addEventListener('keyup', (event) => {
    if (isNaN(cartao.value)) {
        cartao.value = cartao.value.substring(0, (cartao.value.length - 1));
    }

    if (cartao.value.length >= 16) {
        cartao.value = cartao.value.substring(0, 16)
    }
})

seg.addEventListener('keyup', (event) => {
    if (isNaN(seg.value)) {
        seg.value = seg.value.substring(0, (seg.value.length - 1));
    }

    if (seg.value.length >= 3) {
        seg.value = seg.value.substring(0, 3)
    }
})

numero.addEventListener('keyup', (event) => {
    if (isNaN(numero.value)) {
        numero.value = numero.value.substring(0, (numero.value.length - 1));
    }

    if (numero.value.length >= 5) {
        numero.value = numero.value.substring(0, 5)
    }
})

titcpf.addEventListener('keyup', (event) => {
    if (isNaN(titcpf.value)) {
        titcpf.value = titcpf.value.substring(0, (titcpf.value.length - 1));
    }

    if (titcpf.value.length >= 11) {
        titcpf.value = cartao.value.substring(0, 11)
    }
})

