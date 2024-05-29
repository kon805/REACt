import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Creation from './Creation';



export default class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isHovered: false
        };
      }

    
    
      handleHover = () => {
        this.setState(prevState => ({
          isHovered: !prevState.isHovered
        }));
      };
    
  
  render() {
    const { isHovered } = this.state;

    return (
      <>   
        
    <div className=" bg-red-600 mt-16 text-center rounded-md border-slate-100 transition-opacity duration-1000 opacity-100 hover:opacity-0">
            <h1 className="text-4xl text-amber-50 font-bold ">KONE DIAOU</h1>
            <p className="text-lg text-red-300">Bienvenue sur ma page, là pour vous servire  </p>
    </div>
     


    <div className="bg-cover brightness-100 contrast-125 bg-center h-screen flex items-center justify-around  mt-8 " style={{backgroundImage: 'url(/ro.jpg)',height:'370px'}}>

     <div className="font-bold">
      <div className="rounded-full bg-amber-50 h-16 w-16 flex justify-center items-center transform hover:scale-110 transition-transform transform hover:rotate-180 hover:bg-red-600">
      <span className="material-symbols-outlined hover:text-white">description</span>
      </div>
      <h3 className='text-amber-50 text-xl mt-4'>Infos</h3>
    </div>


      <div className="text-center">
        <h1 className="text-2xl text-amber-50 font-bold mb-4">Developper full-stack</h1>
        <p className="text-lg text-white font-bold">Infographe/Graphiste/ <br /> Motion-designer</p>
      </div>

      <div className=" font-bold ">
      <div className="rounded-full bg-amber-50 h-16 w-16 flex justify-center items-center transform hover:scale-110 transition-transform transform hover:rotate-180 hover:bg-red-600">
        <a href="/anim/CV.pdf"download='CV.pdf'><span className="material-symbols-outlined hover:text-white animate-bounce">arrow_downward</span></a>
      
      </div>
          <h3 className='text-white text-xl mt-4'>Mon Cv</h3>
      </div>
    </div>
  


    <div className="flex  mt-16 justify-around sm:flex-row flex-col  items-center" style={{Width:'100%'}}>

        <div className=" text-center max-w-80 sm:mb-0" style={{maxWidth:'50%'}}>
        <h1 className='font-bold text-6xl mb-4 text-red-600 sm:text-6xl'>Qui suis-je</h1>
        <p className='text-xl font-bold mb-12'>je suis infographe/graphiste depuis 2 ans<br />
             et j'apprends le developpement web à <br />
             l'Institut Français du Numérique (IFRAN) <br />
              je suis dev full-satck mes languages préferés sont: <br />
              PHP (laravel),language C, javascript(react) ,HTML,CSS,<br />
              TAILWIND
        </p>
        <a href="/creation" className="bg-gray-800 text-white rounded p-2 px-24  mt-8 transition duration-150 ease-in-out  hover:bg-red-600 sm:w-full "> creation</a>
        </div>

           <div className={`max-w-sm rounded overflow-hidden mt-8  shadow-lg relative ${isHovered ? 'transform scale-105' : ''}`} style={{maxWidth: '50%'}}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <img
          className={` w-full absolute  top-0 left-0 transition-opacity duration-1000 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          src="/CODE.jpg"
          alt="Random1"
        />
        <img
          className={` w-full  absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          src="/diaou.jpg"
          alt="Random2"
        />
        <div className="px-6 py-4  h-96 w-96 sm:w- sm:h-32" style={{width:'600px ',height:'600px'}}>
          <div className="font-bold text-xl mb-2">Card Title</div>
          
        </div>
           </div>
    </div>

      <h1 className='text-4xl text-white text-center font-bold mt-8 bg-red-600 p-2 '> Infographe </h1>


    <div className="flex flex-wrap  mt-4">
        
         <div class="max-w-xl mx-auto py-12 flex flex-col justify- center animate-fade-in" >
 
  <div class="text-center mb-8">
    <h2 class="text-3xl font-bold text-gray-900">Affiche de d'anniversaire</h2>
    <p class="mt-2 text-sm text-gray-600">anniversaire de kira</p>
  </div>
   
  <div class="mb-8 ">
    <img class="mx-auto rounded-lg shadow-lg " src="/IRA.jpg"  style={{maxWidth:'380px',height:'430px'}} alt="#"/>
  </div>
  
  <div class="  sm:grid-cols-2 ">
    <div class="bg-gray-100 p-6 rounded-lg shadow-md w-100">
      <h3 class="text-lg font-bold mb-2 text-center">Affiche de d'anniversaire</h3>
      <p class="text-gray-700">Description de la caractéristique 1.</p>
    </div>

  </div>
         </div>

          <div class="max-w-xl mx-auto py-12 flex flex-col justify- center animate-fade-in" >
 
 <div class="text-center mb-8">
   <h2 class="text-3xl font-bold text-gray-900">Affiche de d'anniversaire</h2>
   <p class="mt-2 text-sm text-gray-600">anniverssaire de ma grande-soeur</p>
 </div>
  
 <div class="mb-8 ">
   <img class="mx-auto rounded-lg shadow-lg " src="/MAW.jpg"  style={{maxWidth:'360px',maxHeight:'500px'}} alt="#"/>
 </div>
 
 <div class="  sm:grid-cols-2 ">
   <div class="bg-gray-100 p-6 rounded-lg shadow-md w-100">
     <h3 class="text-lg font-bold mb-2 text-center">Affiche de d'anniversaire</h3>
     <p class="text-gray-700">Description de la caractéristique 1.</p>
   </div>
   <button className="bg-gray-800 text-white rounded p-2 px-36 mt-8 transition duration-150 ease-in-out  hover:bg-red-600">Voir plus</button>
 </div>
          </div>


           <div class="max-w-xl mx-auto py-12 flex flex-col justify- center animate-fade-in" >
 
 <div class="text-center mb-8">
   <h2 class="text-3xl font-bold text-gray-900">Affiche de télé-réalité</h2>
   <p class="mt-2 text-sm text-gray-600"> pour te tournage d'une serie  </p>
 </div>
  
 <div class="mb-8 ">
   <img class="mx-auto rounded-lg shadow-lg " src="/three.jpg"  style={{maxWidth:'360px',height:'430px'}} alt="Product Image"/>
 </div>
 
 <div class="  sm:grid-cols-2 ">
   <div class="bg-gray-100 p-6 rounded-lg shadow-md w-100">
     <h3 class="text-lg font-bold mb-2 text-center">Affiche de télé-réalité</h3>
     <p class="text-gray-700">une serie qui racontre la vie d'etudiante des trois filles</p>
   </div>

 </div>
           </div>

    </div> 


    <h1 className='text-4xl text-white text-center font-bold mt-8 bg-red-600 p-2 '> Graphiste </h1>


    <div className="flex flex-wrap  mt-4">
        
         <div class="max-w-xl mx-auto py-12 flex flex-col justify- center animate-fade-in" >
 
  <div class="text-center mb-8">
    <h2 class="text-3xl font-bold text-gray-900">Nom du Produit</h2>
    <p class="mt-2 text-sm text-gray-600">Description brève du produit</p>
  </div>
   
  <div class="mb-8 ">
    <img class="mx-auto rounded-lg shadow-lg " src="/BYM12.jpg"  style={{maxWidth:'380px',height:'330px'}} alt="#"/>
  </div>
  
  <div class="  sm:grid-cols-2 ">
    <div class="bg-gray-100 p-6 rounded-lg shadow-md w-100">
      <h3 class="text-lg font-bold mb-2 text-center">Caractéristique 1</h3>
      <p class="text-gray-700">Description de la caractéristique 1.</p>
    </div>

  </div>
         </div>

          <div class="max-w-xl mx-auto py-12 flex flex-col justify- center animate-fade-in" >
 
 <div class="text-center mb-8">
   <h2 class="text-3xl font-bold text-gray-900">Nom du Produit</h2>
   <p class="mt-2 text-sm text-gray-600">Description brève du produit</p>
 </div>
  
 <div class="mb-8 ">
   <img class="mx-auto rounded-lg shadow-lg " src="/LOGO-1.jpg"  style={{maxWidth:'360px',}} alt="#"/>
 </div>
 
 <div class="  sm:grid-cols-2 ">
   <div class="bg-gray-100 p-6 rounded-lg shadow-md w-100">
     <h3 class="text-lg font-bold mb-2 text-center">Caractéristique 1</h3>
     <p class="text-gray-700">Description de la caractéristique 1.</p>
   </div>
   <button className="bg-gray-800 text-white rounded p-2 px-36 mt-8 transition duration-150 ease-in-out  hover:bg-red-600">Voir plus</button>
 </div>
          </div>


           <div class="max-w-xl mx-auto py-12 flex flex-col justify- center animate-fade-in" >
 
 <div class="text-center mb-8">
   <h2 class="text-3xl font-bold text-gray-900">Nom du Produit</h2>
   <p class="mt-2 text-sm text-gray-600">Description brève du produit</p>
 </div>
  
 <div class="mb-8 ">
   <img class="mx-auto rounded-lg shadow-lg " src="/logomriam.jpg"  style={{maxWidth:'360px',}} alt="#"/>
 </div>
 
 <div class="  sm:grid-cols-2 ">
   <div class="bg-gray-100 p-6 rounded-lg shadow-md w-100">
     <h3 class="text-lg font-bold mb-2 text-center">Caractéristique 1</h3>
     <p class="text-gray-700">Description de la caractéristique 1.</p>
   </div>

 </div>
           </div>

    </div> 

    <h1 className='text-4xl text-white text-center font-bold mt-8 bg-red-600 p-2 '> Motion / Montage </h1>

     <div className="w-full bg-gray-900">
   <div class="max-w-3xl mx-auto py-8">
  <div class="relative overflow-hidden bg-gray-900 rounded-lg shadow-lg h-96">
    <video class="w-full h-full object-cover" controls>
      <source src="/yeya.mp4" type="video/mp4"/>
    </video>
  </div>
    </div>
     </div>

     <h1 className='text-4xl text-white text-center font-bold  bg-red-600 p-2 '> Site web </h1>


    <div className=" mt-8 flex justify-center">
     <div className="font-bold  px-8">
      <div className="rounded-full bg-gray-800 h-16 w-16 flex justify-center items-center transform hover:scale-110 transition-transform transform hover:rotate-180 hover:bg-red-600">
      <span className="material-symbols-outlined hover:text-white">description</span>
      </div>
      <h3 className='text-black text-xl mt-4 px-6'>1</h3>
      </div>

      <div className="font-bold  px-8">
      <div className="rounded-full bg-gray-800 h-16 w-16 flex justify-center items-center transform hover:scale-110 transition-transform transform hover:rotate-180 hover:bg-red-600">
      
      <a href="https://kon805.github.io/BYM/"><span className="material-symbols-outlined hover:text-white">preview</span></a>
      </div>
      <h3 className='text-black text-xl mt-4 px-6'>2</h3>
      </div>

      <div className="font-bold  px-8">
      <div className="rounded-full bg-gray-800 h-16 w-16 flex justify-center items-center transform hover:scale-110 transition-transform transform hover:rotate-180 hover:bg-red-600">
      <span className="material-symbols-outlined hover:text-white">Developer_mode</span>
      </div>
      <h3 className='text-black text-xl mt-4 px-6'>3</h3>
      </div>

    </div>




     
    <div className="bg-gradient-to-r from-gray-800 via-gray-500 to-red-600 w-full h-16 mt-8"> <h2 className='text-center pt-2 text-white text-2xl'>Site 2</h2></div>
      


<div className=" contrast-200" >

   <div className=''><img src="/anim/monsite.jpg" alt="" /></div>

  


</div>




<footer class="bg-black text-white py-8">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between">
                <div class="mb-4 md:mb-0">
                    <h3 class="text-xl mb-2">Informations</h3>
                    <ul>
                        <li>  <NavLink to="/accueil">Accueil</NavLink></li>
                        <li><NavLink to="/creation">Creation</NavLink></li>
                        <li><a href="https://api.whatsapp.com/send?phone=2250706525932">Contactez-nous</a></li>
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
