import { IconMap } from "@tabler/icons-react"
import Header from "../components/Header"
import KosContent from "../components/KosContent"
import Navbar from "../components/Navbar"

export default function Room(){
    return (
        <>
        <Navbar />
        <Header />
        <KosContent totalKos={24} />
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#222] w-fit flex items-center gap-2 p-4 rounded-full text-white text-sm font-semibold cursor-pointer">
            <span>Tampilkan Peta</span>
            <IconMap stroke={1.5} />
        </div>
        </>
    )
}