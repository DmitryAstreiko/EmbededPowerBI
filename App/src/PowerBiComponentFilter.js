import React, { Component } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './PowerBI.css';

//https://docs.microsoft.com/en-us/javascript/api/overview/powerbi/configure-report-settings

export default class PowerBiComponentFilter extends Component {
    render() {

        let filter1  = {
            $schema: "http://powerbi.com/product/schema#advanced",
            target: {
                $schema: "http://powerbi.com/product/schema#column",
                table: "Locations",
                column: "City"
            },
            operator: "In",
            values: ["Minsk"],
            //filterType: models.FilterType.BasicFilter,
            //requireSingleSelection: true
          }

        return (
            <div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBIEmbed
                        embedConfig={{
                            type: this.props.typeEmbed,   // Supported types: report, dashboard, tile, visual and qna
                            id: this.props.reportId,
                            embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${this.props.reportId}?filter=Locations/City eq 'Minsk'`,
                            accessToken: this.props.defaultToken,
                            tokenType: models.TokenType.Aad,
                            pageName: this.props.defaultPage,
                            settings: {
                                panes: {                                    
                                    //filters: [filter1],
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
        );
    }
}