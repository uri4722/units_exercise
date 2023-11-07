
import { useState } from "react";
import File from "./File";
import axios from "axios";
import { useLocation } from "react-router-dom";




function DisplayPath({ data }) {
    const [folderNameInput, setFolderNameInput] = useState("");
    const [displayInput, setDisplayInput] = useState(false);
    const { pathname } = useLocation();

    async function addFolder() {
        setDisplayInput(!displayInput);
        if (displayInput) {
            console.log(folderNameInput);
            const response = await axios.post("http://localhost:3001" + pathname, folderNameInput);
            setFolderNameInput("");
            console.log(response.data);
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

        </div>
    }

}
export default DisplayPath;

