# Eliane Silvério

Landing page pessoal e profissional de Eliane Silvério, Especialista em Negócios de Saúde e Beleza.

Projeto criado diretamente em **D:\Projetos\ElianeSilverio**, com React, TypeScript, Vite e CSS puro. Sem backend e sem Tailwind.

## Executar

Requer Node.js 22.12+ (ou versão compatível com Vite 7) e npm.

```powershell
cd D:\Projetos\ElianeSilverio
npm install
npm run dev
```

Abra a URL exibida no terminal. Para gerar e conferir a versão de produção:

```powershell
npm run build
npm run preview
```

O build fica em `dist/`. Este projeto não foi publicado em um domínio.

### Observação sobre o npm deste computador

O comando `npm` encontrado inicialmente aponta para uma instalação incompleta no perfil do usuário. A instalação válida usada na verificação está em `C:\Program Files\nodejs`. Caso o problema persista, os comandos equivalentes são:

```powershell
& 'C:\Program Files\nodejs\node.exe' 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js' install
& 'C:\Program Files\nodejs\node.exe' 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js' run dev
& 'C:\Program Files\nodejs\node.exe' 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js' run build
```

## Alterar conteúdo

- **Textos, nome, título, navegação, estatística, soluções e CTAs:** `src/data/siteContent.ts`.
- **Cores, fonte, espaçamentos, largura máxima e raios:** `src/styles/tokens.css`.
- **Layouts e responsividade:** `src/styles/global.css`.
- **Fotografias:** substitua os arquivos em `public/images/` e atualize `photos` em `src/data/siteContent.ts`, incluindo `src`, descrição `alt`, `width` e `height` reais. Os enquadramentos são controlados pelo CSS, sem deformar as proporções.
- **WhatsApp:** `contact.whatsapp` em `src/data/siteContent.ts`. Insira o número com código do país e DDD, por exemplo no formato `55 + DDD + número`, sem usar um número fictício. O código gera o link `wa.me` automaticamente.
- **E-mail:** `contact.email` no mesmo arquivo, apenas o endereço, sem prefixo `mailto:`.
- **LinkedIn:** `contact.linkedin` no mesmo arquivo, com URL completa `https://www.linkedin.com/...`.
- **SEO:** título e descrição de indexação em `index.html`. Atualize-os também ao mudar o posicionamento principal. O HTML é mantido com metadados estáticos para leitura antes do JavaScript.

Até receber valores válidos, os contatos exibem `[INSERIR WHATSAPP]`, `[INSERIR E-MAIL]` e `[INSERIR LINKEDIN]`. Os botões finais mostram uma mensagem acessível sobre a indisponibilidade temporária; não abrem destinos fictícios. O CTA principal usa WhatsApp e, na ausência dele, e-mail.

## Referência e fotografias

O PDF `D:\Downloads\ElianeSilverio.pdf` foi analisado visualmente antes da implementação. Contém uma página longa (1080 × 8575), consolidada em uma única imagem JPEG. Não contém fotografias originais separadas, texto extraível ou fontes reutilizáveis.

Foram feitos recortes exclusivamente das áreas fotográficas reais de Eliane, sem IA, alterações físicas, distorção ou aumento artificial de resolução:

| Arquivo | Resolução disponível | Uso |
| --- | --- | --- |
| eliane-hero.jpg | 510 × 915 | Hero |
| eliane-preto-01.jpg | 497 × 747 | Sobre e galeria |
| eliane-sorrindo.jpg | 590 × 750 | Atuação estratégica |
| eliane-executiva-01.jpg | 348 × 533 | Galeria |
| eliane-colorido-01.jpg | 348 × 533 | Galeria |

A imagem consolidada limita a nitidez em telas grandes; os arquivos fotográficos originais poderão substituir esses recortes posteriormente. O tratamento escuro já existente no PDF foi preservado. Não há páginas inteiras do PDF no site.

As fotografias da seção “POSES” do documento mostram outra pessoa e possuem marcas de banco de imagens. São referências de direção fotográfica, não retratos de Eliane, e foram excluídas dos assets do site.

Museo Sans é a primeira opção do CSS, sem distribuição de arquivos proprietários. Montserrat, alternativa livre sob SIL Open Font License, é instalada via `@fontsource/montserrat` e servida localmente, sem dependência de Google Fonts ou requisições externas.

Não foram inventados clientes, empresas, faturamento, depoimentos, resultados quantitativos ou contatos. Direção comercial permanece descrita apenas como uma frente estratégica, conforme o nível de informação disponível.

## Estrutura

```text
D:\Projetos\ElianeSilverio\
├── public/images/
├── src/
│   ├── components/
│   ├── data/siteContent.ts
│   ├── pages/HomePage.tsx
│   ├── styles/global.css
│   ├── styles/tokens.css
│   ├── types.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Acessibilidade e interação

Menu com estado expandido anunciado, fechamento por Escape, contenção do foco enquanto aberto e fechamento ao selecionar âncoras ou mudar para desktop. Link de salto para conteúdo, foco visível, um único H1, HTML semântico, alt nas fotos e suporte a `prefers-reduced-motion`. A navegação funciona por âncoras na página `/`.

## Validação realizada

`npm install` concluído e `npm run build` aprovado (TypeScript + Vite). Verificação com navegador Edge headless em 375, 768, 1024, 1440 e 1920 px: sem overflow horizontal, todas as imagens carregadas, todas as âncoras existentes, um H1 e nenhum erro de execução ou resposta HTTP de erro. Menu mobile, fechamento por Escape, seleção de âncora e mensagem dos contatos pendentes também verificados. Capturas desktop e mobile revisadas visualmente.
