Cadastro/Login Angular

Projeto de estudo em Angular que simula um fluxo de cadastro de usuário com proteção de rotas via Auth Guard e consumo de API com HttpClient.

✨ Funcionalidades

Formulário de cadastro reativo (ReactiveFormsModule) com validações (campo obrigatório e senha com tamanho mínimo)
Envio dos dados do formulário para uma API (JSONPlaceholder) via HttpClient
Armazenamento do usuário cadastrado em estado reativo usando signal
Proteção da rota /dashboard com CanActivateFn: só é possível acessar o dashboard após um cadastro válido
Redirecionamento automático para /register caso o usuário tente acessar o dashboard sem estar cadastrado
Feedback visual de carregamento (isLoading) e mensagens de sucesso/erro no cadastro

🛠️ Tecnologias

Angular (standalone components, signal, inject)
Angular Router
Reactive Forms
HttpClient
TypeScript
