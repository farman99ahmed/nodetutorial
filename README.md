# Node-Express-Mongo Login System

Login system created using Node, Express, Mongo. Uses JWT for token management and bcrypt for password hashing.

## Installation

```bash
git clone https://github.com/farman99ahmed/nodetutorial.git
cd nodetutorial
npm install
npm rundev
```

## Environment Variable
```bash
APP_KEY=
APP_PORT= 3000
MONGO_URI=
BCRYPT_SALT=15
```

## API Reference

### POST: /register

```javascript

"Accept": "application/json",
"Content-Type": "application/json"

{
    "fullname": "farman ahmed",
    "mobile": "9999999999",
    "email": "ahmed@ahmed.com",
    "password": "Password1@"
}

//Response
{
    "message": "User created successfully",
    "user": {
        "profile_picture": null,
        "_id": "9ca44c6c-f90a-4ca5-95e4-96eccdd3c258",
        "fullname": "farman ahmed",
        "mobile": "9999999999",
        "email": "ahmed@ahmed.com",
        "password": "$2a$15$pgrja5CO1MtRowk1vkrfVeyPodtTKxAzBJQ5Ho0yl9JdWxjszEPyC",
        "__v": 0
    }
}
```

### POST: /login

```javascript

"Accept": "application/json",
"Content-Type": "application/json"

{
    "email": "ahmed@ahmed.com",
    "password": "Password1@"
}

//Response
{
    "email": "farman@farman.com",
    "token": "System generated jwt token"
}
```

### PUT: /changepassword

```javascript

"Accept": "application/json",
"Content-Type": "application/json"
"x-access-token": "JWT Token here"

{
    "old_password": "ABc1234$1",
    "new_password": "ABc1234$"
}

//Response
{
    "message": "Password updated for user: farman@farman.com"
}
```


### PUT: /updateprofile

```javascript

"Accept": "application/json",
"Content-Type": "application/json"
"x-access-token": "JWT Token here"

{
    "email": "farman1@farman.com", //optional
    "fullname": "farman ahmed1", //optional
    "mobile": "8888888888" //optional
}

//Response
{
    "message": "User updated successfully"
}
```

### GET: /self

```javascript

"Accept": "application/json",
"Content-Type": "application/json"
"x-access-token": "JWT Token here"

//Response
{
    "id": "25370253-18ac-409e-b8ea-2fdff0ec1e1c",
    "fullname": "farman ahmed1",
    "email": "farman1@farman.com",
    "mobile": "8888888888"
}
```


### GET: /users

```javascript

"Accept": "application/json",
"Content-Type": "application/json"
"x-access-token": "JWT Token here"

//Response
{
    "users": [
        {
            "fullname": "farman ahmed1",
            "mobile": "8888888888",
            "email": "farman1@farman.com"
        },
        {
            "fullname": "farman ahmed",
            "mobile": "9999999999",
            "email": "ahmed@ahmed.com"
        }
    ]
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)