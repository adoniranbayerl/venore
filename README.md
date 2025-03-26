# Venore

## Descrição do Projeto

Venore é uma aplicação web que oferece uma interface de usuário moderna e responsiva. A aplicação é construída utilizando o framework Next.js e integra autenticação via NextAuth. Além disso, a aplicação utiliza o Tailwind CSS para estilização e Drizzle ORM para gerenciamento de banco de dados.

## Funcionalidades

- **Autenticação**: Login com email e social (Google, Microsoft).
- **Navegação Dinâmica**: Menu de navegação principal e de usuário com suporte a expandir/colapsar.
- **Layout Responsivo**: Adaptação para diferentes tamanhos de tela com uso de Tailwind CSS.
- **Componentes Reutilizáveis**: Inclusão de vários componentes de UI como cards, breadcrumbs e menus.

## Estrutura do Projeto

- **components**: Contém os componentes reutilizáveis de UI e navegação.
- **styles**: Arquivos CSS para a estilização da aplicação.
- **database**: Configurações e esquemas do banco de dados utilizando Drizzle ORM.
- **lib**: Funções utilitárias e handlers de redirecionamento.
- **hooks**: Custom hooks para funcionalidades específicas, como manipulação de sidebar.

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/adoniranbayerl/venore.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`.

4. Execute a aplicação em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **NextAuth**: Biblioteca de autenticação para Next.js.
- **Tailwind CSS**: Framework CSS para estilização.
- **Drizzle ORM**: ORM para gerenciamento de banco de dados PostgreSQL.
- **React Icons**: Biblioteca de ícones para React.
