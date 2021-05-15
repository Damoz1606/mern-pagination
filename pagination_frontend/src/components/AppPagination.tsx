import React, { Component } from 'react'
import { Navbar } from './navbar/Navbar';
import { Card } from './card/Card';
import { Slider } from './slider/Slider';

import * as ArticleService from '../services/article.service';
import { Article } from '../interfaces/article';

interface State {
    articles: any[],
    page: number,
    perPage: number,
    toShow: any[]
}

export class AppPagination extends Component<{}, State> {

    constructor(props: any){
        super(props);
        this.state = {
            articles: [],
            page: 1,
            perPage: 10,
            toShow: [],
        };
        this.loadArticles();
    }

    liftState = (state:any) => {
        this.setState(state, () => { this.updateArticles(); });
    }

    componentDidMount() {
        this.loadArticles();
    }

    async loadArticles(){
        const res = await ArticleService.getVideos();
        this.setState({articles: res.data});
        this.updateArticles();
    }

    getPages(item: Article[]): Article[] {
        const from = (this.state.page * this.state.perPage) - this.state.perPage;
        const to = (this.state.page * this.state.perPage);
        return item.slice(from, to);
    }

    updateArticles(){
        this.setState({toShow: this.getPages(this.state.articles)});
    }

    async deleteAll(){
        await ArticleService.deleteVideos();
        this.liftState({articles: []});
    }

    async createAll(){
        await ArticleService.postVideos();
        window.location.reload(false);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="btn-group">
                    <button className="btn btn-outline-success btn-sm" onClick={() => this.createAll()}><span className="fa fa-plus"></span></button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => this.deleteAll()}><span className="fa fa-trash"></span></button>
                </div>
                {
                    (this.state.articles.length !== 0)
                    ? <Slider perPage={this.state.perPage} page={this.state.page} parentState={this.liftState} length={this.state.articles.length}/>
                    : ""
                }
                <div className="container mt-4 mb-4">
                    <div className="row d-flex justify-content-center">
                    {
                        this.state.toShow.map(item => {
                            return <Card article={item} articles={this.state.articles} updateState={this.liftState}/>;
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default AppPagination
