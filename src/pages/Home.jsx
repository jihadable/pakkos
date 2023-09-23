import Footer from "../components/Footer";
import KosContent from "../components/KosContent";
import Navbar from "../components/Navbar";
import Penjelasan from "../components/Penjelasan";

export default function Home(){
    return (
        <>
        <Navbar />
        <KosContent page={"home"} />
        <Penjelasan />
        <Footer />
        </>
    )
}