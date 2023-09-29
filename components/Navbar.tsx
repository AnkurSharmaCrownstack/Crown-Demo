import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const navigation = [
 { name: 'Dashboard', href: '#', current: true },
 { name: 'Team', href: '#', current: false },
 { name: 'Projects', href: '#', current: false },
 { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
 return classes.filter(Boolean).join(' ');
}

export default function Example() {
 const router = useRouter();
 return (
  <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
   {({ open }) => (
    <>
     <div className="mx-auto max-w-7xl">
      <div className="relative flex h-16 items-center justify-between">
       <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
         <img className="h-8 w-auto" src="logo.svg" alt="Your Company" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
         <div className="flex space-x-4">
          {navigation.map((item) => (
           <a
            key={item.name}
            href={item.href}
            className={classNames(
             item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
             'rounded-md px-3 py-2 text-sm font-medium',
            )}
            aria-current={item.current ? 'page' : undefined}
           >
            {item.name}
           </a>
          ))}
         </div>
        </div>
       </div>
       <div className="right-0 flex items-center space-x-4">
        <div className="flex-shrink-0">
         <button
          onClick={() => router.push('/login')}
          type="button"
          className="relative inline-flex items-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-200 shadow-sm border border-gray-200 hover:border-white hoveer:text-white"
         >
          Log in
         </button>
        </div>

        <div className="flex-shrink-0">
         <button
          type="button"
          className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
         >
          Sign up
         </button>
        </div>

        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3">
         <div>
          <Menu.Button className="relative flex rounded-full  text-sm focus:outline-none focus:ring-0 ">
           <UserCircleIcon className="h-7 w-7 border-none ring-0 outline-none focus:outline-none focus:ring-0 focus:border-none active:border-none active:ring-0 active:outline-none text-white" />
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
             <a
              href="#"
              className={classNames(
               active ? 'bg-gray-100' : '',
               'block px-4 py-2 text-sm text-gray-700',
              )}
             >
              Account
             </a>
            )}
           </Menu.Item>
           <Menu.Item>
            {({ active }) => (
             <a
              href="#"
              className={classNames(
               active ? 'bg-gray-100' : '',
               'block px-4 py-2 text-sm text-gray-700',
              )}
             >
              Settings
             </a>
            )}
           </Menu.Item>
           <Menu.Item>
            {({ active }) => (
             <a
              href="#"
              className={classNames(
               active ? 'bg-gray-100' : '',
               'block px-4 py-2 text-sm text-gray-700',
              )}
             >
              Sign out
             </a>
            )}
           </Menu.Item>
          </Menu.Items>
         </Transition>
        </Menu>
       </div>
      </div>
     </div>
    </>
   )}
  </Disclosure>
 );
}
