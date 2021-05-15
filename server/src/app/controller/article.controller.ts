import { Request, Response } from 'express';
import faker from 'faker';
import Article from '../model/article.model';

export const getActicles = async (req: Request, res: Response) => {
    try {
        const articles = await Article.find();
        return res.status(200).json(articles);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const postArticle = async (req: Request, res: Response) => {
    try {
        for(let i=0; i < 100; i++){
            const article = {
                title: faker.name.title(),
                description: faker.lorem.sentence(),
                imageURL: faker.image.imageUrl()
            }
            await Article.create(article);
        }
        return res.status(200).json({ status: "save" });
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteActicles = async (req: Request, res: Response) => {
    try {
        const articles = await Article.deleteMany({});
        return res.status(200).json(articles);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteActicle = async (req: Request, res: Response) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        return res.status(200).json(article);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}