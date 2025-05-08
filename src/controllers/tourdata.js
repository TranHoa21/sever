import * as services from '../services/index.js';
import { v2 as cloudinary } from 'cloudinary';
import Joi from 'joi';

export const createTourData = async (req, res) => {
    const { file, file_in_day } = req.files;
    const { title_tour, name_day, name_day_title, schedule, hotel_introduction } = req.body;

    try {
        const schema = Joi.object({
            title_tour: Joi.string().required(),
            name_day: Joi.string().required(),
            name_day_title: Joi.string().required(),
            schedule: Joi.string().required(),
            hotel_introduction: Joi.string().required(),
        });

        const { error } = schema.validate({ title_tour, name_day, name_day_title, schedule, hotel_introduction });
        if (error) {
            if (file) {
                cloudinary.uploader.destroy(file.filename);
            }
            if (file_in_day) {
                cloudinary.uploader.destroy(file_in_day.filename);
            }
            return res.status(400).json({ error: error.details[0].message });
        }

        const result = await services.createTourData({ ...req.body }, file, file_in_day);
        return res.status(200).json(result);
    } catch (error) {
        if (file) {
            cloudinary.uploader.destroy(file.filename);
        }
        if (file_in_day) {
            cloudinary.uploader.destroy(file_in_day.filename);
        }
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error);
    }
};

export const getTourDataByNameTour = async (req, res) => {
    const { tourName } = req.params;
    try {
        const tour = await services.getTourDataByNameTour(tourName);
        res.json(tour)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
