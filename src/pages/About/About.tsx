import { EmillyPerfil, EmillySobre, Luna } from "../../assets";

function About() {

    return (
        <div className="pb-16">
            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-primary/20 pt-16">
                    <div
                        aria-hidden="true"
                        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-secondary shadow-xl shadow-primary/10 ring-1 ring-secondary-light sm:-mr-80 lg:-mr-96"
                    />
                    <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-text sm:text-7xl lg:col-span-2 xl:col-auto">
                                Criamos moda com autenticidade e elegância
                            </h1>
                            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                <p className="text-pretty text-lg font-medium text-text-dark sm:text-xl/8">
                                    Cada peça que produzimos carrega a essência do design autoral, combinando estilo, sofisticação e exclusividade para mulheres que valorizam a autenticidade.
                                </p>
                            </div>
                            <img
                                alt=""
                                src="https://a.storyblok.com/f/165154/1280x720/6cdee78d65/01_gen-z-fashion-trends-2024.jpg/m/"
                                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                            />
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-secondary-dark sm:h-32" />
                </div>

                {/* Logo cloud */}
                <div className="mx-auto mt-32 max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-secondary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-text sm:text-4xl">
                            Nossos Clientes Amam o Que Fazemos
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg/8 text-text-dark">
                            Criamos peças que não são apenas roupas, mas expressões de identidade e estilo. Nossa dedicação à qualidade e ao design exclusivo tem conquistado clientes que buscam autenticidade e sofisticação.
                        </p>
                        <div aria-hidden="true" className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl">
                            <div
                                style={{
                                    clipPath:
                                        'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                                }}
                                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-primary-light to-primary opacity-25"
                            />
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="mt-32 overflow-hidden sm:mt-40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-12">
                            {/* Text content - left side */}
                            <div className="lg:col-span-1 lg:pr-8">
                                <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl md:text-5xl">
                                    Sobre mim
                                </h2>
                                <div className="mt-6 space-y-6 text-base/7 text-text-dark">
                                    <p>
                                        Olá, muito prazer meu nome é
                                        <span className="font-semibold text-accent"> Emilly Ferreira </span>
                                        tenho 21 anos e amo música, moda e pets! 💜
                                    </p>
                                    <p>
                                        Minha paixão pelo mundo da arte e do processo criativo vem de berço.
                                        Desde pequena sempre fui muito ligada na cultura fashion e nas novidades da moda.
                                    </p>
                                    <p>
                                        O meu amor pela música me aproximou dos croquis e dos tecidos,
                                        em 2022 entrei para o curso de Design de Moda na UFMG
                                        e comecei a criar peças que carregam o meu sonho de ser uma grande artista.
                                    </p>
                                </div>

                                <div className="lg:col-span-1 mt-8 hidden lg:block">
                                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                        {/* Main profile image */}

                                        {/* Secondary images */}
                                        <div className="col-span-1">
                                            <img
                                                alt="Emilly"
                                                src={EmillySobre}
                                                className="aspect-[3/4] w-full rounded-2xl bg-secondary-light object-cover shadow-lg"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <img
                                                alt="Luna"
                                                src={Luna}
                                                className="aspect-[3/4] w-full rounded-2xl bg-secondary-light object-cover shadow-lg"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <iframe
                                                src="https://open.spotify.com/embed/playlist/5760xa2fpZQqOgzNdQR8Cl?utm_source=generator&theme=0"
                                                width="100%"
                                                height="352"
                                                frameBorder="0"
                                                className="aspect-[3/4] w-full rounded-2xl bg-secondary-light object-cover shadow-lg"
                                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image gallery - right side */}
                            <div className="lg:col-span-1">
                                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                    {/* Main profile image */}
                                    <div className="col-span-1 lg:col-span-2">
                                        <img
                                            alt="Emilly Ferreira"
                                            src={EmillyPerfil}
                                            className="aspect-[3/4] w-full rounded-2xl bg-secondary-light object-cover shadow-lg"
                                        />
                                    </div>

                                    {/* Secondary images */}
                                    <div className="col-span-1 block lg:hidden">
                                        <img
                                            alt="Emilly"
                                            src={EmillySobre}
                                            className="aspect-[3/4] w-full rounded-2xl bg-secondary-light object-cover shadow-lg"
                                        />
                                    </div>
                                    <div className="col-span-2 block lg:hidden">
                                        <iframe
                                            src="https://open.spotify.com/embed/playlist/5760xa2fpZQqOgzNdQR8Cl?utm_source=generator&theme=0"
                                            width="100%"
                                            height="352px"
                                            frameBorder="0"
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;