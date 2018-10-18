# Desafio estagiário: HTML/CSS/JS

### @felipexperto:

> Primeiramente, créditos a quem merece: Encontrei este desafio na lista [Frontend Challenges](https://github.com/LFeh/frontend-challenges) de [Felipe Fialho](https://github.com/LFeh). Acesse lá que tem muito conteúdo interessante e siga-o no [Twitter](https://twitter.com/lfeh).

&nbsp;

## DEMO

> [Clique aqui e veja o projeto em produção](https://blissful-dubinsky-196f75.netlify.com/).

&nbsp;

**A construção desta Landing Page permite que você explore diversas tecnologias durante sua criação, podendo optar por diversos caminhos:**

- Javascript Vanilla vs jQuery;
- ES5 vs ES6;
- Fetch vs Libraries (ex: [Axios](https://github.com/axios/axios));
- Flexbox vs Grid vs Bootstrap;
- CSS Animation vs [jQuery Effects](https://api.jquery.com/category/effects/) vs [Animate.css](https://daneden.github.io/animate.css/);
- Fontes via CDN vs Embed padrão;
- Ícones em png vs svg;

&nbsp;

**Como decidi abordar o projeto:**

- Seguir *todas* as regras em *Layout*, *Dicas* e *Diferenciais*;
- Compatibilidade com IE 11, Edge, Chrome e Firefox;
- Mínimo de requests possível;
- Sem requests de CDNs;
- Mínimo de dependências em produção possível (frameworks, libraries, plugins, etc);
- Javascript Vanilla ES5 + Flexbox + CSS Animation + Fontes embed padrão + SVG;

&nbsp;

**Sobre os arquivos e execução:**

- O projeto está na pasta `project` - intuitivo hein?! 
- Após um `npm install` você pode subir um server com browserify utilizando o comando `npm run gulp server`;
- Ou buildar o projeto com o comando `npm run gulp`;
   - As duas instruções acima também podem ser encontradas dentro do arquivo gulpfile.js

&nbsp;

---

&nbsp;

## Enunciado padrão:

> **ATENÇÃO:** Antes de começar, se [cadastre na vaga](https://linxneemuchaordic.recruiterbox.com/) via Recruiterbox **=]**

O desafio proposto consiste numa **landing page** simulando um encurtador de links, onde testará as habilidades e qualidade de código de um desenvolvedor front-end ao transformar um layout em um protótipo funcional. 

### Instruções

- **Forke** esse repositório e faça o desafio numa branch com o seu nome (exemplo: `nome-sobrenome`);
- O seu objetivo principal é transformar esse [mockup](./Layout/Preview.jpg) em um protótipo funcional HTML/CSS/JS;
- No seu projeto, crie um diretório chamado `project`. Todos os arquivos que você criar devem estar dentro desta pasta;
- Assim que concluir o seu desafio, abra um **pull request** com suas alterações.


### Layout

- Dentro da pasta [Layout](./Layout) possui um arquivo [psd](./Layout/Layout.psd) e [jpg](./Layout/Preview.jpg), use-os como referência para desenvolver o protótipo;
- Use as **cores** definidas no [guideline](./Layout/Guideline-color.jpg);
- As **fontes** utilizadas são: [Roboto](https://www.google.com/fonts/specimen/Roboto) e [Roboto Slab](https://www.google.com/fonts/specimen/Roboto+Slab);
- Caso necessário, na pasta [Assets](./Assets) possui as imagens já exportadas.

### Dicas

- Seu HTML deverá ser o mais semântico possível (faça bom uso das tags HTML5);
- Faça o CSS bem estruturado e em um arquivo separado;
- No JavaScript, evite poluir o escopo global. O uso ou não de bibliotecas também será avaliado.


### Diferenciais

- Boa documentação;
- Uso de pré-processadores CSS ([Sass](http://sass-lang.com), [Less](http://lesscss.org), [Stylus](http://stylus-lang.com));
- Adaptar a página para dispositivos móveis (torná-la responsiva);
- Utilizar alguma automatização ([Grunt](http://gruntjs.com), [Gulp](http://gulpjs.com), [NPM Scripts](https://docs.npmjs.com/misc/scripts))
- Criar [essa interação](./Layout/Shortener-interaction.gif) utilizando JavaScript;
- Consumir esse [JSON](./Assets/urls.json) para a seção **TOP 5**, também utilizando JavaScript.

---

Em caso de dúvidas, [abra uma issue](https://github.com/chaordic/frontend-intern-challenge/issues).

**Boa sorte =]**
