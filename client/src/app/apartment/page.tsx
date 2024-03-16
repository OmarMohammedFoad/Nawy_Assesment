import axios from 'axios';
import ApartmentCard from './layouts';
import Link from 'next/link';


const ImageWithTitleAndButton = async () => {
    
const res =await axios.get("http://app:9000/api/apartment/list/")


        return (
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Apartments</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {res.data.record.map((apartment:any) => (
                    <Link href={`apartment/${apartment._id}`}key={apartment.id}>
                       <ApartmentCard
                       key={apartment._id}
                       name={apartment.address}
                       image={apartment.img}
                       address={apartment.address}
                       _id={apartment._id}
                       price={apartment.price}
                       
                       />
                    
                    </Link>
                       ))}
                </div>
            </div>
        );
    };


export default ImageWithTitleAndButton;