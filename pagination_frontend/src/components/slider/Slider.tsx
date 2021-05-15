import React, { Component } from 'react'

interface Props {
    perPage: number,
    page: number,
    parentState: (any),
    length: number
}

interface State {
    pages: number[],
}

export class Slider extends Component<Props, State> {

    constructor(props: Props){
        super(props);
        this.state = {
            pages: []
        };
    }

    componentDidMount(){
        this.setPageNumber();
    }

    setPage(page: number){
        this.props.parentState({ page: page });
        this.setPageNumber();
    }

    setPageNumber(){
        let aux = [];
        let numberPages = Math.ceil(this.props.length/ this.props.perPage);
        for(let i = 1; i <= numberPages; i++){
            aux.push(i);
        }
        this.setState({ pages: aux });
    }

    render() {
        return (
            <div className="mt-4 d-flex justify-content-center">
                <div className="btn-group">
                    {
                        (this.props.page > 1)
                        ? <button className="btn btn-secondary btn-sm" onClick={() => this.setPage(1)}><span className="fa fa-chevron-left"></span><span className="fa fa-chevron-left"></span></button>
                        : ""
                    }
                    {
                        (this.props.page > 1)
                        ? <button className="btn btn-secondary btn-sm" onClick={() => this.setPage(this.props.page - 1)}><span className="fa fa-chevron-left"></span></button>
                        : ""
                    }
                    
                    {
                        this.state.pages.slice((this.props.page - 1), (this.props.page - 1) + 5).map(item => {
                            if(item === this.props.page){
                                return <button className="btn btn-light btn-sm active" onClick={() => this.setPage(item)}>{item}</button>;
                            } else {
                                return <button className="btn btn-light btn-sm" onClick={() => this.setPage(item)}>{item}</button>;
                            }
                            
                        })
                    }

                    {
                        (this.props.page < this.state.pages[this.state.pages.length - 1])
                        ? <button className="btn btn-secondary btn-sm" onClick={() => this.setPage(this.props.page + 1)}><span className="fa fa-chevron-right"></span></button>
                        : ""
                    }
                    {
                        (this.props.page < this.state.pages[this.state.pages.length - 1])
                        ? <button className="btn btn-secondary btn-sm" onClick={() => this.setPage(this.state.pages[this.state.pages.length - 1])}><span className="fa fa-chevron-right"></span><span className="fa fa-chevron-right"></span></button>
                        : ""
                    }
                </div>
            </div>
        )
    }
}

export default Slider
