"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';

function AddNewApartment() {
    const router = useRouter();

    const [address,setAddress] = useState("")
    const [price,setPrice] = useState("")
    const [image,setImage] = useState("")
    const [bedrooms,setBedrooms] = useState("")
    const [bathrooms,setBathrooms] = useState("")
    const [parking,setParking] = useState(false)
    const handleSubmit = async  (e:any)=>{
        e.preventDefault();
        const Data = {address,price,image,bedrooms,bathrooms,parking};
       const res =  await axios.post("http://app:9000/api/apartment/create",Data,{headers:{
            "Content-Type":"application/json"
                
        }})
    if(res.status==201)
    {
        router.push("/apartment")   
    }
    }
    return (
        <div className='flex justify-center '>
        <div className="w-full max-w-xl pt-20">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-0 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        type="text"
                        placeholder="Enter address"
                        onChange={(e)=>setAddress(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Price
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        placeholder="Enter price"
                        onChange={(e)=>setPrice(e.target.value)}

                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Image URL
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="text"
                        placeholder="Enter image URL"
                        onChange={(e)=>setImage(e.target.value)}

                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Bedrooms
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="bedrooms"
                        type="number"
                        placeholder="Enter number of bedrooms"
                        onChange={(e)=>setBedrooms(e.target.value)}

                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Bathrooms
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="bathrooms"
                        type="number"
                        placeholder="Enter number of bathrooms"
                        onChange={(e)=>setBathrooms(e.target.value)}

                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Amenities
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="amenities"
                        type="text"
                        placeholder="Enter amenities (comma-separated)"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Parking
                    </label>
                    <input
                        className="mr-2 leading-tight"
                        id="parking"
                        type="checkbox"
                        checked={parking}
                        onClick={(e:any)=>setParking(e.target.checked)}

                    />
                    <span className="text-gray-700 text-sm">Has parking</span>
                </div>
    
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
    
    
    
      )
    }

export default AddNewApartment
