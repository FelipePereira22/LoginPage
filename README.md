<div>
🔐 Cadastro/Login Angular
Fluxo de cadastro de usuário com proteção de rotas e consumo de API, construído com Angular standalone components.
</div>

📌 Sobre o projeto

Projeto de estudo que simula um fluxo real de cadastro → proteção de rota → dashboard, usando os recursos mais modernos do Angular: signal, inject, componentes standalone e CanActivateFn.

✨ Funcionalidades
	Descrição
📝	Formulário reativo (ReactiveFormsModule) com validação de campos obrigatórios e senha mínima
🌐	Envio dos dados para uma API real via HttpClient (POST)
💾	Estado do usuário cadastrado gerenciado com signal
🛡️	Rota /dashboard protegida por authGuard (CanActivateFn)
🔁	Redirecionamento automático para /register se o acesso não for autorizado
⏳	Feedback visual de carregamento e mensagens de sucesso/erro

🛠️ Tecnologias
<div align="left">

<img src="https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white"/>
<img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> 
<img src="https://img.shields.io/badge/-RxJS-B7178C?style=flat-square&logo=reactivex&logoColor=white"/>
<img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>

</div>
Angular (standalone components, signal, inject)
Angular Router
Reactive Forms
HttpClient
