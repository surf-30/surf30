$(document).ready(function() {

var imagen_avatar =
["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFs6-gMHM_-wDpq1ZDs1uDiHXlkoOjG5yuKl8yJMJSnqoyLrceDMVLf9JYozkwmUoUZwCHyv4rQZubyRrIB6YPNGsv-E_Y4845vK5ecmAm3CCkSQ_6azfCd8C6e-on36jIIw01JuBfkVw/h120/surfer-01.webp","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyVnqSh4wUBMNk8-Tlt1HoumNBIitNIhgDJxeS7YpzZ3AKvuPOPG1jx6oAe1zZOGZi2U1kmJD71PmTaEyqu2thiGps3ymjB26dqzvObG7rAl3-83T3XlxFbUIsf07viIgeC_oZMfkbPRw/h120/surfer-02.webp","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQxlDVYnTbC_2RbGzbvjt_okQXyIJFNzdTU4oUSe4H3tagXxG-HIGiH_czZ0bRWZDb8x9fZe5JzXuhRSj-3015vSkolrnM-o52HGQr9IJMTrtiG1NdAGH6wNdRYqqtln7y8FqYqlfonBc/h120/surfer-03.webp","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifqlbmF_cSHaUvHya4iyCPwIBrMNWFhGytv8qdd4HMMErS7T5wyCsHBlae7dtd6073J0hhPY23dNHaY4538s2VaYxI7wVUoBNuFDJpwZqL8O68CKCQ5xoh3KBXMcGBBef9-W247h39bqI/h120/surfer-04.webp","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEify8D3vt7Fu6G9yoMYHrl__SU05oYMvGUeNbJ07MnMML9x4bK9c27x2c-ghwzsAxmJrmRR3CZWRLLjMj1fRsb-nMv4R1d7m23bSR-LV_ZZvhMjQc_VVj7F5r3riqOBEWCgkdGcHbOyAgM/h120/surfer-05.webp","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3L-YXIM8Xnibj1zarXloDqPYJZCncbY1tKeI3di0X0m6uQVLQWCkG_yeq1do-e8MxVuV7HDnZtw-KpLXOGZSUGqIcrBkqyevc0V_If_LPpnpyo2xPHPdSYCNqKwigO-USMamUWM8M50M/h120/surfer-06.webp","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT4FxB7mBYYYU3uGd8-MpXFyyS-_6loYWKlyrUEmOZmAh2Zyj9xzru8HIP0-nW2aIwzufmoq6JgBAwLa_lkWc4OpSfrWjm_d_6A-l-oZ07w93dNLH6CPS2agOGH6N70Wdfo54QgMjydj8/h120/surfer-07.webp","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgj_4g3xod50d0DnzDIYa0KX4SLLfQwgQRl85t6-VZ5hRrTkLE4q3WINlA7bbOqeQa203MiWrwvgl9GCeijo6WMWvHgRLKI3OI-kBvHxBcSCYALfcSxQLQvJCYmtiUGHGkT8-TQfM_5h3E/h120/surfer-08.webp","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj07ZhbZPOxi6eSZ8NqqrFBf3Q0ItvFuoZxbRKsYyHiB5c8vXYEH2UglABHRF0c0jubuuUrMtashJBlQR5o1UlKRjuMAeMJWdt2OWI3G3aHThrK7KYC3QKVwVxMN7pX5ucUg88kXfRoHU4/h120/surfer-09.webp","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi41fmw16vWh1-cXxlXP6_IWTf1Ks6dJtXDY4gqrcAhc4ceUtFhYkUn4IIe5J7tDULjg8Kq4NVIwC4VkKUdsvjI0y7MWbvD6hnZRSZIzCfrxYq7Ec-r-uVdIajmQPg8NbJ7PRHTo7c_4tk/h120/surfer-10.webp","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMNlG0HEQ6Kw0j4zD6SPQ5YZiLIYNDVTpPNuBKaAPPHu1LaJ5fjYXTIhAw1-cl6P5IbrCZbLhsGhNxDk60F3MJuvHEf0MFyqYYRvQbPgJKjBSqnssCyc_Ln-qld-enIIbHxKQSIbL515g/h120/surfer-11.webp"];
var avatars = document.getElementsByClassName("avatar-image-container");
var avt = 0;
for (i=0; i < avatars.length; i++) { 
    var image=avatars[i].firstChild; 
    if  (image.src=="https://resources.blogblog.com/img/blank.gif" ) { 
        image.src=imagen_avatar[avt]; 
        avt ++; 
        if (avt>=  imagen_avatar.length) 
            avt = 0;
         }
    }
}


});
