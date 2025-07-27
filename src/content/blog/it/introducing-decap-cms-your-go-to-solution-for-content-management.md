---
title: "Introducing Decap CMS Your Goto Solution for Content Management"
draft: false
author: Jon Doe
tags:
  - Apps
image:
  src: /images/decapcms.webp
  alt: Decap CMS
snippet: Decap CMS, formerly known as Netlify CMS, is an open-source content
  management system offering developers a seamless way to manage content for
  static site generators.
publishDate: 2023-07-01 23:14
category: Tech
---

Decap CMS, precedentemente noto come Netlify CMS, è un sistema di gestione dei contenuti open source che offre agli sviluppatori un modo semplice per gestire i contenuti per i generatori di siti statici.

## Che cos'è Decap CMS?

Decap CMS è un CMS basato su Git che consente a sviluppatori e creatori di contenuti di aggiungere, aggiornare ed eliminare contenuti direttamente dal repository Git del sito. Questo offre i vantaggi del controllo di versione dei contenuti, consentendo semplici rollback, branching e altre operazioni Git.

## Caratteristiche principali di Decap CMS

### Sorgente aperta

Essere open source significa avere accesso al codice sorgente e poterlo modificare e personalizzare in base alle esigenze del progetto. Questo consente un'elevata flessibilità nell'adattare il CMS alle proprie esigenze specifiche.

### Basato su Git

Decap CMS utilizza flussi di lavoro Git per la gestione dei contenuti. Ogni modifica diventa un commit, ogni batch di modifiche diventa una richiesta pull e ogni bozza salvata è solo un branch.

### Facile da usare

Decap CMS fornisce ai creatori di contenuti un'interfaccia editoriale intuitiva, liberandoli dalla necessità di comprendere Git o di programmare.

## Introduzione a Decap CMS

Per iniziare a usare Decap CMS è sufficiente aggiungere due file al progetto: `admin/index.html` e `admin/config.yml`.

```html
<!-- admin/index.html -->
<!doctype html>
<html>
<testa>
<meta charset="utf-8" />
<meta name="viewport" content="width=larghezza-dispositivo, scala-iniziale=1.0" />
<title>Gestore dei contenuti</title>
</testa>
<corpo>
<!-- Includi lo script che crea la pagina e alimenta Decap CMS -->
<script src="https://unpkg.com/decap-cms@^2.0.0/dist/decap-cms.js"></script>
</corpo>
</html>
```

```yaml
# admin/config.yml
backend:
nome: github
repo: proprietario/repo
cartella_media: "img/caricamenti"
cartella_pubblica: "/img/caricamenti"
collezioni:
- nome: "post"
etichetta: "Post"
cartella: "_posts"
crea: vero
    campi:
- {etichetta: "Titolo", nome: "titolo", widget: "stringa"}
- {etichetta: "Corpo", nome: "corpo", widget: "markdown"}
```

Nell'era di Jamstack, Decap CMS sta aprendo la strada alla moderna gestione dei contenuti basata su Git. Grazie alla sua semplicità e flessibilità, è una scelta eccellente sia per sviluppatori che per creatori di contenuti.



