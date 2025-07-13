'use client'
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import Breadtaxes from "../breadtaxes/page";


export default function confirm(){

    return (
        <div className="min-h-screen">
            <Navbar />
            <Breadtaxes />
            <div className=" mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-col ">
                <h1 className="text-4xl max-sm:text-2xl  font-bold max-sm:px-3.5 text-[#374151] md:w-[45rem] lg:w-[45rem] max-sm:w-xs text-center leading-12 max-sm:leading-8">
                    Taxe sur les taxis interurbains <br /> ou ceux dotés d'un compteur
                </h1>
                <p className="pt-6 text-[#374151] font-medium text-lg">Confirmation de paiement</p>
                <div className="mt-18">
                    <div className=" sm:w-full lg:w-xl p-7 rounded-lg bg-white flex flex-col items-center space-y-4 ">
                        <div className="bg-[#01A4551A] p-6 rounded-xl w-32 flex justify-center items-center ">
                            <svg width="86" height="72" viewBox="0 0 86 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M71.9703 0L28.1505 43.9492L13.9386 29.6954L0 43.6751L14.2119 57.9289L28.2415 72L42.1801 58.0202L86 14.0711L71.9703 0Z" fill="#01A455" />
                            </svg>
                        </div>

                        <p className="text-[#01A455] text-lg">Paiement accepté !</p>

                    </div>
                    <div className=" flex flex-col md:flex-row items-center justify-center space-x-6 ">
                        <button className="h-14 mt-5   bg-[#F77F00] btn shadow-none border-0 text-white w-xs rounded-lg px-4 text-lg font-medium flex justify-center items-center">
                            <p>Attestation d'acquittement</p>
                            <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 25.5L6.375 14.875L9.35 11.7937L14.875 17.3187V0H19.125V17.3187L24.65 11.7937L27.625 14.875L17 25.5ZM4.25 34C3.08125 34 2.08108 33.5842 1.2495 32.7526C0.417916 31.921 0.00141667 30.9202 0 29.75V23.375H4.25V29.75H29.75V23.375H34V29.75C34 30.9187 33.5842 31.9196 32.7526 32.7526C31.921 33.5856 30.9202 34.0014 29.75 34H4.25Z" fill="white" />
                            </svg>
                        </button>
                        <button className="h-14 mt-5   bg-[#FEECD93B] border-2 border-[#F77F00] btn shadow-none  text-[#F77F00] w-[10rem] rounded-lg px-4 text-lg font-medium flex justify-center items-center">
                            <p>Macaron</p>
                            <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 25.5L6.375 14.875L9.35 11.7937L14.875 17.3187V0H19.125V17.3187L24.65 11.7937L27.625 14.875L17 25.5ZM4.25 34C3.08125 34 2.08108 33.5842 1.2495 32.7526C0.417916 31.921 0.00141667 30.9202 0 29.75V23.375H4.25V29.75H29.75V23.375H34V29.75C34 30.9187 33.5842 31.9196 32.7526 32.7526C31.921 33.5856 30.9202 34.0014 29.75 34H4.25Z" fill="#F77F00" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}