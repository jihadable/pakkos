import logo from "../assets/logo.png"
import account_menu from "../assets/account_menu.png"
import account_image from "../assets/account_image.png"
import search_icon from "../assets/search_icon.png"
import { useState, useEffect, useRef } from "react"

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
        <nav className={`fixed left-0 right-0 top-0 py-4 ${page === "title" ? "px-[10vw]" : "px-[5vw]"} bg-white flex items-center justify-between text-[#222] shadow z-10`}>
            <a href="/" className="logo flex">
                <img src={logo} alt="Logo" />
            </a>
            <div className="links flex items-center gap-4 py-3 pl-6 pr-2 rounded-full bg-white border shadow-md text-sm cursor-pointer">
                <div>Ke mana saja</div>
                <div className="line w-[1px] self-stretch bg-[#ccc]"></div>
                <div>Minggu mana pun</div>
                <div className="line w-[1px] self-stretch bg-[#ccc]"></div>
                <div className="flex items-center gap-4 text-[#717171]">
                    <div>Tambahkan tamu</div>
                    <div className="p-2 rounded-full flex justify-center items-center bg-primary">
                        <img src={search_icon} alt="Search icon" />
                    </div>
                </div>
            </div>
            <div className="extra flex items-center gap-4">
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