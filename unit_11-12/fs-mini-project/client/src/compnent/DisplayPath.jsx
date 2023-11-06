import { Link, useLocation } from "react-router-dom";
import file from "./pic/file.jpg";
import folder from "./pic/folder.jpg";
import { useState } from "react";



function DisplayPath({ data }) {
    const location = useLocation();
    const [displayData, setDisplayData] = useState(false)
    if (data) {

        return <div>
            <ul>{data.map(f => {
                console.log(f);
                const dataStr = "file name: " + f.name + "size: " + f.size + 'birthtime: ' + f.birthtime;
                return <li key={f.name}>
                    <div className="fileDiv">
                        <img src={f.isDirectory ? folder : file} alt="file_img" />
                        <Link to={f.isDirectory ? location.pathname + "/" + f.name : "/file" + location.pathname + "/" + f.name}>{f.name}</Link>
                        <div onClick={() => setDisplayData(!displayData)}>
                            🔽
                            {displayData ?
                                dataStr : ""}
                        </div>
                    </div>
                </li>

            })}</ul>
        </div>
    }

}
export default DisplayPath;