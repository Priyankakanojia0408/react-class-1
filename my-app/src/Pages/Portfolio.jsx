import Project from "../components/project";
import { useState } from "react";



import  forms from "../assets/duckform.png";
import grid from "../assets/greengrid.png";
import anothergrid from "../assets/red yellow grid.png";

function Portfolio() {
    const[ showProjects, setShowProjects]= useState (false);
    
return(

    <div>
        <button onClick={() => setShowProjects(!showProjects)}>
            {showProjects ? "Hide Projects" : "Show Projects"}
        </button>

        {showProjects && (


    <div>

        <Project
    
    
        no="1"
        title="Duck Form"
        img={forms}
        desc="A form made with HTML and CSS"
        tech="HTML, CSS"
        repo="https://github.com/Priyankakanojia0408/assignment_forms"
        description="This is a simple form created using HTML and CSS. It includes various input fields and a submit button."
        challenges="One of the challenges I faced while creating this form was ensuring that it was responsive and looked good on different screen sizes."
        What_I_learned="Through this project, I learned how to structure HTML forms and style them effectively using CSS."
    />

    <Project
    
        no="2"
        title="Green Grid"
        img={grid}
        desc="A green-themed grid layout"
        tech="HTML, CSS"
        repo="https://github.com/Priyankakanojia0408/flexbox-assigment1"
        description="This project showcases a green-themed grid layout created using HTML and CSS Flexbox."
        challenges="A challenge I encountered was aligning the grid items properly and ensuring consistent spacing between them."
        What_I_learned="I gained a better understanding of CSS Flexbox properties and how to create flexible grid layouts."
    />
    
    <Project
        no="3"
        title="Red Yellow Grid"
        img={anothergrid}
        desc="A red and yellow-themed grid layout"
        tech="HTML, CSS"
        repo="https://github.com/Priyankakanojia0408/assignment_grid layout"
        description="This project features a red and yellow-themed grid layout designed with HTML and CSS Grid."
        challenges="One challenge was managing the grid areas and ensuring that the colors were applied correctly to each section."
        What_I_learned="I learned how to effectively use CSS Grid to create complex layouts and manage grid areas."
    />
    </div>
    
)
}

    </div>
);
}
export default Portfolio;