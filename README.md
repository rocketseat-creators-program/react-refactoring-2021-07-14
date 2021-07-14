<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# React Refactoring

O React está em contante evolução, assim como os projetos que utilizam esta biblioteca. Desse modo, é natural que em algum momento seja necessário refatorar um projeto implementado com React.

Nesse vídeo iremos adotar algumas estratégias para tornar o código mais atual, apto a usar novas funcionalidades da biblioteca, com melhor manutenibilidade, melhor desempenho e experiência do usuário.

## Expert

| [<img src="https://avatars.githubusercontent.com/u/51406124?s=400&u=f963ab81ef7f1c44c372101e57a57b42963e5beb&v=4" width="75px;"/>](https://github.com/thiagoromendes) |
| :-: |
|[Thiago Mendes](https://github.com/thiagoromendes)|

## Roteiro

### Estrutura inicial:

- React com framework de design (Material UI)
- Componentes criados com classe
- Formulário com vários campos de input
- Componentes de input expostos na página de formulário
- Componentes controlados
- Lógica de validação exposta no código de formulário

### Problemas identificados:

- Baixo desempenho
- Dificuldade em alteração e manutenção do código

### Proposta de refatoração

- Mudar componente de classe para componente funcional
- Usar hooks customizados para manipular dados do formulário
- Segmentar componentes da página de formulário
- Usar lib para registrar e validar elementos do formulário

### App - Selecione o formulário
<img src="https://github.com/thiagoromendes/thiagoromendes/blob/upload-images/Captura%20de%20tela%20de%202021-07-05%2013-49-00.png" />

### Refatorado
<img src="https://github.com/thiagoromendes/thiagoromendes/blob/upload-images/Captura%20de%20tela%20de%202021-07-05%2013-48-40.png" />

### Não refatorado
<img src="https://github.com/thiagoromendes/thiagoromendes/blob/upload-images/Captura%20de%20tela%20de%202021-07-05%2013-49-18.png" />

