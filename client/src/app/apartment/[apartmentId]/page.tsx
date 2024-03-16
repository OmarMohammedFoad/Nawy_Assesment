
import axios from 'axios'
import ApartmentCard from '../layouts'

async function ApartmentDetails({params}:{params:{
    apartmentId:string
  }}) {
    
    const res =await axios.get(`http://app:9000/api/apartment/list/${params.apartmentId}`)
     
  
   
  return (

   res.data.record?          
   <div className="font-mono">
   <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
     <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
       <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
         <img src={res.data.record.img} alt={res.data.record.address} className="w-4/5 rounded object-cover" />
         <hr className="border-white border-2 my-6" />
        
       </div>
       <div className="lg:col-span-2">
         <h2 className="text-2xl font-extrabold text-gray-800">{res.data.record.address}</h2>
         <div className="flex flex-wrap gap-4 mt-4">
           <p className="text-gray-800 text-xl font-bold">${res.data.record.price}</p>
           <p className="text-gray-400 text-xl"> <span className="text-sm ml-1">Tax included</span></p>
         </div>
    
         <div className="mt-8">
           <h3 className="text-lg font-bold text-gray-800">About the Apartment</h3>
            <div className='mt-4'>
                <p className='text-gray-600'>Bedrooms:{res.data.record.bedrooms}</p>
                <p className='text-gray-600'>Bathrooms:{res.data.record.bathrooms}</p>
                <p className='text-gray-600'>Amenities:{res.data.record.amenities.join(",")}</p>
                <p className='text-gray-600'>Parking:{res.data.record.parking? "yes" : "No"}</p>

            </div>
         </div>
         <div className="mt-8 max-w-md">
           <h3 className="text-lg font-bold text-gray-800">Contact!</h3>
           <p>Name: {res.data.record.contactDetails.name}</p>
           <p>Email:{res.data.record.contactDetails.email}</p>

           <button type="button" className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded">Contact Now </button>
         </div>
       </div>
     </div>
   </div>
 </div>
   :<></>
  )
}

export default ApartmentDetails
