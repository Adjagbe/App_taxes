'use client'

import Navbar from "@/app/components/navbar";
import Breadcrumb from "../breadcrumb";
import Footer from "@/app/components/footer";
import FlyonuiScript from "@/app/components/FlyonuiScript";
import Link from "next/link";
import { useState } from "react";

export default function VehiculeInfo(){

    const [codePays, setCodePays] = useState("+225");
    
    return(
        <div className="min-h-screen">
            <FlyonuiScript />
            <Navbar />
            <Breadcrumb />
            <div className=" mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-col ">
               
                <div data-stepper="" className="w-full flex items-center flex-col">
                 
                    <ul className="relative flex flex-col md:flex-row gap-2 lg:w-4xl">
                        <li className="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 1 }'>
                            <span className="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
                                <span className="stepper-active:bg-[#0565AD] text-white stepper-success:bg-[#0565AD] px-4 py-3 lg:text-lg stepper-completed:bg-[#0565AD] bg-[#B8D7EB]  flex shadow-none shrink-0 items-center justify-center rounded-full font-medium" >
                                    <span className="stepper-success:hidden stepper-completed:hidden">1- Informations du véhicule</span>
                                    <span className=" stepper-success:block hidden shrink-0">1- Informations du véhicule</span>
                                </span>
                                
                            </span>
                            <div className="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
                        </li>
                        <li className="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 2 }'>
                            <span className="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
                                <span className="stepper-active:bg-[#0565AD]   stepper-success:bg-[#0565AD] px-4 py-3 lg:text-lg  stepper-completed:bg-[#0565AD] stepper-error:text-bg-error bg-[#B8D7EB] text-white flex  shrink-0 items-center justify-center rounded-full font-medium" >
                                    <span className="stepper-success:hidden stepper-completed:hidden">2- Informations du propriétaire</span>
                                    <span className=" stepper-success:block hidden  shrink-0">2- Informations du propriétaire</span>
                                </span>
                            </span>
                            <div className="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
                        </li>
                        <li className="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 3 }'>
                            <span className="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
                                <span className="stepper-active:bg-[#0565AD]  stepper-success:bg-[#0565AD] px-4 py-3 lg:text-lg  stepper-completed:bg-[#0565AD] stepper-error:text-bg-error bg-[#B8D7EB] text-white  flex  shrink-0 items-center justify-center rounded-full font-medium" >
                                    <span className="stepper-success:hidden stepper-completed:hidden">3- Personnes liées au véhicule</span>
                                    <span className=" stepper-success:block hidden  shrink-0">3- Personnes liées au véhicule</span>
                                </span>
                            </span>
                            <div className="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
                        </li>

                    </ul>

                   

                    <form className="mt-5 sm:mt-8 lg:w-4xl mx-4">

                        {/* Informations du véhicule */}
                        <div className="flex flex-col items-center" data-stepper-content-item='{ "index": 1 }'>
                            <h1 className="text-4xl max-sm:text-2xl mt-12  font-bold max-sm:px-3.5 text-[#374151] md:w-[45rem] lg:w-[40rem] max-sm:w-xs text-center leading-12 max-sm:leading-8">
                                Saisissez les informations du véhicule
                            </h1>
                            <p className="mt-4 md:w-[45rem] lg:w-[59rem] px-8  text-center text-lg max-sm:w-xs max-sm:text-base mb-12">
                                Saisissez exactement les informations inscrites sur la carte grise du véhicule
                            </p>
                            <div className="  p-10 rounded-lg bg-white flex  gap-x-10 flex-wrap space-y-8 ">
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Marque du véhicule</label>
                                    <input type="text" placeholder="Suziki"
                                        className="lg:w-sm h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E]">Modèle du véhicule</label>
                                    <input type="text" placeholder="Dzire"
                                        className="lg:w-sm h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Date de mise en circulation</label>
                                    <input type="date" placeholder=""
                                        className="lg:w-sm h-14 px-3 text-xl font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Numéro de carte grise</label>
                                    <input type="tel" placeholder="050000000"
                                        className="lg:w-sm h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className="lg:w-sm">
                                    <label className="font-medium text-lg text-[#14183E] ">Utilisation</label>
                                    <div className="flex flex-col md:flex-row lg:items-center gap-6 mt-5">
                                        <div className="flex items-center">
                                            <input type="radio" name="radio1" id="radioButton1" className="h-5 w-5 peer hidden" />
                                            <label
                                                htmlFor="radioButton1"
                                                className="flex items-center h-5 w-5 rounded-full border-3 border-[#CCD6ED] peer-checked:border-[#CCD6ED] peer-checked:bg-[#F77F00] transition-colors duration-200"
                                            ></label>
                                            <label htmlFor="radioButton1" className="pl-3 text-base font-medium text-[#14183E]">
                                                VTC
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" name="radio1" id="radioButton2" className="h-5 w-5 peer hidden" />
                                            <label
                                                htmlFor="radioButton2"
                                                className="flex items-center h-5 w-5 rounded-full border-3 border-[#CCD6ED] peer-checked:border-[#CCD6ED] peer-checked:bg-[#F77F00] transition-colors duration-200"
                                            ></label>
                                            <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-[#14183E]">
                                                Taxi inter urbain
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" name="radio1" id="radioButton3" className="h-5 w-5 peer hidden" />
                                            <label
                                                htmlFor="radioButton3"
                                                className="flex items-center h-5 w-5 rounded-full border-3 border-[#CCD6ED] peer-checked:border-[#CCD6ED] peer-checked:bg-[#F77F00] transition-colors duration-200"
                                            ></label>
                                            <label htmlFor="radioButton3" className="pl-3 text-base font-medium text-[#14183E]">
                                                Autres
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Préciser</label>
                                    <input type="text" placeholder=""
                                        className="lg:w-sm h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className="relative lg:w-[51rem]">
                                    <div className="items-center justify-center  mx-auto">
                                        <label className="flex justify-center w-full h-32 p-4 transition bg-[#F3F3F3] rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop">
                                            <p className="flex items-center flex-col lg:flex-row space-x-2">
                                                <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 14.4375C14 16.2575 13.3187 17.8062 11.956 19.0837C10.5933 20.3612 8.94133 21 7 21C5.05867 21 3.40667 20.3612 2.044 19.0837C0.681333 17.8062 0 16.2575 0 14.4375V4.725C0 3.4125 0.490187 2.29705 1.47056 1.37865C2.45093 0.460251 3.64075 0.000700798 5.04 7.98479e-07C6.43925 -0.000699201 7.62944 0.458851 8.61056 1.37865C9.59168 2.29845 10.0815 3.4139 10.08 4.725V13.9125C10.08 14.7175 9.78133 15.4 9.184 15.96C8.58667 16.52 7.85867 16.8 7 16.8C6.14133 16.8 5.41333 16.52 4.816 15.96C4.21867 15.4 3.92 14.7175 3.92 13.9125V4.2H6.16V13.9125C6.16 14.14 6.23952 14.3283 6.39856 14.4774C6.5576 14.6265 6.75808 14.7007 7 14.7C7.24192 14.6993 7.44277 14.6248 7.60256 14.4763C7.76235 14.328 7.84149 14.14 7.84 13.9125V4.725C7.82133 3.99 7.54619 3.36875 7.01456 2.86125C6.48293 2.35375 5.82475 2.1 5.04 2.1C4.25525 2.1 3.59259 2.35375 3.052 2.86125C2.51141 3.36875 2.24075 3.99 2.24 4.725V14.4375C2.22133 15.68 2.67867 16.7346 3.612 17.6012C4.54533 18.4678 5.67467 18.9007 7 18.9C8.30667 18.9 9.41733 18.4671 10.332 17.6012C11.2467 16.7353 11.7227 15.6807 11.76 14.4375V4.2H14V14.4375Z" fill="#B8B8B8"/>
                                                </svg>
                                                <span className="font-medium text-[#B8B8B8] text-center">Cliquez ici pour Joindre votre <span className="font-bold text-[#79747E]">votre carte </span> ou glissez-déposer</span>
                                            </p>
                                            <input type="file" name="file_upload" className="hidden" accept="image/png,image/jpeg" id="input"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Informations du propriétaire */}
                        <div className="flex flex-col items-center" data-stepper-content-item='{ "index": 2 }' style={{display: "none"}}>

                            <h1 className="text-4xl max-sm:text-2xl mt-12  font-bold max-sm:px-3.5 text-[#374151] md:w-[45rem] lg:w-[45rem] max-sm:w-xs text-center leading-12 max-sm:leading-8">
                                Saisissez les informations du propriétaire
                            </h1>
                            <p className="mt-4 md:w-[45rem] lg:w-[59rem] px-8  text-center text-lg max-sm:w-xs max-sm:text-base mb-12">
                                Saisissez exactement les informations inscrites sur la carte grise du véhicule
                            </p>

                            <div className="  p-10 rounded-lg bg-white  ">
                                
                                <nav className="tabs tabs-bordered flex flex-col md:flex-row gap-6 pt-8" aria-label="Tabs" role="tablist" aria-orientation="horizontal">

                                    <div className="flex items-center md:w-sm">
                                        <input type="radio" name="type_personne" className="h-5 w-5 peer hidden tab active-tab:tab-active active" id="tabs-basic-filled-item-1" data-tab="#tabs-basic-filled-1" aria-controls="tabs-basic-filled-1" role="tab" aria-selected="true" />
                                        <label
                                            htmlFor="tabs-basic-filled-item-1"
                                            className="flex items-center h-5 w-5 rounded-full border-3 border-[#CCD6ED] peer-checked:border-[#CCD6ED] peer-checked:bg-[#F77F00] transition-colors duration-200"
                                        ></label>
                                        <label htmlFor="tabs-basic-filled-item-1" className="pl-3 text-base font-medium text-[#14183E]">
                                            Personne physique
                                        </label>
                                    </div>

                                    <div className="flex items-center md:w-sm">
                                        <input type="radio" name="type_personne"  className="h-5 w-5 peer hidden tab active-tab:tab-active" id="tabs-basic-filled-item-2" data-tab="#tabs-basic-filled-2" aria-controls="tabs-basic-filled-2" role="tab" aria-selected="false" />
                                        <label
                                            htmlFor="tabs-basic-filled-item-2"
                                            className="flex items-center h-5 w-5 rounded-full border-3 border-[#CCD6ED] peer-checked:border-[#CCD6ED] peer-checked:bg-[#F77F00] transition-colors duration-200"
                                        ></label>
                                        <label htmlFor="tabs-basic-filled-item-2" className="pl-3 text-base font-medium text-[#14183E]">
                                            Personne moral (Entreprise)
                                        </label>
                                    </div>
                                </nav>

                                <div className="mt-14">
                                    {/* Personne physique */}
                                    <div className="flex  gap-x-10 flex-wrap space-y-8" id="tabs-basic-filled-1" role="tabpanel" aria-labelledby="tabs-basic-filled-item-1">
                                        <div className="flex flex-col space-y-3">
                                            <label className="font-medium text-lg text-[#14183E] ">Nom</label>
                                            <input type="text" placeholder=""
                                                className="lg:w-sm h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                        </div>
                                        <div className="flex flex-col space-y-3">
                                            <label className="font-medium text-lg text-[#14183E]">Prénoms</label>
                                            <input type="text" placeholder=""
                                                className="lg:w-sm h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                        </div>
                                        <div className="flex flex-col space-y-3">
                                            <label className="font-medium text-lg text-[#14183E] ">Numéro de CNI</label>
                                            <input type="tel" placeholder=""
                                                className="lg:w-sm h-14 px-3 text-xl font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                        </div>
                                    
                                        
                                        <div className="flex flex-col space-y-3">
                                            <label className="font-medium text-lg text-[#14183E] ">Numéro de téléphone</label>
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
                                                    className="lg:w-[17rem] w-36 h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                            </div>
                                        </div>

                                        <div className="flex flex-col space-y-3">
                                            <label className="font-medium text-lg text-[#14183E] ">Adresse e-mail (Facultatif)</label>
                                            <input type="email" placeholder=""
                                                className="lg:w-[51rem] h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                        </div>
                                        <div className="relative lg:w-[51rem]">
                                            <div className="items-center justify-center  mx-auto">
                                                <label className="flex justify-center w-full h-32 p-4 transition bg-[#F3F3F3] rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop">
                                                    <p className="flex items-center flex-col lg:flex-row space-x-2">
                                                        <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14 14.4375C14 16.2575 13.3187 17.8062 11.956 19.0837C10.5933 20.3612 8.94133 21 7 21C5.05867 21 3.40667 20.3612 2.044 19.0837C0.681333 17.8062 0 16.2575 0 14.4375V4.725C0 3.4125 0.490187 2.29705 1.47056 1.37865C2.45093 0.460251 3.64075 0.000700798 5.04 7.98479e-07C6.43925 -0.000699201 7.62944 0.458851 8.61056 1.37865C9.59168 2.29845 10.0815 3.4139 10.08 4.725V13.9125C10.08 14.7175 9.78133 15.4 9.184 15.96C8.58667 16.52 7.85867 16.8 7 16.8C6.14133 16.8 5.41333 16.52 4.816 15.96C4.21867 15.4 3.92 14.7175 3.92 13.9125V4.2H6.16V13.9125C6.16 14.14 6.23952 14.3283 6.39856 14.4774C6.5576 14.6265 6.75808 14.7007 7 14.7C7.24192 14.6993 7.44277 14.6248 7.60256 14.4763C7.76235 14.328 7.84149 14.14 7.84 13.9125V4.725C7.82133 3.99 7.54619 3.36875 7.01456 2.86125C6.48293 2.35375 5.82475 2.1 5.04 2.1C4.25525 2.1 3.59259 2.35375 3.052 2.86125C2.51141 3.36875 2.24075 3.99 2.24 4.725V14.4375C2.22133 15.68 2.67867 16.7346 3.612 17.6012C4.54533 18.4678 5.67467 18.9007 7 18.9C8.30667 18.9 9.41733 18.4671 10.332 17.6012C11.2467 16.7353 11.7227 15.6807 11.76 14.4375V4.2H14V14.4375Z" fill="#B8B8B8" />
                                                        </svg>
                                                        <span className="font-medium text-[#B8B8B8] text-center">Cliquez ici pour Joindre votre <span className="font-bold text-[#79747E]">votre CNI </span> ou glissez-déposer</span>
                                                    </p>
                                                    <input type="file" name="file_upload" className="hidden" accept="image/png,image/jpeg" id="input" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Personne moral (Entreprise) */}
                                    <div  id="tabs-basic-filled-2" className="hidden" role="tabpanel" aria-labelledby="tabs-basic-filled-item-2">
                                        <div className="flex  gap-x-10 flex-wrap space-y-8">
                                           
                                            <div className="flex flex-col space-y-3">
                                                <label className="font-medium text-lg text-[#14183E] ">Numéro RCCM</label>
                                                <input type="tel" placeholder=""
                                                    className="lg:w-sm h-14 px-3 text-xl font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                            </div>
                                            <div className="flex flex-col space-y-3">
                                                <label className="font-medium text-lg text-[#14183E] ">Numéro de téléphone</label>
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
                                                        className="lg:w-[17rem] w-36 h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                                </div>
                                            </div>

                                            <div className="flex flex-col space-y-3">
                                                <label className="font-medium text-lg text-[#14183E] ">Adresse e-mail (Facultatif)</label>
                                                <input type="email" placeholder=""
                                                    className="lg:w-[51rem] h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                            </div>
                                            <div className="relative lg:w-[51rem]">
                                                <div className="items-center justify-center  mx-auto">
                                                    <label className="flex justify-center w-full h-32 p-4 transition bg-[#F3F3F3] rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop">
                                                        <p className="flex items-center flex-col lg:flex-row space-x-2">
                                                            <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M14 14.4375C14 16.2575 13.3187 17.8062 11.956 19.0837C10.5933 20.3612 8.94133 21 7 21C5.05867 21 3.40667 20.3612 2.044 19.0837C0.681333 17.8062 0 16.2575 0 14.4375V4.725C0 3.4125 0.490187 2.29705 1.47056 1.37865C2.45093 0.460251 3.64075 0.000700798 5.04 7.98479e-07C6.43925 -0.000699201 7.62944 0.458851 8.61056 1.37865C9.59168 2.29845 10.0815 3.4139 10.08 4.725V13.9125C10.08 14.7175 9.78133 15.4 9.184 15.96C8.58667 16.52 7.85867 16.8 7 16.8C6.14133 16.8 5.41333 16.52 4.816 15.96C4.21867 15.4 3.92 14.7175 3.92 13.9125V4.2H6.16V13.9125C6.16 14.14 6.23952 14.3283 6.39856 14.4774C6.5576 14.6265 6.75808 14.7007 7 14.7C7.24192 14.6993 7.44277 14.6248 7.60256 14.4763C7.76235 14.328 7.84149 14.14 7.84 13.9125V4.725C7.82133 3.99 7.54619 3.36875 7.01456 2.86125C6.48293 2.35375 5.82475 2.1 5.04 2.1C4.25525 2.1 3.59259 2.35375 3.052 2.86125C2.51141 3.36875 2.24075 3.99 2.24 4.725V14.4375C2.22133 15.68 2.67867 16.7346 3.612 17.6012C4.54533 18.4678 5.67467 18.9007 7 18.9C8.30667 18.9 9.41733 18.4671 10.332 17.6012C11.2467 16.7353 11.7227 15.6807 11.76 14.4375V4.2H14V14.4375Z" fill="#B8B8B8" />
                                                            </svg>
                                                            <span className="font-medium text-[#B8B8B8] text-center">Cliquez ici pour Joindre votre <span className="font-bold text-[#79747E]">votre RCCM </span> ou glissez-déposer</span>
                                                        </p>
                                                        <input type="file" name="file_upload" className="hidden" accept="image/png,image/jpeg" id="input" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* Personnes liées au véhicule */}
                        <div className="flex flex-col items-center" data-stepper-content-item='{ "index": 3 }' style={{display: "none"}}>
                            <h1 className="text-4xl max-sm:text-2xl mt-12  font-bold max-sm:px-3.5 text-[#374151] md:w-[45rem] lg:w-[45rem] max-sm:w-xs text-center leading-12 max-sm:leading-8">
                                Saisissez les informations des personnes liées au véhicule
                            </h1>
                            <p className="mt-4 md:w-[45rem] lg:w-[59rem] px-8  text-center text-lg max-sm:w-xs max-sm:text-base mb-12">
                                Ces personnes seront liées au véhicule et pourront s'identifier pour suivre l'activité
                                du véhicule sur la plateforme du DAA.
                            </p>

                            <div className="  p-10 rounded-lg bg-white ">
                                
                                        <div id="wrapper-remove-for-copy-target" className=" space-y-3">
                                            <div id="content-remove-for-copy-target" className=" flex flex-col gap-8">
                                                

                                                <div className="flex  gap-x-10 flex-wrap space-y-8 ">
                                                    <p className="font-bold text-xl text-[#0565AD] w-full">Personne 1</p>
                                                    <div className="flex flex-col space-y-3">
                                                        <label className="font-medium text-lg text-[#14183E] ">Nom et prénoms</label>
                                                        <input type="text" placeholder=""
                                                            className="lg:w-md h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                                    </div>
                                                    <div className="flex flex-col space-y-3">
                                                        <label className="font-medium text-lg text-[#14183E]">Role</label>
                                                        <input type="text" placeholder=""
                                                            className="lg:w-xs h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                                    </div>
                                                    <div className="flex flex-col space-y-3">
                                                        <label className="font-medium text-lg text-[#14183E] ">Numéro de téléphone <small> (un lien sera envoyé par sms sur le numéro saisie pour la confirmation de la personne)</small></label>
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
                                                                className="lg:w-[43rem] w-38 h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-square btn-outline btn-error" aria-label="delete button" data-copy-markup-delete-item>
                                                <span className="icon-[tabler--x]"></span> 
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div className="flex   gap-2 mt-12">
                                            <button
                                                type="button"
                                                data-copy-markup='{
                                                "targetSelector": "#content-remove-for-copy-target",
                                                "wrapperSelector": "#wrapper-remove-for-copy-target",
                                                "limit": 4
                                                }'
                                                id="copy-content-rem-btn"
                                                className="btn btn-sm bg-transparent border-[#F77F00] text-[#F77F00] h-12 text-lg border-2 rounded-lg shadow-none">
                                                <span className="icon-[tabler--plus]"></span>
                                                Ajouter une personne
                                            </button>
                                        </div>
                               
                            </div>
                        </div>

                        {/* resumé */}
                        <div className="flex flex-col  items-center" data-stepper-content-item='{ "isFinal": true }' style={{display: "none"}}>
                            <h1 className="text-4xl max-sm:text-2xl mt-12  font-bold max-sm:px-3.5 text-[#374151] md:w-[45rem] lg:w-[40rem] max-sm:w-xs text-center leading-12 max-sm:leading-8">
                               Résumé
                            </h1>
                          
                            {/* Informations du véhicule */}
                            <div className="  p-10 rounded-lg bg-white flex  gap-x-10 flex-wrap md:items-center space-y-8 ">
                                <p className="w-full text-xl font-bold text-[#F77F00]">Informations du véhicule</p>
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Marque du véhicule</label>
                                    <input type="text" placeholder=""
                                        className="lg:w-sm h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E]">Modèle du véhicule</label>
                                    <input type="text" placeholder=""
                                        className="lg:w-sm h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Date de mise en circulation</label>
                                    <input type="date" placeholder=""
                                        className="lg:w-sm h-14 px-3 text-xl font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Numéro de carte grise</label>
                                    <input type="tel" placeholder=""
                                        className="lg:w-sm h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                               
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Utilisation</label>
                                    <input type="text" placeholder=""
                                        className="lg:w-[10rem] h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Préciser</label>
                                    <input type="text" placeholder=""
                                        className="lg:w-[18rem] h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className=" lg:w-[18rem] w-60">
                                    <div className="items-center justify-center  mx-auto">
                                        <label className="flex justify-center w-full h-14 p-4 transition bg-[#79747E] rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop">
                                            <p className="flex items-center flex-row space-x-2">
                                                <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 14.4375C14 16.2575 13.3187 17.8062 11.956 19.0837C10.5933 20.3612 8.94133 21 7 21C5.05867 21 3.40667 20.3612 2.044 19.0837C0.681333 17.8062 0 16.2575 0 14.4375V4.725C0 3.4125 0.490187 2.29705 1.47056 1.37865C2.45093 0.460251 3.64075 0.000700798 5.04 7.98479e-07C6.43925 -0.000699201 7.62944 0.458851 8.61056 1.37865C9.59168 2.29845 10.0815 3.4139 10.08 4.725V13.9125C10.08 14.7175 9.78133 15.4 9.184 15.96C8.58667 16.52 7.85867 16.8 7 16.8C6.14133 16.8 5.41333 16.52 4.816 15.96C4.21867 15.4 3.92 14.7175 3.92 13.9125V4.2H6.16V13.9125C6.16 14.14 6.23952 14.3283 6.39856 14.4774C6.5576 14.6265 6.75808 14.7007 7 14.7C7.24192 14.6993 7.44277 14.6248 7.60256 14.4763C7.76235 14.328 7.84149 14.14 7.84 13.9125V4.725C7.82133 3.99 7.54619 3.36875 7.01456 2.86125C6.48293 2.35375 5.82475 2.1 5.04 2.1C4.25525 2.1 3.59259 2.35375 3.052 2.86125C2.51141 3.36875 2.24075 3.99 2.24 4.725V14.4375C2.22133 15.68 2.67867 16.7346 3.612 17.6012C4.54533 18.4678 5.67467 18.9007 7 18.9C8.30667 18.9 9.41733 18.4671 10.332 17.6012C11.2467 16.7353 11.7227 15.6807 11.76 14.4375V4.2H14V14.4375Z" fill="#B8B8B8" />
                                                </svg>
                                                <span className="font-medium text-[#B8B8B8] text-center">carte grise</span>
                                            </p>
                                            <input type="file" name="file_upload" className="hidden" accept="image/png,image/jpeg" id="input" />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Informations du propriétaire */}
                            <div className=" mt-10 p-10 rounded-lg bg-white flex  gap-x-10 flex-wrap md:items-center space-y-8 ">
                                <div className="w-full flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Type de personne</label>
                                    <select className="lg:w-[15rem] h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " >
                                        <option >Personne physique</option>
                                        <option>Personne moral</option>
                                    </select>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Nom</label>
                                    <input type="text" placeholder=""
                                        className="lg:w-[15rem] h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E]">Prenoms</label>
                                    <input type="text" placeholder=""
                                        className="lg:w-[15rem] h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Numéro CNI</label>
                                    <input type="tel" placeholder=""
                                        className="lg:w-[15rem] h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label className="font-medium text-lg text-[#14183E] ">Numéro de téléphone</label>
                                    <input type="tel" placeholder=""
                                        className="lg:w-[15rem] h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                <div className="flex flex-col space-y-3 relative bottom-4">
                                    <label className="font-medium text-lg text-[#14183E]">Adresse e-mail</label>
                                    <input type="text" placeholder=""
                                        className="lg:w-[15rem] h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                </div>
                                
                                
                               
                            </div>

                            {/* Personnes liées au véhicule */}
                            <div className=" mt-10 p-10 rounded-lg bg-white flex  gap-x-10 flex-wrap md:items-center space-y-8 ">
                                

                                <div className="flex  gap-x-10 flex-wrap space-y-8 ">
                                    <p className="font-bold text-xl text-[#F77F00] w-full">Personne 1</p>
                                    <div className="flex flex-col space-y-3">
                                        <label className="font-medium text-lg text-[#14183E] ">Nom et prénoms</label>
                                        <input type="text" placeholder=""
                                            className="lg:w-md h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                    </div>
                                    <div className="flex flex-col space-y-3">
                                        <label className="font-medium text-lg text-[#14183E]">Role</label>
                                        <input type="text" placeholder=""
                                            className="lg:w-xs h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                    </div>
                                    <div className="flex flex-col space-y-3">
                                        <label className="font-medium text-lg text-[#14183E] ">Numéro de téléphone </label>
                                        <div className="flex items-center space-x-4">
                                            <input type="tel" placeholder=""
                                                className="lg:w-[15rem] h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-3 ">
                                        <label className="font-medium text-lg text-[#14183E]">Adresse e-mail</label>
                                        <input type="text" placeholder=""
                                            className="lg:w-[15rem] h-14 px-3 text-lg font-medium bg-[#FEFAF6] border-2 border-[#E5905D] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                                    </div>
                                </div>


                            </div>


                        </div>

                        <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between  gap-2">
                            <button type="button" className="btn w-[14rem] bg-transparent shadow-none border-0 lg:text-xl text-gray-600 pt-8" data-stepper-back-btn="">
                                <span className="icon-[tabler--chevron-left]  rtl:rotate-180"></span>
                                Précédent
                            </button>
                            <button type="button" className="h-14 mt-5 hover:border-[#0565AD] hover:border-2 hover:bg-transparent hover:text-[#0565AD] bg-[#0565AD] btn shadow-none border-0 text-white w-[14rem] rounded-lg px-4 lg:text-lg font-medium flex justify-center items-center" data-stepper-next-btn="">
                                Suivant
                                
                            </button>
                            
                            <button type="button" className="h-14 mt-5 hover:border-[#0565AD] hover:border-2 hover:bg-transparent hover:text-[#0565AD] bg-[#0565AD] btn shadow-none border-0 text-white w-[14rem] rounded-lg px-4 text-lg font-medium flex justify-center items-center" data-stepper-finish-btn="" style={{ display: "none" }}> Valider </button>
                            <button type="reset" className="h-14 mt-5 hover:border-[#0565AD] hover:border-2 hover:bg-transparent hover:text-[#0565AD] bg-[#0565AD] btn shadow-none border-0 text-white w-[14rem] rounded-lg px-4 text-lg font-medium flex justify-center items-center" data-stepper-reset-btn="" style={{display: "none"}}> Réinitialiser </button>
                        </div>
                       
                    </form>
                    
                </div>

               
            </div>
            <Footer />
           
        </div>
    )
}