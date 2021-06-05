# first-name-analysis

**GETTING STARTED:** <br/>
run npm i to install dependencies.

**TO START SERVER:** <br/>
run `npm run dev` to start the server. (Nodemon will auto-refresh the server as you change the code).

**BROWSER EXPERIENCE:** <br/>
cd into `client` and run `npm start` for a browser experience.



**QUERY:**<br/>
Using you standard webtool (e.g Postman),
Use these endpoints for your queries.

GET ```http://localhost:3000/names``` - for ALL names on DB.<br/>
GET ```http://localhost:3000/names/<gender>/<firstname> ```- for looking into specific names on DB.<br/> *Ex. /names/Female/Ellaine*
<br/>
POST ```http://localhost:3000/names``` - adding name to DB with this format.<br/>

```JSON
{
    "firstname": "Via",
    "gender": "Female",
    "sign": "Gemini"
}
```

Reference: <br/>
[Colr.org API source](http://www.colr.org/json/color/random )
[Horoscope - Rapid API](https://rapidapi.com/tirtain/api/horoscope5/)
