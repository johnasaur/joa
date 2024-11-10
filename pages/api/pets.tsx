import { NextApiRequest, NextApiResponse } from 'next';
import {db} from '../../lib/database/connection';
import {Pet} from '../../lib/model/pet';


import { insertPets } from '@/lib/database/queries';

export default async function handler(req: NextApiRequest,res:NextApiResponse) {
    const pet: Pet = req.body
    
    console.log('PET', pet);
    try {
        const [result] = await db.execute(insertPets, [
            pet.petType, 
            pet.litter, 
            pet.litterDetails, 
            pet.sex, 
            pet.isFixed, 
            pet.isShowPet,
            pet.furColor, 
            pet.hypoAllergies, 
            pet.pricePoint, 
            pet.eyeColor, 
            pet.age, 
            pet.hairLength, 
            pet.comments
         ])
        res.status(201).json({message: 'added successfully from api', result});

    } catch (error) {
        console.error('db insert error', error);
    };
}
