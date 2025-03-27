import { Radio, RadioGroup } from "@headlessui/react";
import { QuestionMarkCircleIcon, ShieldCheckIcon, StarIcon } from "@heroicons/react/16/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useParams } from "react-router-dom";

const products = {
    "bolsa": {
        name: "Bolsa Personalizada",
        href: "#",
        price: "R$120,00 - R$300,00",
        description:
            "Personalize uma bolsa com o tema que você ama. Feita à mão com materiais de alta qualidade, ela combina design moderno com praticidade, oferecendo espaço ideal para seus itens essenciais.",
        imageSrc: "https://down-br.img.susercontent.com/file/sg-11134201-7reoj-m2njakuztjax6d",
        imageAlt: "Bolsa sofisticada em couro sintético com alça ajustável e detalhes metálicos dourados.",
        breadcrumbs: [
            { id: 1, name: "Acessórios", href: "#" },
            { id: 2, name: "Bolsas", href: "#" },
        ],
        sizes: [
            { name: "Pequena", description: "Ideal para carregar apenas o essencial, com design compacto e elegante." },
            { name: "Média", description: "Espaço suficiente para itens do dia a dia sem perder a elegância." },
            { name: "Grande", description: "Perfeita para quem precisa de mais espaço sem abrir mão do estilo." },
        ]
    },
    "acessorio": {
        name: "Acessório Elegante",
        href: "#",
        price: "R$ 180,00",
        description: "Este acessório é a escolha perfeita para complementar qualquer estilo. Com design sofisticado e materiais de alta qualidade, ele une conforto e versatilidade para diversas ocasiões.",
        imageSrc: "https://nextluxury.com/wp-content/uploads/Top-15-Fashion-Accessories-For-Men-1.jpg",
        imageAlt: "Acessório elegante em material refinado.",
        breadcrumbs: [
            { id: 1, name: "Moda & Acessórios", "href": "#" },
            { id: 2, name: "Acessórios", "href": "#" }
        ],
        sizes: [
            { name: "Personalizado", description: "Tamanhos variados a depender do produto" },

        ]
    },
    "outros-produtos": {
        name: "Carteira Minimalista",
        href: "#",
        price: "R$ 150,00",
        description:
            "A Carteira Minimalista é perfeita para quem busca praticidade e estilo. Compacta e funcional, ela oferece espaço para cartões, dinheiro e documentos essenciais, mantendo tudo organizado no seu dia a dia.",
        imageSrc: "https://newsunset.com.br/cdn/shop/files/0-variant-faux-suede-carteira-longa-para-mulheres-couro-fosco-lady-bolsa-porta-cartao-embreagem-carteiras-femininas-alta-qualidade.jpg?v=1690054838",
        imageAlt: "Carteira de couro compacta, preta, com design minimalista e elegante.",
        breadcrumbs: [
            { id: 1, name: "Acessórios", href: "#" },
            { id: 2, name: "Carteiras", href: "#" },
        ],
        sizes: [
            { name: "Única", description: "Compacta, cabe facilmente no bolso sem perder espaço útil." }
        ],
    }

};
const reviews = { average: 4, totalCount: 245 };

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function ProductDetail() {

    const { product } = useParams();
    const productDetails = products[product];

    if (!productDetails) {
        return <p className="text-center text-red-500">Produto não encontrado.</p>;
    }

    const [selectedSize, setSelectedSize] = useState(productDetails.sizes[0]);

    return (
        <div>
            <main>
                <div className="bg-secondary text-text">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        {/* Product details */}
                        <div className="lg:max-w-lg lg:self-end">
                            <nav aria-label="Breadcrumb">
                                <ol role="list" className="flex items-center space-x-2">
                                    {productDetails.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                                        <li key={breadcrumb.id}>
                                            <div className="flex items-center text-sm text-text-dark">
                                                <a href={breadcrumb.href} className="font-medium">
                                                    {breadcrumb.name}
                                                </a>
                                                {breadcrumbIdx !== productDetails.breadcrumbs.length - 1 ? (
                                                    <svg
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                        className="ml-2 size-5 shrink-0"
                                                    >
                                                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                                    </svg>
                                                ) : null}
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </nav>

                            <div className="mt-4">
                                <h1 className="text-3xl font-bold tracking-tightsm:text-4xl">{productDetails.name}</h1>
                            </div>

                            <section aria-labelledby="information-heading" className="mt-4">
                                <h2 id="information-heading" className="sr-only">
                                    productDetails information
                                </h2>

                                <div className="flex items-center">
                                    <p className="text-lg sm:text-xl">{productDetails.price}</p>

                                    <div className="ml-4 border-l border-text-dark pl-4">
                                        <h2 className="sr-only">Reviews</h2>
                                        <div className="flex items-center">
                                            <div>
                                                <div className="flex items-center">
                                                    {[0, 1, 2, 3, 4].map((rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                reviews.average > rating ? "text-yellow-400" : "text-text-dark",
                                                                "size-5 shrink-0",
                                                            )}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                            </div>
                                            <p className="ml-2 text-sm text-text-dark">{reviews.totalCount} reviews</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 space-y-6">
                                    <p className="text-base text-text-dark">{productDetails.description}</p>
                                </div>

                                <div className="mt-6 flex items-center">
                                    <CheckBadgeIcon aria-hidden="true" className="size-5 shrink-0 text-primary" />
                                    <p className="ml-2 text-sm">Por encomenda</p>
                                </div>
                            </section>
                        </div>

                        {/* productDetails image */}
                        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                            <img alt={productDetails.imageAlt} src={productDetails.imageSrc} className="aspect-square w-full rounded-lg object-cover" />
                        </div>

                        {/* Product form */}
                        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                            <section aria-labelledby="options-heading">
                                <h2 id="options-heading" className="sr-only">
                                    Product options
                                </h2>

                                <form>
                                    <div className="sm:flex sm:justify-between">
                                        {/* Size selector */}
                                        <fieldset>
                                            <legend className="block text-sm font-medium mb-2">Tamanho</legend>
                                            <RadioGroup
                                                value={selectedSize}
                                                onChange={setSelectedSize}
                                                className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2"
                                            >
                                                {productDetails.sizes.map((size) => (
                                                    <Radio
                                                        key={size.name}
                                                        as="div"
                                                        value={size}
                                                        aria-label={size.name}
                                                        aria-description={size.description}
                                                        className="group relative block cursor-pointer rounded-lg border border-secondary-light p-4 focus:outline-hidden data-focus:ring-2 data-focus:ring-primary"
                                                    >
                                                        <p className="text-base font-medium">{size.name}</p>
                                                        <p className="mt-1 text-sm text-text-dark">{size.description}</p>
                                                        <div
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-checked:border-primary group-data-focus:border"
                                                        />
                                                    </Radio>
                                                ))}
                                            </RadioGroup>
                                        </fieldset>
                                    </div>
                                    <div className="mt-4">
                                        <a href="#" className="group inline-flex text-sm text-text-dark hover:text-text">
                                            <span>Qual tamanho devo comprar?</span>
                                            <QuestionMarkCircleIcon
                                                aria-hidden="true"
                                                className="ml-2 size-5 shrink-0 text-primary-light group-hover:text-text"
                                            />
                                        </a>
                                    </div>
                                    <div className="mt-10">
                                        <a
                                            type="button"
                                            href={`https://wa.me/+553175679833/?text=Olá, gostaria de fazer uma encomenda de: ${encodeURIComponent(productDetails.name)}`}
                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-text hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary-dark focus:outline-hidden"
                                        >
                                            Compre agora
                                        </a>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <a href="#" className="group inline-flex text-base font-medium">
                                            <ShieldCheckIcon
                                                aria-hidden="true"
                                                className="mr-2 size-6 shrink-0 text-text-dark group-hover:text-text"
                                            />
                                            <span className="text-text-dark hover:text-text">Qualidade garantida</span>
                                        </a>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProductDetail;