import logo from "../assets/logo.png"
import play_store from "../assets/play_store.png"
import app_store from "../assets/app_store.png"

export default function Footer(){

    const linksData = [
        {
            title: "PAKKOS",
            links: ["Tentang Kami", "Lowongan Kerja", "Pusat Bantuan"]
        },
        {
            title: "KEBIJAKAN",
            links: ["Kebijakan Privasi", "Kebijakan Privasi"]
        },
        {
            title: "HUBUNGI KAMI",
            links: ["cs@pakkos.com", "+62 8570-6611-112"]
        }
    ]

    return (
        <footer className="bg-[#F7F7F7] px-[5vw] pt-8 border-y border-[#ddd] w-full flex flex-col">
            <div className="top flex justify-between pb-8 mobile:flex-col tablet:flex-col">
                <div className="flex flex-col gap-4">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="text">Dapatkan informasi kos murah dengan mudah melalui aplikasi Pakkos.</div>
                    <div className="download flex gap-4">
                        <div className="flex"><img src={play_store} alt="Play Store" /></div>
                        <div className="flex"><img src={app_store} alt="App Store" /></div>
                    </div>
                </div>
                <div className="links flex gap-36">
                {
                    linksData.map((item, index) => {
                        return (
                            <div className={`item flex flex-col gap-4 text-sm mobile:py-4 tablet:py-4 ${index < 2 ? "mobile:border-b tablet:border-b" : ""}`} key={index}>
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
            </div>
            <div className="bottom py-4 flex gap-2 border-t mobile:flex-col mobile:items-center mobile:gap-4 tablet:flex-col tablet:items-center tablet:gap-4">
                <div>© 2024 Pakkos.com. All rights reserved</div>
            </div>
        </footer>
    )
}