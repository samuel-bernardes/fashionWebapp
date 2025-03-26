import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { LogoBrancaHorizontal } from "../../assets";

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-secondary-dark text-text">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
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

                    <a href="/produtos" className="text-sm/6 font-semibold">
                        Produtos
                    </a>

                    <a href="/galeria" className="text-sm/6 font-semibold">
                        Galeria
                    </a>
                    <a href="#" className="text-sm/6 font-semibold">
                        Contato
                    </a>
                    <a href="/sobre" className="text-sm/6 font-semibold">
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

                                <a
                                    href="/produtos"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-secondary-light"
                                >
                                    Produtos
                                </a>

                                <a
                                    href="/galeria"
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
                                    href="/sobre"
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