import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

const Home = () => {
const [count, setCount] = useState(0);

return (
    <div className="contriner">
    <button onClick={ () => setCount(count + 1) } >{count}</button>
    </div>
);
};

export default Home;
