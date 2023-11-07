
import { useState } from "react";
import File from "./File";
import axios from "axios";
import { useLocation } from "react-router-dom";




function DisplayPath({ data, fetchData }) {
    const [folderNameInput, setFolderNameInput] = useState("");
    const [displayInput, setDisplayInput] = useState(false);
    const [message, setMessage] = useState('');
    const { pathname } = useLocation();

    async function addFolder() {
        setDisplayInput(!displayInput);
        if (displayInput) {
            const response = await axios.post("http://localhost:3001" + pathname, { folderName: folderNameInput });
            setFolderNameInput("");
            fetchData();
            setMessage(response.data);
        }

    }
    function handleChange({ target }) {
        setFolderNameInput(target.value)
    }


    if (data) {
        return <div>
            <ul>{data.map(file => {
                return <File {...file} key={file.name} />
            })}</ul>
            <button onClick={addFolder}>{displayInput ? 'add' : 'add new folder'}</button>
            {displayInput && <input type="text" onChange={handleChange} value={folderNameInput} />}
            <h4 style={{ color: 'green', margin: "30px" }}>{message}</h4>
        </div>
    }

}
export default DisplayPath;

