# API Spesifikasi

## Course App

## USER SPEC

### Register

- endpoint: /api/register
- method: POST

#### REQUEST

- body:

```json
{
  "first_name": "muhammad",
  "last_name": "hatta",
  "email": "muhammadHatta@gmail.com",
  "password": "123456"
}
```

#### RESPONSE

- status : 200
- body:

```json
{
  "email": "muhammadHatta@gmail.com"
}
```

- status: 400
- body:

```json
{
  "error": "semua data harus terisi"
}
```

### Kode Otp 

- endpoint: /api/validate-kode
- method: POST

#### REQUEST

- body:

```json
{
  "email": "muhammadHatta@gmail.com",
  "kode": "kode"
}
```

#### RESPONSE

- status : 200
- body:

```json
{
  "message": "kode otp valid"
}
```

- status: 400
- body:

```json
{
  "error": "kode otp tidak valid"
}
```

### Login

- endpoint: /api/login
- method: POST

#### REQUEST

- body:

```json
{
  "email": "muhammadHatta@gmail.com",
  "password": "123456"
}
```

#### RESPONSE

- status: 200
- body:

```json
{
  "message": "login success",
  "data": {
    "id_user": 1,
    "first_name": "muhammad",
    "last_name": "hatta",
    "email": "muhammadHatta21@gmail.com",
    "profile": "url path"
  },
  "access_token": "random token"
}
```
- status: 400
- body:

```json
{
  "error": "email/password tidak valid",
}
```

### Logout

- endpoint: /api/login
- method: POST

#### REQUEST

- body:

```json
{
    "id_user": 1
}
```

#### RESPONSE

- body:

```json
{
  "message": "logout success",
}
```


### Get Course User

- endpoint: /api/user/course
- method: GET
- Headers:
- Content-Type: "application/json"
- Accept: "application/json"
- Authorization: "Barear token"

#### RESPONSE

- status: 200
- body:

```json
    {
        "id_user": 1,
        "data" : [
            {
                "id_course": 1,
                "judul_course": "UI From Beginner"
            }
            ...
        ]
    }
```
- status: 401
- body:

```json
    {
        "error": "Unathorized"
    }
```
- status: 404
- body:

```json
    {
        "error": "Course not found"
    }
```

### Update Profile Img

- endpoint: /api/user/update/profile
- method: POST
- Headers:
- Content-Type: "application/json"
- Accept: "application/json"
- Authorization: "Barear token"

#### REQUEST

- body:

```json
{
  "id_user": 1,
  "profile": "url path"
}
```

#### RESPONSE

- status: 200
- body:

```json
{
  "message": "update profile success"
}
```
- status: 401
- body:

```json
{
  "error": "Unathorized"
}
```
- status: 404
- body:

```json
{
  "error": "data tidak valid"
}
```

#### Update Data User

- endpoint: /api/user/update/data
- method: POST
- Headers:
- Content-Type: "application/json"
- Accept: "application/json"
- Authorization: "Barear token"

#### REQUEST

- body:

```json
{
  "id_user": 1,
  "data": {
    "first_name": "Alex",
    "last_name": "Doe",
    "email": "alexdoe@gmail.com",
    "password": "update123"
  }
}
```

#### RESPONSE

- status: 200
- body:

```json
{
  "message": "update data success",
  "data": {
    "id_user": 1,
    "first_name": "Alex",
    "last_name": "Doe",
    "email": "alexdoe@gmail.com"
  }
}
```
- status: 401
- body:

```json
{
  "error": "Unathorized",
}
```
- status: 404
- body:

```json
{
  "error": "request not found",
}
```



## Materi & Course Spec

### Get Progress User

- endpoint: /api/user/progress
- method: GET
- Headers:
- Content-Type: "application/json"
- Accept: "application/json"
- Authorization: "Barear token"

#### REQUEST

- body:

```json
{
  "id_user": 1
}
```

#### RESPONSE

- status: 200
- body:

```json
    {
        "data": [
            {
                "id_materi": 1
                "judul_materi" : "Prinsip Dasar UI",
                "status": "not"
            },
            ...
        ]
    }
```
- status: 401
- body:

```json
    {
        "error": "Unathorized"
    }
```
- status: 404
- body:

