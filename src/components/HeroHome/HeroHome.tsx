import { useNavigate } from "react-router-dom";

function HeroHome() {

    const navigate = useNavigate();

    return (
        <div className="relative isolate">
            <svg
                aria-hidden="true"
                className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-secondary-light [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            >
                <defs>
                    <pattern
                        x="50%"
                        y={-1}
                        id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-secondary-dark">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
            </svg>
            <div
                aria-hidden="true"
                className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                    }}
                    className="aspect-801/1036 w-[50.0625rem] bg-gradient-to-tr from-primary-light to-primary opacity-30"
                />
            </div>
            <div className="overflow-hidden text-text">
                <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
                    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                        <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                            <h1 className="text-5xl font-semibold tracking-tight text-pretty text-text sm:text-7xl">
                                Transforme seu estilo, inspire confiança
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-text-dark sm:max-w-md sm:text-xl/8 lg:max-w-none">
                                Descubra peças exclusivas que refletem sua personalidade e estilo único.
                                Cada design é pensado para fazer você se sentir elegante e confortável, do jeito que você merece.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    onClick={() => navigate("/produtos")}
                                    className="cursor-pointer rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-text shadow-xs hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Conheça nossos produtos
                                </a>
                                <a onClick={() => navigate("/galeria")} className="text-sm/6 font-semibold cursor-pointer">
                                    Veja mais looks <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 bg-secondary-light/5">
                            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                <div className="relative">
                                    <img
                                        alt=""
                                        src="https://www.seft.world/wp-content/uploads/2025/01/AD_4nXfrY1pNpfmndkene8rP5gHbl4283zPkpKvo60dF9cRoXGB-egEd4ZOUVk1-VpqUR4cUlAcJ3TIEgx-VhGblBuqnzdHsaIa9jl5ULS62Uku2p08_JZtzaoPnlLuvmDU5NCeQAExvPQ.jpg"
                                        className="aspect-2/3 w-full rounded-xl object-cover shadow-lg"
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-secondary-light/10 ring-inset" />
                                </div>
                            </div>
                            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                <div className="relative">
                                    <img
                                        alt=""
                                        src="https://cdn.shopify.com/s/files/1/0697/3820/1378/files/your-paragraph-text-1000-x-1500-px-16_1000x.jpg?v=1711528587"
                                        className="aspect-2/3 w-full rounded-xl object-cover shadow-lg"
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-secondary-light/10 ring-inset" />
                                </div>
                                <div className="relative">
                                    <img
                                        alt=""
                                        src="https://www.smartpatternmaking.com/cdn/shop/articles/Fashion-Sketch.jpg?v=1696029015"
                                        className="aspect-2/3 w-full rounded-xl object-cover shadow-lg"
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-secondary-light/10 ring-inset" />
                                </div>
                            </div>
                            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                <div className="relative">
                                    <img
                                        alt=""
                                        src="https://media.istockphoto.com/id/522318253/photo/fashion-designer-working-with-material-and-hand-drawn-illustration.jpg?s=612x612&w=0&k=20&c=9BIeJ3LJmv-HSGqbsxICsp_iWeaKgT50LzcvbL4Lwoo="
                                        className="aspect-2/3 w-full rounded-xl object-cover shadow-lg"
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-secondary-light/10 ring-inset" />
                                </div>
                                <div className="relative">
                                    <img
                                        alt=""
                                        src="https://pxl-southwalesacuk.terminalfour.net/fit-in/549x549/filters:format(webp)/prod01/channel_2/media/university-of-south-wales/site-assets/images/03-courses/fashion/ba-fashion-design-1.jpg"
                                        className="aspect-2/3 w-full rounded-xl object-cover shadow-lg"
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-secondary-light/10 ring-inset" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHome;