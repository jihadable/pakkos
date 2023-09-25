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
    return (
        <header className="w-[80vw] mx-auto mt-32 flex flex-col gap-4 relative">
            <div className="font-semibold text-2xl">Kost Eksklusif Kertajaya Surabaya 289651SM</div>
            <div className="flex items-center justify-between text-sm">
                <div className="left flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <IconUser stroke={1.5} />
                        <span>Kos Putri</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconMapPin stroke={1.5} />
                        <span>Kertajaya, Gubeng, Surabaya</span>
                    </div>
                </div>
                <div className="right flex items-center gap-4">
                    <div className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-black/[.05]">
                        <IconShare2 stroke={1.5} />
                        <span>Bagikan</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-black/[.05]">
                        <IconHeart stroke={1.5} />
                        <span>Simpan</span>
                    </div>
                </div>
            </div>
            <div className="images flex items-stretch gap-2 rounded-xl h-[420px] overflow-hidden">
                <div className="title-img1 w-full h-full"></div>
                <div className=" w-full h-full grid grid-cols-2 gap-2">
                    <div className="title-img2"></div>
                    <div className="title-img3"></div>
                    <div className="title-img4"></div>
                    <div className="title-img5"></div>
                </div>
            </div>
            <button className="absolute bottom-4 right-4 flex items-center text-sm gap-2 py-1 px-4 border border-black rounded-lg bg-white">
                <IconGridDots stroke={1.5} />
                <span>Tampilkan semua foto</span>
            </button>
        </header>
    )
}

function Content(){
    return (
        <div className="flex gap-4 w-[80vw] mx-auto mt-10 mb-24">
            <Keuntungan />
            <Harga />
        </div>
    )
}

function Keuntungan(){
    return (
        <section className="w-3/5 flex flex-col gap-8">
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
            <div className="items grid grid-cols-2 gap-4">
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
            <div className="items grid grid-cols-2 gap-4">
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
        <section className="w-2/5 h-fit flex flex-col gap-4 p-6 border rounded-xl bg-white shadow-xl">
            <div className="">
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

    return (
        <>
        <div className={`overlay ${showTanyaPemilik ? "flex" : "hidden"} bg-black/[.5] fixed top-0 left-0 right-0 bottom-0 z-20`} onClick={() => setShowTanyaPemilik(false)}></div>
        <div className={`${showTanyaPemilik ? "flex" : "hidden"} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-xl bg-white p-12 z-30`}>
            <div className="flex flex-col gap-4">
                <div className="font-semibold text-xl">Pilih pertanyaan</div>
                <div className="flex flex-col gap-4">
                {
                    pertanyaanData.map((item, index) => {
                        return (
                            <label className="flex items-center gap-4 cursor-pointer" key={index}>
                                <input type="radio" />
                                <span>{item}</span>
                            </label>
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
                            <label className="flex items-center gap-4 cursor-pointer" key={index}>
                                <input type="radio" />
                                <span>{item}</span>
                            </label>
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