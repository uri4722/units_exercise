function DisplayPath(props) {
    if (props) {
        console.log(props);
        return <div>
            <ul>{props.data.map(f => <li key={f.name}>{f.name}</li>)}</ul>
        </div>
    }

}
export default DisplayPath;