import React from 'react';
import css from './MainPage.module.scss';
import { Panel, RichTextView, IconContainer } from '@epam/loveship';
import { ReactComponent as UuiPromoImage } from '../icons/uui-promo-image.svg';
//import PowerBiComponent from '../PowerBiComponent';
//import PowerBiDashboardComponent from '../PowerBiDashboardComponent';
import PowerBiShow from '../PowerBiShow';
import PowerBiWrapper from '../PowerBiWrapper';

export class MainPage extends React.Component {    
    render() {
        /*const reportId = '162ae399-1e14-4332-a519-746c57a3fd22';
        const groupId = '5d4e1aaf-dd67-47f1-9f66-392bd5be5803';
        const typeReportEmbed = 'report';
        const typeDashboardEmbed = 'dashboard';
        const defaultPage1 = 'ReportSection30f5c6d000d026e4eeb7';
        const defaultPage3 = 'ReportSection1483e8c382a0bad70b72';
        const defaultToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjQxYjcyZDAtNGU5Zi00YzI2LThhNjktZjk0OWYzNjdjOTFkLyIsImlhdCI6MTYyOTM3MTMzNSwibmJmIjoxNjI5MzcxMzM1LCJleHAiOjE2MjkzNzUyMzUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUErVjNOQnlhbFFEMlc0R3BqMWsvYXFWbWtyMFFuWU5UcXplTjZ4NmpMREt4TWJuK0UvTUxyTkx3S1hQUTJmWVdkd2Q0VkJCZzI0eWZNY3lNcmZOUHd1R3RmU3pLNWZQYno4OVE2RjFmYnRxWT0iLCJhbXIiOlsicnNhIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZGV2aWNlaWQiOiJmMWUwMGI5Ni1hOWY3LTQzYzEtOGEzZC04NmYwZmQ5MDU0ODMiLCJmYW1pbHlfbmFtZSI6IkFzdHJlaWthIiwiZ2l2ZW5fbmFtZSI6IkR6bWl0cnkiLCJpcGFkZHIiOiIzNy4yMTQuNTcuMjIyIiwibmFtZSI6IkR6bWl0cnkgQXN0cmVpa2EiLCJvaWQiOiJiZTg2NmQzNi1jNjAwLTQ4NjAtOWQ3Ni1lYTZlMGNiOTQzNGMiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtNjM2MTU3NC0yOTMwODI0MjItMTMwMDc2MTgtMTMxNzk1IiwicHVpZCI6IjEwMDMyMDAxM0IyRjkyMDciLCJyaCI6IjAuQVFrQTBISWJ0SjlPSmt5S2FmbEo4MmZKSFE4QkhJZGhYckZQZzZ5WVlRcC1rUkFKQU5jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6Iml4TDRMYWJsOEdCNlJtZmVKUHhFNnQwTzdTYWhBMEl0T1ZOQm9BVXJZb28iLCJ0aWQiOiJiNDFiNzJkMC00ZTlmLTRjMjYtOGE2OS1mOTQ5ZjM2N2M5MWQiLCJ1bmlxdWVfbmFtZSI6IkR6bWl0cnlfQXN0cmVpa2FAZXBhbS5jb20iLCJ1cG4iOiJEem1pdHJ5X0FzdHJlaWthQGVwYW0uY29tIiwidXRpIjoiRGt3MnJlemZyME9VRzRIMEJONHdBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.kiZfkfARWSXTIKB6e03-5aQFTeAo-bhDV9YPQDYmRco9uLwF53b4lE6EzbBIRUZLsbKWtSGVdCYkVioCCSLHw-849iVqH-xzC9CXMDLBZu6nWHWZwzdKL9HDBCPLhxx3P0RFXzL39msYDiKhJkE8eJhy5VU36rjvZCMBvLKYQ55u6W1rghUUTGctJr0ByPMecSc7rvwvuUFdwmy1yAWoKwrj759CJOWG7SIZ0mnJE_RO9vDlMIVxs5cijPMvcDm0vUa7-u4ZYL9VChDC21iuco1PSrg1ADlw8sXE2jdSn__dr7Lmr0pGvJ41kviYeDQwmmhH91kglzT4q-v5XchJoQ';
        const DashboardId = '0fc89437-c8a4-46f2-8d73-1f5f1ef6a56c';
        */

        return (
            <>
                <div className={ css.bgImg }>
                    <div>
                        <IconContainer icon={ UuiPromoImage } />
                    </div>
                </div>

                <PowerBiWrapper/>  
                
                {/*<h1 style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>Reports</h1>
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

                <h1 style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>Dashboards</h1>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiDashboardComponent reportId={DashboardId} typeEmbed={typeDashboardEmbed} 
                        defaultToken={defaultToken}>
                    </PowerBiDashboardComponent>
                </div>
        */}

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
