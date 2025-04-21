import {createRoot} from "react-dom/client"
const heading = <h1>Welcome To Parcel</h1>

const root = createRoot(document.getElementById('root'));
console.log(root);
root.render(heading);