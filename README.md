# Rest API User CRUD
## Dokumentasi 

### Instalasi
    - Install project ini dalam local anda
    - Lakukan clone dg perintah `$ git clone https://github.com/mohamilin/rest-api-user-crud
    - Instal NPM ketik `npm i`
    - tambahkan .env 
    - Konfigurasikan .env
        - DB_PROJECT = sesuaikan dengan database mongoDB (atlas mongoDB)
        - SECRET = sesuaikan dengan keinginan
    - Jalankan `npm run dev`
    - Catatan : setelah anda menjalan `npm run dev` maka role admin dan user akan langsung terisi dalam database

### Menjalankan Route

    - Dalam menjalankan route ini, terlebih dahulu register dan login.
    - Token akan didapat setelah melakukan login.
    - Terdapat beberapa route yang memerlukan security berupa token.
    - Gunakan postman dalam menjalankan route yang memiliki security. 
    - Untuk route yang memiliki security token, token dapat didapatkan setelah anda login.
    - masukkan token di Headers dengan ketentuan :
      - KEY   : x-access-token
      - VALUE : token

| No  | Tujuan                | Route                   | Security | Method  | Reg Format                                 |
| --- | ------                | -----                   | -------- | ------- | ----------                                 |
|  1  | Register (user)       | /api/register           |     -    | post    | username, email, password                  |
|  2  | Register (admin)      | /api/register           |     -    | post    | username, email, password,roles = ["admin"]|
|  3  | Login                 | /api/login              |     -    | post    | username, password                         |
|  4  | Data All User         | /api/data/user          |   token  | get     |        -                                   |
|  5  | Update User           | /api/user/:id           |   token  | put     | username, email, password                  |
|  6  | Delete User           | /api/user/:id           |   token  | delete  |        -                                   |
|  7  | Data User Role User   | /api/user               |   token  | get     |        -                                   |
|  8  | Data User Role Admin  | /api/admin              |   token  | get     |        -                                   |
|  9  | Page for Public       | /api/all                |          | get     |        -                                   |

## POSTMAN
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/dbb5660044e243fdf4e4)