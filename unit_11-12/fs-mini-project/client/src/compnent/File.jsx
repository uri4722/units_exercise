import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import file from "./pic/file.jpg";
import folder from "./pic/folder.jpg";

function File({ name, isDirectory, size, birthtime }) {
    // console.log(name, isDirectory, size, birthtime);
    const location = useLocation();
    const [displayData, setDisplayData] = useState(false)
    const dataStr = "file name: " + name + "\nsize: " + size + '\nbirthtime: ' + birthtime;

    return <li key={name}>
        <div className="fileDiv">
            <img src={isDirectory ? folder : file} alt="file_img" />
            <Link to={isDirectory ? location.pathname + "/" + name : "/file" + location.pathname + "/" + name}>{name}</Link>
            <div onClick={() => setDisplayData(!displayData)}>
                {displayData ? "🔼" : "🔽"}
                {displayData ? (
                    <pre style={{ whiteSpace: 'pre-line' }}>{dataStr}</pre>
                ) : ""}

            </div>
        </div>
    </li>

}
export default File;