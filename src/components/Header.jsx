import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import kabin from "../assets/kabin.png"
import kolam_renang_cantik from "../assets/kolam_renang_keren.png"
import pemandangan_cantik from "../assets/pemandangan_cantik.png"
import lumbung from "../assets/lumbung.png"
import baru from "../assets/baru.png"
import mansion from "../assets/mansion.png"
import hadap_pantai from "../assets/hadap_pantai.png"
import wow from "../assets/wow.png"
import hadap_danau from "../assets/hadap_danau.png"

export default function Header(){

    const categorieIcons = [
        {
            title: "Kabin",
            img: kabin
        },
        {
            title: "Kolam renang keren",
            img: kolam_renang_cantik
        },
        {
            title: "Pemandangan cantik",
            img: pemandangan_cantik
        },
        {
            title: "Lumbung",
            img: lumbung
        },
        {
            title: "Baru",
            img: baru
        },
        {
            title: "Mansion",
            img: mansion
        },
        {
            title: "Hadap pantai",
            img: hadap_pantai
        },
        {
            title: "Wow!",
            img: wow
        },
        {
            title: "Hadap danau",
            img: hadap_danau
        }
    ]

    return (
        <header className="mt-32 w-[90vw] mx-auto my-8 flex gap-4 text-xs font-semibold mobile:flex-col">
            <div className="category-container flex overflow-x-auto mobile:border-b">
                <div className="categories flex items-center gap-8">
                {
                    categorieIcons.map((item, index) => {
                        return (
                            <div className={`category flex flex-col items-center gap-2 cursor-pointer pb-1 border-b-2 ${index === 0 ? "border-black" : "border-transparent"}`} key={index}>
                                <img src={item.img} alt="Category" className="w-6 h-fit" />
                                <div className="whitespace-nowrap">{item.title}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="filter flex items-center gap-2 p-4 rounded-xl cursor-pointer border mobile:hidden">
                <IconAdjustmentsHorizontal stroke={1.5} width={16} height={16} />
                <span>FIlter</span>
            </div>
            <div className="flex items-center gap-2 p-4 rounded-xl cursor-pointer border mobile:justify-between">
                <div className="whitespace-nowrap">Tampilkan total sebelum pajak</div>
                <div>
                    <label htmlFor="tampilkan_total_sebelum_pajak" className="flex rounded-full p-[2px] w-10 bg-[#ccc]">
                        <div className="circle w-5 h-5 bg-white rounded-full"></div>
                    </label>
                    <input type="checkbox" id="tampilkan_total_sebelum_pajak" className="hidden" />
                </div>
            </div>
        </header>
    )
}