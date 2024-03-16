import db from "../database/db";

interface Iapartment {
  address: string;
  price: number;
  img: string;
  bedrooms: number;
  bathrooms: number;
  parking: boolean;
  amenities: Array<String>;
  contactDetails: { name: string; email: string };
}

const apartments = new db.Schema<Iapartment>({
  address: String,
  price: Number,
  img: String,
  bedrooms: Number,
  bathrooms: Number,
  amenities: Array<String>,
  parking: { type: Boolean, default: false },
  contactDetails: { name: String, email: String },
});

export default db.model<Iapartment>("apartments", apartments);
