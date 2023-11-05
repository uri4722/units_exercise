import { Link } from "react-router-dom";


function DisplayPath(props) {
    if (props) {
        console.log(props);
        return <div>

            <ul>{props.data.map(f => <li key={f.name}><Link to={`http://localhost:3000/files/${f.name}`}>{f.name}</Link></li>)}</ul>
        </div>
    }

}
export default DisplayPath;