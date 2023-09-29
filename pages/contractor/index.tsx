import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ArrowTrendingUpIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, DocumentTextIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../public/logo.svg';
import glassImage from '../../public/glassImage.png';

const navigation = [
 { name: 'Insurances & Certificates', icon: UserGroupIcon, current: false },
 { name: 'Buy Insurance', icon: ArrowTrendingUpIcon, current: false },
];

const products1 = [
 {
  id: 1,
  name: 'Insurance 1',
  href: '#',
  description: 'End Date : December 13, 2023',

  imageSrc: glassImage,
  imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
 },
 {
  id: 2,
  name: 'Insurance 2',
  href: '#',
  description: 'End Date : January 01, 2024',
  imageSrc: glassImage,
  imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
 },
 {
  id: 3,
  name: 'Insurance 3',
  href: '#',
  description: 'End Date : March 03, 2024',
  imageSrc: glassImage,
  imageAlt:
   'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
 },
];

const clients = [
 {
  id: 11,
  name: 'Glass Insurance 1',
  imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
  lastInvoice: {
   amount: '$2,000.00',
  },
 },
 {
  id: 22,
  name: 'Glass Insurance 2',
  imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
  lastInvoice: {
   amount: '$14,000.00',
  },
 },
 {
  id: 33,
  name: 'Glass Insurance 3',
  imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
  lastInvoice: {
   amount: '$7,600.00',
  },
 },

 {
  id: 44,
  name: 'Glass Insurance 4',
  imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
  lastInvoice: {
   amount: '$2,000.00',
  },
 },
 {
  id: 55,
  name: 'Glass Insurance 5',
  imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
  lastInvoice: {
   amount: '$14,000.00',
  },
 },
 {
  id: 66,
  name: 'Glass Insurance 6',
  imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
  lastInvoice: {
   amount: '$7,600.00',
  },
 },
];
function classNames(...classes) {
 return classes.filter(Boolean).join(' ');
}

