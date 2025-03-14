const files = [
    {
        title: "IMG_4985.HEIC",
        size: "3.9 MB",
        source:
            "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
    {
        title: "IMG_4986.HEIC",
        size: "4.2 MB",
        source:
            "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
    {
        title: "IMG_4987.HEIC",
        size: "3.5 MB",
        source:
            "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
    {
        title: "IMG_4988.HEIC",
        size: "4.0 MB",
        source:
            "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
    // Adicione mais arquivos conforme necessário...
];

function Gallery() {
    return (
        <div >
            <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                {/* Cabeçalho da Galeria */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">Galeria de Fotos</h2>
                    <p className="mt-4 text-lg text-text-dark">
                        Explore nossa coleção de fotos e inspire-se com as últimas tendências da moda.
                    </p>
                </div>

                {/* Grid de Imagens */}
                <ul role="list" className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {files.map((file) => (
                        <li key={file.source} className="relative">
                            <div className="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-primary-light ">
                                <img
                                    alt=""
                                    src={file.source}
                                    className="pointer-events-none aspect-10/7 object-cover group-hover:opacity-75"
                                />
                                <button type="button" className="absolute inset-0 focus:outline-hidden">
                                    <span className="sr-only">View details for {file.title}</span>
                                </button>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-text">{file.title}</p>
                            <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default Gallery;