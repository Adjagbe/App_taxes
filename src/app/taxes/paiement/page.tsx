'use client'
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import Breadtaxes from "../breadtaxes/page";
import { useState } from "react";

export default function paiement(){
    const [codePays, setCodePays] = useState("+225");
    return (
        <div className="min-h-screen">
            <Navbar />
            <Breadtaxes />
            <div className=" mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-col ">
                <h1 className="text-4xl max-sm:text-2xl  font-bold max-sm:px-3.5 text-[#374151] md:w-[45rem] lg:w-[45rem] max-sm:w-xs text-center leading-12 max-sm:leading-8">
                    Taxe sur les taxis interurbains <br /> ou ceux dotés d'un compteur
                </h1>
                <p className=" pt-8 tracking text-xl text-[#37415180] ">PERIODE</p>
                <p className="pt-6 text-[#374151] font-medium text-lg">Janvier - Février - Mars</p>
                <div className="mt-18">
                    <form className=" sm:w-full lg:w-3xl p-7 rounded-lg bg-white flex flex-col space-y-4 ">
                        <div className="text-lg text-[#14183E]">
                            <p className="font-medium ">Dernier paiement effectué</p>
                            <p>Période 01/2025 - 03/2025</p>
                            <p>25 000 FCFA</p>
                        </div>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex flex-col space-y-3">
                                <label className="font-medium text-lg text-[#14183E] ">Marque du véhicule</label>
                                <input type="text" placeholder=""
                                    className="lg:w-xs h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                            </div>
                            <div className="flex flex-col space-y-3">
                                <label className="font-medium text-lg text-[#14183E] ">Marque du véhicule</label>
                                <input type="text" placeholder=""
                                    className="lg:w-xs h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                            </div>
                            <div className="flex justify-between items-center lg:w-[42rem] rounded-md p-5 bg-[#FEFAF6] border-2 border-[#E5905D]">
                                <div className="text-xl text-[#14183E]">
                                    <p className="font-medium" >Somme restante à payer</p>
                                    <p>Période 04/2025 - 06/2025</p>
                                </div>
                                <div className="text-3xl font-bold text-[#FF772C]">
                                    25 000 FCFA
                                </div>
                            </div>
                        </div>
                       <div className="grid place-content-end lg:mr-10 ">
                            <Link href="/taxes/confirm" className="h-14 mt-5 hover:border-[#0565AD] hover:border-2 hover:bg-transparent hover:text-[#0565AD] bg-[#0565AD] btn shadow-none border-0 text-white w-[14rem] rounded-lg px-4 text-lg font-medium flex justify-center items-center">
                                Payer
                            </Link>
                       </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}