import React, { Component } from 'react'
import { Dropdown} from 'semantic-ui-react'
import { JobDescriptioncard } from './JobDescriptioncard.jsx';
import {Pagination1} from './Pagination1.jsx'




export class LoadJobData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loadJobs:this.props.loadJobs,
             jobid:this.props.loadJobs.id,
              //Pagination
            currentPage:1,
            setCurrentPage:1,
            postsPerPage:2,
            setPostsPerPage:2
            
        }
        this.handleChange=this.handleChange.bind(this)
        this.paginate1=this.paginate1.bind(this)
        console.log('Jobdata state in constructor:',this.state.loadJobs)
        console.log('Jobdata props in constructor:',this.props.loadJobs)
        console.log('id in constructor:',this.state.jobid)
    }
    
    // componentDidMount(){
    //     this.setState({
    //         loadJobs:this.props.loadJobs,
    //         jobid:this.props.loadJobs.id
    //     })

    //     console.log(' state in componentdidmount:',this.state)
    //     console.log('id in componentdidmount:',this.state.loadJobs.id)
    //     console.log('Jobdata state in componentdidmount:',this.state.loadJobs)
    // }

    handleChange(event) {
    if(event.target.value!="")
        {
       this.setState({
           jobid:event.target.value
       })
      // alert(`${this.state.jobid} `)
    }
    else
    {alert('Choose Job')}

      
    }

    paginate1(pageNumber){
        this.setState({currentPage:pageNumber})
       // alert(`${pageNumber} click`)
    }
    render() {
       
        console.log('Jobdata:',this.props.loadJobs)
        const locationurl=window.location.href
        console.log('location',locationurl)

        // Get Current Posts
         const indexOfLastPost=this.state.currentPage*this.state.postsPerPage
         const indexOfFirstPost=indexOfLastPost-this.state.postsPerPage
        const currentposts=this.state.loadJobs.slice(indexOfFirstPost,indexOfLastPost)
        console.log('currentposts :',{currentposts})

        let loadJobs = this.props.loadJobs;
        let optionjobtitle = loadJobs.map((loadJob) =>
                <option key={loadJob.id} 
                value={loadJob.id}
                >{loadJob.title}</option>
            );

            console.log('Jobdata state in rendr:',this.state.loadJobs)
           
    

        return (
           
            <div>
            <div className ="ui container">
                <div className="ui grid">
                    <div className="row">
                                <div className="sixteen wide left aligned padded column">
                                    <h2>List of Jobs</h2>
                                </div>
                                                      
                    </div>
                     <div className="row">
                                <div className="sixteen wide left aligned padded column">
                                <div className="eight wide left aligned padded column">  
                                    <h5>Title :
                                    
                        <select className="ui right labeled dropdown"
                            placeholder="job"
                            value={this.state.jobid}
                            onChange={this.handleChange}
                            name="job">

                            <option value="">Select a Job</option>
                            {optionjobtitle}
                        </select>
                       
                       
                        
                        Sort by Date :
                        <select className="ui right labeled dropdown">
                            <option>Newest First</option>
                            <option>Oldest First</option>
                        </select>
                                        </h5> 
                        </div>  
                        <div className="eight wide left aligned padded column">  
                                    
                                        </div>                
                    </div>
                                                      
                 </div>
                
                 <div className="row">
                                <div className="sixteen wide left aligned padded column">
                   {/* <JobDescriptioncard loadJobs={this.state.loadJobs}></JobDescriptioncard>  */}
                   <JobDescriptioncard loadJobs={currentposts}
                    className='job'></JobDescriptioncard> 
                   <Pagination1 
                      postsPerPage={this.state.postsPerPage} 
                   
                    totalPosts={this.state.loadJobs.length}
                    locationurl={this.locationurl}
                    paginate1={this.paginate1}
                     /> 
                </div>
                <div className="row">
                                <div className="sixteen wide left aligned padded column">
                                    <div></div>
                  
                </div>
                </div>
            </div>
            </div>
            </div>
               
           
    </div>
        )
    }
}


