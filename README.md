# USAGE

```js
const Dota = require('opendota-api');
let dota = new Dota();
```

# Available functions

# listHeroes()
Return all dota 2 heroes with identifier.

//  With Async/await functions

```js
async function list() {
 let heroes = await dota.listHeroes();
 console.log(heroes);
 // doStuff
}
```

//  Without Async/await functions

```js
dota.listHeroes()
  .then(function(response) {
      console.log(response);
      //  Dostuff
  })
  .catch(function(err) {
      console.log(err);
  });
```


##  AVAILABLE FUNCTIONS

# listHeroes();
# listItems();
# getMatchById(match_id, options);
  
  options ->
    setnames : boolean
    account_id: string
    
    setnames = assign name heroes in results instead identifiers
    

# Docs updating soon

Feel free to send your issues here
# https://github.com/Root-Control/OpenDota-Api
