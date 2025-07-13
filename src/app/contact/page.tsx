import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Breadcrumb from "../vehicule/breadcrumb";

export default function contact() {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <div className=" mt-34 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-col ">
                <h1 className="text-4xl max-sm:text-2xl mt-12  font-bold max-sm:px-3.5 text-[#374151] md:w-[45rem] lg:w-[45rem] max-sm:w-xs text-center leading-12 max-sm:leading-8">
                    Contact
                </h1>
                <section className="lg:flex lg:gap-7 py-10 lg:px-20 md:px-10 px-5 text-blue-950 mt-10">
                    <div className="lg:w-1/2 lg:pb-0 pb-10">
                        <h2 className="text-[35px] max-sm:text-2xl font-semibold text-[#374151] leading-12 mb-8">
                            Nous simplifions vos paiements, et restons à votre écoute ! 
                        </h2>
                        <p className='pb-8 '>Contactez-nous pour toute assistance.</p>

                        <h2 className="text-[35px] max-sm:text-2xl font-semibold text-[#0565AD] leading-12 mb-8">
                            District autonome d'Abidjan
                        </h2>
                        <p className='pb-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ut fringilla  rhoncus orci, eu eleifend neque pellentesque non. </p>
                        <p className='pb-8 text-xl font-medium text-[#5E6282]'>+225 27 22 000 000</p>

                        <p className="bg-[#FF772C] text-xl text-white p-3 rounded-lg w-[15rem] text-center font-bold">taxe@districtabidjan.ci</p>
                        
                    </div>
                    <div className='lg:w-1/2 flex flex-col text-blue-950 py-6 rounded-lg pt-16 lg:px-10  md:px-16 px-5 bg-white lg:pt-7'>
                        <form className="space-y-4 w-full" >
                            <div className="flex flex-col space-y-3">
                                <label className="font-medium text-lg text-[#14183E] ">Votre nom</label>
                                <input type="text" placeholder=""
                                    className="lg:w-md h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                            </div>
                            <div className="flex flex-col space-y-3">
                                <label className="font-medium text-lg text-[#14183E] ">Adresse email</label>
                                <input type="text" placeholder=""
                                    className="lg:w-md h-14 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white " />
                            </div>
                            <div className="flex flex-col space-y-3">
                                <label className="font-medium text-lg text-[#14183E] ">Ecrivez votre message</label>
                                <textarea 
                                    className="lg:w-md h-52 px-3 text-lg font-medium bg-[#F7F7F7] py-2 text-[#8A8DA8]  rounded-md  focus:ring-2 focus:ring-[#0565AD] focus:outline-none focus:border-transparent focus:bg-white "></textarea>
                            </div>
                            <div>
                                <button type="button" className="h-14 mt-5 hover:border-[#0565AD] hover:border-2 hover:bg-transparent hover:text-[#0565AD] bg-[#0565AD] btn shadow-none border-0 text-white w-[14rem] rounded-lg px-4 lg:text-lg font-medium flex justify-center items-center">
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}