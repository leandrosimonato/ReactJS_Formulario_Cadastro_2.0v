function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 dígitos."}
  }else{
    return {valido:true, texto:""}
  }
}

function validarSenha(senha){
  if(senha.length <4 || senha.length > 30){
    return {valido:false, texto:"Senha deve ter entre 4 e 30 dígitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export { validarCPF, validarSenha };