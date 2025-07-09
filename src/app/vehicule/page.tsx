import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from "next/link";
import Breadcrumb from "./breadcrumb";

export default function immatriculation () {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <Breadcrumb/>
            <div className=" mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-col ">
                <h1 className="text-4xl max-sm:text-2xl font-bold max-sm:px-3.5 text-[#0565AD] md:w-[45rem] lg:w-[40rem] max-sm:w-xs text-center leading-12 max-sm:leading-8">Bienvenue sur l'espace
                    d'enregistrement de véhicule</h1>
                <p className="mt-4 md:w-[45rem] lg:w-[59rem] px-8 font-medium text-center text-lg max-sm:w-xs max-sm:text-base">
                Saisissez le numéro d'immatriculation de votre véhicule et commence
                </p>
                <div className="flex flex-wrap items-center justify-center gap-12 mt-10">
                    <Image src="/assets/images/plaque1.png" alt="" width={180} height={180}/>
                    <Image src="/assets/images/plaque2.png" alt="" width={180} height={180}/>
                </div>

                <div className="mt-18">
                    <form className=" sm:w-full lg:w-2xl p-7 rounded-lg bg-white flex flex-col space-y-4 ">
                        <label className="font-medium text-lg ">Numero de plaque d'immatriculation</label>
                        <input id="email" type="text" placeholder="AA - O20 - AA" 
                        className="w-full h-14 px-3 tex-xl font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                        <Link href="/vehicule/infoVehicule" className="h-14 mt-5 hover:border-[#0565AD] hover:border-2 hover:bg-transparent hover:text-[#0565AD] bg-[#0565AD] btn shadow-none border-0 text-white w-[14rem] rounded-lg px-4 text-lg font-medium flex justify-center items-center">
                            Commencer
                        </Link>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}