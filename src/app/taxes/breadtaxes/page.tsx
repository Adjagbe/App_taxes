import Link from "next/link";

export default function Breadtaxes() {
    return (
        <div className="border-b border-[#E5E5E5] pb-6">
            <div className="mt-38 max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8" >
                <ul className="flex items-center gap-2">
                    <li>
                        <Link className="text-[#8A8DA8] font-medium hover:text-[#FF772C]" href="/">Acceuil</Link>
                    </li>
                    <li className=" relative top-1"><span className="icon-[tabler--chevron-right] text-[#8A8DA8] font-medium "></span></li>
                    <li>
                        <Link href="/taxes" className="text-black font-medium hover:text-[#FF772C]">Payer Ma Taxe</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}