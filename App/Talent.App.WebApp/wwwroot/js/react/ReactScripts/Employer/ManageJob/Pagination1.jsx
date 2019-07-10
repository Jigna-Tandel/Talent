import React from 'react'
import { Link } from 'react-router-dom'
//import { CustomerMain } from './Customer/CustomerMain';



export const Pagination1 = ({postsPerPage,totalPosts,locationurl,paginate1}) => {
    
    const pageNumbers=[];

    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
    {
        pageNumbers.push(i);
    }
  
    return (
       
        <nav>
            <ul className='item'>
            {pageNumbers.map(number=>(
            <li key={number} 
            className='item'
           
            >
                 <a onClick={()=>paginate1(number)} 
                 href={locationurl}
                 className='link item'
                 //href='./ManageJobs'
                // className="btn btn-primary"
                 >
                    {number}
                </a> 
                
            </li>))}
                
            </ul>

        </nav>
       
    )
}



