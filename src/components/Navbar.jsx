import logo from "../assets/logo.png"
import account_menu from "../assets/account_menu.png"
import account_image from "../assets/account_image.png"
import search_icon from "../assets/search_icon.png"

export default function Navbar(){
    return (
        <nav className="fixed left-0 right-0 top-0 py-4 px-[5%] bg-white flex items-center justify-between text-[#222] shadow z-10">
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
                    <div className="header flex gap-2 rounded-full p-2 border cursor-pointer">
                        <img src={account_menu} alt="Menu" />
                        <img src={account_image} alt="Account" />
                    </div>
                    <div className="menu absolute scale-0">
                        <div className="top">
                            <div>Daftar</div>
                            <div>Masuk</div>
                        </div>
                        <div className="line"></div>
                        <div className="bottom">
                            <div>Pusat Bantuan</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}