import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next';
import SITE from '../IMAGES/SITE.png';



const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="lg:hidden">
          <button
            type="button"
            className="p-2 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-8 pt-6 md:pt-8">
        <div className="flex flex-col justify-center">
          <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-40">
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {t('Welcome')}
              </h1>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[#F24E1E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#F24E1E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F24E1E]"
                >
                  {t('DONATE TODAY')}
                </a>
        
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={SITE}
            alt="Your Image"
            className="w-full max-w-md"
          />
        </div>

        
      </div>
      <div className="Ring mt-6 mb-32 ml-20 mr-20">
  <div className="mt-10">
    <h2 className="text-2xl font-bold text-gray-900">{t('Earn that Ring')}</h2>
    <p className="text-base text-gray-700">{t('Become part of our community and earn that RING')}</p>
  </div>

  <div className="mt-12 grid grid-cols-2 gap-8">
    <div className="rounded-lg border border-gray-300 p-4 flex flex-col items-center">
      <img src="logo1.png" alt="Logo 1" className="w-5 h-5" />
      <p className="mt-4 text-base font-medium text-gray-900">{t('Donate')}</p>
      <a href="#" className="mt-2 text-sm font-semibold leading-6 text-gray-900">
        {t('Learn More')} <span aria-hidden="true">→</span>
      </a>
    </div>
    <div className="rounded-lg border border-gray-300 p-4 flex flex-col items-center">
      <img src="logo2.png" alt="Logo 2" className="w-5 h-5" />
      <p className="mt-4 text-base font-medium text-gray-900">{t('Volunteer')}</p>
      <a href="#" className="mt-2 text-sm font-semibold leading-6 text-gray-900">
        {t('Learn More')}<span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</div>


      
    </div>
  );
}
