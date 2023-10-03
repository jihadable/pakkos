import { useState } from "react";
import Kos from "./Kos";
import { KosSkeleton } from "./Kos";
import { useEffect } from "react";

export default function KosContent({ page, totalKos }){

    const kosType = {
        nama: "Lake Arrowhead, California, Amerika Serikat",
        rating: 4.8,
        jarak: 8,
        tanggal: [24, 29],
        bulan: "Sep",
        harga: "5.499.620"
    }

    const [kosData, setKosData] = useState(null)
    
    useEffect(() => {
        setTimeout(() => {
            let arrayKos = kosData ? [...kosData] : []
            
            for (let i = 0 ; i < totalKos ; i++){
                arrayKos.push(kosType)
            }

            setKosData(arrayKos)
        }, 4000);
    }, [])

    // let arrayKosDummy = []
    // for (let i = 0 ; i < totalKos ; i++){
    //     arrayKosDummy.push(i)
    // }

    return (
        <div className={`kos-content w-[90vw] ${page === "home" ? "mt-32" : ""} mb-12 mx-auto grid grid-cols-4 gap-4 gap-y-8 mobile:flex mobile:flex-col tablet:grid-cols-2`}>
        {
            !kosData &&
            [...new Array(totalKos)].map((item, index) => <KosSkeleton key={index} />)
        }
        {
            kosData &&
            kosData.map((item, index) => {
                return <Kos kos={item} key={index} />
            })
        }
        </div>
    )
}