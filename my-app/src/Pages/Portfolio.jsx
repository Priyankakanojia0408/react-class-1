import React, { useState } from "react";
import Project from "../components/project.jsx"; // Ensure this path is correct
import Popup from "../components/Popup.jsx"; // Ensure this path is correct

// Import images
import forms from "../assets/duckform.png";
import grid from "../assets/greengrid.png";
import anothergrid from "../assets/red yellow grid.png";

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [search, setSearch] = useState("");
    const [selectedTags, setSelectedTags]= useState([]);

// Define projects data array
const projects = [
  {
    no: "1",
    title: "Duck Form",
    img: forms,
    tech: "HTML, CSS",
    repo: "https://github.com/Priyankakanojia0408/assignment_forms",
    description:
      "This is a simple form created using HTML and CSS. It includes various input fields and a submit button.",
    challenges:
      "One of the challenges I faced while creating this form was ensuring that it was responsive and looked good on different screen sizes.",
    What_I_learned:
      "Through this project, I learned how to structure HTML forms and style them effectively using CSS.",
  },
  {
    no: "2",
    title: "Green Grid",
    img: grid,
    tech: "HTML, CSS",
    repo: "https://github.com/Priyankakanojia0408/flexbox-assigment1",
    description:
      "This project showcases a green-themed grid layout created using HTML and CSS Flexbox.",
    challenges:
      "A challenge I encountered was aligning the grid items properly and ensuring consistent spacing between them.",
    What_I_learned:
      "I gained a better understanding of CSS Flexbox properties and how to create flexible grid layouts.",
  },
  {
    no: "3",
    title: "Red Yellow Grid",
    img: anothergrid,
    tech: "HTML, CSS",
    repo: "https://github.com/Priyankakanojia0408/assignment_grid_layout",
    description:
      "This project features a red and yellow-themed grid layout designed with HTML and CSS Grid.",
    challenges:
      "One challenge was managing the grid areas and ensuring that the colors were applied correctly to each section.",
    What_I_learned:
      "I learned how to effectively use CSS Grid to create complex layouts and manage grid areas.",
  },
];

    // Filter projects based on search input and selected tags
    const filteredProjects = projects.filter((project) => {
      const searchText = search.toLowerCase();

      const numberMatch = project.no.toString().includes(searchText);

      const nameMatch = project.title.toLowerCase().includes(searchText);

      const techMatch = project.tech.toLowerCase().includes(searchText);

      const descMatch = project.description.toLowerCase().includes(searchText);

      //filter based on selected tags
      const tagMatch = selectedTags.length === 0 || selectedTags.every(tag => project.tech.toLowerCase().includes(tag.toLowerCase()));

      return (numberMatch || nameMatch || techMatch || descMatch) && tagMatch;
    });
           

    //Handle tag selection
    const handleTagClick = (tag) => {
      setSelectedTags((prevTags) => {
      if (selectedTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  //Handle search suggestions(filter based on title and description
  const searchSuggestions = projects
    .filter((project) => {
      const searchText = search.toLowerCase();
      return (
        project.title.toLowerCase().includes(searchText) ||
        project.description.toLowerCase().includes(searchText)
      );
    })
    .map((project) => project.title);

  return (
    <div className="portfolio-container">
      <h1>My Projects</h1>

          <input 
        
        type="text" 
        placeholder="Seach projects..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px", 
          width: "50%", 
          marginBottom: "20px", 
          fontSize: "16px"
        }}
        />

        
      {/* Search Suggestions */}
      {search && (
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {searchSuggestions.map((suggestion, index) => (
            <li key={index} style={{ cursor: "pointer", padding: "5px", backgroundColor: "#f1f1f1", marginBottom: "5px" }}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      {/* Tag-based Filtering */}
      <div>
        <button onClick={() => handleTagClick("HTML")}>HTML</button>
        <button onClick={() => handleTagClick("CSS")}>CSS</button>
        <button onClick={() => handleTagClick("JavaScript")}>JavaScript</button>
        <button onClick={() => handleTagClick("React")}>React</button>
        <button onClick={() => handleTagClick("Node.js")}>Node.js</button>

      </div>



        <div>
        {filteredProjects.map((project, i) => (

           <Project
            key={i}
            {...project}
            onOpen={() => setSelectedProject(project)}
            />
            
        ))}
        </div>
    

      {/* Popup for selected project */}
        <Popup 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} // Close popup when clicking the overlay or close button
        />
    </div>
  );
}

export default Portfolio;
