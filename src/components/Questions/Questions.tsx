import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusSmallIcon } from "@heroicons/react/20/solid";
import { PlusSmallIcon } from "@heroicons/react/20/solid";

const faqs = [
    {
        question: "Quais são os materiais utilizados nas peças?",
        answer:
            "Utilizamos uma combinação de tecidos de alta qualidade, como algodão, linho e seda, para garantir conforto e durabilidade. Cada material é cuidadosamente selecionado para criar roupas que sejam tanto elegantes quanto funcionais.",
    },
    {
        question: "Como posso saber meu tamanho?",
        answer:
            "Para garantir que você escolha o tamanho perfeito, temos uma tabela de medidas disponível em nosso site. Caso ainda tenha dúvidas, nossa equipe de atendimento está pronta para ajudar você a encontrar o ajuste ideal.",
    },
    {
        question: "Posso personalizar as peças?",
        answer:
            "Sim! Oferecemos a opção de personalização em algumas de nossas peças, permitindo que você adicione toques únicos que refletem seu estilo pessoal. Entre em contato conosco para mais informações sobre como fazer seu pedido personalizado.",
    },
    {
        question: "Quais são as opções de pagamento?",
        answer:
            "Aceitamos diversos métodos de pagamento, incluindo cartão de crédito, débito e pix. Garantimos que o processo de compra seja simples e seguro.",
    },
    {
        question: "A loja faz entregas para todo o Brasil?",
        answer:
            "Sim, fazemos entregas para todo o Brasil! Trabalhamos com serviços de entrega rápidos e seguros, garantindo que sua compra chegue até você sem problemas.",
    },
    {
        question: "Como posso cuidar das minhas roupas?",
        answer:
            "Cada peça acompanha uma etiqueta com instruções específicas de cuidado. Em geral, recomendamos lavar as roupas com cuidado, evitando o uso de produtos agressivos e preferindo lavagem à mão ou em máquina com ciclo delicado.",
    },
]


function Questions() {
    return (
        <div className="bg-secondary/80">
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 sm:pb-32 lg:px-8 lg:pb-40">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">Perguntas Frequentes</h2>
                    <dl className="mt-16 divide-y divide-text/10">
                        {faqs.map((faq) => (
                            <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-text">
                                        <span className="text-base/7 font-semibold">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                                            <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <p className="text-base/7 text-text-dark">{faq.answer}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Questions;