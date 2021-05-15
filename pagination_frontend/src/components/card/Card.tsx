import React, { Component } from 'react'

import * as ArticleService from '../../services/article.service';
import { Article } from '../../interfaces/article';
import './Card.css';

interface Props {
    article: Article,
    articles: Article[],
    updateState: (any)
}

export class Card extends Component<Props, Article> {

    constructor(props: any){
        super(props);
        this.state = {} as Article;
    }

    async handleDeleteItem(id: string){
        await ArticleService.deleteVideo(id);
        this.props.updateState({articles: this.props.articles.filter(item => item._id !== id)});
    }

    render() {
        return (
            <div>
                <div className="card m-1">
                    <div className="card-body">
                        <div className="btn-right-top">
                            <span className="fa fa-times" onClick={() => this.handleDeleteItem(this.props.article._id)}></span>
                        </div>
                        <div className="header-container">
                            {/* <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2Fd%2Fb%2F6%2F255909-vertical-minimalistic-wallpaper-3840x2160-images.jpg&f=1&nofb=1" alt="" /> */}
                            <img src={this.props.article.imageURL} alt="" />
                        </div>
                        <hr />
                        <div className="container">
                            <h6>{this.props.article.title}</h6>
                            <p>{this.props.article.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
