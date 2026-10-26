# GRUPO JOVEM TEMPO DE LIBERDADE - SITE

## 📁 O QUE TEM NA PASTA

* index.html → textos e estrutura do site.
* style.css → cores e visual do site (as cores ficam no topo do arquivo).
* script.js → palavras do título animado, lista de fotos e animações.
* imagens/ → logotipos.
* imagens/galeria/ → fotos da galeria.

## 📸 COMO COLOCAR AS FOTOS NA GALERIA

1. Salve as fotos no formato .jpg dentro da pasta imagens/galeria/.
    Use nomes simples, sem espaços nem acentos, como foto43.jpg, foto44.jpg etc.
    Dica: prefira fotos com até 1400 pixels de largura e aproximadamente 300 KB.
2. Abra o arquivo script.js e procure a lista FOTOS.
3. Adicione uma linha com o nome do arquivo, por exemplo: `{ arquivo: 'foto82.jpg' },`. Não há legendas. A ordem da lista determina a ordem das fotos no site. (O campo `r`, que aparece nas outras linhas, é a proporção largura ÷ altura da foto; é opcional e só ajuda as fotos a se encaixarem sem "pular" enquanto carregam.)

Para remover uma foto, apague a linha correspondente da lista FOTOS.

Quantidade de fotos exibidas: o site mostra 12 fotos por vez. Para alterar esse número, edite a variável FOTOS_POR_VEZ no arquivo script.js.

## ✨ COMO TROCAR AS PALAVRAS DO TÍTULO

O título animado exibe palavras na sequência “Tempo de …”.

1. Abra o arquivo script.js.
2. Procure a lista PALAVRAS, localizada no começo do arquivo.
3. Edite as palavras conforme desejar.

## ✏️ COMO MUDAR UM TEXTO

1. Abra o arquivo index.html.
2. Pressione Ctrl + F para localizar o texto que deseja alterar.
3. Escreva o novo texto no lugar do antigo.
4. Salve o arquivo.

## 🌐 COMO O SITE É PUBLICADO (GITHUB PAGES)

O site fica em um repositório do GitHub e é publicado gratuitamente pelo GitHub Pages.

Configuração inicial — feita apenas uma vez:

1. Acesse o repositório no GitHub.
2. Entre em Settings → Pages.
3. Em Build and deployment, selecione Deploy from a branch.
4. Escolha a branch main e a pasta / (root).
5. Clique em Save.

## 🔄 COMO ATUALIZAR O SITE

Depois de alterar qualquer arquivo, abra o terminal dentro da pasta do site e execute:

```
git add -A
git commit -m "Descreva aqui o que mudou"
git push
```

Substitua a mensagem do comando git commit por uma descrição breve das alterações realizadas.

Em geral, o GitHub Pages publica a nova versão em alguns minutos.

Alternativa: editar diretamente pelo GitHub

1. Abra o repositório no GitHub.
2. Acesse o arquivo que deseja modificar.
3. Clique no ícone de lápis para editar.
4. Faça as alterações.
5. Clique em Commit changes para salvá-las.

Após a publicação, acesse o site para conferir as mudanças.