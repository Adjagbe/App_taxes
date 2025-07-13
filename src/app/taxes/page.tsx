'use client'
import Link from "next/link";
import Navbar from "../components/navbar";
import Breadtaxes from "./breadtaxes/page";
import { useState } from "react";
import Footer from "../components/footer";

export default function taxes() {
    
    const [codePays, setCodePays] = useState("+225");
    return (
        <div className="min-h-screen">
            <Navbar/>
            <Breadtaxes/>
            <div className=" mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-col ">
                <h1 className="text-4xl max-sm:text-2xl  font-bold max-sm:px-3.5 text-[#374151] md:w-[45rem] lg:w-[45rem] max-sm:w-xs text-center leading-12 max-sm:leading-8">
                    Taxe sur les taxis interurbains <br/> ou ceux dotés d'un compteur
                </h1>
                <div className="mt-18">
                    <form className=" sm:w-full lg:w-3xl p-7 rounded-lg bg-white flex flex-col space-y-4 ">
                        <label className="font-medium text-lg ">Entrer la plaque d'immatriculation du véhicule</label>
                        <input id="" type="text" placeholder=""
                            className="lg:w-full h-14 px-3 tex-xl font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                        <div className="flex flex-col space-y-3 mt-2">
                            <label className="font-medium text-lg text-[#14183E] ">Entrer un numéro de téléphone lié au véhicule </label>
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <select
                                        id="country-code"
                                        name="codePays"
                                        value={codePays}
                                        onChange={(e) => setCodePays(e.target.value)}
                                        className="appearance-none bg-gray-100 rounded-lg h-14 px-3 py-2 pr-8 text-[#14183E] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="+225"> 🇨🇮 +225</option>
                                        <option value="+33">🇫🇷 +33</option>
                                        <option value="+229">🇧🇯 +229</option>
                                        <option value="+223">🇲🇱 +223</option>
                                    </select>
                                </div>
                                <input type="tel" placeholder=""
                                    className="lg:w-[43rem] w-40 h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                            </div>
                        </div>
                        <Link href="/taxes/paiement" className="h-14 mt-5 hover:border-[#0565AD] hover:border-2 hover:bg-transparent hover:text-[#0565AD] bg-[#0565AD] btn shadow-none border-0 text-white w-[14rem] rounded-lg px-4 text-lg font-medium flex justify-center items-center">
                            Valider
                        </Link>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}