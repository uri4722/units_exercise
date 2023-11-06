
import File from "./File";



function DisplayPath({ data }) {

    if (data) {
        return <div>
            <ul>{data.map(file => {
                return <File {...file} key={file.name} />
            })}</ul>
        </div>
    }

}
export default DisplayPath;

