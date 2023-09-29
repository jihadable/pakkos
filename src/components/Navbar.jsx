import logo from "../assets/logo.png"
import account_menu from "../assets/account_menu.png"
import account_image from "../assets/account_image.png"
import { useState, useEffect, useRef } from "react"
import { IconSearch } from "@tabler/icons-react"

export default function Navbar({ page }){

    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const showAccountMenuBtn = useRef(null)

    useEffect(() => {
        document.addEventListener("click", function(e){
            if (!showAccountMenuBtn.current.contains(e.target)){
                setShowAccountMenu(false)
            }
        })
    }, [])

    return (
        <nav className={`fixed left-0 right-0 top-0 py-4 ${page === "title" ? "px-[10vw] tablet:px-[5vw] mobile:hidden" : "px-[5vw]"} bg-white flex items-center justify-between text-[#222] shadow z-10`}>
            <a href="/" className="logo flex mobile:hidden">
                <img src={logo} alt="Logo" />
            </a>
            <label className="search w-[40%] flex items-center rounded-full p-2 pl-8 border shadow-md mobile:w-full">
                <input type="text" placeholder="Masukkan nama kost atau lokasi" className="w-full outline-none text-sm font-semibold placeholder:text-black" />
                <div className="search-icon flex p-2 bg-primary rounded-full text-white">
                    <IconSearch stroke={3} width={16} height={16} />
                </div>
            </label>
            <div className="extra flex items-center gap-4 mobile:hidden">
                <div className="cursor-pointer">Pusat Bantuan</div>
                <div className="account relative flex">
                    <div className="header flex gap-2 rounded-full p-2 border cursor-pointer" onClick={() => setShowAccountMenu(!showAccountMenu)} ref={showAccountMenuBtn}>
                        <img src={account_menu} alt="Menu" />
                        <img src={account_image} alt="Account" />
                    </div>
                    <div className={`menu absolute ${showAccountMenu ? "flex" : "hidden"} flex-col gap-2 py-2 bg-white shadow-[0_0_20px_-2px_rgb(0,0,0,.2)] rounded-md top-[120%] right-0`}>
                        <div className="top flex flex-col">
                            <div className="hover:bg-black/[.05] cursor-pointer py-2 px-4">Daftar</div>
                            <div className="hover:bg-black/[.05] cursor-pointer py-2 px-4">Masuk</div>
                        </div>
                        <div className="line w-full h-[1px] bg-black/[.2]"></div>
                        <div className="bottom flex flex-col">
                            <div className="hover:bg-black/[.05] cursor-pointer py-2 px-4 whitespace-nowrap">Jadikan rumah anda Airbnb</div>
                            <div className="hover:bg-black/[.05] cursor-pointer py-2 px-4 whitespace-nowrap">Pusat Bantuan</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}