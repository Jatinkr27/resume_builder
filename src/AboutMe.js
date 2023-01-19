import axios from 'axios';
import { useState, useEffect } from 'react';

function AboutMe(){
    // const [pname, setPname] = useState("");
    // const [pimg, setPimg] = useState("");
    // const [psummary, setPsummary] = useState("");
    // const [resumeArray, setResume] = useState([]);
    const [myState, setMyState] = useState({});
    useEffect(() => {
        
    
        let url1 = "http://localhost:3500/aboutme";
        axios.get(url1).then( resData => 
            {
            setMyState({
                ...myState,
                name: resData.data.name,
                image: resData.data.image,
                summary: resData.data.summary,
              });
            });
    
        
      }); 

      useEffect(() => {
        let url2 = "http://localhost:3500/social";
        axios.get(url2).then( resData => 
            {
            setMyState({
                ...myState,
                linkedin: resData.data.linkedin,
                github: resData.data.github,
                dpn: resData.data.dpn
              });
            });
    
  
      }); 

      
    
    
    let result =  (
        <>
        <div className="profile col-lg" align="center">
            <h1>About Me</h1><br/>
            <img src={myState.image} height="150px" width="150px" /><br/><br/>
            <h2>{myState.name}</h2>
            <span> <a href={myState.linkedin} target="_blank"><i className="bi bi-linkedin"></i></a> </span>
            <span> <a href={myState.github} target="_blank"><i className="bi bi-github"></i></a> </span>
            <span> <a href={myState.dpn} target="_blank"><i className="bi bi-person-bounding-box"></i></a> </span>
        </div>
        <br/>
        <div className="summary">
            <p>{myState.summary}</p>
            
        </div>
        </>);

  
    return(
        <>
            
            
            <div>
                <div>
                    {result}
                </div>
            </div>
        </>
    )
}

export default AboutMe;