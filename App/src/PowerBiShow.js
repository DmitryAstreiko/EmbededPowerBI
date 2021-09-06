import React from 'react';
import PowerBiComponent from './PowerBiComponent';
import PowerBiDashboardComponent from './PowerBiDashboardComponent';
import PowerBiComponentFilter from './PowerBiComponentFilter';
import { models } from 'powerbi-client';
import SimpleSelect from './SelectComponent';
//import DataPickerComponent from './DataPickerComponent';
import PickerComponent from './PickerComponent';
import * as moment  from 'moment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PowerBiDashboardComponentFilter from './PowerBiDashboardComponentFilter';

export default class PowerBiShow extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            valuesCity: null,
            selectedFirstDate: moment(new Date(2021, 1, 1)).format('YYYY-MM-DD'),
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
        const defaultPage6 = 'ReportSectionb19894274b7c8f3ac6de';  //test 1
        const defaultPage7 = 'ReportSectione0f670f2537e3e56e0a5';  //test 2
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

          const filterBookingDatePeriod  = {
            $schema: "http://powerbi.com/product/schema#advanced",
            target: {
                table: "VersionsForOpenings",
                column: "CreateDateAt"
            },
            logicalOperator: "And", //use "And" if exits only one condition 
            conditions: [
              {
                operator: "GreaterThanOrEqual",
                value: moment(this.state.selectedFirstDate).toISOString()
              },
              {
                operator: "LessThanOrEqual",
                value: moment(this.state.selectedEndDate).toISOString()
              }
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

                <h2 style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>Using dates and cities</h2>

                <div className={"d-flex justify-content-around"}>
                    <div>
                        <SimpleSelect selectedCity = { (value) => this.onChangeCity(value) }/>
                    </div>
                    <div>
                        <PickerComponent labelvalue={"Дата с"} 
                            onSelected={ (value) => this.onDateStartSelect(value) } 
                            selectedDate={this.state.selectedFirstDate}/>
                    </div>
                    <div>
                        <PickerComponent labelvalue={"Дата по"} 
                            onSelected={ (value) => this.onDateEndSelect(value) } 
                            selectedDate={this.state.selectedEndDate}/>
                    </div>
                </div>

                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <PowerBiDashboardComponentFilter reportId={DashboardId} typeEmbed={typeDashboardEmbed} 
                        defaultToken={defaultToken}
                        defaultFilter = { [ filterBookingDatePeriod ] }  //применение нескольких фильтров
                        >
                    </PowerBiDashboardComponentFilter>
                </div>

                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponentFilter reportId = { reportId } groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage = { defaultPage7 }
                        defaultToken = { defaultToken }
                        //defaultFilter= { [ filterCity ] }
                        //defaultFilter= { [ filterBookingDatePeriod ] } 
                        //defaultFilter = { [ relativeDateFilter ] }
                        defaultFilter = { [ filterBookingDatePeriod, filterCity ] }  //применение нескольких фильтров
                        >   
                    </PowerBiComponentFilter>
                </div>                

                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponentFilter reportId = { reportId } groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage = { defaultPage6 }
                        defaultToken = { defaultToken }
                        //defaultFilter= { [ filterCity ] }
                        //defaultFilter= { [ filterBookingDatePeriod ] } 
                        //defaultFilter = { [ relativeDateFilter ] }
                        defaultFilter = { [ filterBookingDatePeriod, filterCity ] }  //применение нескольких фильтров
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

                <h2 style={{ display: "flex", alignItems: "center" }}>Using count days in last</h2>
                <div className={"d-flex justify-content-around"} style={{ marginTop: "20px" }}>
                    <TextField 
                        id="standard-number"
                        label="Count days"
                        type="number"
                        value = {this.state.daysCountPeriod}
                        InputLabelProps={{
                            shrink: true,
                        }}>
                    </TextField>
                </div>
                
                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponentFilter reportId = { reportId } groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage = { defaultPage7 }
                        defaultToken = { defaultToken }
                        //defaultFilter= { [ filterCity ] }
                        //defaultFilter= { [ filterBookingDatePeriod ] } 
                        defaultFilter = { [ relativeDateFilter ] }
                        //defaultFilter = { [ filterBookingDatePeriod, filterCity ] }  //применение нескольких фильтров
                        >   
                    </PowerBiComponentFilter>
                </div>

                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponentFilter reportId = { reportId } groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage = { defaultPage6 }
                        defaultToken = { defaultToken }
                        //defaultFilter= { [ filterCity ] }
                        //defaultFilter= { [ filterBookingDatePeriod ] } 
                        defaultFilter = { [ relativeDateFilter ] }
                        //defaultFilter = { [ filterBookingDatePeriod, filterCity ] }  //применение нескольких фильтров
                        >   
                    </PowerBiComponentFilter>
                </div>

                <h2 style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>Other reports</h2>

                <div style={{ height: "20px" }}></div>
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

                {/*<div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponent reportId={reportId} groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage={defaultPage4}
                        defaultToken={defaultToken}>
                    </PowerBiComponent>
                </div>  
                */}    

                <div style={{ height: "20px" }}></div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <PowerBiComponent reportId={reportId} groupId={groupId} typeEmbed={typeReportEmbed} 
                        defaultPage={defaultPage51}
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