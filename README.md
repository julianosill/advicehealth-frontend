# AdviceHealth | Teste técnico - Desenvolvedor Front-End Júnior

Aplicação web desenvolvida em `Typescript` e `React` como teste técnico referente à posição de Desenvolvedor Front-End Júnior na `AdviceHealth`.

## Cenário da aplicação

A aplicação consiste em 3 telas principais: `Área de trabalho`, `Agendamento de consulta`, `Consulta de agendamentos`. Além de outras telas de apoio, como registro e alteração de agendamento.

Ela será utilizada por profissionais de atendimento de clínicas de saúde, utilizando computadores e laptops, desconsiderando seu uso em dispositivos móveis como smartphones e tablets.

A aplicação tem a função de auxiliar no gerenciamento da rotina de atendimento da clínica, como agendar consultas, verificar dias e horários disponíveis, registrar dados de pacientes e afins.

## Bibliotecas e ferramentas

Foram utilizadas as seguintes bibliotecas e ferramentas para auxiliar e agilizar o desenvolvimento:
- `Tailwind CSS`: framework CSS para estilização;
- `shadcn/ui`: biblioteca de componentes personalizáveis;
- `React Router`: biblioteca para gerenciamento de rotas da aplicação;
- `React Hook Form`: biblioteca para gerenciamento e manipulação de formulários;
- `Redux`: biblioteca para gerenciamento de estado global;
- `Tanstack Query / React Query`: biblioteca para gerenciamento de cache das requisições; 
- `Axios`: biblioteca para requisições HTTP; 
- `Zod`: biblioteca para validação de dados.

## Arquitetura de pastas

A arquitetura de arquivos e pastas deste projeto foi organizada com base em suas respetivas funcionalidades. Estas pastas contém subpastas conforme seu escopo, exemplo:
- `/api`: funções de requisição HTTP;
  - `/api/appointments`: requisições relacionadas a agendamentos.
- `/components`: componentes de interação com o usuário, como formulários, botões e afins;
  - `/ui`: componentes globais e isolados, exemplo: `Card`, `Button`, `Input`, `Label`.
- `/config`: arquivos de configuração;
- `/constants`: dados e informações constantes, ou seja, não serão alterados através de interações com o usuário;
- `/helpers`: funções de auxília, como formatadores de dados, validações, etc;
- `/hooks`: hooks utilizados em uma aplicação `React`;
- `/layouts`: estrutura de layout padrão para determinadas telas;
- `/lib`: configurações de bibliotecas externas;
- `/pages`: componentes responsáveisp pela exibição das telas ao usuário;
- `/routes`: configurações das rotas da aplicação;
- `/store`: configurações e armazenamento de estado global;
- `/types`: arquivos de tipagens globais.

## Executando o projeto

Para executar o projeto localmente, execute os comandos abaixo em seu terminal:

```bash
git clone https://github.com/julianosill/advicehealth-frontend.git
cd advicehealth-frontend
npm install
npm run dev
```

A aplicação está disponível para acesso no endereço informado em seu terminal, por exemplo: [http://localhost:5173](http://localhost:5173).

### Observações de execução

Verifique se as rotas da API informada em seu terminar é igual a `http://localhost:3333`.

Caso o endereço informado seja diferente do padrão configurado, crie um arquivo `.env` na raiz do projeto e adicione a seguinte variável:

```
VITE_API_URL="endereço-da-api"
```
E execute o projeto novamente.

## Observações do desenvolvimento

Como não havia uma API para realizar as requisições, utilizei a biblioteca `json-server` para simulação. Embora essas funções criadas não tenham um bom desempenho ou boas práticas, apenas criei para exemplificar o funcionamento das requisições.

Foi adicionado um arquivo de exemplo para servir de banco de dados. Nele há registros entre os dias **17/12** e **20/12**.

Há melhorias e funcionalidades que foram pensadas, porém devido ao tempo disponível para o desenvolvimento, foram deixadas de lado para não ultrapassar o prazo estabelecido. Meu foco foi em tornar a aplicação minimamente funcional com interações básicas.

Apenas para registro, seguem alguns pontos que tenho capacidade e habilidade para desenvolver com um maior tempo disponível:

- **Área de trabalho**:
  - Gráfico para exibição de estatísticas;
  - Funcionalidade de alterar as informações dos lembretes.
- **Agendamentos** :
  - Função para alterar o `status` do agentamento;
  - Adição de um seletor para o tipo de consulta (convênio ou privada);
  - Definição de um valor pré-determinado da consulta conforme cada profissional;
  - Validação do CPF e separação do campo de endereço (campos para rua, bairro, cidade, etc.);
  - Redirecionar o usuário caso tente acessar manulmente a página de edição de un agendamento que não existe.
- **Consulta**:
  - Funcionalidade para ordenação da tabela, como data, valor, nome ou profissional;
  - Redicionar o usuário caso tente acessar uma paginação superior, exemplo: a consulta resulta em 3 páginas e o usuário manualmente altera o endereço para a página 4.

Outro ponto a ser ressaltado é a adaptação para telas menores foi desconsiderada, visando o cenário de uso apenas em telas de laptops ou maiores.

---

Estou à disposição para quaisquer dúvidas que possam surgir.