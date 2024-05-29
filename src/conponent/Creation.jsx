import React, { Component } from 'react'
import Animer from './Animer'
import New from './New'
import { NavLink } from 'react-router-dom'





export default class Creation extends Component {
  render() {
    return (
      <>
      <div className="">
        <div className="bg-black h-32 text-center"><h1 className='text-6xl pt-16  font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-amber-50 animate-pulse'> Mes inspiration && Création</h1></div>
      
      <div className="bg-cover  flex justify-start items-center contrast-125" style={{height:'550px',backgroundImage:'url(/anim/R2.jpeg)'}}>
     
      <div className="w-1/2 flex justify-between">
        <img
          src="anim/pp.jpg"
          alt=""
          className="w-2/6 h-52 object-cover rounded border-2 border-white transition duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
        />
        <img
          src="anim/trou.jpg"
          alt=""
          className="w-2/6 h-52 object-cover rounded border-2 border-white transition duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
        />
        <img
          src="anim/an.jpeg"
          alt=""
          className="w-2/6 h-52 object-cover rounded border-2 border-white transition duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
        />
        <img
          src="anim/rt.jpg"
          alt=""
          className="w-2/6 h-52 object-cover rounded border-2 border-white transition duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
        />
                <img
          src="anim/yes.jpg"
          alt=""
          className="w-2/6 h-52 object-cover rounded border-2 border-white transition duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
        />
 
      </div>
</div>
      </div>


<div className="bg-black  flex justify-start  contrast-125 " style={{height:'500px'}}>
   <New></New>
</div>
     
   <div className="">
      
    <div className="flex justify-center gap-1.5 items-center h-screen px-16 bg-black">
    <Animer></Animer>
    </div>
   </div>

     
  
   <footer class="bg-black text-white py-8">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between">
                <div class="mb-4 md:mb-0">
                    <h3 class="text-xl mb-2">Informations</h3>
                    <ul>
                        <li>  <NavLink to="/accueil">Accueil</NavLink></li>
                        <li><NavLink to="/creation">Creation</NavLink></li>
                        <li><NavLink>Contactez-nous</NavLink></li>
                    </ul>
                </div>
                <div class="mb-4 md:mb-0">
                    <h3 class="text-xl mb-2">Liens utiles</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">Conditions d'utilisation</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl mb-2">Suivez-nous</h3>
                    <div class="flex items-center space-x-4">
                        <a href="#" class="text-white hover:text-gray-300"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-white hover:text-gray-300"><i class="fab fa-instagram"></i></a>
                        <a class="text-white" href="https://api.whatsapp.com/send?phone=2250706525932"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

      </>
    )
  }
}
