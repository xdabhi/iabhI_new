import Link from 'next/link'
import { headerTitle, title } from '@/utils/siteMetaData';
const footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='inline-flex relative justify-center dark:bg-slate-900 dark:text-white w-full p-4' >
    <Link href='/' className='mt-1.5'>
      <svg width="62" height="12" viewBox="0 0 200 47.23106338813956" xmlns="http://www.w3.org/2000/svg" ><defs id="SvgjsDefs1012"><linearGradient id="SvgjsLinearGradient1015"><stop id="SvgjsStop1016" stopColor="#ef4136" offset="0"></stop><stop id="SvgjsStop1017" stopColor="#fbb040" offset="1"></stop></linearGradient></defs><g id="SvgjsG1013"  transform="matrix(1.5913430897068797,0,0,1.5913430897068797,-5.155951246420762,-15.913430897068796)" fill="url(#SvgjsLinearGradient1015)"><path d="M7.64 10 q0.56 0 0.98 0.42 t0.42 0.98 l0 26.56 q0 0.56 -0.42 0.98 t-0.98 0.42 l-3 0 q-0.56 0 -0.98 -0.42 t-0.42 -0.98 l0 -26.56 q0 -0.56 0.42 -0.98 t0.98 -0.42 l3 0 z M46.260000000000005 37.72 q0.28 0.64 -0.14 1.3 t-1.14 0.66 l-26.64 0 q-0.36 0 -0.68 -0.18 t-0.48 -0.46 q-0.44 -0.64 -0.12 -1.32 l1.24 -2.92 q0.16 -0.4 0.52 -0.64 t0.76 -0.24 l18.64 0 l-6.56 -15.68 l-5.36 12.8 q-0.16 0.4 -0.5 0.62 t-0.78 0.22 l-3.36 0 q-0.76 0 -1.2 -0.64 q-0.16 -0.28 -0.2 -0.64 t0.08 -0.68 l8.12 -19.04 q0.16 -0.4 0.5 -0.64 t0.78 -0.24 l3.84 0 q0.44 0 0.78 0.24 t0.5 0.64 z M75.16 24.2 q2 1.32 3 3.64 q0.52 1.32 0.52 3.16 q0 2.84 -1.54 4.82 t-4.5 2.9 q-1.8 0.64 -4.4 0.64 l-12.6 0 q-0.56 0 -0.98 -0.42 t-0.42 -0.98 l0 -26.56 q0 -0.56 0.42 -0.98 t0.98 -0.42 l11.92 0 q4.88 0 7.52 2.76 q2.24 2.24 2.24 5.64 q0 3.68 -2.16 5.8 z M68.24 27.4 l-8.2 0 l0 6.32 l8.52 0 q2.32 0 3.4 -0.84 q0.96 -0.8 0.96 -2.16 t-1 -2.24 q-1.2 -1.08 -3.68 -1.08 z M71.24 20.12 q0.28 -0.56 0.28 -1.28 q0 -0.88 -0.2 -1.32 q-0.16 -0.56 -0.52 -0.88 q-1 -1 -2.92 -1 l-7.84 0 l0 6.24 l7.52 0 q2.84 0 3.68 -1.76 z M110.86000000000001 10 q0.56 0 0.96 0.42 t0.4 0.98 l0 26.56 q0 0.56 -0.4 0.98 t-0.96 0.42 l-3.04 0 q-0.56 0 -0.96 -0.42 t-0.4 -0.98 l0 -10.44 l-12.68 0 l0 10.44 q0 0.56 -0.42 0.98 t-0.98 0.42 l-3 0 q-0.56 0 -0.98 -0.42 t-0.42 -0.98 l0 -26.56 q0 -0.56 0.42 -0.98 t0.98 -0.42 l3 0 q0.56 0 0.98 0.42 t0.42 0.98 l0 10.4 l12.68 0 l0 -10.4 q0 -0.56 0.4 -0.98 t0.96 -0.42 l3.04 0 z M127.52000000000001 10 q0.56 0 0.98 0.42 t0.42 0.98 l0 26.56 q0 0.56 -0.42 0.98 t-0.98 0.42 l-3 0 q-0.56 0 -0.98 -0.42 t-0.42 -0.98 l0 -26.56 q0 -0.56 0.42 -0.98 t0.98 -0.42 l3 0 z"></path></g></svg>
    </Link><div className='text-sm text-gray-600 dark:text-gray-300'>&copy; 2011-{currentYear} {headerTitle}</div> 
    <Link className='text-sm text-slate-900 dark:text-gray-300 px-3' href='/about-contact'>About</Link>
    <Link className='text-sm text-slate-900 dark:text-gray-300 ' href='/privacy-policy'>Privacy Policy</Link>
    
    </div>
  )
}
export default footer