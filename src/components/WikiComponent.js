import React from "react";
import WikiService from "../services/WikiService";

class WikiComponent extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            page:[],
            pageId:0
        }
    }

    componentDidMount(){
        WikiService.getWikiInfo()
                    .then(
                            (response) => {this.setState(
                                { 
                                    pageId : Object.keys(response.data.query.pages)[0]
                                }
                            )}
                    );

        WikiService.getWikiInfo()
                    .then(
                            (response) => {this.setState(
                                { 
                                    page : response.data.query.pages[this.state.pageId].extract

                                })}
                    );
    }

    render (){
        return(
            <div>
                <h1 className = "h1" > Wiki </h1>
                <div className= "container">
                    <div className="lh-base text-start" dangerouslySetInnerHTML={{ __html: this.state.page }} />
                </div>
            </div>
        )
    }
}
export default WikiComponent