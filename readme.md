# Chain of Responsibility em Javascript

   ## Tratando uma requisição de forma encadeada

### O que é ?

Chain of Responsibility, é um Design Pattern que existe para resolver problemas onde um objeto remetente pode ser tratado por diferentes objetos receptores. Esses objetos receptores são encadeados e realizam o processamento da solicitação ao longo da cadeia até que um desses objetos realize o devido tratamento.

![alt text](https://github.com/cgama-dev/app-validate-cpf/blob/master/img/chain-of-responsability.png?raw=true)

Após a execução da primeira instancia do Handler A  da cadeia, os métodos ou conjunto de métodos após sua operação têm como retorno a própria instância, dessa forma permite que o encadeamento de métodos seja de forma sequencial, dando a oportunidade que outros objetos tenham a oportunidade de tratar uma solicitação.


### Caso de Uso.

É necessário realizar a validação de um CPF. Para realizar essa validação
divimos os seguintes etapas:

- Remover do cpf passado todos os caracteres que não sejam dígitos;
- Verificar se a quantidade de dígitos é formado por 11 dígitos numéricos;
- Verificar se todos os dígitos informados são iguais;
- Realizar a validação do primeiro e segundo dígito verficador;

![alt text](https://github.com/cgama-dev/app-validate-cpf/blob/master/img/validatecpf.png?raw=true)

### Resultado do método que chama os objetos em cadeia;

![alt text](https://github.com/cgama-dev/app-validate-cpf/blob/master/img/code.png?raw=true)

### Quando utilizar o Chain of Responsability

 - Mais de um objeto pode tratar uma solicitação e o objeto que a tratará não conhecido a priori. O objeto que trata a solicitação deve ser escolhido
  automaticamente;

 - Você quer emitir uma solicitação para um dentre vários objetos, sem
  especificar explicitamente o receptor;

 - o conjunto de objetos que pode tratar uma solicitação deveriam ser especificado dinamicamente


Esse post foi inspirado no desafio proposto no curso do @Rodrigo Branas,
na refatoração do famoso código de validação de CPF. Decide utilizar
esse desafio como uma forma de mostrar a aplicação do padrão Chain of Responsibility.
