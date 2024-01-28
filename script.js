let texto = document.querySelector('.input1')
let mensagemCriptografada = document.querySelector('.input2')

function criptografar() {
    let textoCriptografado = texto.value
    textoCriptografado = textoCriptografado.replaceAll(/e/g, "enter")
    textoCriptografado = textoCriptografado.replaceAll(/i/g, "imes")
    textoCriptografado = textoCriptografado.replaceAll(/a/g, "ai")
    textoCriptografado = textoCriptografado.replaceAll(/o/g, "ober")
    textoCriptografado = textoCriptografado.replaceAll(/u/g, "ufat")
    mensagemCriptografada.value = textoCriptografado
    exibirMensagem()
}

function descriptografar() {
    let textoOriginal = texto.value
    mensagemCriptografada.value = textoOriginal
}

function exibirMensagem() {
    let mensagemCampo = document.querySelector('.descricaomsg')
    let botaoCopiar = document.querySelector('.copiar')
    mensagemCampo.classList.add('none')
    mensagemCriptografada.classList.remove('none')
    botaoCopiar.classList.remove('none')
    document.querySelector('.mensagem').style.justifyContent = "space-between"
    botaoCopiar.style.justifySelf = "end"
}

function copiar() {
    mensagemCriptografada.select()
    mensagemCriptografada.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(mensagemCriptografada.value)
}