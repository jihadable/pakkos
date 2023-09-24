import Kos from "./Kos";

export default function KosContent({ page, totalKos }){

    const arrayKos = []
    for (let i = 0 ; i < totalKos ; i++){
        arrayKos.push(undefined)
    }

    return (
        <div className={`kos-content w-[90vw] ${page === "home" ? "mt-32" : ""} mb-12 mx-auto grid grid-cols-4 gap-4 gap-y-8 mobile:flex mobile:flex-col`}>
        {
            arrayKos.map((item, index) => {
                return (
                    <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} key={index} />
                )
            })
        }
        </div>
    )
}