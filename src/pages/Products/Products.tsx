import { useNavigate } from "react-router-dom";

function Products() {
    const navigate = useNavigate();

    // Função para navegar para a página de detalhes do produto
    const handleProductClick = (productId: string) => {
        navigate(`/produtos/${productId}`);
    };

    return (
        <div>
            <main>
                <div className="bg-secondary text-text">
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="sm:flex sm:items-baseline sm:justify-between">
                            <h2 className="text-2xl font-bold tracking-tight">Produtos por Categoria</h2>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                            {/* Bolsas */}
                            <div
                                className="group relative aspect-2/1 overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square"
                                onClick={() => handleProductClick("bolsa")} // Navega para detalhes de "bolsas"
                            >
                                <img
                                    alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                                    src="https://i.ebayimg.com/images/g/gb8AAOSw3TdjwPvp/s-l1200.jpg"
                                    className="absolute size-full object-cover group-hover:opacity-75"
                                />
                                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary-dark opacity-50" />
                                <div className="absolute inset-0 flex items-end p-6">
                                    <div>
                                        <h3 className="font-semibold">
                                            <span className="absolute inset-0" />
                                            Bolsas
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-text-dark">
                                            Faça sua encomenda
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Accessórios */}
                            <div
                                className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto"
                                onClick={() => handleProductClick("acessorio")} // Navega para detalhes de "acessorios"
                            >
                                <img
                                    alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                                    src="https://cdn.dooca.store/109324/posts/chewbvs0lbe13wdqkk6tliulgow5gfpkddrg.jpg?webp=0"
                                    className="absolute size-full object-cover group-hover:opacity-75"
                                />
                                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary-dark opacity-50" />
                                <div className="absolute inset-0 flex items-end p-6">
                                    <div>
                                        <h3 className="font-semibold">
                                            <span className="absolute inset-0" />
                                            Accessórios
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-text-dark">
                                            Faça sua encomenda
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Outros produtos */}
                            <div
                                className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto"
                                onClick={() => handleProductClick("outros-produtos")} // Navega para detalhes de "outros-produtos"
                            >
                                <img
                                    alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                                    src="https://www.ukmodels.co.uk/wp-content/uploads/2020/08/shutterstock_1458127937-scaled.jpg"
                                    className="absolute size-full object-cover group-hover:opacity-75"
                                />
                                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary-dark opacity-50" />
                                <div className="absolute inset-0 flex items-end p-6">
                                    <div>
                                        <h3 className="font-semibold">
                                            <span className="absolute inset-0" />
                                            Outros produtos
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
            </main>
        </div>
    );
}

export default Products;