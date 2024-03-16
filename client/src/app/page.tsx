import ImageWithTitleAndButton from './apartment/page'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';


function Hello() {
  return (
    <div className='flex-1 pt-4 ml-6'>
      <Link href={"/apartment/addApartment"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Add New Apartment sad
      </Link>
      <ImageWithTitleAndButton/>
    </div>
  )
}

export default Hello
