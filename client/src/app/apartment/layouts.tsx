interface Apartment {
    _id: string;
    name: string;
    image: string;
    address: string;
    price: number;
        
}

const ApartmentCard: React.FC<Apartment> = ({ _id,name, image, address, price }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4" key={_id}>
            <img src={image} alt={name} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-semibold mb-2">{address}</h2>
            <p className="text-gray-600 mb-2">{address}</p>
            <p className="text-gray-800 font-semibold">{price} USD</p>
           
        </div>
    );
};

export default ApartmentCard;