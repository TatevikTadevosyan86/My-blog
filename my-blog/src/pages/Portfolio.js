
import React, { useEffect, useState } from "react";
import './portfolio.css'

const backendUrl = process.env.REACT_APP_BACKEND_URL 

const Portfolio = () =>{
    const[projects, setProjects] = useState([]);

    useEffect(() =>{
        console.log("Backend URL:", backendUrl);  
        const fetchProjects = async()=>{
            const response = await fetch(`${backendUrl}/api/projects`)
            const data = await response.json();
            setProjects(data)
        };
        fetchProjects();
    },[])


    return (
        <div className="portfolio">
            <h1>My Projects</h1>
            {projects.map((project)=>(
                <div key={project._id} className="project-card">
                    <h2>{project.name}</h2>
                    <img src={project.imageURL} alt={project.name} />
                    <p>{project.description}</p>
                    <ul>
                        {project.technologies.map((lang) =>(
                            <li key={lang}>{lang}</li>
                        ))}
                    </ul>
                </div>
            ))}
        
        </div>
    )};
export default Portfolio;