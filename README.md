# 1º Projeto de DevWeb
<br>
<p>Aluno Pedro Henrique Vilela Silva RA: 202108528188
Aluno: Gustavo de Arruda Barbosa RA: 202108774294</p>
<br>
Nosso grupo ultilizou a versão do @angular/cli 10
## 1º etapa
<br>
<p>Como o nosso prazo e disponibilidade foi curto decidimos fazer algo mais simples
porem funcional, a ideia inicial era de fazer a homepage ser um catalogo de veiculos
que estivesse disponivel para locação, porem dicidimos de ja iniciar na homepage de
cadastro do usuario. Fizemos 2 páginas de cadastro: 1- Cadastro do usuário, 2- Cadastro
do veiculo. </p>
<br>
<p> Para isso fizemos uma nav bar com o sistema de rotas para que pudessemos navegar de um formulario a outro</p><br>
<h1 align="center">
  <img alt="nav" title="NavBar" src="./nav.png"/> 
</h1>
<br>
<p> Com isso obtinhamos esse Resultado</p>
<br>
<h1 align="center">
  <img alt="nav" title="NavBarGif" src="./navBar.gif"/> 
</h1>

## 2º etapa
<p>
A segunda etapa foi fazer o forumalirio de cadastro do cliente com suas informações básicas, usamos a função do *FormsModule*
para podermos criar um console log com as informações obtidas pelo formulario.
</p>
<p>
Usamos um service do angular para poder fazer a consulta do cep na api do ViaCep para isso tivesse que usar o *HttpClientModule*
</p>
<h1 align="center">
  <img alt="nav" title="serviceCEP" src="./serviceCep.png"/> 
</h1>
<p>
Fizemos uma função no component que quando o foco do input do cep é perdido, o sistema pega o valor digitado, faz a consulta na api atraves dessa service e logo após popula os campos correspondentes
</p>
<h1 align="center">
  <img alt="nav" title="serviceCEP" src="./componentCep.png"/> 
</h1>
<p>
Obtendo este resultado
</p>
<h1 align="center">
  <img alt="nav" title="ExemploCep" src="./exemploCep.gif"/> 
</h1>

## 3º etapa

<p>
No outro formulario fizemos o básico. Usando o bootstrap fizemos um formulario que coleta os dados do veiculo a ser cadastrado no sistema e um tambem uma função que armazena esses dados em um console log 
</p>

<h1 align="center">
  <img alt="nav" title="ExemploCadastroVeiculo" src="./exCadVeiculo.gif"/> 
</h1>
# tab
