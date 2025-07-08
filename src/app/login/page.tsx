'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'test@email.com' && password === '123456') {
      localStorage.setItem('user', JSON.stringify({ email }))
      router.push('/')
    } else {
      alert('Identifiants incorrects')
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) router.push('/')
  }, [])

  return (
    <div className="flex flex-col md:flex-row min-h-screen">

    {/* Left Section  */}
    <div className="bg-[#0565AD] text-white  md:w-1/2 relative overflow-hidden">
    <div className="z-10 absolute top-18 -left-10">

        <Image
            src="/assets/images/img1.png"
            alt='image login'
            width={470}
            height={300}
         />
    </div>
    <div className=' absolute z-20 top-26 left-30 bg-white px-10 py-3 rounded flex items-center gap-8'>
        <Image
        src="/assets/images/logo_district.png"
        alt=''
        width={55}
        height={55}/>

        <div className='flex items-center gap-2'>
            <svg width="20" height="24" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.4529 4.01639V28.5617L18.3636 25.0573L12.2742 28.5617L6.1849 25.0573L0.0966797 28.5617V4.01639C0.0966797 2.1337 1.61929 0.60791 3.49807 0.60791H21.0515C22.9303 0.60791 24.4529 2.1337 24.4529 4.01639Z" fill="#FF772C"/>
                <path d="M15.0347 6.90967L16.3714 7.35915C14.92 9.8051 13.639 11.9923 12.5271 13.9229C11.4151 15.8536 10.4112 17.6359 9.51522 19.2699L8.12951 18.8862C9.30375 16.9366 10.4335 15.0416 11.5209 13.2002C12.6083 11.3599 13.6512 9.56753 14.6518 7.82425C14.2166 8.24919 13.7848 8.56261 13.3551 8.76337C12.9255 8.96525 12.4859 9.06563 12.034 9.06563C11.8225 9.06563 11.6032 9.04109 11.3773 8.99201C11.1514 8.94294 10.9199 8.87267 10.6806 8.7801C10.7729 9.03663 10.8431 9.28981 10.892 9.53965C10.941 9.7906 10.9655 10.0326 10.9655 10.2669C10.9655 11.3175 10.665 12.164 10.0651 12.8031C9.46403 13.4433 8.67823 13.7635 7.70434 13.7635C6.73045 13.7635 5.97248 13.4567 5.37702 12.8444C4.78155 12.2321 4.48438 11.4346 4.48438 10.4553C4.48438 9.39911 4.78712 8.54365 5.39371 7.89005C5.99919 7.23646 6.78387 6.90967 7.74552 6.90967C8.07164 6.90967 8.37215 6.9409 8.64596 7.00336C8.92087 7.06582 9.19134 7.16843 9.45735 7.31008C9.94151 7.48965 10.3889 7.62349 10.803 7.71048C11.2159 7.79748 11.6044 7.84098 11.9683 7.84098C12.4681 7.84098 12.97 7.76514 13.472 7.61233C13.9751 7.45953 14.4949 7.22531 15.0336 6.90967H15.0347ZM7.6242 7.9804C7.30365 7.9804 7.06435 8.1477 6.90631 8.4823C6.74826 8.8169 6.67035 9.32773 6.67035 10.0137C6.67035 10.8903 6.76718 11.5562 6.95973 12.0112C7.15228 12.4663 7.43165 12.6938 7.79561 12.6938C8.13285 12.6938 8.37994 12.5377 8.53799 12.2243C8.69604 11.9109 8.77395 11.4168 8.77395 10.742C8.77395 9.76718 8.6838 9.0634 8.5046 8.63064C8.32541 8.19789 8.03157 7.98151 7.6242 7.98151V7.9804ZM16.8445 12.425C17.8228 12.425 18.6041 12.7318 19.1885 13.3441C19.7728 13.9564 20.0644 14.7728 20.0644 15.7911C20.0644 16.8095 19.7639 17.685 19.164 18.3196C18.563 18.9543 17.7794 19.271 16.8122 19.271C15.845 19.271 15.0714 18.9665 14.4771 18.3564C13.8816 17.7463 13.5844 16.9544 13.5844 15.9796C13.5844 14.929 13.8883 14.0735 14.4971 13.4143C15.1059 12.7552 15.8884 12.4262 16.8456 12.4262L16.8445 12.425ZM16.722 13.479C16.4015 13.479 16.1633 13.6475 16.0086 13.9854C15.8539 14.3234 15.776 14.8353 15.776 15.5212C15.776 16.3979 15.8706 17.0638 16.0609 17.5188C16.2512 17.9739 16.5284 18.2014 16.8923 18.2014C17.2296 18.2014 17.4778 18.043 17.638 17.7274C17.7983 17.4117 17.8785 16.9154 17.8785 16.2406C17.8785 15.2658 17.7872 14.562 17.6058 14.1293C17.4232 13.6965 17.1283 13.4802 16.7209 13.4802L16.722 13.479Z" fill="white"/>
            </svg>
            <p className='font-semibold text-black '>taxes.district<span className='text-[#FF772C]'>.ci</span></p>
        </div>
    </div>



    </div>

     {/* Right Section  */}
    <div className="p-8 md:p-12 md:w-1/2 flex items-center justify-center">
    <div className="w-full max-w-md ">

        <h1 className="text-3xl font-bold mb-4 text-[#14183E]">Connexion</h1>

        <form  onSubmit={handleLogin}>
        <div className="space-y-6">
            <div className="space-y-2">
                <label htmlFor="email" className="block  font-medium text-[#14183E]">
                    Email
                    </label>
                <input id="email" type="email" placeholder="Votre adresse mail" value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                    className="w-full h-12 px-3 bg-white py-2 border border-[#14183E21] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0565AD] focus:border-transparent" />
            </div>

            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-[#14183E]">
                    Mot de passe
                    </label>
                <input id="password" type="password" placeholder=".. ... ... .." value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                    className="w-full h-12 px-3 bg-white border border-[#14183E21] text-[#14183E] text-2xl font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-[#0565AD] focus:border-transparent" />
            </div>

            <button type="submit"
                className="w-full h-14 bg-[#0565AD] hover:bg-[#0564addd] text-white cursor-pointer font-medium rounded-md transition duration-200">
                Suivant
            </button>

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
