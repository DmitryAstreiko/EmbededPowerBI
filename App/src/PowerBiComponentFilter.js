import React, { Component } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './PowerBI.css';

//https://docs.microsoft.com/en-us/javascript/api/overview/powerbi/configure-report-settings

export default class PowerBiComponentFilter extends Component {
    render() {      
        return (
            <div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBIEmbed
                        embedConfig={{
                            type: this.props.typeEmbed,   // Supported types: report, dashboard, tile, visual and qna
                            id: this.props.reportId,
                            embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${this.props.reportId}`,
                            accessToken: this.props.defaultToken,
                            tokenType: models.TokenType.Aad,
                            pageName: this.props.defaultPage,
                            filters: this.props.defaultFilter,
                            
                            settings: {
                                panes: {                                    
                                    filters: {
                                        expanded: false,
                                        visible: false                                     
                                      }, 
                                    pageNavigation: {
                                        visible: false
                                    },                              
                                    }
                                },
                            background: models.BackgroundType.Transparent,                        
                        }}

                        eventHandlers={
                            new Map([
                                ['loaded', function () { console.log('Report loaded'); }],
                                ['rendered', function () { console.log('Report rendered'); }],
                                ['error', function (event) { console.log(`Error - ${event.detail}`); }]
                            ])
                        }

                        cssClassName={"embed-container-report"}

                        getEmbeddedComponent={(embeddedReport) => {
                            window.report = embeddedReport;
                        }}
                    />
                </div>
            </div>
        )
    }
}