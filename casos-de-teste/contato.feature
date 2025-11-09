Funcionalidade: Validar o formulário de contato do site NEXDOM
  Como usuário
  Quero preencher e enviar o formulário de contato
  Para conseguir entrar em contato com a empresa e validar as regras de preenchimento

  Cenário 005: Validar envio bem-sucedido do formulário de contato
    Dado que o usuário acessa a página de contato "https://nexdom.tec.br/contato"
    E visualiza o título "Fale conosco"
    Quando preencher corretamente todos os campos obrigatórios do formulário
    E clicar em "Enviar"
    Então a mensagem "As suas respostas foram recebidas com sucesso!" deve ser exibida.

  Cenário 006: Validar que o campo email aceita apenas endereços válidos
    Dado que o usuário acessa a página de contato "https://nexdom.tec.br/contato"
    E visualiza o título "Fale conosco"
    Quando preencher o campo email com um valor inválido "a@a"
    E tentar enviar o formulário
    Então deve ser exibida a mensagem "Este campo é obrigatório."
    E também a mensagem "Your submission failed because of an error."

  Cenário 007: Validar que o campo telefone aceita apenas números e caracteres válidos
    Dado que o usuário acessa a página de contato "https://nexdom.tec.br/contato"
    E visualiza o título "Fale conosco"
    Quando preencher o campo telefone com o caractere inválido "´"
    E tentar enviar o formulário
    Então deve ser exibida a mensagem "O Campo Aceita Apenas Números e Caracteres de Telefone (#, -, *, etc)."
    E também a mensagem "Your submission failed because of an error."

  Cenário 008: Validar que o formulário vazio não será enviado
    Dado que o usuário acessa a página de contato "https://nexdom.tec.br/contato"
    E visualiza o título "Fale conosco"
    Quando clicar em "Enviar" sem preencher os campos obrigatórios
    Então deve ser exibida uma mensagem obrigatória de preenchimento para os campos: Nome ,E-mail ,Empresa.