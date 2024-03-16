import { Request, Response } from "express";
import Apartments from "../modules/apartments";

export const create = async (req: Request, res: Response) => {
  const apartment = new Apartments(req.body);
  try {
    const newApartment = await apartment.save();
    res.status(201).json(newApartment);
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: error });
  }
};
export const list = async (req: Request, res: Response) => {
  try {
    if (req.params.id) {
      const record: any = await Apartments.findById(req.params.id);
      console.log(record);

      if (!record) throw new Error("Apartment not found");

      return res.status(200).json({ record: record });
    } else {
      const record: any = await Apartments.find();

      return res.status(200).json({ record: record });
    }
  } catch (error) {}
};

export const update = async (req: Request, res: Response) => {
  try {
    const record: any = await Apartments.updateOne({ _id: req.params.id }, req.body, { runValidators: true, upsert: true });
    return res.status(200).json({ message: record });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
