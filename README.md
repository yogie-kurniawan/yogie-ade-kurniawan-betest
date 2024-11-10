How to run this app?

1. Run npm install
2. Create an .env file and copy all variables in .env-example file to .env file
3. Define all variables in .env file
4. Run npm start

Base URL
https://ms-yogie-ade-kurniawan-betest.vercel.app/api/v1

USER ROUTES

REGISTRATION

- Method : POST
- Route : https://ms-yogie-ade-kurniawan-betest.vercel.app/api/v1/users/register
- Body : {
  "userName" : "john@gmail.com",
  "emailAddress" : "john@gmail.com",
  "accountNumber" : "09939353",
  "identityNumner" : "123,
  }

LOGIN

- Method : POST
- Route : https://ms-yogie-ade-kurniawan-betest.vercel.app/api/v1/users/login
- Body : {
  "userName" : "john@gmail.com",
  "accountNumber" : "09939353",
  }

GET ALL USERS

- Method : GET
- Route : https://ms-yogie-ade-kurniawan-betest.vercel.app/api/v1/users
- header : {Authorization : Bearer yourToken}

GET A USER BY ID

- Method : GET
- Route : https://ms-yogie-ade-kurniawan-betest.vercel.app/api/v1/users/user/:id
- header : {Authorization : Bearer yourToken}

GET A USER BY ACCOUNT NUMBER

- Method : GET
- Route : https://ms-yogie-ade-kurniawan-betest.vercel.app/api/v1/users/account/:accountNumber
- header : {Authorization : Bearer yourToken}

GET A USER BY IDENTITY NUMBER

- Method : GET
- Route : https://ms-yogie-ade-kurniawan-betest.vercel.app/api/v1/users/identitiy/:identityNumber
- header : {Authorization : Bearer yourToken}

CREATE A USER

- Method : POST
- Route : https://ms-yogie-ade-kurniawan-betest.vercel.app/api/v1/users/create
- Body : {
  "userName" : "john@gmail.com",
  "emailAddress" : "john@gmail.com",
  "accountNumber" : "09939353",
  "identityNumner" : "123,
  }
- header : {Authorization : Bearer yourToken}

UPDATE A USER

- Method : PATCH
- Route : https://ms-yogie-ade-kurniawan-betest.vercel.app/api/v1/users/:id/update
- Body : {
  "userName" : "john@gmail.com",
  "emailAddress" : "john@gmail.com",
  "accountNumber" : "09939353",
  "identityNumner" : "123,
  }
- header : {Authorization : Bearer yourToken}

DELETE A USER

- Method : DELETE
- Route : https://ms-yogie-ade-kurniawan-betest.vercel.app/api/v1/users/:id/delete
- header : {Authorization : Bearer yourToken}
