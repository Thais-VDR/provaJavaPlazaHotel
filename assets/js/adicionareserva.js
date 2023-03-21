let AdicionaReserva = document.querySelector('#adiciona-reservas')
AdicionaReserva.addEventListener('click', function (evento) {

    evento.preventDefault()

    let form = document.querySelector('#adiciona-reserva')

    let reserva = obterValoresDaReserva(form)

    adicionaReservaNaTabela(reserva)


})

function adicionaReservaNaTabela(reserva) {
    let reservaTr = montarTr(reserva)
    let reser = document.querySelector('#reservas')

    resea.appendChild(reservaTr)
}
function montarTr(reserva) {
    let reservaTr = document.createElement('tr')
    reservaTr.classList.add('reserva')

    reservaTr.appendChild(montarTd(reserva.nome, 'nome'))
    reservaTr.appendChild(montarTd(reserva.quarto, 'quarto'))
    reservaTr.appendChild(montarTd(reserva.in, 'in'))
    reservaTr.appendChild(montarTd(reserva.out, 'out'))
    reservaTr.appendChild(montarTd(reserva.status, 'status'))

    return reservaTr
}
function montarTd(dado, classe) {
    let montarTd = document.createElement('montarTd')
    montarTd.textContent = dado
    montarTd.classList.add(classe)

    return montarTd
}

function obterValoresDaReserva(form) {
    let reserva = {
        nome: form.nome.value,
        quarto: form.quarto.value,
        in: form.in.value,
        out: form.out.value,
        status: form.status.value
    }
    return reserva
}
