import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function immatriculation () {
    return (
        <div>
            <Navbar/>
            <div className=" mt-44 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-col ">
            <h1 className="text-4xl max-sm:text-2xl font-bold max-sm:px-3.5 text-[#0565AD] md:w-[45rem] lg:w-[40rem] max-sm:w-xs text-center leading-12 max-sm:leading-8">Bienvenue sur l'espace
                d'enregistrement de véhicule</h1>
            <p className="mt-4 md:w-[45rem] lg:w-[59rem] px-8 font-medium text-center text-lg max-sm:w-xs max-sm:text-base">
            Saisissez le numéro d'immatriculation de votre véhicule et commencez
            </p>
            </div>
            <Footer/>
        </div>
    )
}