const Contractor = () => {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [sidebarState, setSidebarState] = useState({
  name: 'Insurances & Certificates',
  icon: UserGroupIcon,
  current: true,
 });
 const [isEdit, setIsEdit] = useState(false);
 return (
  <div className="flex min-h-full flex-col">
   <header className="sticky top-0 z-50 flex h-16 border-b border-gray-900/10 bg-white">
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
     <div className="flex flex-1 items-center gap-x-6">
      <button type="button" className="-m-3 p-3 md:hidden" onClick={() => setMobileMenuOpen(true)}>
       <span className="sr-only">Open main menu</span>
       <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
      </button>
      <Image className="h-8 w-auto" height={32} layout="fixed" src={logoImage} alt="Your Company" />
      <p className="text-blue-700 text-2xl font-bold">
       Glass<span className="text-2xl text-gray-700 font-semibold"> Contractor</span>
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

   {/* 3 column wrapper */}
   {sidebarState.name === 'Insurances & Certificates' ? (
    <div className="mx-auto w-full flex">
     {/* Left sidebar & main wrapper */}
     <div className="flex-1 flex">
      <div className="px-6 md-px-8 py-8">
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

      <div className="px-4 py-6 flex-1">
       <header className="flex items-center justify-between border-b border-white/5 py-2 px-8">
        <h1 className="text-base font-semibold leading-7 text-gray-700">
         Insurances & Certificates
        </h1>
       </header>
       {/* Deployment list */}

       <section aria-labelledby="products-heading" className="my-6">
        <h2 id="products-heading" className="sr-only">
         Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 justify-start">
         {products1.map((product) => (
          <a key={product.id} href={product.href} className="group ">
           <div className="overflow-hidden rounded-lg">
            <Image src={product.imageSrc} alt={product.imageAlt} />
            {/* <img className="h-full object-contain group-hover:opacity-75" /> */}
           </div>
           <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>{product.name}</h3>
           </div>
           <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
          </a>
         ))}
        </div>
       </section>

       <div className="col-span-full pt-6 border-t-2 border-gray-300">
        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
         Upload Your Document
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
         <div className="text-center">
          <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
           <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
           >
            <span>Upload a file</span>
            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
           </label>
           <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">PDF file up to 10MB</p>
         </div>
        </div>
       </div>
      </div>
     </div>

     <div className="w-1/3 overflow-y-auto shrink border-l border-gray-600 px-6 py-2">
      {/* <aside className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 w-96 lg:overflow-y-auto lg:border-l lg:border-white/5"> */}
      <div className="py-4 px-4">
       <form>
        <div className="space-y-6">
         <div className="">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Insurance Details</h2>

          <div className="mt-6 grid grid-cols-6 gap-x-6 gap-y-8">
           <div className="col-span-3 space-y-4">
            <div>
             <label
              htmlFor="personal-injury"
              className="block text-sm font-medium leading-6 text-gray-600 uppercase"
             >
              Personal & Adv Injury
             </label>
             <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
               <span className="font-bold flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                $
               </span>

               <input
                type="text"
                name="personal-injury"
                id="personal-injury"
                autoComplete="personal-injury"
                value="1000000"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
               />
              </div>
             </div>
            </div>

            <div className="grid grid-cols-2 justify-between">
             <div className="flex items-center gap-x-2">
              <input
               id="push-yes"
               name="push-personal-injury"
               type="radio"
               checked
               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
               htmlFor="push-yes"
               className="block text-sm font-medium leading-6 text-gray-900"
              >
               Yes
              </label>
             </div>{' '}
             <div className="flex items-center gap-x-3 ">
              <input
               id="push-no"
               name="push-personal-injury"
               type="radio"
               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
               htmlFor="push-no"
               className="block text-sm font-medium leading-6 text-gray-900"
              >
               No
              </label>
             </div>
            </div>
           </div>

           <div className="col-span-3 space-y-4">
            <div>
             <label
              htmlFor="generate-aggregate"
              className="block text-sm font-medium leading-6 text-gray-600 uppercase"
             >
              Generate Aggregate
             </label>
             <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
               <span className="font-bold flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                $
               </span>
               <input
                type="text"
                value="2000000"
                name="generate-aggregate"
                id="generate-aggregate"
                autoComplete="generate-aggregate"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
               />
              </div>
             </div>
            </div>

            <div className="grid grid-cols-2 justify-between">
             <div className="flex items-center gap-x-2">
              <input
               id="push2-yes"
               name="push2-generate-aggregate"
               type="radio"
               checked
               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
               htmlFor="push2-yes"
               className="block text-sm font-medium leading-6 text-gray-900"
              >
               Yes
              </label>
             </div>{' '}
             <div className="flex items-center gap-x-3 ">
              <input
               id="push2-no"
               name="push2-generate-aggregate"
               type="radio"
               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
               htmlFor="push2-no"
               className="block text-sm font-medium leading-6 text-gray-900"
              >
               No
              </label>
             </div>
            </div>
           </div>
          </div>
         </div>

         <div className="">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
           <div className="sm:col-span-3">
            <label
             htmlFor="start-date"
             className="block text-sm font-medium leading-6 text-gray-600"
            >
             Start Date
            </label>
            <div className="mt-2">
             <input
              type="date"
              placeholder="MM/DD/YYY"
              name="start-date"
              id="start-date"
              autoComplete="start-date"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             />
            </div>
           </div>

           <div className="sm:col-span-3">
            <label htmlFor="end-date" className="block text-sm font-medium leading-6 text-gray-600">
             End Date
            </label>
            <div className="mt-2">
             <input
              type="date"
              name="end-date"
              id="end-date"
              placeholder="MM/DD/YYY"
              autoComplete="end-date"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             />
            </div>
           </div>

           <div className="col-span-full">
            <label htmlFor="validity" className="block text-sm font-medium leading-6 text-gray-600">
             Validity
            </label>
            <div className="mt-2">
             <input
              id="validity"
              name="validity"
              type="text"
              autoComplete="validity"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             />
            </div>
           </div>
          </div>
         </div>

         <div className="">
          <h2 className="text-sm font-semibold leading-7 text-gray-600 uppercase">
           Correct Certificate Holder
          </h2>

          <div className="mt-6 grid grid-cols-6 gap-x-6 gap-y-8">
           <div className="col-span-3">
            <div className="grid grid-cols-2 justify-between">
             <div className="flex items-center gap-x-2">
              <input
               id="certificate1"
               name="certificate"
               type="radio"
               checked
               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
               htmlFor="certificate1"
               className="block text-sm font-medium leading-6 text-gray-900"
              >
               Yes
              </label>
             </div>
             <div className="flex items-center gap-x-3 ">
              <input
               id="certificate2"
               name="certificate"
               type="radio"
               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
               htmlFor="certificate2"
               className="block text-sm font-medium leading-6 text-gray-900"
              >
               No
              </label>
             </div>
            </div>
           </div>
          </div>
         </div>

         <div className="">
          <h2 className="text-sm font-semibold leading-7 text-gray-600 uppercase">Add_Insid</h2>

          <div className="mt-6 grid grid-cols-6 gap-x-6 gap-y-8">
           <div className="col-span-3">
            <div className="grid grid-cols-2 justify-between">
             <div className="flex items-center gap-x-2">
              <input
               id="addinsid1"
               name="addinsid"
               type="radio"
               checked
               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
               htmlFor="addinsid1"
               className="block text-sm font-medium leading-6 text-gray-900"
              >
               Yes
              </label>
             </div>{' '}
             <div className="flex items-center gap-x-3 ">
              <input
               id="addinsid2"
               name="addinsid"
               type="radio"
               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
               htmlFor="addinsid2"
               className="block text-sm font-medium leading-6 text-gray-900"
              >
               No
              </label>
             </div>
            </div>
           </div>
          </div>
         </div>

         <div className="">
          <h2 className="text-sm font-semibold leading-7 text-gray-600 uppercase">
           Workers Compensation and Employers Liability
          </h2>

          <div className="mt-6 grid grid-cols-6 gap-x-6 gap-y-8">
           <div className="col-span-3">
            <div className="grid grid-cols-2 justify-between">
             <div className="flex items-center gap-x-2">
              <input
               id="Compensation1"
               name="compensation"
               type="radio"
               checked
               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
               htmlFor="Compensation1"
               className="block text-sm font-medium leading-6 text-gray-900"
              >
               Yes
              </label>
             </div>{' '}
             <div className="flex items-center gap-x-3 ">
              <input
               id="Compensation2"
               name="compensation"
               type="radio"
               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
               htmlFor="Compensation2"
               className="block text-sm font-medium leading-6 text-gray-900"
              >
               No
              </label>
             </div>
            </div>
           </div>
          </div>
         </div>

         <div className="">
          <div className="space-y-10">
           <fieldset>
            <div className="mt-6 space-y-6">
             <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
               <input
                id="comments"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
               />
              </div>
              <div className="text-sm leading-6">
               <label htmlFor="comments" className="font-medium uppercase text-gray-700">
                Insured with other
               </label>
              </div>
             </div>
            </div>
           </fieldset>
          </div>
         </div>
        </div>

        {isEdit ? (
         <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
           type="button"
           className="text-sm rounded md border border-gray-900 px-3 py-2 w-full font-semibold leading-6 text-gray-900"
          >
           Cancel
          </button>
          <button
           type="submit"
           className="w-full rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm"
          >
           Save
          </button>
         </div>
        ) : (
         <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
           type="submit"
           className="w-full rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm"
          >
           Edit
          </button>
         </div>
        )}
       </form>
      </div>
      {/* </aside> */}
     </div>
    </div>
   ) : (
    <div className="mx-auto w-full flex">
     {/* Left sidebar & main wrapper */}
     <div className="flex-1 flex">
      <div className="px-6 md-px-8 py-8">
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

      <div className="w-full py-8 px-6">
       <div className="">
        <div className="flex items-center my-4 justify-between">
         <h2 className="text-base font-bold leading-7 text-gray-700">Insurance Plan Offerings</h2>
        </div>
        <ul role="list" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
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
     </div>
    </div>
   )}
  </div>
 );
};

export default Contractor;
