import { Component } from 'react';
import PowerBiWrapper from '../PowerBiWrapper';

export default class Analytics extends Component{
    render() {
        return(
            <div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <h1>Page with some analytics</h1>
                </div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiWrapper />
                </div>                
            </div>            
        )
    }
}