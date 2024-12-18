# AdviceHealth | Teste técnico - Desenvolvedor Front-End Júnior

Aplicação web desenvolvida em `Typescript` e `React` como teste técnico referente à posição de Desenvolvedor Front-End Júnior na `AdviceHealth`.

## Cenário da aplicação

A aplicação consiste em três telas principais: `Área de Trabalho`, `Agendamento de Consulta` e `Consulta de Agendamentos`. Além dessas, conta com telas de apoio, como registro e alteração de agendamentos.

Ela é projetada para uso por profissionais de atendimento em clínicas de saúde, em computadores e laptops, não sendo otimizada para dispositivos móveis, como smartphones e tablets.

Seu objetivo é auxiliar no gerenciamento da rotina de atendimento da clínica, permitindo agendar consultas, verificar dias e horários disponíveis, registrar dados de pacientes, entre outras funcionalidades.

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

A arquitetura de arquivos e pastas deste projeto foi organizada com base em suas respectivas funcionalidades. Essas pastas contêm subpastas conforme seu escopo. Exemplo:
- `/api`: funções de requisição HTTP;
  - `/api/appointments`: requisições relacionadas a agendamentos;
- `/components`: componentes de interação com o usuário, como formulários, botões e afins;
  - `/ui`: componentes globais e isolados, exemplo: `Card`, `Button`, `Input`, `Label`;
- `/config`: arquivos de configuração;
- `/constants`: dados e informações constantes, ou seja, que não sofrerão alterações através de interações com o usuário;
- `/helpers`: funções auxiliares, como formatadores de dados, validações, etc.;
- `/hooks`: hooks utilizados em uma aplicação `React`;
- `/layouts`: estrutura de layout padrão para determinadas telas;
- `/lib`: configurações de bibliotecas externas;
- `/pages`: componentes responsáveis pela exibição das páginas ao usuário;
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

A aplicação estará disponível para acesso no endereço exibido no terminal, por exemplo: [http://localhost:5173](http://localhost:5173).

### Observações de execução

Verifique se as rotas da API exibidas no terminal correspondem a `http://localhost:3333`.

Caso o endereço informado seja diferente do padrão configurado, crie um arquivo `.env` na raiz do projeto e adicione a seguinte variável de ambiente:

```
VITE_API_URL="endereço-da-api"
```
E execute o projeto novamente.

## Observações do desenvolvimento

Como não havia uma API disponível para realizar as requisições, utilizei a biblioteca `json-server` para simulação. Embora as funções criadas não apresentem bom desempenho ou sigam as melhores práticas, elas foram desenvolvidas apenas para exemplificar o funcionamento das requisições.

Foi adicionado um arquivo de exemplo para servir como banco de dados, contendo registros entre os dias **17/12** e **20/12**.

Mesmo que melhorias e funcionalidades adicionais tenham sido planejadas, elas foram deixadas de lado devido ao tempo limitado para o desenvolvimento, a fim de não ultrapassar o prazo estabelecido. Meu foco foi garantir que a aplicação fosse minimamente funcional, com interações básicas.

Apenas para registro, abaixo estão alguns pontos que eu teria a capacidade e habilidade para desenvolver, caso houvesse mais tempo disponível:

- **Área de trabalho**:
  - Funcionalidade para alterar as informações dos lembretes.
- **Agendamentos** :
  - Funcionalidade para alterar o `status` do agendamento;
  - Adição de um seletor para o tipo de consulta (convênio ou privada);
  - Definição de um valor pré-determinado para a consulta, conforme cada profissional;
  - Validação do CPF e separação do campo de endereço (com campos específicos para rua, bairro, cidade, etc.).
- **Consulta**:
  - Funcionalidade para ordenação da tabela por data, valor, nome ou profissional.

Outro ponto a ser ressaltado é que a adaptação para telas menores foi desconsiderada, pois o foco foi no uso em dispositivos com telas de laptops ou maiores.

---

Estou à disposição para quaisquer dúvidas que possam surgir.