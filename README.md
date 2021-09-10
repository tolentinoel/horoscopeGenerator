# Horoscope Generator

**GETTING STARTED:** <br/>
Click the link for the browser experience. [Horoscope Generator](https://name-analysis-app.herokuapp.com/)


**QUERY:**<br/>
Using you standard webtool (e.g Postman), use these endpoints for your queries.

GET - `https://name-analysis-app.herokuapp.com/names` - for ALL names on DB.
<br/>
GET - `https://name-analysis-app.herokuapp.com/names/<gender>/<firstname>/<zodiac> `- for looking into specific names on DB.
<br/>
*Ex. /names/Female/Ellaine/Taurus*
<br/>
Expected result should be a specific object like:
```JSON
{
        "id": 2,
        "firstname": "Ellaine",
        "gender": "Female",
        "sign": "Taurus",
        "hexcode": "{\"#c14543\"}", //Random color for your name
        "horoscope": "Communication with others should be very effective, Taurus, and your social calendar will be full. You're feeling good about yourself, thanks to a boost in confidence that reminds you that you can do anything. You have the ability to juggle many things at once and the physical endurance to keep up a quick pace. Even though you may tend to be rather lazy, you might get a sudden inspiration to join a gym or sports team."
        // A reading based off of your horoscope sign.
    }
```
<br/>
POST - `https://name-analysis-app.herokuapp.com/names` - adding name to DB.
<br/>
Body format for request should be like this;

```JSON
{
    "firstname": "Kim",
    "gender": "Female",
    "sign": "Cancer"
}
```

Reference: <br/>
[Colr.org API source](http://www.colr.org/json/color/random)
<br/>
[DevBrewer Horoscope API - Rapid API](https://rapidapi.com/zedjeep/api/devbrewer-horoscope/)
