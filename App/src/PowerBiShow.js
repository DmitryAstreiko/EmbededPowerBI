import React from 'react';
import PowerBiComponent from './PowerBiComponent';
import PowerBiDashboardComponent from './PowerBiDashboardComponent';
import PowerBiComponentFilter from './PowerBiComponentFilter';
import { models } from 'powerbi-client';
import SimpleSelect from './SelectComponent';
//import DataPickerComponent from './DataPickerComponent';
import PickerComponent from './PickerComponent';
import * as moment  from 'moment';
import { addDays } from 'date-fns';

export default class PowerBiShow extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            valuesCity: null,
            selectedFirstDate: moment(new Date()).format('YYYY-MM-DD'),
            selectedEndDate: moment(new Date()).format('YYYY-MM-DD'),
            daysCountPeriod: 180,
        }
    };

onChangeCity(newCity) {
    this.setState({ valuesCity: newCity });
};

onDateStartSelect = value => {
    this.setState({ selectedFirstDate: moment(value).format('YYYY-MM-DD') });
};

onDateEndSelect = value => {
    this.setState({ selectedEndDate: moment(value).format('YYYY-MM-DD') });
};

    render() {
        //https://docs.microsoft.com/en-us/javascript/api/overview/powerbi/control-report-filters

        const reportId = '162ae399-1e14-4332-a519-746c57a3fd22';
        const groupId = '5d4e1aaf-dd67-47f1-9f66-392bd5be5803';
        const typeReportEmbed = 'report';
        const typeDashboardEmbed = 'dashboard';
        const defaultPage1 = 'ReportSection30f5c6d000d026e4eeb7';  //new booking
        const defaultPage2 = 'ReportSectionf61858b9d013ea8d5085';  //heartbeat issues
        const defaultPage3 = 'ReportSection1483e8c382a0bad70b72';  //locker opennings
        const defaultPage4 = 'ReportSection0223ec3a88d60aabb10b';  //total lockers
        const defaultPage51 = 'ReportSection8ca12aece883999785ed';  //current summary 1
        const defaultPage52 = 'ReportSection4cd970dbedb275ab181b';  //current summary 2
        const defaultPage6 = 'ReportSectionb19894274b7c8f3ac6de';
        const defaultToken = this.props.token;
        const DashboardId = '0fc89437-c8a4-46f2-8d73-1f5f1ef6a56c';

        const filterCity  = {
            $schema: "http://powerbi.com/product/schema#basic",
            target: {
                $schema: "http://powerbi.com/product/schema#column",
                table: "Locations",
                column: "City"
            },
            operator: "In",
            //values: ["Minsk"],
            values: [this.state.valuesCity],
            
            filterType: models.FilterType.BasicFilter,
            //requireSingleSelection: true
            };

            const date1 = moment(new Date(2021, 2, 15)).format("M/DD/yyyy");
            const date2 = moment(new Date(2021, 6, 15)).format("M/DD/yyyy");
            console.log(date1);
            console.log(date2);

          const filterBookingDatePeriod  = {
            $schema: "http://powerbi.com/product/schema#advanced",
            target: {
                table: "VersionsForOpenings",
                column: "CreateDateAt"
            },
            logicalOperator: "Or",
            conditions: [
              {
                operator: "GreaterThan",
                //value: "1/15/2021"
                value: moment(new Date(2021, 2, 15))
              },
            //  {
            //    operator: "Contains",
            //    value: "Lviv"
            //  }
            ],
            filterType: models.FilterType.AdvancedFilter
            };

          //----------временные рамки работают с текущей датой (вперед и назад)--------------
          const RelativeDateFilterTimeUnit = {
            Days: 0,
            Weeks: 1,
            CalendarWeeks: 2,
            Months: 3,
            CalendarMonths: 4,
            Years: 5,
            CalendarYears: 6,
            Minutes: 7,
            Hours: 8
            };

          const relativeDateFilter = {
            $schema: "http://powerbi.com/product/schema#relativeDate",
            target: {
                table: "VersionsForOpenings",
                column: "CreateDateAt"
            },
            operator: models.RelativeDateOperators.InLast,
            timeUnitsCount: this.state.daysCountPeriod,
            timeUnitType: RelativeDateFilterTimeUnit.Days,
            includeToday: true,
            filterType: models.FilterType.RelativeDate
            };
          //---------------------------------------------------------------------------------------------

        return (
            <div>
                <h1 style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>Reports</h1>   
                <div  style={{ marginBottom: "20px" }}>
                    <div>
                        <SimpleSelect selectedCity = { (value) => this.onChangeCity(value) }/>
                    </div>
                    <div  >
                        <PickerComponent labelvalue={"Дата с"} 
                            onSelected={ (value) => this.onDateStartSelect(value) } 
                            selectedDate={this.state.selectedFirstDate}/>
                    </div>
                    <div  >
                        <PickerComponent labelvalue={"Дата по"} 
                            onSelected={ (value) => this.onDateEndSelect(value) } 
                            selectedDate={this.state.selectedEndDate}/>
                    </div>
                </div>
                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponentFilter reportId = { reportId } groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage = { defaultPage6 }
                        defaultToken = { defaultToken }
                        //defaultFilter= { [ filterCity ] }
                        defaultFilter= { [ filterBookingDatePeriod ] } 
                        //defaultFilter = { [ relativeDateFilter ] }
                        //defaultFilter = { [ relativeDateFilter, filterCity ] }  //применение нескольких фильтров
                        >   
                    </PowerBiComponentFilter>
                </div>

                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponent reportId={reportId} groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage={defaultPage3}
                        defaultToken={defaultToken}>
                    </PowerBiComponent>
                </div>
                {/*<div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponent reportId={reportId} groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage={defaultPage1}
                        defaultToken={defaultToken}>
                    </PowerBiComponent>
                </div>
                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponent reportId={reportId} groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage={defaultPage2}
                        defaultToken={defaultToken}>
                    </PowerBiComponent>
                </div>
                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponent reportId={reportId} groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage={defaultPage3}
                        defaultToken={defaultToken}>
                    </PowerBiComponent>
                </div>
                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponent reportId={reportId} groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage={defaultPage4}
                        defaultToken={defaultToken}>
                    </PowerBiComponent>
                </div>                
                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponent reportId={reportId} groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage={defaultPage52}
                        defaultToken={defaultToken}>
                    </PowerBiComponent>
                </div>
            */}
                <h1 style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>Dashboards</h1>
                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiDashboardComponent reportId={DashboardId} typeEmbed={typeDashboardEmbed} 
                        defaultToken={defaultToken}>
                    </PowerBiDashboardComponent>
                </div>
        
            </div>
        )
    }
}