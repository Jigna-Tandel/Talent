import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import LoggedInBanner from '../../Layout/Banner/LoggedInBanner.jsx';
import { LoggedInNavigation } from '../../Layout/LoggedInNavigation.jsx';
import { JobSummaryCard } from './JobSummaryCard.jsx';
import { BodyWrapper, loaderData } from '../../Layout/BodyWrapper.jsx';
import { Pagination, Icon, Dropdown, Checkbox, Accordion, Form, Segment, PaginationItem } from 'semantic-ui-react';
import moment from 'moment';
import { LoadJobData } from './LoadJobData.jsx';
import { NoJobs } from './NoJobs.jsx';
import {Pagination1} from './Pagination1.jsx'



export default class ManageJob extends React.Component {
    constructor(props) {
        super(props);
        let loader = loaderData
        loader.allowedUsers.push("Employer");
        loader.allowedUsers.push("Recruiter");
        //console.log(loader)
        this.state = {
            
            loadJobs: [],
            jobData: {
                id:"",
                employerID:"",
                title: "",
                description: "",
                summary: "",
                applicantDetails: {
                    yearsOfExperience: { years: 1, months: 1 },
                    qualifications: [],
                    visaStatus:[]
                }
               /* jobDetails: {
                    categories: { category: "", subCategory: "" },
                    jobType: [],
                    startDate: moment(),
                    salary: { from: 0, to: 0 },
                    location: { country: "", city: ""}
                }*/
            },
            loaderData: loader,
            activePage: 1,
            sortBy: {
                date: "desc"
            },
            filter: {
                showActive: true,
                showClosed: false,
                showDraft: true,
                showExpired: true,
                showUnexpired: true
            },
            totalPages: 1,
            activeIndex: "",
           

            
        }
        this.loadData = this.loadData.bind(this);
        this.init = this.init.bind(this);
        this.loadNewData = this.loadNewData.bind(this);
      
        //your functions go here
    };

  /*  init() {
        let loaderData = TalentUtil.deepCopy(this.state.loaderData)
        loaderData.isLoading = false;
       // this.setState({ loaderData });//comment this

       // set loaderData.isLoading to false after getting dat
        this.loadData(() =>
           this.setState({ loaderData })
          
        )
       // loaderData.isLoading=false;
       
                
        console.log('loaderdata',this.state.loaderData)
        console.log('loadjobs in init',this.state.loadJobs)
    }*/

    init() {
        let loaderData = this.state.loaderData;
        loaderData.allowedUsers.push("Employer");
        loaderData.allowedUsers.push("Recruiter");
        loaderData.isLoading = false;
        this.setState({ loaderData, })
    }

    componentDidMount() {
        this.loadData()
        //this.init();
    };

   /* loadData()
         {
        var link = 'http://localhost:51689/listing/listing/getSortedEmployerJobs';
        var cookies = Cookies.get('talentAuthToken');
       // your ajax call and other logic goes here
         }*/
         loadData() {
            var link = 'http://localhost:51689/listing/listing/getEmployerJobs';
            //var link = 'http://localhost:51689/listing/listing/getSortedEmployerJobs';
            var cookies = Cookies.get('talentAuthToken');
           // your ajax call and other logic goes here
    
           $.ajax({
            url: link,
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res) {
                console.log('res',res)
                if (res.success == true) {
                   /* res.jobData.jobDetails.startDate = moment(res.jobData.jobDetails.startDate);
                    res.jobData.jobDetails.endDate = res.jobData.jobDetails.endDate ? moment(res.jobData.jobDetails.endDate) : null;
                    res.jobData.expiryDate = res.jobData.expiryDate
                        ? moment(res.jobData.expiryDate) > moment()
                            ? moment(res.jobData.expiryDate) : moment().add(14,'days') : null;
                            */
                           console.log('res',res)
                    this.setState({ loadJobs: res.myJobs })
                        console.log('loadJobs in loaddata',this.state.loadJobs)
                } else {
                    TalentUtil.notification.show(res.message, "error", null, null)
                }
            }.bind(this)
        })
        this.init()
        }
    

    

    loadNewData(data) {
        var loader = this.state.loaderData;
        loader.isLoading = true;
        data[loaderData] = loader;
        this.setState(data, () => {
            this.loadData(() => {
                loader.isLoading = false;
                this.setState({
                    loadData: loader
                })
            })
        });
    }

         

    render() {

       
        console.log('inside render loadjobs',this.state.loadJobs)

        if(this.state.loadJobs.length>0)
        {
        return (
         
            <BodyWrapper reload={this.init} loaderData={this.state.loaderData}>
            <section className="page-body">        
                <LoadJobData loadJobs={this.state.loadJobs}>
                       
                </LoadJobData>
               
                             
                                   </section>   
                </BodyWrapper>
               
                 
            
                 )
        }
            else
           {
            return(
              
                <BodyWrapper reload={this.init} loaderData={this.state.loaderData}>
                <div >
                        <NoJobs></NoJobs>  
                       
                  </div>
                  </BodyWrapper>
                 
             
                  
            )
           }
               
            
    }
}