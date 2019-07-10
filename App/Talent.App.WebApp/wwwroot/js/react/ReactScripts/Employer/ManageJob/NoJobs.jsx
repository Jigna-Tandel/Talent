import React, { Component } from 'react'

export class NoJobs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
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
                                    <h5>Title :
                                    
                        <select className="ui right labeled dropdown"
                            placeholder="job"
                            name="job">

                            <option value="">Select a Job</option>
                            
                        </select>
                         
                        Sort by Date :
                        <select className="ui right labeled dropdown">
                            <option>Newest First</option>
                            <option>Oldest First</option>
                        </select>
                        </h5>                   
                    </div>
                                                      
                 </div>
               
                <div className="row">
                                <div className="sixteen wide left aligned padded column">
                                    <h2>No Jobs found</h2>
                                </div>
                                                      
                    </div>
                    </div>
            </div>
            </div>
           
        )
    }
}
