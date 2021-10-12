[![Coverage Status](https://coveralls.io/repos/Alheimsins/b5-johnson-120-ipip-neo-pi-r/badge.svg?branch=main&service=github)](https://coveralls.io/github/Alheimsins/b5-johnson-120-ipip-neo-pi-r?branch=main)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# b5-johnson-120-ipip-neo-pi-r

Module for returning Big Five [Johnson 120 IPIP-NEO-PI-R](https://ipip.ori.org/30facetneo-pi-ritems.htm) items

## Installation

```
$ npm i @alheimsins/b5-johnson-120-ipip-neo-pi-r
```

## Usage

```JavaScript
const { getItems, getInfo, getChoices, getQuestions } = require('@alheimsins/b5-johnson-120-ipip-neo-pi-r')

console.log(getInfo()) // returns test info

console.log(getChoices()) // returns choices in English

console.log(getQuestions()) // returns questions in English

console.log(getItems()) // returns English

console.log(getItems('no')) // returns Norwegian

console.log(getItems('en', true)) // returns English shuffeled
```

returns an [array with questions and choices](examples/items-en.json)

```JavaScript
[
   {
       "id": "43c98ce8-a07a-4dc2-80f6-c1b2a2485f06",
       "text": "Worry about things",
       "keyed": "plus",
       "domain": "N",
       "facet": 1,
       "num": 1,
       "choices": [
         {
           "text": "Very Inaccurate",
           "score": 1,
           "color": 1
         },
         {
           "text": "Moderately Inaccurate",
           "score": 2,
           "color": 2
         },
         {
           "text": "Neither Accurate Nor Inaccurate",
           "score": 3,
           "color": 3
         },
         {
           "text": "Moderately Accurate",
           "score": 4,
           "color": 4
         },
         {
           "text": "Very Accurate",
           "score": 5,
           "color": 5
         }
       ]
    }
]
```

## Supported languages

| Code | Name      | Translator |
| ---- | --------- | ---------- |
| en   | English   |            |
| no   | Norwegian | Eli Huseby |
| es   | Spanish   | Eduardo Calle |
| is   | Icelandic | Franz Jónas Arnar Arnarson and [Sigurður Kári Árnason](https://github.com/sigurdurkari) |
| it   | Italian   | [Lorenzo Carducci](https://github.com/riourbana) |
| nl   | Dutch     | Eus van Somerenk, Kim Dekker and Tessa Blanken |
| se   | Swedish   | Martin Bäckström / [SwedishBarbarossa](https://github.com/SwedishBarbarossa) |
| hr   | Croatian  | Željko Jerneić |
| fr   | French    | Mathew Gravel |
| et   | Estonian  | René Mõttus, Helle Pullmann, Jüri Allik, Liina Haring, Kenn Konstabel, and Anu Realo |
| de   | German    | Heinz Streib and Manuela Wiedmaier |
| jp   | Japanese  | Omar Karlin |
| ur   | Urdru     | Engr. Ahmad Khan |
| pt-br| Portuguese (brazil) | Marcelo Rigon |
| ru   | Russian   | [Javid Askerov](https://github.com/askeroff), [Olga V](https://github.com/berrybell) |
| zh-cn| Simplified Chinese | [Roy Jia](https://github.com/RoyJia) |
| th   | Thai      | [Maneepailin Sriuthenchai](https://github.com/linsuri) |
| fi   | Finnish   | [Anastasia Tapper](https://github.com/ankkukku) |
| id   | Indonesian| [David Adi Nugroho](https://github.com/lakuapik) |
| hi   | Hindi     | [Punit Singh](https://github.com/thepunitsingh) |
| uk   | Ukrainian | [Elena Kunina](https://github.com/Menolas) |
| ar   | Arabic    | Rayan Khan |
| he   | Hebew     | Ben Perry |
| pl   | Polish    | Maryla Królikowska |
| ko   | Korean    | [TimeTREE](https://github.com/TimeTREE98) |
| ro   | Romanian  | [Cătălin Topală](https://github.com/catalintopala)


## Help wanted

If you want to help by translating the items to other languages there are two ways to do it.

### Translate on GitHub
- clone the repo
- find a language you know in [data](data)
- duplicate the folder and rename it to the language you will translate
- use [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code as folder name.
- translate the "text"-property for choices.js and questions.json
- don't change filenames, ids or any other properties
- add your language code to the [data/languages.json file](data/languages.json)
- submit pull request
- happiness :-)

### Translate from the web
- visit [b5.translations.alheimsins.net](https://b5.translations.alheimsins.net/b5-johnson-120-ipip-neo-pi-r)
- follow the instructions
- happiness :-)

## Related

- [bigfive-web](https://github.com/rubynor/bigfive-web) Web frontend for bigfive tests

## License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" alt="Alheimsins logo" height="150px" width="150px" />
