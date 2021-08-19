import React from 'react';
import css from './MainPage.module.scss';
import { Panel, RichTextView, IconContainer } from '@epam/loveship';
import { ReactComponent as UuiPromoImage } from '../icons/uui-promo-image.svg';
import PowerBiComponent from '../PowerBiComponent';


export class MainPage extends React.Component {    
    render() {
        const reportId = '162ae399-1e14-4332-a519-746c57a3fd22';
        const groupId = '5d4e1aaf-dd67-47f1-9f66-392bd5be5803';
        const typeEmbed = 'report';
        const defaultPage = 'ReportSection171d5979945773c50493';
        const defaultToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjQxYjcyZDAtNGU5Zi00YzI2LThhNjktZjk0OWYzNjdjOTFkLyIsImlhdCI6MTYyOTM1NTk2MSwibmJmIjoxNjI5MzU1OTYxLCJleHAiOjE2MjkzNTk4NjEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUF3YWw4SDE4VU9aUWJ6QjFlR3NwUnZaQmwvbVAyR2t4M2g4R2JsUkQwc0xiV3lEbkpBdysxYSsrVXRrdVNXcnU0cmRlYkhuVngrZUE4OFhpNXBxQS8zR3BOd3pjUUlJOHUya3VMWW9SSncrZz0iLCJhbXIiOlsicnNhIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZGV2aWNlaWQiOiJmMWUwMGI5Ni1hOWY3LTQzYzEtOGEzZC04NmYwZmQ5MDU0ODMiLCJmYW1pbHlfbmFtZSI6IkFzdHJlaWthIiwiZ2l2ZW5fbmFtZSI6IkR6bWl0cnkiLCJpcGFkZHIiOiIzNy4yMTQuNTcuMjIyIiwibmFtZSI6IkR6bWl0cnkgQXN0cmVpa2EiLCJvaWQiOiJiZTg2NmQzNi1jNjAwLTQ4NjAtOWQ3Ni1lYTZlMGNiOTQzNGMiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtNjM2MTU3NC0yOTMwODI0MjItMTMwMDc2MTgtMTMxNzk1IiwicHVpZCI6IjEwMDMyMDAxM0IyRjkyMDciLCJyaCI6IjAuQVFrQTBISWJ0SjlPSmt5S2FmbEo4MmZKSFE4QkhJZGhYckZQZzZ5WVlRcC1rUkFKQU5jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6Iml4TDRMYWJsOEdCNlJtZmVKUHhFNnQwTzdTYWhBMEl0T1ZOQm9BVXJZb28iLCJ0aWQiOiJiNDFiNzJkMC00ZTlmLTRjMjYtOGE2OS1mOTQ5ZjM2N2M5MWQiLCJ1bmlxdWVfbmFtZSI6IkR6bWl0cnlfQXN0cmVpa2FAZXBhbS5jb20iLCJ1cG4iOiJEem1pdHJ5X0FzdHJlaWthQGVwYW0uY29tIiwidXRpIjoic3FKYzgwQmdyRW1BenhXeHJ4aFhBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.nCC0o9cur9D6fml0sHS2pliFIRsHWq3X-4EBe1jdiT3FYvs5mSHQEZ22P-HNAgFVC7Bvryl3PWsgrwXYqZam0Oy4rC8BcCrsO4YhHGK0BzPp6DgX-NwVn-ID5H4XCx6Nnu49kbrqjnhn7DTlp6zyMXrbTrhv1Wd304DlR4CVVYpt-XVIjX0ikCLGb39mbqYLvdWnSf_D5IltHdTRPMXeC8iOdXv5GxpMHZhC8yQ5M8PASpwJwTrzD7z_51VknxnVUVfkL1m32UZKdeiZCHiT-h9alvud19Bh5HuvWIWB7uMOD6STtEWoeRn8iMVO_B9A_65L8GkYR6UlDCvZjKGLrQ';

        return (
            <>
                <div className={ css.bgImg }>
                    <div>
                        <IconContainer icon={ UuiPromoImage } />
                    </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponent reportId={reportId} groupId={groupId} typeEmbed={typeEmbed} defaultPage={defaultPage}
                        defaultToken={defaultToken}>
                    </PowerBiComponent>
                </div>

                <div style={{ height: "100px" }}></div>
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
