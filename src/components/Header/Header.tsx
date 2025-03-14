import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, ChevronDownIcon, CursorArrowRaysIcon, FingerPrintIcon, PhoneIcon, PlayCircleIcon, ScissorsIcon, ShoppingBagIcon, SparklesIcon, SquaresPlusIcon, SunIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { LogoBrancaHorizontal } from "../../assets";

const products = [
    {
        name: "Bolsas",
        description: "Estilosas e funcionais para todas as ocasiões.",
        href: "#",
        icon: ShoppingBagIcon
    },
    {
        name: "Vestidos",
        description: "Modelos únicos para eventos especiais e dia a dia.",
        href: "#",
        icon: SparklesIcon
    },
    {
        name: "Roupas sob medida",
        description: "Peças personalizadas para um ajuste perfeito.",
        href: "#",
        icon: ScissorsIcon
    },
    {
        name: "Acessórios",
        description: "Complete seu look com detalhes exclusivos.",
        href: "#",
        icon: SunIcon
    },
];

const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-secondary-dark text-text">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            alt=""
                            src={LogoBrancaHorizontal}
                            className="h-12 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1">
                            <a className="text-sm/6 font-semibold">
                                Produtos
                            </a>
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-primary-light" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-secondary ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-secondary-light"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-secondary-light group-hover:bg-secondary">
                                            <item.icon aria-hidden="true" className="size-6 text-primary group-hover:text-primary-light" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1-dark text-text-dark">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-secondary-light">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold hover:bg-secondary-dark"
                                    >
                                        <item.icon aria-hidden="true" className="size-5 flex-none text-primary" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a href="#" className="text-sm/6 font-semibold">
                        Galeria
                    </a>
                    <a href="#" className="text-sm/6 font-semibold">
                        Contato
                    </a>
                    <a href="#" className="text-sm/6 font-semibold">
                        Sobre
                    </a>
                </PopoverGroup>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden text-text">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-secondary-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5"
                        >
                            <XMarkIcon aria-hidden="true" className="size-6 text-primary-dark" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 hover:bg-secondary-light">
                                        <a className="text-base/7 font-semibold">
                                            Produtos
                                        </a>
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180 text-primary-light" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 hover:bg-secondary-light "
                                            >
                                                <span className="text-text-dark text-sm/7">

                                                    {item.name}
                                                </span>
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-secondary-light"
                                >
                                    Galeria
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-secondary-light"
                                >
                                    Contato
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-secondary-light"
                                >
                                    Sobre
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}

export default Header;