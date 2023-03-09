# REST

What are we learning today?

-  We are going to talk about what exactly is REST, what is a RESTful API, and what makes an api RESTful?

- Demo examples of RESTful endpoints

-Query String Parameters
    - What they are
    - How are they useful
    - Breaking the anatomy of a Query String Paramater

-Demo of an example using Query String parameters.


## REST
- representational state transfer
- is a way to organize our routes, in our server there is a particular way that we can write our endpoints that follows a RESTful pattern.
    -Scalable - we can re-use routes for multiple and various situations
    -Easy to read and understand

- RESTful pattern<br>
    - 1.verbs <br>
   
    verbs - http methods
    Create - .post
    Read - .get
    Update - .put 
    Destroy - .delete

    app.verb

    - 2.nouns - only reserved for the url <br>

    - ex: Restful<br>
    app.get('/dogs/', async (req, res, next) => {
        try {
        res.send('arf');
        } catch (error) {
        next(error)
        }
    });

    - ex: NOT RESTFUL<br>
    app.get('/get-dogs/', async (req, res, next) => {
        try {
        res.send('arf');
        } catch (error) {
        next(error)
        }
    });

    - 3.broad -> specific <br>

    app.get('/animals/dogs/', async (req, res, next) => {
        try {
        res.send('arf');
        } catch (error) {
        next(error)
        }
    });   

## Query String Parameter

- utilize the url, by capturing a query string, denoted by everything that comes after a ?
-it gets digested into your server as a req.query in the form of an object {}

- anatomy of a query string
req.query =
{
    key: value,
    key2: value2
}

https://example.com/items?key=value&key2=value

- walk through an example
honda cars
toyota cars

app.get(“/cars/honda/:model”, (req, res, next) => {
	…
}
)

app.get(“/cars/toyota/:model”, (req, res, next) => {
	…
}
)

...etc

https://example.com/items?honda=black

app.get("/cars/", async (req, res, next) =>{
    req.query // {honda: black}
    const blackHondas = Cars.findAll({
        where: {req.query.honda}
    })
} )

- code out an endpoint that takes advantage of a query string

 -1. First we are going to query all dogs
 -2. What if we just want to query all black dogs?

    - example of req.query -> how to 

 -3. We can keep our code extra dry by utilizing query strings instead of writing a second .get endpoint to get only black dogs.

    Q: What if we want the option to be able to share the endpoint to query all dogs, and also in the case where there might be a query string?
    A: We can check to see if req.query has any key value pairs
        - If yes, then use req.query
        - If no, then bypass req.query and findAll()

        -We can convert the req.query object into an array.
        arrays length
        -If the array is empty, we bypass
        -If the array contains keys, then we go forward with the req.query
 - 2 in 1