import { PhotoProvider, PhotoView } from "react-photo-view";
import { OverlayRenderProps } from "react-photo-view/dist/types";
import { album1, album2 } from "../../assets";
import { useState, useCallback, useMemo } from "react";

// Função para pré-processamento dos álbuns
const generateMockData = (album: string[], albumName: string) =>
    album.map((image, index) => ({
        title: `Foto ${index + 1} - ${albumName}`,
        source: image,
        credits: "Ivny Coura",
    }));

const Gallery = () => {
    // Usando useMemo para memorizar os dados transformados
    const album1Mock = useMemo(() => generateMockData(album1, "Night Lights"), []);
    const album2Mock = useMemo(() => generateMockData(album2, "Kimono"), []);

    // Estado para contar quantas imagens do Álbum 1 foram carregadas
    const [album1LoadedCount, setAlbum1LoadedCount] = useState(0);
    const totalAlbum1Images = album1Mock.length;

    const handleAlbum1Load = useCallback(() => {
        setAlbum1LoadedCount((prev) => prev + 1);
    }, []);

    // Define loading como verdadeiro enquanto nem todas as imagens do álbum 1 foram carregadas
    const isLoading = album1LoadedCount < totalAlbum1Images;

    const overlayRender = useCallback(
        ({ index }: OverlayRenderProps) => {
            const currentFile = [...album1Mock, ...album2Mock][index];
            return (
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-4 text-center z-50 opacity-80">
                    <div className="text-sm opacity-100">{currentFile?.title}</div>
                    <div className="text-xs opacity-80">Foto por {currentFile?.credits}</div>
                </div>
            );
        },
        [album1Mock, album2Mock]
    );

    return (
        <PhotoProvider maskOpacity={0.95} overlayRender={overlayRender}>
            <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                {isLoading && (
                    <div className="flex justify-center items-center h-96">
                        <div className="w-16 h-16 border-4 border-t-4 border-primary-light rounded-full animate-spin"></div>
                    </div>
                )}
                <div className={isLoading ? "hidden" : ""}>
                    <div className="text-center">
                        <h2 className="text-5xl font-bold tracking-tight text-text">
                            Galeria de Fotos
                        </h2>
                        <p className="mt-4 text-xl text-text-dark">
                            Explore a coleção de fotos e inspire-se com as últimas tendências da moda.
                        </p>
                    </div>

                    {/* Exibição do Álbum 1 (sem lazy loading para garantir que sejam carregadas imediatamente) */}
                    <h3 className="mt-12 text-4xl font-semibold text-accent">Night Lights</h3>
                    <ul role="list" className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {album1Mock.map((file) => (
                            <PhotoView key={file.source} src={file.source}>
                                <li className="relative">
                                    <div className="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-primary-light">
                                        <img
                                            alt={file.title}
                                            src={file.source}
                                            onLoad={handleAlbum1Load}
                                            className="pointer-events-none aspect-10/7 object-cover group-hover:opacity-75"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm font-medium text-text-dark">{file.title}</p>
                                </li>
                            </PhotoView>
                        ))}
                    </ul>

                    {/* Exibição do Álbum 2 (pode continuar com lazy loading) */}
                    <h3 className="mt-12 text-4xl font-semibold text-primary-light">Kimono</h3>
                    <ul role="list" className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {album2Mock.map((file) => (
                            <PhotoView key={file.source} src={file.source}>
                                <li className="relative">
                                    <div className="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-primary-light">
                                        <img
                                            alt={file.title}
                                            src={file.source}
                                            loading="lazy"
                                            className="pointer-events-none aspect-10/7 object-cover group-hover:opacity-75"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm font-medium text-text">{file.title}</p>
                                </li>
                            </PhotoView>
                        ))}
                    </ul>
                </div>
            </main>
        </PhotoProvider>
    );
};

export default Gallery;
