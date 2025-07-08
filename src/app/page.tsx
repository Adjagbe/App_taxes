
'use client'

import FlyonuiScript from "./components/FlyonuiScript";
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
    <div className="">
      <Navbar/>
      <div className=" mt-44 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-col ">
        {/* hero */}
        <h1 className="text-6xl max-sm:text-4xl font-bold text-[#0565AD] w-[50rem] max-sm:w-sm text-center leading-18 max-sm:leading-10">Service de paiement des taxes du District Autonome d'Abidjan</h1>
        <p className="mt-10 w-5xl text-center text-lg max-sm:w-sm max-sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla  rhoncus orci, 
          eu eleifend neque pellentesque non. Donec nibh massa,  pretium eget euismod vel, tristique sit amet purus. 
          Sed eu ultricies  elit, non eleifend nisi. Ut id posuere nibh. In ut rhoncus libero. Duis  iaculis augue 
          id nisi condimentum vulputate.
        </p>

        <div className="flex items-center mt-14 gap-8">
          <button className="h-14 border-[#0565AD] border-2 w-3xs rounded-lg text-[#0565AD] px-4 text-lg font-medium flex justify-center items-center">
            Enregistrer mon véhicule
          </button>
          <button className="h-14 bg-[#0565AD] text-white w-3xs rounded-lg px-4 text-lg font-medium flex justify-center items-center">
            Payer ma taxe
          </button>
        </div>
        
        {/* section 1 */}
        <h1 className="text-4xl max-sm:text-2xl font-bold text-[#374151] w-lg max-sm:w-sm text-center leading-11 mt-22 max-sm:leading-10">
          Toutes vos taxes disponibles en un seul endroit
        </h1>

        <div className="flex flex-wrap mt-10 gap-7">
          {/* card1 */}
          <div className="bg-white rounded w-xs h-74 p-6 flex flex-col space-y-4 ">
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
          <div className="bg-white rounded w-xs h-74 p-6 flex flex-col space-y-4 ">
            <span className="bg-[#F7D07E29] rounded-full w-20 text-[#F7AE14] py-1 text-center">Publicité</span>
            <p className="font-medium text-xl w-40">
            Pub sur support mobile, banderole
            </p>
            <div className="mt-6">
            <svg width="55" height="51" viewBox="0 0 95 81" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path   d="M69.5338 62.3681C71.9841 67.6481 74.2051 68.1087 75.3451 68.1087C76.4851 68.1087 78.7061 67.6481 81.1564 62.3681C83.6264 57.0751 85.1726 48.8956 85.1726 38.9193C85.1726 28.943 83.6264 20.7634 81.1564 15.4704C78.7061 10.1839 76.4916 9.72981 75.3451 9.72981C74.1986 9.72981 71.9841 10.1904 69.5338 15.4704C67.0638 20.7569 65.5177 28.943 65.5177 38.9193C65.5177 48.8956 67.0638 57.0751 69.5338 62.3681ZM55.6902 38.9193C55.6902 48.448 56.9809 57.1789 59.5557 63.9443L15.7384 47.4166C13.9993 46.7601 12.5027 45.596 11.4468 44.0786C10.3909 42.5612 9.82555 40.7619 9.82555 38.9193C9.82555 37.0766 10.3909 35.2773 11.4468 33.7599C12.5027 32.2425 13.9993 31.0784 15.7384 30.4219L59.5426 13.8942C56.9743 20.6596 55.6902 29.397 55.6902 38.9193ZM75.3451 77.8385C88.4484 77.8385 95 60.4157 95 38.9193C95 17.4229 88.4484 0 75.3451 0C71.0145 0 66.7166 0.778385 62.6743 2.30921L12.2464 21.3278C8.64486 22.6857 5.54519 25.0951 3.35816 28.2367C1.17113 31.3783 0 35.1037 0 38.9193C0 42.7348 1.17113 46.4602 3.35816 49.6018C5.54519 52.7434 8.64486 55.1528 12.2464 56.5108L17.6646 58.554C16.8223 60.5581 16.395 62.7093 16.408 64.8799C16.4211 67.0506 16.8741 69.1966 17.7404 71.1907C18.6066 73.1847 19.8684 74.9864 21.4509 76.4887C23.0335 77.991 24.9045 79.1635 26.9532 79.9366C29.0019 80.7097 31.1865 81.0677 33.3776 80.9894C35.5686 80.9111 37.7215 80.3981 39.7086 79.4808C41.6957 78.5635 43.4765 77.2605 44.9455 75.6491C46.4146 74.0378 47.5419 72.1508 48.2607 70.1001L62.6743 75.5293C66.7195 77.0604 71.0143 77.8431 75.3451 77.8385ZM39.0687 66.6233L26.863 62.0308C26.469 62.8399 26.2489 63.7212 26.2168 64.6189C26.1847 65.5166 26.3413 66.4111 26.6767 67.2458C27.012 68.0804 27.5188 68.837 28.1649 69.4677C28.811 70.0983 29.5823 70.5891 30.4301 70.9092C31.2778 71.2292 32.1835 71.3714 33.0896 71.3269C33.9958 71.2823 34.8827 71.0518 35.6942 70.6501C36.5057 70.2484 37.2241 69.6842 37.8038 68.9933C38.3836 68.3023 38.8121 67.4997 39.0622 66.6362" fill="#F77F00"/>
            </svg>
            </div>
            <div className="flex justify-end">
              <svg width="29" height="27" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.6692 16.1215L2.48974e-07 16.1215L1.92247e-07 20.8785L29.6692 20.8785L16.5945 33.6368L20.0411 37L39 18.5L20.0411 -2.26082e-07L16.5945 3.3632L29.6692 16.1215Z" fill="#D7D9DC"/>
              </svg>
            </div>
          </div>
          {/* card 3 */}
          <div className="bg-white rounded w-xs h-74 p-6 flex flex-col space-y-4 ">
            <span className="bg-[#0565AD1A] rounded-full w-18 py-1 text-[#0565AD] text-center">Autres</span>
            <p className="font-medium text-xl w-44">
            Entreposage et transport des viandes, Artisanat
            </p>
            <div className="mt-6">
              <svg width="58" height="58" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45.9459 6.26605L6.26389 45.948C5.45462 46.7576 5 47.8553 5 49C5 50.1447 5.45462 51.2424 6.26389 52.052L45.948 91.7361C46.7576 92.5454 47.8553 93 49 93C50.1447 93 51.2424 92.5454 52.052 91.7361L91.7339 52.0541C92.5432 51.2446 92.9978 50.1468 92.9978 49.0022C92.9978 47.8575 92.5432 46.7597 91.7339 45.9502L52.0498 6.26389C51.2403 5.45462 50.1425 5 48.9978 5C47.8532 5 46.7554 5.45462 45.9459 6.26389V6.26605Z"/>
              <path d="M35.5879 49.0001H61.4886M48.5382 36.0498V61.9505"/>
              </svg>
            </div>
            <div className="flex justify-end">
              <svg width="29" height="27" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.6692 16.1215L2.48974e-07 16.1215L1.92247e-07 20.8785L29.6692 20.8785L16.5945 33.6368L20.0411 37L39 18.5L20.0411 -2.26082e-07L16.5945 3.3632L29.6692 16.1215Z" fill="#D7D9DC"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-14">
         <button className="h-14 border-[#0565AD] border-2 w-2xs gap-3 rounded-lg text-[#0565AD] px-4 text-lg font-medium flex justify-center items-center">
         
            <p>Enregistrer mon véhicule</p>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M7.571 7.70699L1.914 13.364L0.5 11.95L5.45 6.99999L0.5 2.04999L1.914 0.635986L7.571 6.29299C7.75847 6.48051 7.86379 6.73482 7.86379 6.99999C7.86379 7.26515 7.75847 7.51946 7.571 7.70699Z" fill="#0565AD"/>
          </svg>
          </button>
        </div>
      </div>

      {/* section 2 */}

      <div className="bg-white w-full mt-20 py-12">
          <div className="max-w-8xl  mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-30 justify-center">
            <div className="max-w-sm">
              <p className=" text-[#5E6282] text-lg">Comment ça marche ?</p>
              <p className="text-[#14183E] font-medium text-4xl">Quelques vidéos tutoriels pour faciliter la prise en main de votre plateforme</p>
            </div>
            <div className="how-taxe w-2xl h-80 rounded-3xl flex items-center justify-center">
            <div className="flex items-end gap-3">
              <svg width="49" height="49" viewBox="0 0 59 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59 9.03202V68.1806L44.2493 59.7358L29.4987 68.1806L14.748 59.7358L0 68.1806V9.03202C0 4.49515 3.68834 0.818359 8.23946 0.818359H50.7605C55.3117 0.818359 59 4.49515 59 9.03202Z" fill="#F77F00"/>
              </svg>
                <p className="text-white font-bold text-3xl w-52 ">Comment Payer ma taxe</p>
            </div>
            </div>
          </div>
      </div>

      {/* section 3 */}
      <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-col">

        <h1 className="text-4xl max-sm:text-2xl font-bold text-[#374151] w-md max-sm:w-sm text-center leading-11  max-sm:leading-10">
          Les autres moyens de payer vos taxes
        </h1>

        <div className="flex flex-wrap gap-8 mt-14">
          {/* card1 */}
          <div className="bg-white rounded-lg w-sm h-66 p-6 flex flex-col space-y-4 ">
              <p className="font-medium text-2xl text-[#374151]">
              Via l'application <br/> Côte d'Ivoire Identité
              </p>
              <div className="flex items-center gap-5 mt-6">
                <Image src="/assets/images/2.png" alt="" width={90} height={90}/>
                <Image src="/assets/images/app.png" alt="" width={130} height={130}/>
              </div>
          </div>

          {/* card2 */}
          <div className="bg-white rounded-lg w-sm h-66 p-6 flex flex-col space-y-4 ">
              <p className="font-medium text-2xl text-[#374151]">
                Dans une antenne du District Autonome d'Abidjan
              </p>
              <div className="flex items-center gap-5 mt-6">
                <Image src="/assets/images/2.png" alt="" width={90} height={90}/>
                <Image src="/assets/images/app.png" alt="" width={130} height={130}/>
              </div>
          </div>
        </div>
      </div>

    </div>
   
    
  );
}
