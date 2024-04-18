const formulario = document.querySelector("form");
const botao = document.querySelector("form button");

//function formularioEnviado(resposta){if(resposta.ok){formulario.innerHTML = <p>Mensagem enviada com sucesso!</p>}else{<p>Erro no envio! Tente novamente.</p>}}

function enviarFormulario(event) {
  event.preventDefault();
  botao.disabled = true;
  botao.innerText = "Enviando...";
  const data = new FormData(formulario);

  //fetch('./enviar.php', {method: 'POST', body: data,}).then(formularioEnviado)
}

formulario.addEventListener("submit", enviarFormulario);
