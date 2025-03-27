import { BugAntIcon, ChatBubbleLeftRightIcon,SparklesIcon } from "@heroicons/react/16/solid";
function Contact() {

    return (
        <div>
            <main>
                <div className="isolate bg-secondary text-text px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Entre em Contato</h2>
                        <p className="mt-2 text-lg/8 text-text-dark">Tem alguma dúvida ou precisa de suporte? Nossa equipe está pronta para ajudar.</p>
                    </div>
                    <div className="mx-auto mt-20 max-w-lg space-y-16">
                        <div className="flex gap-x-6">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                                <ChatBubbleLeftRightIcon aria-hidden="true" className="size-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-base/7 font-semibold">Suporte de Vendas</h3>
                                <p className="mt-2 text-base/7 text-text-dark">
                                    Precisa de mais informações sobre nossos produtos? Estamos aqui para esclarecer dúvidas e ajudar você a fazer a melhor escolha.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-6">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                                <BugAntIcon aria-hidden="true" className="size-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-base/7 font-semibold">Reportar Problemas</h3>
                                <p className="mt-2 text-base/7 text-text-dark">
                                    Encontrou um erro ou tem alguma sugestão de melhoria? Avise-nos para que possamos melhorar a sua experiência.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-6">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                                <SparklesIcon aria-hidden="true" className="size-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-base/7 font-semibold">Feedback</h3>
                                <p className="mt-2 text-base/7 text-text-dark">
                                    Sua opinião é essencial para nós! Compartilhe suas ideias e nos ajude a evoluir cada vez mais.
                                </p>
                            </div>
                        </div>

                        <div className="lg:flex-auto max-w-xs mt-24 mx-auto">
                            <a
                                href="https://wa.me/+553175679833/?text=Olá, gostaria de enviar um feedack`" // Substitua pelo número de WhatsApp
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512">
                                        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                                        <path
                                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                    </svg>
                                </span>
                                <span>Conversar no WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact;