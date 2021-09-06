import React, { Component } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
//import "./App.css";


//https://docs.microsoft.com/en-us/javascript/api/overview/powerbi/configure-report-settings
//https://docs.microsoft.com/en-us/javascript/api/overview/powerbi/embed-dashboard

export default class PowerBiDashboardComponent extends Component {
    render() {
        return (
            <div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBIEmbed
                        embedConfig={{
                            type: this.props.typeEmbed,   // Supported types: report, dashboard, tile, visual and qna
                            id: this.props.reportId,
                            embedUrl: `https://app.powerbi.com/dashboardEmbed?dashboardId=${this.props.reportId}&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6ZmFsc2V9fQ%3d%3d`,
                            accessToken: this.props.defaultToken,
                            tokenType: models.TokenType.Aad,
                            pageName: this.props.defaultPage,
                            pageView: 'fitToWidth',
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
                                },
                                background: models.BackgroundType.Transparent,
                            }
                        }}

                        eventHandlers={
                            new Map([
                                ['loaded', function () { console.log('Report loaded'); }],
                                ['rendered', function () { console.log('Report rendered'); }],
                                ['error', function (event) { console.log(event.detail); }]
                            ])
                        }

                        cssClassName={"embed-container-dashboard"}

                        getEmbeddedComponent={(embeddedReport) => {
                            window.report = embeddedReport;
                        }}
                    />
                </div>
            </div>
        )
    }
}