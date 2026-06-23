# Projeto Caninópolis - GitHub Pages (v4)

Projeto estático do convite, preparado para publicação no GitHub Pages.

## Melhorias desta versão

1. No bloco **"Uma historinha de Caninópolis"**, as fotos de Rafael e Ester agora têm **o mesmo tamanho**.
2. O texto da historinha foi ajustado com **alinhamento justificado**.
3. Foram inseridos **balões, patas e molduras** no mesmo estilo visual do convite.
4. O QR Code continua apontando para a URL final do GitHub Pages:
   `https://adrianomesquita1983.github.io/projeto_caninopolis_github_pages/`
5. O vídeo permanece incorporado na página.

## Como visualizar corretamente

Para evitar problemas com o vídeo, não abra o arquivo `index.html` diretamente como `file://`.
Use:

- **GitHub Pages**, ou
- um servidor local, por exemplo:

```bash
python -m http.server 8000
```

Depois abra:

```text
http://localhost:8000
```

## Publicação no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie os arquivos deste projeto.
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, selecione **GitHub Actions**.
5. O workflow `.github/workflows/static.yml` fará o deploy automaticamente.
