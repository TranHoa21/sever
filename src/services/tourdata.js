import db from "../models/index.js";
import { v2 as cloudinary } from 'cloudinary';

export const createTourData = (body, file, file_in_day) => new Promise(async (resolve, reject) => {
    try {
        const image_hotel = file ? file.path : null;
        const image_in_day = file_in_day ? file_in_day.path : null;

        const response = await db.Tourdatas.findOrCreate({
            where: { name_day_title: body?.name_day_title },
            defaults: {
                title_tour: body.title_tour,
                name_day: body.name_day,
                image_hotel: image_hotel,
                image_in_day: image_in_day,
                name_day_title: body.name_day_title,
                name_hotel: body.name_hotel,
                schedule: body.schedule,
                hotel_introduction: body.hotel_introduction
            },
        });

        if (response[1]) {
            resolve({
                err: 0,
                mes: 'Created',
            });
        } else {
            if (file) cloudinary.uploader.destroy(file.filename);
            if (file_in_day) cloudinary.uploader.destroy(file_in_day.filename);
            resolve({
                err: 1,
                mes: 'Cannot create new post',
            });
        }
    } catch (error) {
        if (file) cloudinary.uploader.destroy(file.filename);
        if (file_in_day) cloudinary.uploader.destroy(file_in_day.filename);
        reject(error);
    }
});

export const getTourDataByNameTour = async (tourName) => {
    try {
        if (!tourName) {
            throw new Error('Invalid post ID');
        }
        const tourdata = await db.Tourdatas.findAll({ where: { title_tour: tourName } });
        return tourdata;
    } catch (error) {
        console.log('check err', error)

        throw new Error(`Lỗi khi lấy bài viết theo ID: ${error.message}`);
    }
}

