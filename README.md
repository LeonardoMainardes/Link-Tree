# 🔗 Link Tree

Clone do Linktree desenvolvido com React, TypeScript e Tailwind CSS — uma página centralizada para reunir todos os links importantes em um só lugar, com visual moderno e totalmente responsivo.

🔗 **[Ver demo ao vivo](https://link-tree-ruby-seven.vercel.app)**

---

## ✨ Funcionalidades

- Página de links centralizada e responsiva
- Avatar e nome de usuário configuráveis
- Botões de link com hover animado
- Links para redes sociais com ícones
- Design adaptado para mobile, tablet e desktop
- Deploy na Vercel com roteamento configurado

---

## 🛠️ Tecnologias utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

- **React** — interface componentizada e reutilizável
- **TypeScript** — tipagem dos componentes e props
- **Tailwind CSS** — estilização responsiva e rápida
- **Vite** — build e desenvolvimento
- **Vercel** — deploy contínuo com `vercel.json` configurado

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/LeonardoMainardes/Link-Tree.git

# Acesse a pasta
cd Link-Tree

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## ⚙️ Como personalizar

Edite o arquivo de dados do usuário em `src/` para atualizar nome, foto, bio e lista de links:

```ts
// Exemplo de configuração
export const userData = {
  name: "Leonardo Mainardes",
  bio: "Desenvolvedor Front-end",
  avatar: "/avatar.png",
  links: [
    { label: "LinkedIn", url: "https://linkedin.com/in/leonardomainardes" },
    { label: "GitHub", url: "https://github.com/LeonardoMainardes" },
  ]
}
```

---

## 👨‍💻 Autor

Feito por **[Leonardo Mainardes](https://github.com/LeonardoMainardes)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/leonardomainardes)
