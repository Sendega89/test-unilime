import React, {useState} from 'react';
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,

    XMarkIcon,
} from '@heroicons/react/24/outline'

import {NavLink} from "react-router-dom";


const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    type NavLinkItemType = {
        label: string;
        link: string;

    }
    const menuLinks:NavLinkItemType[] = [
		{label: "Home", link: "/"},
		{label: "Overview", link: "/overview"},
		{label: "Users", link: "/users"},
		{label: "Settings", link: "/settings"},
	]
    const NavLinkItem = ({label, link}: NavLinkItemType) => (
        <NavLink to={link} className="text-sm/6 font-semibold">
            {label}
        </NavLink>
    )
    const BurgerNavLinkItem = ({label, link}: NavLinkItemType) => (

            <div className="space-y-2 py-6">
            <NavLink to={link} onClick={handleCloseBurger}
                     className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
            >
                {label}
            </NavLink>

        </div>

    )
    const handleCloseBurger = () => {
        setMobileMenuOpen(false)
    }
    return (
        <header className="dark:bg-gray-800 rounded-md shadow-md">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8 ">
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6"/>
                    </button>
                </div>
                <PopoverGroup className="hidden h-12 lg:flex lg:gap-x-12 flex items-center justify-center ">
					{menuLinks.map((link) => (
						<NavLinkItem link={link.link} key={link.link} label={link.label} />
					))}
                </PopoverGroup>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                        </a>
                        <button
                            type="button"
                            onClick={handleCloseBurger}
                            className="-m-2.5 rounded-md p-2.5"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            {menuLinks.map((link) => (
                                <BurgerNavLinkItem link={link.link} key={link.label} label={link.label} />
                            ))}

                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>)
};

export default Header;
