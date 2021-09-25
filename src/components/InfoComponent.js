import React from "react";

import InfoService from "../services/InfoService";

class InfoComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            infos:[]
        }
    }
    componentDidMount(){
        InfoService.getInfo().then( (response) => {
            this.setState({ infos:response.data})
        }

        );
    }

    render (){
        return(
            <div>
                <h1 className = "text-center" > Info </h1>

                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> name </td>
                            <td> value </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.infos.map(
                                info => 
                                <tr key = {info.name}>
                                    <td>
                                        {info.name}
                                    </td>
                                    <td>
                                        {info.value}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}

export default InfoComponent