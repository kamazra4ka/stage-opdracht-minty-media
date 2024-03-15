<p align="center"><h1>Minty Stage opdracht Domein Zoeker</h1></p>

https://github.com/kamazra4ka/stage-opdracht-minty-media/assets/83513498/ec1b1229-a90c-4413-a991-ebbc16477398

<img width="280" alt="image" src="https://github.com/kamazra4ka/stage-opdracht-minty-media/assets/83513498/005187a8-adf2-45bd-89d2-e8b7cb064282"> <img width="282" alt="image" src="https://github.com/kamazra4ka/stage-opdracht-minty-media/assets/83513498/1cc97df9-9ecf-4bf2-8ce0-967666c4265e"> <img width="285" alt="image" src="https://github.com/kamazra4ka/stage-opdracht-minty-media/assets/83513498/d7bc1205-d485-470d-a3d8-b264a7d082f7">

## Get started
Clone dit project op je computer en voer de volgende commando's uit om het project lokaal te draaien:

```
composer install
npm install
php artisan key:generate
npm run dev
```

Het `php artisan serve`commando moet draaien in een aparte terminal.

De volgende features moeten werken in je eindresultaat:
- Gebruik de REST API om data op te halen/versturen
- Laat tenminste `10` verschillende tld's zien met prijzen
- In de web pagina aangeven of het domein beschikbaar is of niet.
- Maak een winkelwagen waar domeinen aan toegevoegd kunnen worden
    - Wanneer [tld](https://www.semrush.com/blog/top-level-domains/) niet beschikbaar is moet het niet mogelijk zijn om die toe te kunnen voegen aan de winkelmand
    - Domeinen weer uit winkelmand kunnen halen
- Bereken het subtotaal + [btw](https://en.wikipedia.org/wiki/Value-added_tax) en laat deze op de checkout pagina zien.
    - Voeg een bestelling toe aan een database (klik [hier](#database) voor meer info)
- Een lijst met bestellingen.


## API
De base url is `https://dev.api.mintycloud.nl/api/v2`
Om te connecteren met de API moet je de header `Authorization` toevoegen:
```
Authorization: Basic f36a4c78c8b7f3782183cda40717f1d8e7d1981909fdd4c87c14e227548e11ed
```

Je kan nu de route `POST /domains/op/search` gebruiken
Hierin moet je een request body ([json](https://www.json.org/)) meegeven:
```json
[
    {
        "name": "example",
        "extension": "com"
    },
    {
        "name": "example",
        "extension": "nl"
    }
]
```

Zoals je ziet kan je meerdere tld's toevoegen aan de request body.
Dit kan een response body voorstellen:

```json
[
    {
        "domain": "example.com",
        "status": "free",
        "price": 15
    },
    {
        "domain": "example.nl",
        "status": "free",
        "price": 15
    }
]
```

## Database
Je moet zelf een database regelen. Het liefst met [MySQL](https://www.mysql.com/), omdat wij dit voor onze projecten veel gebruiken. De structuur van de database mag je zelf bedenken. Zorg er wel voor dat de subtotaal en de btw gezien kan worden op de bestellingen pagina.
