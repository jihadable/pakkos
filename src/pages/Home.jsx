import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import KosContent from "../components/KosContent";
import Navbar from "../components/Navbar";
import Penjelasan from "../components/Penjelasan";
import goTop from "../components/goTop"

export default function Home(){
    return (
        <>
        <Navbar />
        <KosContent page={"home"} totalKos={16} />
        <Link to={"/room"} onClick={goTop} className="w-full flex justify-center my-12">
            <button className="rounded-lg bg-primary py-3 px-6 font-semibold text-white">Tampilkan lebih banyak</button>
        </Link>
        {/* <Penjelasan /> */}
        <Footer />
        </>
    )
}