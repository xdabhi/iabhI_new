import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
const Navbar = () => {
  return (
    <header >
    <nav className='border-divider-light border-b dark:border-divider-dark'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-500 lg:z-50  bg-white/70 backdrop-blur  dark:bg-slate-900/80 fm:hidden'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link href='/' title='iAbhi' className=' '>
                <svg width="25" height="25" viewBox="0 0 200 201.58431771854518" class="css-1j8o68f" xmlns="http://www.w3.org/2000/svg" ><defs id="SvgjsDefs1120"><linearGradient id="SvgjsLinearGradient1123"><stop id="SvgjsStop1124" stop-color="#ef4136" offset="0"></stop><stop id="SvgjsStop1125" stop-color="#fbb040" offset="1"></stop></linearGradient></defs><g id="SvgjsG1121" featurekey="nameFeature-0" transform="matrix(6.791924381597519,0,0,6.791924381597519,-1.52997897473665,-67.91925029325903)" fill="url(#SvgjsLinearGradient1123)"><path d="M29.56 37.72 q0.28 0.64 -0.14 1.3 t-1.14 0.66 l-26.64 0 q-0.36 0 -0.68 -0.18 t-0.48 -0.46 q-0.44 -0.64 -0.12 -1.32 l1.24 -2.92 q0.16 -0.4 0.52 -0.64 t0.76 -0.24 l18.64 0 l-6.56 -15.68 l-5.36 12.8 q-0.16 0.4 -0.5 0.62 t-0.78 0.22 l-3.36 0 q-0.76 0 -1.2 -0.64 q-0.16 -0.28 -0.2 -0.64 t0.08 -0.68 l8.12 -19.04 q0.16 -0.4 0.5 -0.64 t0.78 -0.24 l3.84 0 q0.44 0 0.78 0.24 t0.5 0.64 z"></path></g></svg> 
              </Link>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center space-x-4'>
            <Link href='/about-contact'className=''>😎 About</Link>
            <Link href='/privacy-policy'>📜 Privacy Policy</Link>
            <ModeToggle />
            </div>
          </div>
        </div>
        </div>
    </nav>
    </header>
  )
}

export default Navbar