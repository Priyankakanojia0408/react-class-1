import "./project.css";

function Project(props){
    return (
        <div className="Project">
            <h1> Poject: {props.no}</h1>
            <h2> Title: {props.title}</h2>
            <img className="image" src={props.img} alt={props.desc} />
            <h3> Tech used: {props.tech}</h3>
            <h3> Repo:<a href={props.repo}> clickhere </a></h3>
            <p>{props.description}</p>
            <p>{props.challenges}</p>
            <p>{props.What_I_learned}</p>
        </div>

    )
}
export default Project;