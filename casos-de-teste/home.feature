#language:pt

Funcionalidade: Validar página inicial da NEXDOM
  Como usuário visitante
  Quero acessar a página inicial do site
  Para verificar se os principais elementos estão visíveis e funcionais

  Cenário 001: Validar lista do menu principal
    Dado que o usuário acessa a página "https://nexdom.tec.br/"
    Quando a página for carregada completamente
    Então o menu principal deve exibir os itens: Home, Sobre nós, Soluções, Carreiras e Contato.

  Cenário 002: Validar link "Saiba Mais"
    Dado que o usuário está na página inicial "https://nexdom.tec.br/"
    Quando o usuário clicar no botão "Saiba Mais"
    Então o sistema deve redirecionar para a página "Sobre nós"

  Cenário 003: Validar existência do vídeo principal
    Dado que o usuário acessa a página inicial "https://nexdom.tec.br/"
    Quando a página carregar
    Então o vídeo principal deve estar visível na tela.