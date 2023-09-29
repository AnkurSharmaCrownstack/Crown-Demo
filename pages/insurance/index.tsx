'use client';
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

import {
 ArrowTrendingUpIcon,
 Bars3Icon,
 UserCircleIcon,
 UserGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../public/logo.svg';
const clients = [
 {
  id: 1,
  name: 'Insurance 1',
  imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
  lastInvoice: {
   amount: '$2,000.00',
  },
 },
 {
  id: 2,
  name: 'Insurance 2',
  imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
  lastInvoice: {
   amount: '$14,000.00',
  },
 },
 {
  id: 3,
  name: 'Insurance 3',
  imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
  lastInvoice: {
   amount: '$7,600.00',
  },
 },

 {
  id: 1,
  name: 'Insurance 4',
  imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
  lastInvoice: {
   amount: '$2,000.00',
  },
 },
 {
  id: 2,
  name: 'Insurance 5',
  imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
  lastInvoice: {
   amount: '$14,000.00',
  },
 },
 {
  id: 3,
  name: 'Insurance 6',
  imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
  lastInvoice: {
   amount: '$7,600.00',
  },
 },
];

const navigation = [
 { name: 'Requests', icon: UserGroupIcon, current: false },
 { name: 'Offerings', icon: ArrowTrendingUpIcon, current: false },
];

const people = [
 {
  name: 'Glass Contractor',
  title: 'Sam Willson',
  email: 'lindsay.walton@example.com',
  role: 'Glass Insurance 1',
 },
 {
  name: 'Glass Contractor',
  title: 'Sam Willson',
  email: 'lindsay.walton@example.com',
  role: 'Glass Insurance 1',
 },
 {
  name: 'Glass Contractor',
  title: 'Sam Willson',
  email: 'lindsay.walton@example.com',
  role: 'Glass Insurance 1',
 },
 {
  name: 'Glass Contractor',
  title: 'Sam Willson',
  email: 'lindsay.walton@example.com',
  role: 'Glass Insurance 1',
 },
 {
  name: 'Glass Contractor',
  title: 'Sam Willson',
  email: 'lindsay.walton@example.com',
  role: 'Glass Insurance 1',
 },
 {
  name: 'Glass Contractor',
  title: 'Sam Willson',
  email: 'lindsay.walton@example.com',
  role: 'Glass Insurance 1',
 },
 {
  name: 'Glass Contractor',
  title: 'Sam Willson',
  email: 'lindsay.walton@example.com',
  role: 'Glass Insurance 1',
 },
 {
  name: 'Glass Contractor',
  title: 'Sam Willson',
  email: 'lindsay.walton@example.com',
  role: 'Glass Insurance 1',
 },
 {
  name: 'Glass Contractor',
  title: 'Sam Willson',
  email: 'lindsay.walton@example.com',
  role: 'Glass Insurance 1',
 },
 // More people...
];
function classNames(...classes) {
 return classes.filter(Boolean).join(' ');
}

const Insurance = () => {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 const [sidebarState, setSidebarState] = useState({
  name: 'Requests',
  icon: UserGroupIcon,
  current: true,
 });
 return (
  <div className="min-h-full">
   {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
   <header className="sticky top-0 z-50 flex h-16 border-b border-gray-900/10 bg-white">
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
     <div className="flex flex-1 items-center gap-x-6">
      <button type="button" className="-m-3 p-3 md:hidden" onClick={() => setMobileMenuOpen(true)}>
       <span className="sr-only">Open main menu</span>
       <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
      </button>
      <Image className="h-8 w-auto" height={32} layout="fixed" src={logoImage} alt="Your Company" />
      <p className="text-blue-700 text-2xl font-bold">
       Interewest United<span className="text-2xl text-gray-700 font-semibold"> Insurance</span>
      </p>
     </div>

     <div className="flex flex-1 items-center justify-end gap-x-4">
      <Menu as="div" className="relative">
       <div>
        <Menu.Button className="relative flex rounded-full  text-sm focus:outline-none focus:ring-0 ">
         <UserCircleIcon className="h-7 w-7 border-none ring-0 outline-none focus:outline-none focus:ring-0 focus:border-none active:border-none active:ring-0 active:outline-none text-black" />
        </Menu.Button>
       </div>
       <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
       >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
         <Menu.Item>
          {({ active }) => (
           <Link href="#">
            <div
             className={classNames(
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
             )}
            >
             Account
            </div>
           </Link>
          )}
         </Menu.Item>
         <Menu.Item>
          {({ active }) => (
           <Link href="#">
            <div
             className={classNames(
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
             )}
            >
             Settings
            </div>
           </Link>
          )}
         </Menu.Item>
         <Menu.Item>
          {({ active }) => (
           <Link href="/">
            <div
             className={classNames(
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
             )}
            >
             Sign out
            </div>
           </Link>
          )}
         </Menu.Item>
        </Menu.Items>
       </Transition>
      </Menu>
     </div>
    </div>
   </header>

   <main>
    <div className="">
     <div className="mx-auto md:grid md:grid-cols-12 md:gap-8">
      {/* Sidebar navigation */}
      <div className="col-span-3 block xl:col-span-2 px-6 md-px-8 py-8">
       <nav aria-label="Sidebar" className="top-4">
        <div className="space-y-1 pb-8">
         {navigation.map((item) => (
          <button
           key={item.name}
           onClick={() => setSidebarState({ ...item, current: true })}
           className={classNames(
            sidebarState.name === item.name
             ? 'bg-gray-200 text-gray-900'
             : 'text-gray-700 hover:bg-gray-100',
            'group w-full flex items-center rounded-md px-3 py-2 text-sm font-medium',
           )}
           // aria-current={sidebarState.name === item.name ? 'page' : undefined}
          >
           <item.icon
            className={classNames(
             sidebarState.name === item.name
              ? 'text-gray-500'
              : 'text-gray-400 group-hover:text-gray-500',
             '-ml-1 mr-3 h-6 w-6 flex-shrink-0',
            )}
            //  aria-hidden="true"
           />
           <span className="truncate">{item.name}</span>
          </button>
         ))}
        </div>
       </nav>
      </div>

      {/* Container Layout */}
      <div className="py-8 lg:col-span-9 xl:col-span-10 space-y-6 px-8">
       {sidebarState.name !== 'Requests' ? (
        <div className="">
         <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex items-center my-4 justify-between">
           <h2 className="text-base font-bold leading-7 text-gray-700">Insurance Plan Offerings</h2>
          </div>
          <ul
           role="list"
           className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
          >
           {clients.map((client) => (
            <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
             <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
              <Image
               className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
               height={48}
               width={48}
               layout="fixed"
               src={client.imageUrl}
               alt={client.name}
              />
              <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
             </div>
             <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 py-3">
               <dt className="text-gray-500">Amount</dt>
               <dd className="flex items-start gap-x-2">
                <div className="font-medium text-gray-900">{client.lastInvoice.amount}</div>
               </dd>
              </div>
             </dl>
            </li>
           ))}
          </ul>
         </div>
        </div>
       ) : (
        <div>
         <div className="flex items-center my-4 justify-between">
          <h2 className="text-base font-bold leading-7 text-gray-700">Insurance Request</h2>
         </div>
         <table className="min-w-full divide-y divide-gray-300">
          <thead>
           <tr>
            <th
             scope="col"
             className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
             Contractor
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
             Person Name
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
             Email
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
             Insurance Type
            </th>
            <th
             scope="col"
             className=" px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
             Action
            </th>
           </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
           {people.map((person) => (
            <tr key={person.email}>
             <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
              {person.name}
             </td>
             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
             <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-0 space-x-4">
              <button className="text-indigo-600 hover:text-indigo-900">
               Accept<span className="sr-only">, {person.name}</span>
              </button>

              <button className="text-red-600 hover:text-red-700">
               Cancel<span className="sr-only">, {person.name}</span>
              </button>
             </td>
            </tr>
           ))}
          </tbody>
         </table>
        </div>
       )}
      </div>
     </div>
    </div>
   </main>
  </div>
 );
};

export default Insurance;
