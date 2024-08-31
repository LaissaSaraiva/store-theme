# Projeto VTEX Store Theme

Este repositório contém um projeto baseado no store theme da VTEX. Este guia fornecerá informações sobre como configurar e rodar o projeto localmente.

## Requisitos

Antes de começar, verifique se você tem os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [VTEX CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/LaissaSaraiva/store-theme.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**

Na pasta react do projeto e execute:

```bash
yarn install
```

## Configuração

1. **Configure o VTEX CLI:**

Você precisa estar autenticado com o VTEX CLI. Caso não esteja autenticado, execute:

```bash
vtex login seu-vendor
```

Substitua 'seu-vendor' pelo nome da sua conta VTEX.

## Executando o Projeto

Para rodar o projeto localmente, siga estes passos:

1. **Configure o ambiente de desenvolvimento:**

```bash
vtex use sua-dev-workspace
```

2. **Inicie o projeto:**

```bash
 vtex link
```

3. **Visualize o projeto:**

```bash
vtex browse
```

4. **Configure um template para a HOME:**
   Caso a Home não esteja aparecendo, acesse
   `/admin/cms/pages` e selecione um Template para a mesma.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- React
- TypeScript
- plataforma VTEX IO

## Rotas do Projeto

- Home: `/`
- Landing Page: `/newly-launched`
- Perguntas Frequentes: `/faq`

## Componentes e Funcionalidades

### Header, Footer, Home e FAQ

- **Tecnologias Utilizadas:** Componentes nativos da VTEX.

### Landing Page

- **Tecnologias Utilizadas:** Componentes nativos da VTEX e componentes customizados.
- **Componente Customizado:**
  - Nome: Product (custom-product)
  - Tecnologias Utilizadas: React, TypeScript, useCssHandles da VTEX e tipagem StorefrontFunctionComponent para criação do schema.
  - Funcionalidade: O componente é editável via site-editor e foi preenchido por props no bloco jsonc do componente.
  - Organização do Site Editor: Reorganizei os titles para o site-editor para melhorar a experiência do cliente ao realizar alterações na loja.

### Observações

- **Imagens**: As imagens do projeto estão na pasta `assets`. Porém, normalmente utilizo o `admin/new-cms/media-gallery` ou `admin/a`.

### Preview

- Home: <br/><br/>
  ![Home - Desktop](/assets/images/home-desktop.png)

- Landing Page:<br/><br/>
  ![LP - Desktop](/assets/images/lp-desktop.png)

- Faq:<br/><br/>
  ![FAQ - Desktop](/assets/images/faq-desktop.png)

## Tutorial VTEX IO

To understand how things work check our tutorial [Build a store using VTEX IO](https://vtex.io/docs/getting-started/build-stores-with-store-framework/1/)
