import mongoose from "mongoose";
import Apartment from "../modules/apartments";
const apartmentsData = [
  {
    img: "https://circaoldhouses.com/wp-content/uploads/2017/10/key-hole-house-1.jpg",
    address: "P. Sherman 42 Wallabe Way, Sydney",
    price: 2400,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Parking garage"],
    parking: false,
    immediate: true,
    contactDetails: {
      name: "Douglas",
      email: "doug@less.com",
    },
  },
  {
    img: "https://i.pinimg.com/736x/17/f2/6e/17f26e8f188af5d3e377dacb2011889a--mediterranean-houses-mediterranean-style.jpg",
    address: "Cherobee 21, South Boulevard",
    price: 12000,
    bedrooms: 2,
    bathrooms: 1.5,
    amenities: ["Balcony", "Laundry"],
    parking: true,
    immediate: false,

    contactDetails: {
      name: "William",
      email: "will@i.am",
    },
  },
  {
    img: "https://blenderartists.org/uploads/default/original/4X/2/f/9/2f9d2a683dd5eada8bf64a590aa20a01312509ca.jpg",
    address: "100 Bonaroo Road, East Dingling",
    price: 1000,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Swimming pool", "Gym"],
    parking: false,

    immediate: true,
    contactDetails: {
      name: "Rickay",
      email: "rrrrick@cucumber.com",
    },
  },
  {
    img: "http://mat2.materialicious.com/images/space-house-803-o.jpg",
    address: "McGraw Chukitee, 80",
    price: 2300,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Swimming pool", "Gym"],
    parking: false,
    immediate: false,
    contactDetails: {
      name: "Charles",
      email: "charles.smith@coldmail.com",
    },
  },
  {
    img: "http://www.kucasnova.com/wp-content/uploads/2014/01/projekat-kuce-sa-potkrovljem-i-garazom-4-1.jpg",
    address: "A.D Nooks Plaza, 16 St.",
    price: 11000,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Swimming pool", "Gym"],
    parking: true,
    immediate: true,
    contactDetails: {
      name: "Trevor",
      email: "t@noah.ark",
    },
  },
];

async function insertDummyApartments() {
  try {
    await Apartment.insertMany(apartmentsData);
    console.log("Dummy apartments data inserted successfully.");
  } catch (error) {
    console.error("Error inserting dummy apartments data:", error);
  }
}

insertDummyApartments();
