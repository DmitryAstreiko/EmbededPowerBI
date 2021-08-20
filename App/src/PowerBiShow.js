import React from 'react';
import PowerBiComponent from './PowerBiComponent';
import PowerBiDashboardComponent from './PowerBiDashboardComponent';

export default class PowerBiShow extends React.Component {    
    render() {
        const reportId = '162ae399-1e14-4332-a519-746c57a3fd22';
        const groupId = '5d4e1aaf-dd67-47f1-9f66-392bd5be5803';
        const typeReportEmbed = 'report';
        const typeDashboardEmbed = 'dashboard';
        const defaultPage1 = 'ReportSection30f5c6d000d026e4eeb7';
        const defaultPage3 = 'ReportSection1483e8c382a0bad70b72';
        const defaultToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjQxYjcyZDAtNGU5Zi00YzI2LThhNjktZjk0OWYzNjdjOTFkLyIsImlhdCI6MTYyOTQ0ODk5NSwibmJmIjoxNjI5NDQ4OTk1LCJleHAiOjE2Mjk0NTI4OTUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFaeXFLUHpvY25SQlNOTXpKKytjTmxTSEFNdFBaWUtYd3FVU2UyaFd6cVYwT2VzeXQ1ZmVhRTY5aS9hSDE3UUJuK2RQc2FMaWQrS09xY0xwRHpscnY3WGEvWVhXQXRjRnBWcDVjSlNlMmcxaz0iLCJhbXIiOlsicnNhIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZGV2aWNlaWQiOiJmMWUwMGI5Ni1hOWY3LTQzYzEtOGEzZC04NmYwZmQ5MDU0ODMiLCJmYW1pbHlfbmFtZSI6IkFzdHJlaWthIiwiZ2l2ZW5fbmFtZSI6IkR6bWl0cnkiLCJpcGFkZHIiOiIzNy4yMTQuNTcuMjIyIiwibmFtZSI6IkR6bWl0cnkgQXN0cmVpa2EiLCJvaWQiOiJiZTg2NmQzNi1jNjAwLTQ4NjAtOWQ3Ni1lYTZlMGNiOTQzNGMiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtNjM2MTU3NC0yOTMwODI0MjItMTMwMDc2MTgtMTMxNzk1IiwicHVpZCI6IjEwMDMyMDAxM0IyRjkyMDciLCJyaCI6IjAuQVFrQTBISWJ0SjlPSmt5S2FmbEo4MmZKSFE4QkhJZGhYckZQZzZ5WVlRcC1rUkFKQU5jLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6Iml4TDRMYWJsOEdCNlJtZmVKUHhFNnQwTzdTYWhBMEl0T1ZOQm9BVXJZb28iLCJ0aWQiOiJiNDFiNzJkMC00ZTlmLTRjMjYtOGE2OS1mOTQ5ZjM2N2M5MWQiLCJ1bmlxdWVfbmFtZSI6IkR6bWl0cnlfQXN0cmVpa2FAZXBhbS5jb20iLCJ1cG4iOiJEem1pdHJ5X0FzdHJlaWthQGVwYW0uY29tIiwidXRpIjoiSmNWUUMyOWtBa212angzNi1EY21BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.gUD2g9bugGeuvY50IJDycxvmJ6yKIK6-79KjH9Lg70fnmxE5gPhs2hLe9RRSyPmDJpgmolcT7WtLyH5VXyyMMZe-_p_FKiFU1qLFDXNBxT1vsWCFlYa_Hs3uIz1oA-JnuYxkg5iiW2nPenOOSFFuTL3a3KyQj-mOEypwdTSSgYPLpUFBAUgKJQq7g8yFbSl2s4ORVt_iVmSggUkIPckTmMGTX5L1KE1qWIeUDlu_GaXR1c4dL3urS5xlDXUgdiGQfxRlEGBYwUyi_PSKOv-oyRDCeViqLSwAWaapr3ERhGpBfAkthSc87DXrOHfpXMWHHksnNT5S8LvscenPt0EBZw';
        const DashboardId = '0fc89437-c8a4-46f2-8d73-1f5f1ef6a56c';

        return (
            <div>
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

                <h1 style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>Dashboards</h1>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiDashboardComponent reportId={DashboardId} typeEmbed={typeDashboardEmbed} 
                        defaultToken={defaultToken}>
                    </PowerBiDashboardComponent>
                </div>
            </div>
        );
    }
}