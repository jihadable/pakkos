import { IconUser } from "@tabler/icons-react"
import Navbar from "../components/Navbar"
import { IconMapPin } from "@tabler/icons-react"
import { IconShare2 } from "@tabler/icons-react"
import { IconHeart } from "@tabler/icons-react"
import { IconPackage } from "@tabler/icons-react"
import { IconBoltOff } from "@tabler/icons-react"
import { IconSnowflake } from "@tabler/icons-react"
import { IconPropeller } from "@tabler/icons-react"
import { IconArmchair } from "@tabler/icons-react"
import { IconSofa } from "@tabler/icons-react"
import { IconDoor } from "@tabler/icons-react"
import { IconToolsKitchen2 } from "@tabler/icons-react"
import { IconWifi } from "@tabler/icons-react"
import { IconHanger } from "@tabler/icons-react"
import { IconCar } from "@tabler/icons-react"
import { IconWindow } from "@tabler/icons-react"
import { IconGridDots } from "@tabler/icons-react"
import { useState } from "react"
import { IconChevronLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import goTop from "../components/goTop"
import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/swiper.min.css";
import 'swiper/css';

export default function Title(){
    return (
        <>
        <Navbar page={"title"} />
        <Header />
        <Content />
        </>
    )
}

function Header(){

    const mobileDevice = window.matchMedia("screen and (max-width: 480px)").matches

    return (
        <header className="w-[80vw] mx-auto mt-32 flex flex-col gap-4 mobile:w-full mobile:flex-col-reverse tablet:w-[90vw] mobile:mt-0">
            <div className="info flex flex-col gap-4 mobile:px-[5vw]">
                <div className="font-semibold text-2xl">Kost Eksklusif Kertajaya Surabaya 289651SM</div>
                <div className="flex items-center justify-between text-sm mobile:flex-col mobile:items-start mobile:gap-4">
                    <div className="left flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <IconUser stroke={1.5} className="text-primary" />
                            <span>Kos Putri</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IconMapPin stroke={1.5} className="text-primary" />
                            <span>Kertajaya, Gubeng, Surabaya</span>
                        </div>
                    </div>
                    <div className="right flex items-center gap-4">
                        <div className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-black/[.05]">
                            <IconShare2 stroke={1.5} className="text-primary" />
                            <span>Bagikan</span>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-black/[.05]">
                            <IconHeart stroke={1.5} className="text-primary" />
                            <span>Simpan</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="images flex w-full mobile:overflow-x-auto relative">
            {
                !mobileDevice &&
                <div className="images-container w-full h-[420px] flex rounded-md overflow-hidden mobile:w-full mobile:h-[100vw] mobile:overflow-x-auto mobile:rounded-none">
                    <div className="images w-full h-full grid grid-rows-2 grid-cols-4 gap-2 mobile:w-fit mobile:flex mobile:gap-0">
                        <div className="title-img1 row-span-2 col-span-2 mobile:w-[100vw] mobile:h-[100vw]"></div>
                        <div className="title-img2 mobile:w-[100vw] mobile:h-[100vw]"></div>
                        <div className="title-img3 mobile:w-[100vw] mobile:h-[100vw]"></div>
                        <div className="title-img4 mobile:w-[100vw] mobile:h-[100vw]"></div>
                        <div className="title-img5 mobile:w-[100vw] mobile:h-[100vw]"></div>
                    </div>
                </div>
            }
            {
                mobileDevice &&
                <Swiper spaceBetween={0} slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >
                    <SwiperSlide>
                        <div className="title-img1 mobile:w-[100vw] mobile:h-[70vw]"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="title-img2 mobile:w-[100vw] mobile:h-[70vw]"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="title-img3 mobile:w-[100vw] mobile:h-[70vw]"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="title-img4 mobile:w-[100vw] mobile:h-[70vw]"></div>
                    </SwiperSlide>
                </Swiper>
            }
                <div className="btns hidden mobile:flex mobile:justify-between mobile:absolute mobile:top-0 mobile:left-0 mobile:right-0 mobile:p-4 mobile:z-10">
                    <Link to={"/room"} onClick={goTop} className="back flex justify-center items-center rounded-full bg-white p-2">
                        <IconChevronLeft width={20} height={20} />
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center rounded-full bg-white p-2">
                            <IconShare2 width={20} height={20} />
                        </div>
                        <div className="flex justify-center items-center rounded-full bg-white p-2">
                            <IconHeart width={20} height={20} />
                        </div>
                    </div>
                </div>
                <button className="absolute bottom-4 right-4 flex items-center text-sm gap-2 py-1 px-4 border border-black rounded-lg bg-white mobile:hidden">
                    <IconGridDots stroke={1.5} />
                    <span>Tampilkan semua foto</span>
                </button>
            </div>
        </header>
    )
}

function Content(){
    return (
        <div className="flex gap-20 w-[80vw] mx-auto mt-10 mb-24 mobile:w-[90vw] mobile:flex-col-reverse tablet:w-[90vw]">
            <Keuntungan />
            <Harga />
        </div>
    )
}

function Keuntungan(){
    return (
        <section className="w-[65%] flex flex-col gap-8 mobile:w-full">
            <YangKamuDapatkan />
            <div className="line h-[1px] w-full bg-[#ddd]"></div>
            <SpesifikasiKamar />
            <div className="line h-[1px] w-full bg-[#ddd]"></div>
            <FasilitasKamar />
            <div className="line h-[1px] w-full bg-[#ddd]"></div>
            <FasilitasUmum />
            <div className="line h-[1px] w-full bg-[#ddd]"></div>
            <PeraturanKamar />
            <div className="line h-[1px] w-full bg-[#ddd]"></div>
            <PeraturanUmum />
        </section>
    )
}

function YangKamuDapatkan(){

    const data = [
        {
            title: "Harga Transparan",
            text: "Kami bukan makelar, harga yang tercantum di halaman ini merupakan harga asli yang  ditawarkan oleh pemilik."
        },
        {
            title: "Keaslian Terjamin",
            text: "Kos ini sudah kami kunjungi langsung sehingga kami bisa memastikan keaslian lokasi kos, kondisi kamar dan juga fasilitas yang disediakan oleh pemilik."
        }
    ]

    return (
        <div className="w-full flex flex-col gap-4">
            <div className="title text-xl font-semibold">Yang kamu dapatkan</div>
            <div className="items flex flex-col gap-4">
            {
                data.map((item, index) => {
                    return (
                        <div className="item flex gap-4" key={index}>
                            <div className="img flex">
                                <IconPackage stroke={1.5} width={32} height={32} />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="font-semibold">{item.title}</div>
                                <div className="text-sm text-[#717171]">{item.text}</div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

function SpesifikasiKamar(){

    const data = [
        {
            title: "4 x 4 meter",
            svg: <IconPackage stroke={1.5} width={32} height={32} />
        },
        {
            title: "Tidak termasuk listrik",
            svg: <IconBoltOff stroke={1.5} width={32} height={32} />
        }
    ]

    return (
        <div className="w-full flex flex-col gap-4">
            <div className="title text-xl font-semibold">Spesifikasi tipe kamar</div>
            <div className="items flex flex-col gap-4">
            {
                data.map((item, index) => {
                    return (
                        <div className="item flex items-center gap-4" key={index}>
                            {item.svg}
                            <span>{item.title}</span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

function FasilitasKamar(){
    const data = [
        {
            title: "Dapur",
            svg: <IconToolsKitchen2 stroke={1.5} width={32} height={32} />
        },
        {
            title: "Wifi",
            svg: <IconWifi stroke={1.5} width={32} height={32} />
        },
        {
            title: "Jemuran",
            svg: <IconHanger stroke={1.5} width={32} height={32} />
        },
        {
            title: "Parkir mobil",
            svg: <IconCar stroke={1.5} width={32} height={32} />
        },
        {
            title: "Balkon",
            svg: <IconWindow stroke={1.5} width={32} height={32} />
        }
    ]

    return (
        <div className="w-full flex flex-col gap-4">
            <div className="title text-xl font-semibold">Fasilitas Kamar</div>
            <div className="items grid grid-cols-2 gap-4 mobile:grid-cols-1 tablet:grid-cols-1">
            {
                data.map((item, index) => {
                    return (
                        <div className="item w-1/2 flex items-center gap-4" key={index}>
                            {item.svg}
                            <span>{item.title}</span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

function FasilitasUmum(){
    const data = [
        {
            title: "AC",
            svg: <IconSnowflake stroke={1.5} width={32} height={32} />
        },
        {
            title: "Lemari",
            svg: <IconDoor stroke={1.5} width={32} height={32} />
        },
        {
            title: "Kipas",
            svg: <IconPropeller stroke={1.5} width={32} height={32} />
        },
        {
            title: "Kursi",
            svg: <IconArmchair stroke={1.5} width={32} height={32} />
        },
        {
            title: "Kasur",
            svg: <IconSofa stroke={1.5} width={32} height={32} />
        }
    ]

    return (
        <div className="w-full flex flex-col gap-4">
            <div className="title text-xl font-semibold">Fasilitas Umum</div>
            <div className="items grid grid-cols-2 gap-4 mobile:grid-cols-1 tablet:grid-cols-1">
            {
                data.map((item, index) => {
                    return (
                        <div className="item w-1/2 flex items-center gap-4" key={index}>
                            {item.svg}
                            <span>{item.title}</span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

function PeraturanKamar(){
    const data = ["Tipe ini bisa diisi maks. 1 orang/ kamar", "Tidak untuk pasutri", "Tidak boleh bawa anak"]

    return (
        <div className="w-full flex flex-col gap-4">
            <div className="title text-xl font-semibold">Peraturan tipe kamar ini</div>
            <div className="items flex flex-col gap-4">
            {
                data.map((item, index) => {
                    return (
                        <div className="item flex items-center gap-4" key={index}>
                            <IconToolsKitchen2 stroke={1.5} width={32} height={32} />
                            <span>{item}</span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

function PeraturanUmum(){
    const data = ["Tidak boleh bawa hewan", "Tamu dilarang menginap", "Akses 24 jam"]

    return (
        <div className="w-full flex flex-col gap-4">
            <div className="title text-xl font-semibold">Peraturan tipe kamar ini</div>
            <div className="items flex flex-col gap-4">
            {
                data.map((item, index) => {
                    return (
                        <div className="item flex items-center gap-4" key={index}>
                            <IconToolsKitchen2 stroke={1.5} width={32} height={32} />
                            <span>{item}</span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

function Harga(){

    const [showTanyaPemilik, setShowTanyaPemilik] = useState(false)

    return (
        <>
        <section className="w-[35%] h-fit flex flex-col gap-4 p-6 border rounded-xl bg-white shadow-xl sticky top-24 mobile:w-full mobile:fixed mobile:bottom-0 mobile:top-auto mobile:left-0 mobile:right-0 mobile:flex-row mobile:rounded-none mobile:items-center mobile:border-t">
            <div className="mobile:whitespace-nowrap">
                <span className="font-semibold text-xl">Rp1.200.000</span> / bulan
            </div>
            <button className="rounded-lg w-full flex items-center justify-center text-white py-2 font-semibold bg-primary" onClick={() => setShowTanyaPemilik(true)}>Tanya pemilik</button>
        </section>
        <TanyaPemilik showTanyaPemilik={showTanyaPemilik} setShowTanyaPemilik={setShowTanyaPemilik}  />
        </>
    )
}

function TanyaPemilik({ showTanyaPemilik, setShowTanyaPemilik }){

    const pertanyaanData = ["Saya butuh cepat, apa bisa booking sekarang?", "Apakah kamar masih tersedia?", "Alamat kos dimana?", "Cara menghubungi pemilik?", "Boleh tanya-tanya dulu?", "Bisa untuk pasutri?", "Apakah boleh bawa hewan?"]

    const aktivitasData = ["Pekerja", "Mahasiswa/i"]

    const [pertanyaanValue, setPertanyaanValue] = useState("")
    const [aktivitasValue, setAktivitasValue] = useState("")

    return (
        <>
        <div className={`overlay ${showTanyaPemilik ? "flex" : "hidden"} bg-black/[.5] fixed top-0 left-0 right-0 bottom-0 z-20`} onClick={() => setShowTanyaPemilik(false)}></div>
        <div className={`${showTanyaPemilik ? "flex" : "hidden"} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-xl bg-white p-12 z-30 mobile:w-[90vw] mobile:p-8`}>
            <div className="flex flex-col gap-4">
                <div className="font-semibold text-xl">Pilih pertanyaan</div>
                <div className="flex flex-col gap-4">
                {
                    pertanyaanData.map((item, index) => {
                        return (
                            <div className="flex items-center gap-4 cursor-pointer" key={index} onClick={() => setPertanyaanValue(item)}>
                                <div className="circle flex justify-center items-center p-[2px] rounded-full border border-primary">
                                    <div className={`circle-point rounded-full w-4 h-4 ${pertanyaanValue === item ? "bg-primary" : ""}`}></div>
                                </div>
                                <span>{item}</span>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="font-semibold text-xl">Aktivitas Kamu</div>
                <div className="flex items-center gap-6">
                {
                    aktivitasData.map((item, index) => {
                        return (
                            <div className="flex items-center gap-4 cursor-pointer" key={index} onClick={() => setAktivitasValue(item)}>
                                <div className="circle flex justify-center items-center p-[2px] rounded-full border border-primary">
                                    <div className={`circle-point rounded-full w-4 h-4 ${aktivitasValue === item ? "bg-primary" : ""}`}></div>
                                </div>
                                <span>{item}</span>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <button className="bg-primary text-white rounded-lg flex justify-center w-full py-2 font-semibold">Kirim</button>
        </div>
        </>
    )
}