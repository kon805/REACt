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
.card {
  width: 85%;
  height: 75%;
  aspect-ratio: 1 / 0.7;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  margin: 20px auto;
  box-shadow: 0 0 30px rgba(225, 24,10 );
  transition: all 0.3s ease-in-out;


}

.card .image-box {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.card .image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 90%;
  border-radius: inherit;
  transition: 0.5s ease-in-out;
}

.card::after {
  content: "Bonjour les gars je me nome";
  position: absolute;
  inset: 0;
  border: 2px solid white;
  border-radius: inherit;
  opacity: 0;
  transition: 0.4s ease-in-out;
  color: white;
}

.card:hover img {
  filter: grayscale(1) brightness(0.4);
}

.card:hover::after {
  opacity: 1;
  inset: 20px;
}

.content {
  width: 80%;
  position: absolute;
  top: 50%;
  color:white;
  
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; 
}
h2{
    font-weight:bold;
    font-size:50px;
}
.content p{ 
    color:red;
    font-weight:bold;
}

    </style>
</head>
<body>
    <div class="card">
        <div class="image-box">
          <img src="anim/rtx.jpg" alt="">
        </div>
        <div class="content">
          <h2>Ma Voiture 2026</h2>
          <p>Description..</p>
        </div>
      </div>
</body>
</html>
`;

// Définition du composant React
const Animer = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
  );
};

export default Animer;