

import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {


  return (
    <div className="flex flex-col md:flex-row min-h-screen">

    {/* Left Section  */}
      <div className="bg-[#0565AD] text-white flex items-center  md:w-1/2 relative overflow-hidden">
        <div className="z-10 ">
            <Image
                src="/assets/images/img2.png"
                alt='image login'
                width={470}
                height={300}
            />
        </div>

    </div>

     {/* Right Section  */}
    <div className="p-8 md:p-12 md:w-1/2 flex items-center justify-center">
    <div className="w-full max-w-md ">

        <h1 className="text-3xl font-bold mb-4 text-[#14183E]">Connexion</h1>

        <form >
        <div className="space-y-6">
            <div className="space-y-2">
                <label htmlFor="email" className="block  font-medium text-[#14183E]">
                    Email
                    </label>
                <input id="email" type="email" placeholder="Votre adresse mail" 
                    className="w-full h-12 px-3 bg-white py-2 border border-[#14183E21] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0565AD] focus:border-transparent" />
            </div>

            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-[#14183E]">
                    Mot de passe
                    </label>
                <input id="password" type="password" placeholder=".. ... ... .." 
                
                    className="w-full h-12 px-3 bg-white border border-[#14183E21] text-[#14183E] text-2xl font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-[#0565AD] focus:border-transparent" />
            </div>

              <Link href="/" className="h-12 mt-5 hover:border-[#0565AD] hover:border-2 hover:bg-transparent hover:text-[#0565AD] bg-[#0565AD] btn shadow-none border-0 text-white w-full rounded-md px-4  font-medium flex justify-center items-center">
                Suivant
              </Link>

            <div className=" font-light">
                Mot de passe oublié ? <a href="#" className="text-[#0565AD] font-medium ">réinitialiser le</a>
            </div>
        </div>
        </form>
    </div>
    </div>


    </div>
  )
}
