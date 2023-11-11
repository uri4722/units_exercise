
import { useState } from "react";
import File from "./File";
import axios from "axios";
import { useLocation } from "react-router-dom";


function DisplayPath({ data, setData, fetchData }) {
    const [folderNameInput, setFolderNameInput] = useState("");
    const [displayInput, setDisplayInput] = useState(false);
    const [displayInputFile, setDisplayFileInput] = useState(false);
    const [message, setMessage] = useState('');
    const { pathname } = useLocation();

    async function addFile() {
        setDisplayFileInput(!displayInputFile);
        if (displayInputFile) {
            const response = await axios.post("http://localhost:3001" + pathname + "/" + folderNameInput);
            setData([...data, {
                name: folderNameInput,
                birthtime: response.data.birthtime,
                isDirectory: false,
                size: response.data.size
            }])
            console.log(response.data);
            setMessage(folderNameInput + " " + response.statusText);
            setFolderNameInput("");
        }
    }

    async function addFolder() {
        setDisplayInput(!displayInput);
        if (displayInput) {
            const response = await axios.post("http://localhost:3001" + pathname, { folderName: folderNameInput });
            setData([...data, {
                name: folderNameInput,
                birthtime: response.data.birthtime,
                isDirectory: true,
                size: response.data.size
            }])
            console.log(response);
            setMessage(folderNameInput + " " + response.statusText);
            setFolderNameInput("");
        }
    }

    function handleChange({ target }) {
        setFolderNameInput(target.value)
    }


    if (data) {
        return <div>
            <ul>{data.map(file => {
                return <File {...file} key={file.name} fetchData={fetchData} />
            })}</ul>
            <button onClick={addFolder}>{displayInput ? 'add' : 'add new folder'}</button>
            <button onClick={addFile}>{displayInputFile ? 'add' : 'add new File'}</button>
            <br />
            {displayInput && <input type="text" onChange={handleChange} value={folderNameInput} />}
            {displayInputFile && <input type="text" onChange={handleChange} value={folderNameInput} />}
            <h4 style={{ color: 'green', margin: "30px" }}>{message}</h4>
        </div>
    }

}
export default DisplayPath;

