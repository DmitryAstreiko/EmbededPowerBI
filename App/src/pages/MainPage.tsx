import React from 'react';
import css from './MainPage.module.scss';
import { Panel, RichTextView, IconContainer } from '@epam/loveship';
import { ReactComponent as UuiPromoImage } from '../icons/uui-promo-image.svg';
import PowerBiComponent from '../PowerBiComponent';
import PowerBiDashboardComponent from '../PowerBiDashboardComponent';

export class MainPage extends React.Component {    
    render() {
        const reportId = '162ae399-1e14-4332-a519-746c57a3fd22';
        const groupId = '5d4e1aaf-dd67-47f1-9f66-392bd5be5803';
        const typeReportEmbed = 'report';
        const typeDashboardEmbed = 'dashboard';
        const defaultPage1 = 'ReportSection30f5c6d000d026e4eeb7';
        const defaultPage3 = 'ReportSection1483e8c382a0bad70b72';
        const defaultToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjQxYjcyZDAtNGU5Zi00YzI2LThhNjktZjk0OWYzNjdjOTFkLyIsImlhdCI6MTYyOTM1OTcwOSwibmJmIjoxNjI5MzU5NzA5LCJleHAiOjE2MjkzNjM2MDksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFQY25yZmVnS2REUFFVVHRxN2txWkhncUpjL3krQ0ZSR3ZDV3MwbUdiWndpVS9IZlhPbGR1MGltTk5zVEtmWjhzd0xlVzdoZmZwV0RQVVc2cmxFOGhjR0tqdTNOckVZUmFWM3pSWGRIVTZlbz0iLCJhbXIiOlsicnNhIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZGV2aWNlaWQiOiJmMWUwMGI5Ni1hOWY3LTQzYzEtOGEzZC04NmYwZmQ5MDU0ODMiLCJmYW1pbHlfbmFtZSI6IkFzdHJlaWthIiwiZ2l2ZW5fbmFtZSI6IkR6bWl0cnkiLCJpcGFkZHIiOiIzNy4yMTQuNTcuMjIyIiwibmFtZSI6IkR6bWl0cnkgQXN0cmVpa2EiLCJvaWQiOiJiZTg2NmQzNi1jNjAwLTQ4NjAtOWQ3Ni1lYTZlMGNiOTQzNGMiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtNjM2MTU3NC0yOTMwODI0MjItMTMwMDc2MTgtMTMxNzk1IiwicHVpZCI6IjEwMDMyMDAxM0IyRjkyMDciLCJyaCI6IjAuQVFrQTBISWJ0SjlPSmt5S2FmbEo4MmZKSFE4QkhJZGhYckZQZzZ5WVlRcC1rUkFKQU5jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6Iml4TDRMYWJsOEdCNlJtZmVKUHhFNnQwTzdTYWhBMEl0T1ZOQm9BVXJZb28iLCJ0aWQiOiJiNDFiNzJkMC00ZTlmLTRjMjYtOGE2OS1mOTQ5ZjM2N2M5MWQiLCJ1bmlxdWVfbmFtZSI6IkR6bWl0cnlfQXN0cmVpa2FAZXBhbS5jb20iLCJ1cG4iOiJEem1pdHJ5X0FzdHJlaWthQGVwYW0uY29tIiwidXRpIjoiSXdqN2xBcUYway1CY05XYUI1STJBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.FE_QHvJ6xpCyTWsttE7zBJfNPVo_n5GRhn4RRPq1dgq7RW5FzyyvY_UOaiaLfytGE8Mz8mO3sRHhWTxEdmIqob5swt5HXDFJMcpfrTI4_AvkSEZsRmqOy29wns7jOMNsYIjTfWfimiQI5wkhVMmNELNgzlxoe8Uh53m8tIwNaNMGGb-EfrEbTBuQphNN5dLWnLEkqX6QyHYcVp0cHCSbTrWpTcgwE2e6xUb8GSQmUoAbR0pnPd1Uj4axx-278ztc6E60uQ7KGHoic6CDd73PPXpHsle32J98yCAkUxG_NY1aMY8T8E7_P3g8T24z5uL6xoY4J0nd4wphk63BTpSvXg';
        const DashboardId = '0fc89437-c8a4-46f2-8d73-1f5f1ef6a56c';

        return (
            <>
                <div className={ css.bgImg }>
                    <div>
                        <IconContainer icon={ UuiPromoImage } />
                    </div>
                </div>

                <h1 style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>Reports</h1>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponent reportId={reportId} groupId={groupId} typeEmbed={typeReportEmbed} defaultPage={defaultPage1}
                        defaultToken={defaultToken}>
                    </PowerBiComponent>
                </div>
                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponent reportId={reportId} groupId={groupId} typeEmbed={typeReportEmbed} defaultPage={defaultPage3}
                        defaultToken={defaultToken}>
                    </PowerBiComponent>
                </div>

                <h1 style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>Dashboard</h1>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiDashboardComponent reportId={DashboardId} typeEmbed={typeDashboardEmbed} 
                        defaultToken={defaultToken}>
                    </PowerBiDashboardComponent>
                </div>

                <div style={{ height: "120px" }}></div>
                <Panel cx={ css.mainPanel } background='white'>
                    <RichTextView size="14">
                        <h3>Welcome to UUI template app</h3>
                        <p>UUI docs: <a href="https://uui.epam.com/">uui.epam.com</a></p>
                        <p>Git: <a href="https://github.com/epam/uui">github.com/epam/uui</a></p>
                        <p>App powered by: <a href="https://create-react-app.dev/">Create React App</a></p>
                    </RichTextView>
                </Panel>
            </>
        );
    }
}
