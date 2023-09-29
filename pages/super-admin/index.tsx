'use client';

import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../public/logo.svg';
const stats = [
 { name: 'Total Contractors', value: '18' },
 { name: 'Insurances Companies', value: '10' },
 { name: 'Certificate Issued', value: '20' },
];
const tabs = [
 { name: 'Contractors', href: '#', current: true },
 { name: 'Insurance Companies', href: '#', current: false },
 { name: 'Certificates Issued', href: '#', current: false },
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

const SuperAdmin = () => {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 return (
  <div>
   <header className="sticky top-0 z-50 flex h-16 border-b border-gray-900/10 bg-white">
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
     <div className="flex flex-1 items-center gap-x-6">
      <button type="button" className="-m-3 p-3 md:hidden" onClick={() => setMobileMenuOpen(true)}>
       <span className="sr-only">Open main menu</span>
       <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
      </button>
      <Image className="h-8 w-auto" height={32} layout="fixed" src={logoImage} alt="Your Company" />
      <p className="text-blue-700 text-2xl font-bold">
       Go<span className="text-2xl text-gray-700 font-semibold">Tasker</span>
      </p>
      <span className="px-1 py-1 border rounded-md text-xs font">ADMIN</span>
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

   <main className=" mx-auto max-w-7xl space-y-6">
    <div className="relative isolate overflow-hidden">
     {/* Secondary navigation */}

     {/* Stats */}
     <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
      <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-2 xl:px-0">
       {stats.map((stat, statIdx) => (
        <div
         key={stat.name}
         className={classNames(
          statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
          'flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8',
         )}
        >
         <dt className="text-sm font-medium leading-6 text-gray-500">{stat.name}</dt>

         <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
          {stat.value}
         </dd>
        </div>
       ))}
      </dl>
     </div>

     <div
      className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
      aria-hidden="true"
     >
      <div
       className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
       style={{
        clipPath:
         'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
       }}
      />
     </div>
    </div>

    <div className="">
     <div className="block">
      <nav className="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
       {tabs.map((tab, tabIdx) => (
        <a
         key={tab.name}
         href={tab.href}
         aria-current={tab.current ? 'page' : undefined}
         className={classNames(
          tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
          tabIdx === 0 ? 'rounded-l-lg' : '',
          tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
          'group relative min-w-0 flex-1 overflow-hidden bg-gray-50 py-4 px-6 text-center text-sm font-medium hover:bg-gray-100 focus:z-10',
         )}
        >
         <span>{tab.name}</span>
         <span
          aria-hidden="true"
          className={classNames(
           tab.current ? 'bg-rose-500' : 'bg-transparent',
           'absolute inset-x-0 bottom-0 h-0.5',
          )}
         />
        </a>
       ))}
      </nav>
     </div>
    </div>

    <div className="space-y-16">
     {/* Recent activity table */}

     <div className="mt-6 overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-7xl">
       <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
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
            Insurance
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
           </tr>
          ))}
         </tbody>
        </table>
       </div>
      </div>
     </div>
    </div>
   </main>
  </div>
 );
};
export default SuperAdmin;
