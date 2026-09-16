JORNADA ACADÊMICA
================

Sobre mim
---------
Sou estudante de Análise e Desenvolvimento de Sistemas (ADS) e estou no
4º semestre. Neste repositório, registro minha evolução durante a graduação
por meio de atividades realizadas em sala de aula e trabalhos feitos em casa.

Meu objetivo
------------
Quero reunir meus exercícios, projetos e anotações em um lugar organizado,
facilitar minhas revisões e acompanhar meu desenvolvimento na programação.
Priorizo códigos legíveis, nomes descritivos e comentários que expliquem
o raciocínio por trás das soluções.

Organização atual
-----------------
jornada-academica/
  README.txt
  Desenvolvimento em Javascript/
    Introdução à linguagem JavaScript/
      LEIA-ME.txt
      index.html
      estilo.css
      01-variaveis-e-tipos/
      ...
      20-mini-projeto-ajax-dom/

Organizo os conteúdos por disciplina e, dentro dela, por assunto ou atividade.
Cada exercício desta primeira lista tem seu próprio index.html e script.js,
para que eu possa estudá-lo e executá-lo de forma independente.

Conteúdos disponíveis
--------------------
Desenvolvimento em JavaScript: 20 exercícios práticos sobre variáveis, tipos,
operadores, condicionais, laços, funções, arrays, objetos, strings, callbacks,
DOM, prototype, exceções, XMLHttpRequest e leitura de notícias em XML.

Como executar as atividades
--------------------------
1. Abro a pasta "Desenvolvimento em Javascript/Introdução à linguagem JavaScript".
2. Abro o arquivo index.html no navegador e escolho uma atividade.
3. Nos exercícios de console, pressiono F12 e abro a aba Console.
4. Recarrego a página para executar novamente; nos exercícios 04 e 05,
   informo a idade na caixa de diálogo.

Para os exercícios 19 e 20, uso um servidor HTTP local. Posso abrir a pasta
no VS Code e executar o index.html com a extensão Live Server instalada.
O arquivo LEIA-ME.txt da lista detalha o procedimento e os resultados esperados.
Não preciso de bibliotecas JavaScript nem de uma etapa de compilação.

Como mantenho o repositório
--------------------------
Antes de registrar uma atividade, reviso os arquivos com git status.
Depois, seleciono os arquivos com git add e registro uma descrição clara
com git commit. Evito incluir senhas, dependências e arquivos temporários.
Meu .gitignore já reúne exclusões comuns para apoiar essa organização.

Publicação
----------
Este projeto é um repositório Git local. Para publicá-lo, crio um repositório
remoto vazio na minha conta e, no terminal desta pasta, sigo estas etapas:

  git add .
  git commit -m "Adiciona atividades introdutórias de JavaScript"
  git remote add origin URL_DO_MEU_REPOSITORIO
  git push -u origin main

Substituo URL_DO_MEU_REPOSITORIO pelo endereço real do repositório remoto.
Antes do primeiro commit, confiro meu nome e e-mail com git config user.name
e git config user.email. Se necessário, configuro minha identidade apenas
neste repositório com git config user.name "Meu nome" e
git config user.email "Meu e-mail".

Notas de estudo
---------------
As soluções têm finalidade didática e acompanham os enunciados da lista
"Lista_Exercicios_JavaScript_Praticos.pdf". Os comentários estão em primeira
pessoa para registrar meu raciocínio durante o aprendizado.
Os dados de pessoas, carros e notícias usados nos exemplos são ilustrativos.
No exercício 12, as estimativas de consumo são fictícias e estão documentadas.
Novas disciplinas e trabalhos poderão ser adicionados ao longo do curso.
