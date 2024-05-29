// Fichier HTMLComponent.js
import React from 'react';

// Définition du code HTML dans une chaîne de caractères
const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>

        body{
            background-color: black;
        }
              .container {
               width: 50%;
               height: 200px;
              display: flex;
              gap: 5px;
              margin-right: 50px;
           }
           .container img {
                 width: 10%;
                 height: 100%;
                  object-fit: cover;
                 border-radius: 10px;
                  border: 2px solid white;
                transition: all ease-out 0.5s;
                  cursor: pointer;
                  margin-top: 50px;
                   
      }
         .container img:hover{
            transform: scale(1.2);
            width: 100%;
         }
         


    </style>
</head>
<body>
    <div class="container">
        <img src="R.jpeg" alt="">
        <img src="ro.jpg" alt="">
        <img src="true.jpg" alt="">
        <img src="true.jpg" alt="">
        </div>
</body>
</html>
`;

// Définition du composant React
const Ani = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
  );
};

export default Ani;