```json
    {
        "error": "request not found"
    }
```


### Get Materi

- endpoint: /api/course/materi
- method: GET
- Headers:
- Content-Type: "application/json"
- Accept: "application/json"
- Authorization: "Barear token"

#### REQUEST

- body:

```json
{
  "id_course": 1
}
```

#### RESPONSE

- status: 200
- body:

```json
    {
        "data": [
            {
                "id_materi": 1,
                "judul_materi": "Prinsip Dasar UI",
                "urutan": 1,
            }
            ...
        ]
    }
```
- status: 401
- body:

```json
    {
        "error": "Unathorized"
    }
```
- status: 404
- body:

```json
    {
        "error": "request not found"
   }
```


### Get Materi Detail

- endpoint: /api/course/materi/detail
- method: GET
- Headers:
- Content-Type: "application/json"
- Accept: "application/json"
- Authorization: "Barear token"

#### REQUEST

- body:

```json
{
  "id_course": 1,
  "id_materi": 1
}
```

#### RESPONSE

- status: 200
- body:

```json
{
  "judul_materi": "Prinsip Dasar UI",
  "video": "url path"
}
```
- status: 401
- body:

```json
    {
        "error": "Unathorized"
    }
```
- status: 404
- body:

```json
    {
        "error": "request not found"
   }
```


### Get Course Detail

- endpoint: /api/course/detail
- method: GET
- Headers:
- Content-Type: "application/json"
- Accept: "application/json"
- Authorization: "Barear token"

#### REQUEST

- body:

```json
{
  "id_course": 1,
}
```

#### RESPONSE

- status: 200
- body:

```json
{
    "mentor" : {
        "first_name": "albert",
        "last_name": "doe",
        "experience": "profesional designer",
        "profile": "url path"
    },
    "nama_kategori": "software",
    "materi": [
        {
            "id_materi": 1,
            "judul_materi": "Prinsip Dasar UI",
            "urutan": 1
        }
        ...
    ],
    "judul_course": "UI Beginner",
    "description": "description....",
    "image": "url path",
    "harga": 100000,
}
```
- status: 401
- body:

```json
    {
        "error": "Unathorized"
    }
```
- status: 404
- body:

```json
    {
        "error": "request not found"
   }
```

### Get Course 

- endpoint: /api/course
- method: GET
- Headers:
- Content-Type: "application/json"
- Accept: "application/json"
- Authorization: "Barear token"

#### RESPONSE

- status: 200
- body:

```json
{
    "mentor" : {
        "first_name": "albert",
        "last_name": "doe",
        "experience": "profesional designer",
        "profile": "url path"
    },
    "nama_kategori": "software",
    "materi": [
        {
            "id_materi": 1,
            "judul_materi": "Prinsip Dasar UI",
            "ururtan": 1
        }
        ...
    ],
    "judul_course": "UI Beginner",
    "image": "url path",
    "harga": 100000,
}
```
- status: 401
- body:

```json
    {
        "error": "Unathorized"
    }
```
- status: 404
- body:

```json
    {
        "error": "data not found"
   }
```

### Get Category

- endpoint: /api/category
- method: GET
- Headers:
- Content-Type: "application/json"
- Accept: "application/json"
- Authorization: "Barear token"

#### RESPONSE

- status: 200
- body:

```json
{
    "data": [
        {
            "id_kategori": 1,
            "nama_kategori": "Software",
            "imageLight": "url path",
            "imageDark": "url path"
        },
        ...
    ]
}
```
- status: 401
- body:

```json
    {
        "error": "Unathorized"
    }
```
- status: 404
- body:

```json
    {
        "error": "data not found"
   }
```


### Update User Progress

- endpoint: /api/user/update/progres
- method: POST
- Headers:
- Content-Type: "application/json"
- Accept: "application/json"
- Authorization: "Barear token"

#### REQUEST

- body:

```json
{
  "id_user": 1,
  "id_materi": 1,
  "status": "end"
}
```

#### RESPONSE

- status: 200
- body:

```json
{
  "message": "update progres user success"
}
```
- status: 401
- body:

```json
    {
        "error": "Unathorized"
    }
```
- status: 404
- body:

```json
    {
        "error": "data not found"
   }
```

