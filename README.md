# Activate MeasureCamp Followup
## Domácí úkol #2

Vyzkoušejte si Gulp: [[https://gulpjs.com/](https://gulpjs.com/)].

### Instalace

* Nemáte-li, nainstalujte si Node.js: [[https://nodejs.org/en/](https://nodejs.org/en/)]
* Do adresáře ve kterém vyvíjíte, si naklonujte tento repozitář a nainstalujte závislosti
* Nainstalujte gulp-cli globálně

```bash
git clone git@github.com:lcech/mc-followup-gulp.git
cd mc-followup-gulp
npm install
npm install gulp-cli -g
```

* Zkuste si pustit Gulp

```bash
gulp
```

### Zadání

* Upravte Gulp Task pro spojení a minifikaci tak, aby do výsledku zahrnul pouze soubory `/src/config.js` a `/src/other.js` (bez `/src/custom.js`)
* Pošlete výsledný soubor `gulpfile.js`

### Tipy

* Nastudujte si Globs: [[https://gulpjs.com/docs/en/api/concepts#globs](https://gulpjs.com/docs/en/api/concepts#globs)]
* V [Etnetera Activate](https://www.activate.cz/) používáme při práci **VSCode**: [https://code.visualstudio.com/](https://code.visualstudio.com/)