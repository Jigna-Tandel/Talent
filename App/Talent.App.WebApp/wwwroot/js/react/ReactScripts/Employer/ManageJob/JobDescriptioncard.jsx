import React, { Component } from 'react'
//import {CreateJob} from '../CreateJob/CreateJob';



export class JobDescriptioncard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.handleclick=this.handleclick.bind(this)
    }

    handleclick(){
        window.location = "./PostJob";
    }
    
    render() {
       
        console.log('Description',this.props.loadJobs)
        return (
            <div>
                <h5>Job Description</h5>
               
                <div className="ui grid">
               
                <div className="row">
                <div className="sixteen wide  column">
                
                        
                        <table>
                            <tbody>
                            <tr>
                            {this.props.loadJobs.map(item =>
                                <td key={item.id}  className="sixteen wide left aligned padded column">
                                <table className="ui segment" >
                                    <tbody>
                                    <tr>
                                        <td >{item.title}</td>
                                    </tr>

                                    <tr>
                                        <td> {item.location.city},{item.location.country}</td>
                                    </tr>

                                  <tr>
                                        <td> {item.summary}</td>
                                    </tr>
                                    <tr>
                                        <td> {item.Description}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table>
                                                <tbody>
                                                <tr>
                                            <td> <button >Expired</button></td>
                                             <td></td>  
                                             <td></td>     
                                             <td> <button className="right item" 
                                             onClick={this.handleclick} >Create</button></td>
                                             <td> <button className="right item">Edit</button></td>
                                             <td><button className="right item">Copy</button></td>
                                           
                                           
                                            
                                            </tr>
                                            </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                               
                                
                                </td>
                                
                            )}
                            </tr>
                           
                            </tbody>
                        </table>
                      
                        
                    </div>
                 
                   
                </div>
                </div>
               </div>
        )
    }
}


