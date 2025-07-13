
'use client'

import Link from "next/link";
import FlyonuiScript from "./components/FlyonuiScript";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Image from 'next/image'

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export default function Home() {
  
  // const router = useRouter()

  // useEffect(() => {
  //   const user = localStorage.getItem('user')
  //   if (!user) {
  //     router.push('/login')
  //   }
  // }, [])

  return (
    <div>
      <Navbar/>
      <div className=" mt-44 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-col ">
        {/* hero */}
        <h1 className="text-6xl max-sm:text-4xl font-bold max-sm:px-3.5 text-[#0565AD] md:w-[45rem] lg:w-[50rem] max-sm:w-xs text-center leading-18 max-sm:leading-10">Service de paiement des taxes du District Autonome d'Abidjan</h1>
        <p className="mt-10 md:w-[45rem] lg:w-[59rem] px-8  text-center text-lg max-sm:w-xs max-sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla  rhoncus orci, 
          eu eleifend neque pellentesque non. Donec nibh massa,  pretium eget euismod vel, tristique sit amet purus. 
          Sed eu ultricies  elit, non eleifend nisi. Ut id posuere nibh. In ut rhoncus libero. Duis  iaculis augue 
          id nisi condimentum vulputate.
        </p>

        <div className="flex items-center mt-14 gap-8 max-sm:flex-col">
          <Link href="/vehicule" className="h-14 border-[#0565AD] hover:bg-[#0565AD] hover:text-white btn shadow-none bg-transparent  border-2 w-3xs rounded-lg text-[#0565AD] px-4 text-lg font-medium flex justify-center items-center">
            Enregistrer mon véhicule
          </Link>
          <Link href="/taxes" className="h-14 hover:border-[#0565AD] hover:border-2 hover:bg-transparent hover:text-[#0565AD] bg-[#0565AD] btn shadow-none border-0 text-white w-3xs rounded-lg px-4 text-lg font-medium flex justify-center items-center">
            Payer ma taxe
          </Link>
        </div>
        
        {/* section 1 */}
        <h1 className="text-4xl max-sm:text-2xl font-bold text-[#374151] px-8 md:w-xl max-sm:w-xs text-center leading-11 mt-24 max-sm:leading-10">
          Toutes vos taxes disponibles en un seul endroit
        </h1>

        <div className="flex flex-wrap mt-20 gap-10 justify-center items-center px-8">
          {/* card1 */}
          <div className="bg-white hover:shadow-lg rounded-lg w-xs h-76 p-6 flex flex-col space-y-4 ">
            <span className="bg-[#F77F0026] rounded-full w-28 text-[#F77F00] text-center py-1">Transporteur</span>
            <p className="font-medium text-xl w-40">
              Taxe sur les taxis interurbains, stationnement, parking etc.
            </p>
            <div>
              <svg width="57" height="49" viewBox="0 0 77 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.45 61.3333H11.55V65.1667C11.55 66.1833 11.1444 67.1584 10.4224 67.8772C9.70035 68.5961 8.72108 69 7.7 69H3.85C2.82892 69 1.84965 68.5961 1.12764 67.8772C0.405624 67.1584 0 66.1833 0 65.1667V30.6667L9.67505 4.97567C10.2253 3.51399 11.2106 2.25439 12.4992 1.36525C13.7878 0.476115 15.3183 -0.000194344 16.8861 5.94849e-08H60.1139C61.6817 -0.000194344 63.2122 0.476115 64.5008 1.36525C65.7894 2.25439 66.7747 3.51399 67.3249 4.97567L77 30.6667V65.1667C77 66.1833 76.5944 67.1584 75.8724 67.8772C75.1503 68.5961 74.1711 69 73.15 69H69.3C68.2789 69 67.2997 68.5961 66.5776 67.8772C65.8556 67.1584 65.45 66.1833 65.45 65.1667V61.3333ZM8.2236 30.6667H68.7764L60.1139 7.66667H16.8861L8.2236 30.6667ZM17.325 49.8333C18.8566 49.8333 20.3255 49.2275 21.4085 48.1492C22.4916 47.0709 23.1 45.6083 23.1 44.0833C23.1 42.5583 22.4916 41.0958 21.4085 40.0175C20.3255 38.9391 18.8566 38.3333 17.325 38.3333C15.7934 38.3333 14.3245 38.9391 13.2415 40.0175C12.1584 41.0958 11.55 42.5583 11.55 44.0833C11.55 45.6083 12.1584 47.0709 13.2415 48.1492C14.3245 49.2275 15.7934 49.8333 17.325 49.8333ZM59.675 49.8333C61.2066 49.8333 62.6755 49.2275 63.7585 48.1492C64.8416 47.0709 65.45 45.6083 65.45 44.0833C65.45 42.5583 64.8416 41.0958 63.7585 40.0175C62.6755 38.9391 61.2066 38.3333 59.675 38.3333C58.1434 38.3333 56.6745 38.9391 55.5915 40.0175C54.5084 41.0958 53.9 42.5583 53.9 44.0833C53.9 45.6083 54.5084 47.0709 55.5915 48.1492C56.6745 49.2275 58.1434 49.8333 59.675 49.8333Z" fill="#F77F00"/>
              </svg>
            </div>
            <div className="flex justify-end">
              <svg width="29" height="27" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.6692 16.1215L2.48974e-07 16.1215L1.92247e-07 20.8785L29.6692 20.8785L16.5945 33.6368L20.0411 37L39 18.5L20.0411 -2.26082e-07L16.5945 3.3632L29.6692 16.1215Z" fill="#D7D9DC"/>
              </svg>
            </div>
          </div>
          {/* card 2 */}
          <div className="bg-white hover:shadow-lg rounded-lg  w-xs h-76 p-6 flex flex-col space-y-4 ">
            <span className="bg-[#F7D07E29] rounded-full w-20 text-[#F7AE14] py-1 text-center">Publicité</span>
            <p className="font-medium text-xl w-40">
            Pub sur support mobile, banderole
            </p>
            <div className="mt-6">
              <Image src="/assets/icons/speaker.png" alt="speaker" width={60} height={60}/>
            </div>
            <div className="flex justify-end">
              <svg width="29" height="27" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.6692 16.1215L2.48974e-07 16.1215L1.92247e-07 20.8785L29.6692 20.8785L16.5945 33.6368L20.0411 37L39 18.5L20.0411 -2.26082e-07L16.5945 3.3632L29.6692 16.1215Z" fill="#D7D9DC"/>
              </svg>
            </div>
          </div>
          {/* card 3 */}
          <div className="bg-white hover:shadow-lg rounded-lg  w-xs h-76 p-6 flex flex-col space-y-4 ">
            <span className="bg-[#0565AD1A] rounded-full w-18 py-1 text-[#0565AD] text-center">Autres</span>
            <p className="font-medium text-xl w-44">
            Entreposage et transport des viandes, Artisanat
            </p>
            <div className="mt-6">
              <Image src="/assets/icons/add.png" alt="" width={55} height={55}/>
            </div>
            <div className="flex justify-end">
              <svg width="29" height="27" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.6692 16.1215L2.48974e-07 16.1215L1.92247e-07 20.8785L29.6692 20.8785L16.5945 33.6368L20.0411 37L39 18.5L20.0411 -2.26082e-07L16.5945 3.3632L29.6692 16.1215Z" fill="#D7D9DC"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-18">
         <button className="h-14 border-[#0565AD] border-2 w-2xs gap-3 rounded-lg text-[#0565AD] px-4 text-lg font-medium flex justify-center items-center hover:bg-[#0565AD] hover:text-white btn shadow-none bg-transparent">
         
            <p>Voir toute les taxes</p>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M7.571 7.70699L1.914 13.364L0.5 11.95L5.45 6.99999L0.5 2.04999L1.914 0.635986L7.571 6.29299C7.75847 6.48051 7.86379 6.73482 7.86379 6.99999C7.86379 7.26515 7.75847 7.51946 7.571 7.70699Z" fill="#0565AD"/>
          </svg>
          </button>
        </div>
      </div>

      {/* section 2 */}

      <div className="bg-white w-full mt-24 py-12">
          <div className="max-w-8xl  mx-auto px-8 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center md:gap-20 lg:gap-30 max-sm:gap-10 justify-center">
            <div className="max-w-sm mb-6">
              <p className=" text-[#5E6282] text-lg">Comment ça marche ?</p>
              <p className="text-[#14183E] font-medium text-4xl max-sm:text-2xl">Quelques vidéos tutoriels pour faciliter la prise en main de votre plateforme</p>
            </div>
            <div className="how-taxe w-2xl h-80 rounded-3xl  flex items-center justify-center">
            <div className="flex items-end gap-3">
              <svg width="49" height="49" viewBox="0 0 59 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59 9.03202V68.1806L44.2493 59.7358L29.4987 68.1806L14.748 59.7358L0 68.1806V9.03202C0 4.49515 3.68834 0.818359 8.23946 0.818359H50.7605C55.3117 0.818359 59 4.49515 59 9.03202Z" fill="#F77F00"/>
              </svg>
                <p className="text-white font-bold text-3xl w-52 ">Comment Payer ma taxe</p>
            </div>
            </div>
          </div>
      </div>

      
      <div className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-col">

        {/* section 3 */}
        <h1 className="text-4xl max-sm:text-2xl font-bold text-[#374151] px-8 md:w-lg  max-sm:w-sm text-center leading-11  max-sm:leading-10">
          Les autres moyens de payer vos taxes
        </h1>

        <div className="flex flex-wrap gap-8 mt-20 items-center justify-center">
          {/* card1 */}
          <div className="bg-white  hover:shadow-lg rounded-lg w-sm max-sm:w-xs h-66 p-6 flex flex-col space-y-4 ">
              <p className="font-medium text-2xl max-sm:text-xl text-[#374151]">
              Via l'application <br/> Côte d'Ivoire Identité
              </p>
              <div className="flex items-center gap-5 mt-6">
                <Image src="/assets/images/2.png" alt="" width={90} height={90}/>
                <Image src="/assets/images/app.png" alt="" width={130} height={130}/>
              </div>
          </div>

          {/* card2 */}
          <div className="bg-white  hover:shadow-lg rounded-lg w-sm  max-sm:w-xs h-66 p-6 flex flex-col space-y-4 ">
              <p className="font-medium text-2xl max-sm:text-xl text-[#374151] ">
                Dans une antenne du <br/>
                 District Autonome <br/> d'Abidjan
              </p>
              <div className="flex items-center gap-5 mt-6">
                <Image src="/assets/icons/maket.png" alt="" width={80} height={80}/>
              </div>
          </div>
        </div>

        {/* section 4, FAQ */}
        <h1 className="text-4xl max-sm:text-2xl font-bold text-[#374151] w-md max-sm:w-sm text-center leading-11 mt-24  max-sm:leading-10">
          Questions fréquentes
        </h1>

        <div className="grid md:w-lg lg:w-3xl sm:w-lg mx-auto mt-20  gap-y-3">
            <details className="group py-4 bg-white hover:shadow  rounded-lg p-8 text-xl max-sm:text-base text-[#383838]">
                <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                    <span>Comment payer une taxe transport</span>
                    <span className="transition group-open:rotate-180 ">
                      <Image src="/assets/icons/down.png" alt="" width={15} height={15}/>
                    </span>
                </summary>
                <p className="mt-3 group-open:animate-fadeIn text-lg ">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla  rhoncus orci, eu 
                eleifend neque pellentesque non. Donec nibh massa, pretium eget euismod vel, tristique sit 
                amet purus. Sed eu ultricies  elit, non eleifend nisi. Ut id posuere nibh. In ut rhoncus 
                libero. Duis  iaculis augue id nisi condimentum vulputate.
                </p>
            </details>

            <details className="group py-4 bg-white hover:shadow rounded-lg p-8 text-xl max-sm:text-base text-[#383838]">
                <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                    <span>Comment payer une taxe transport</span>
                    <span className="transition group-open:rotate-180">
                    <Image src="/assets/icons/down.png" alt="" width={15} height={15}/>
                    </span>
                </summary>
                <p className="mt-3 group-open:animate-fadeIn text-lg ">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla  rhoncus orci, eu 
                eleifend neque pellentesque non. Donec nibh massa, pretium eget euismod vel, tristique sit 
                amet purus. Sed eu ultricies  elit, non eleifend nisi. Ut id posuere nibh. In ut rhoncus 
                libero. Duis  iaculis augue id nisi condimentum vulputate.
                </p>
            </details>

            <details className="group py-4 bg-white hover:shadow rounded-lg p-8 text-xl max-sm:text-base text-[#383838]">
                <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                    <span>Comment payer une taxe transport</span>
                    <span className="transition group-open:rotate-180">
                    <Image src="/assets/icons/down.png" alt="" width={15} height={15}/>
                    </span>
                </summary>
                <p className="mt-3 group-open:animate-fadeIn text-lg ">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla  rhoncus orci, eu 
                eleifend neque pellentesque non. Donec nibh massa, pretium eget euismod vel, tristique sit 
                amet purus. Sed eu ultricies  elit, non eleifend nisi. Ut id posuere nibh. In ut rhoncus 
                libero. Duis  iaculis augue id nisi condimentum vulputate.
                </p>
            </details>

            <details className="group py-4 bg-white hover:shadow rounded-lg p-8 text-xl max-sm:text-base text-[#383838]">
                <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                    <span>Comment payer une taxe transport</span>
                    <span className="transition group-open:rotate-180">
                    <Image src="/assets/icons/down.png" alt="" width={15} height={15}/>
                    </span>
                </summary>
                <p className="mt-3 group-open:animate-fadeIn text-lg ">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla  rhoncus orci, eu 
                eleifend neque pellentesque non. Donec nibh massa, pretium eget euismod vel, tristique sit 
                amet purus. Sed eu ultricies  elit, non eleifend nisi. Ut id posuere nibh. In ut rhoncus 
                libero. Duis  iaculis augue id nisi condimentum vulputate.
                </p>
            </details>

          

        </div>
      </div>

      <Footer/>
    </div>
   
    
  );
}
