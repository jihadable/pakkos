import Kos from "./Kos";

export default function KosContent({ page }){
    return (
        <>
        <div className={`kos-content w-[90vw] ${page === "home" ? "mt-32" : ""} mb-12 mx-auto grid grid-cols-4 gap-4 gap-y-8`}>
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
            <Kos nama={"Lake Arrowhead, California, Amerika Serikat"} rating={4.8} jarak={8} tanggal={[24, 29]} bulan={"Sep"} harga={"5.499.620"} />
        </div>
        <div className="w-full flex justify-center my-12">
            <button className="rounded-lg bg-primary py-3 px-6 font-semibold text-white">Tampilkan lebih banyak</button>
        </div>
        </>
    )
}