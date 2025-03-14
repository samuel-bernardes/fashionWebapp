const perks = [
    {
        name: 'Entrega segura',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg',
        description:
            "Fazemos entregas para todo o Brasil pelo correios e  taxa de frete grátis para pedidos acima do valor mínimo. Receba suas peças favoritas no conforto da sua casa!",
    },
    {
        name: 'Qualidade garantida',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-warranty-light.svg',
        description:
            "Cada peça é feita com materiais selecionados e acabamento impecável. Prezamos pela qualidade para que você tenha roupas duráveis e confortáveis.",
    },
    {
        name: 'Trocas e devoluções fáceis',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-returns-light.svg',
        description:
            "Caso o tamanho não seja o ideal ou você mude de ideia, oferecemos um processo de troca e devolução simples e rápido. Queremos que você fique 100% satisfeito com sua compra!",
    },
    {
        name: 'Moda sustentável',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-planet-light.svg',
        description:
            "Acreditamos em uma moda mais consciente. Sempre que possível, utilizamos tecidos sustentáveis e buscamos reduzir o impacto ambiental de nossa produção.",
    },
]


function Products() {
    return (
        <div>
            <main>
                <div className="bg-secondary-light text-text">
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="sm:flex sm:items-baseline sm:justify-between">
                            <h2 className="text-2xl font-bold tracking-tight">Produtos por Categoria</h2>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                            <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square">
                                <img
                                    alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                                    src="https://i.ebayimg.com/images/g/gb8AAOSw3TdjwPvp/s-l1200.jpg"
                                    className="absolute size-full object-cover group-hover:opacity-75"
                                />
                                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary-dark opacity-50" />
                                <div className="absolute inset-0 flex items-end p-6">
                                    <div>
                                        <h3 className="font-semibold">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Bolsas
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-text-dark">
                                            Faça sua encomenda
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto">
                                <img
                                    alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                                    src="https://cdn.dooca.store/109324/posts/chewbvs0lbe13wdqkk6tliulgow5gfpkddrg.jpg?webp=0"
                                    className="absolute size-full object-cover group-hover:opacity-75"
                                />
                                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary-dark opacity-50" />
                                <div className="absolute inset-0 flex items-end p-6">
                                    <div>
                                        <h3 className="font-semibold">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Accessórios
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-text-dark">
                                            Faça sua encomenda
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto">
                                <img
                                    alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                                    src="https://www.ukmodels.co.uk/wp-content/uploads/2020/08/shutterstock_1458127937-scaled.jpg"
                                    className="absolute size-full object-cover group-hover:opacity-75"
                                />
                                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary-dark opacity-50" />
                                <div className="absolute inset-0 flex items-end p-6">
                                    <div>
                                        <h3 className="font-semibold">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Outros produtos
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-text-dark">
                                            Faça sua encomenda
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50">
                    <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {perks.map((perk) => (
                                <div key={perk.name} className="sm:flex">
                                    <div className="sm:shrink-0">
                                        <div className="flow-root">
                                            <img alt="" src={perk.imageSrc} className="h-24 w-28" />
                                        </div>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <h3 className="text-sm font-medium text-gray-900">{perk.name}</h3>
                                        <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Products;