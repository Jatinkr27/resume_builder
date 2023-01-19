import axios from 'axios';
import { useState } from 'react';
import React from 'react';

const url = "http://localhost:3500/education";

function Education()
{
    const[obj, setObj] = useState("") ;

          React.useEffect(() => { 
            axios.get(url).then((response) =>
             {setObj(response.data);});
            }, []);
          if (!obj)return null;  

          let result = obj.map(item => 

        <>          
          <table>
            <tbody>
                <tr>
                    <td>Institution Name</td>
                    <td>:</td>
                    <td>{item.institution}</td>
                </tr>
                <tr>
                    <td>Course Name</td>
                    <td> : </td>
                    <td> {item.course}</td>
                </tr>
                <tr>
                    <td>Location </td>
                    <td> : </td>
                    <td>{item.location}</td>
                </tr>
                <tr>
                    <td>Year Of Passing </td>
                    <td>{" "}:{" "}</td>
                    <td>{item.yop}</td>
                </tr>
            </tbody>
          </table>      
          <hr className='subhr'/>   
          </>
          );

    return(
        <div className='com'>
        <h1>Education</h1>
        <hr/>
        {result}            
        </div>

    )   
        
}
export default Education;