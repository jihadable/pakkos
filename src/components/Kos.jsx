import { IconStar } from "@tabler/icons-react"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { IconHeart } from "@tabler/icons-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import goTop from "../components/goTop"
import { useEffect } from "react"

export default function Kos({ nama, rating, jarak, tanggal, bulan, harga }){
    
    const [imgShow, setImgSHow] = useState(0)
    const [isLove, setIsLove] = useState(false)

    return (
        <Link to={"/room/title"} onClick={goTop} className={`kos flex flex-col gap-2 text-[#222] cursor-pointer group`}>
            <div className="top flex relative rounded-lg overflow-hidden mobile:h-[90vw] tablet:h-[calc(45vw-.5rem)]">
                <div className={`imgs flex h-full transition duration-200 ${imgShow > 0 ? `img-show-${imgShow}` : ""}`}>
                    <img src={img1} alt="Image" className="h-full w-fit" />
                    <img src={img2} alt="Image" className="h-full w-fit" />
                    <img src={img3} alt="Image" className="h-full w-fit" />
                </div>
                <div className="love text-white absolute top-4 right-4" onClick={(e) => {
                    e.preventDefault()
                    setIsLove(!isLove)
                }}>
                    <IconHeart stroke={1.5} width={28} height={28} fill={`${isLove ? "#fff" : "transparent"}`} />
                </div>
                <div className={`btns absolute px-3 top-1/2 -translate-y-1/2 left-0 right-0 flex items-center ${imgShow > 0 ? "justify-between" : "justify-end"} invisible group-hover:visible`}>
                    <div className={`btn left p-1 bg-white/[.8] backdrop-blur-sm rounded-full ${imgShow > 0 ? "flex" : "hidden"} items-center justify-center hover:bg-white`} onClick={(e) => {
                        e.preventDefault()
                        imgShow > 0 ? setImgSHow(imgShow - 1) : ""
                    }}>
                        <IconChevronLeft stroke={1.5} width={20} height={20} />
                    </div>
                    <div className="btn right p-1 bg-white/[.8] backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white" onClick={(e) => {
                        e.preventDefault()
                        imgShow < 2 ? setImgSHow(imgShow + 1) : ""
                    }}>
                        <IconChevronRight stroke={1.5} width={20} height={20} />
                    </div>
                </div>
            </div>
            <div className="info flex flex-col">
                <div className="top flex items-center justify-between">
                    <div className="nama font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-[85%]">{nama}</div>
                    <div className="rating flex items-center">
                        <IconStar stroke={1.5} width={12} height={12} className="text-primary fill-primary" />
                        <span>{rating}</span>    
                    </div>
                </div>
                <div className="jarak text-ellipsis overflow-hidden whitespace-nowrap text-[#717171]">Berjarak {jarak} kilometer</div>
                <div className="tanggal-bulan">{tanggal[0]}-{tanggal[1]} {bulan}</div>
                <div className="harga font-semibold mt-2">Rp{harga}/malam</div>
            </div>
        </Link>
    )
}