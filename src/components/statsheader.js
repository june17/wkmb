import React from 'react';

export class StatsWidget extends React.Component{
    render(){
        return(
            <div>
                <p>Death toll since 2000</p>
                <h1>{this.props.takesum}</h1>
            </div>
        );  
    }
}
