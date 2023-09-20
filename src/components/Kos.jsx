import love from "../assets/love.png"
import star from "../assets/star.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

export default function Kos({ nama, rating, jarak, tanggal, bulan, harga }){
    return (
        <div className="kos flex flex-col gap-2 text-[#222] cursor-pointer">
            <div className="top flex relative rounded-lg overflow-hidden">
                <div className="love absolute top-4 right-4">
                    <img src={love} alt="Love" />
                </div>
                <div className="imgs flex">
                    <img src={img1} alt="Image" />
                    <img src={img2} alt="Image" />
                    <img src={img3} alt="Image" />
                </div>
                <div className="btns absolute px-2 top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between font-bold">
                    <div className="left w-8 h-8 bg-white/[.8] backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white">{"<"}</div>
                    <div className="right w-8 h-8 bg-white/[.8] backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white">{">"}</div>
                </div>
            </div>
            <div className="info flex flex-col">
                <div className="top flex items-center justify-between">
                    <div className="nama font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-[85%]">{nama}</div>
                    <div className="rating flex items-center">
                        <img src={star} alt="Star" />
                        <span>{rating}</span>    
                    </div>
                </div>
                <div className="jarak text-ellipsis overflow-hidden whitespace-nowrap text-[#717171]">Berjarak {jarak} kilometer</div>
                <div className="tanggal-bulan">{tanggal[0]}-{tanggal[1]} {bulan}</div>
                <div className="harga font-semibold mt-2">Rp{harga}/malam</div>
            </div>
        </div>
    )
}