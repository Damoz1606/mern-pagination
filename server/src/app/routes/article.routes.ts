import { Router } from 'express';
import * as Controller from '../controller/article.controller';

const router = Router();

router.route("/")
.get(Controller.getActicles)
.post(Controller.postArticle)
.delete(Controller.deleteActicles);

router.route("/:id")
.delete(Controller.deleteActicle);

export default router;