import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import file from "./pic/file.jpg";
import folder from "./pic/folder.jpg";
import axios from "axios";

function File({ name, isDirectory, size, birthtime, data, setData, setMessage }) {
    const { pathname } = useLocation();
    const [displayData, setDisplayData] = useState(false)
    const [displayInputRename, setDisplayInputRename] = useState(false);
    const [renameNameInput, setRenameNameInput] = useState('');
    const dataStr = "file name: " + name + "\n size: " + size + '\n birthtime: ' + birthtime;
    const handelDeleteFile = async () => {
        try {
            const response = await axios.delete("http://localhost:3001" + pathname + '/' + name);
            const updateData = data.filter((file) => file.name !== name);
            setMessage(name + "  has been deleted successfully")
            setData(updateData);
        } catch (error) {
            console.error(error);
        }

    }
    const handelRenameFile = async () => {
        try {
            setDisplayInputRename(!displayInputRename);
            const response = await axios.put("http://localhost:3001" + pathname + '/' + name, { rename: renameNameInput });
            let updateData = data.find((file) => file.name === name);
            updateData.name = renameNameInput;
            setData(data);
            setMessage("The name has been changed successfully")
            setRenameNameInput("");

        } catch (error) {
            console.error(error);
        }

    }

    function handleChangeRename({ target }) {
        setRenameNameInput(target.value);
    }
    return <li key={name}>
        <div className="fileDiv">
            <img src={isDirectory ? folder : file} alt="file_img" />
            <button onClick={handelDeleteFile}>Delete</button>
            <button onClick={handelRenameFile}>Rename</button>
            {displayInputRename && (
                <input type="text" onChange={handleChangeRename} value={renameNameInput} />
            )}
            <Link to={pathname + "/" + name}>{name}</Link>
            <div onClick={() => setDisplayData(!displayData)}>
                {displayData ? "🔼" : "🔽"}
                {displayData ? (
                    <pre style={{ whiteSpace: 'pre-line' }}>{dataStr}</pre>
                ) : ""}

            </div>
        </div>
    </li >

}
export default File;