import fb from "../assets/fb.png"
import twt from "../assets/twt.png"
import ig from "../assets/ig.png"

export default function Footer(){

    const linksData = [
        {
            title: "Dukungan",
            links: ["Pusat Bantuan", "AirCover", "Dukungan disabilitas", "Opsi pembatalan", "Laporkan masalah lingkungan"]
        },
        {
            title: "Menjadi Tuan Rumah",
            links: ["Jadikan tempat Anda Airbnb", "AirCover untuk Tuan Rumah", "Sumber informasi menerima tamu", "Forum komunitas", "Menerima tamu dengan bijak"]
        },
        {
            title: "Airbnb",
            links: ["Ruang Berita", "Fitur baru", "Karier", "Investor", "Penginapan darurat Airbnb.org"]
        }
    ]

    const sosmedData = [fb, twt, ig]

    return (
        <footer className="bg-[#F7F7F7] px-[5vw] pt-8 border-y border-[#ddd] w-full flex flex-col">
            <div className="top flex justify-between pb-8">
            {
                linksData.map((item, index) => {
                    return (
                        <div className="item flex flex-col gap-4 text-sm" key={index}>
                            <div className="font-semibold">{item.title}</div>
                            <div className="links flex flex-col gap-4">
                            {
                                item.links.map((link, index) => {
                                    return <a href="" className="link" key={index}>{link}</a>
                                })
                            }
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className="bottom py-4 flex gap-2 border-t">
                <span>© 2023 Airbnb, Inc.</span> • <a href="">Privasi</a> • <a href="">Ketentuan</a> • <a href="">Peta Situs</a> <span className="flex items-center gap-2">
                {
                    sosmedData.map((item, index) => {
                        return (
                            <a href="" className="rounded-sm w-5 h-5 flex justify-center items-center bg-[#222]" key={index}>
                                <img src={item} alt="Sosmed" />
                            </a>
                        )
                    })
                }
                </span>
            </div>
        </footer>
    )
}