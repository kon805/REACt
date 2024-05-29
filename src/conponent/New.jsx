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
               height: 300px;
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
        <img src="anim/AWA1.jpg" alt="">
        <img src="anim/b.jpg" alt="">
        <img src="anim/MARIAM.jpg" alt="">
        <img src="anim/MOUNA.jpg" alt="">
        <img src="anim/NAINA.jpg" alt="">
        <img src="anim/R.jpeg" alt="">
        <img src="LOGOCLI.jpg" alt="">
        <img src="AIDE.jpg" alt="">
        <img src="tt.jpg" alt="">
        <img src="anim/tr.JPG" alt="">
        <img src="anim/mado.JPG" alt="">
        <img src="anim/voiture.jpeg" alt="">
        </div>
</body>
</html>
`;

// Définition du composant React
const New = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
  );
};

export default New;