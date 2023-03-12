import { useState } from "react";
const Home = () => {
    
    const [count, setCount] = useState(0)

return (
    <div className="home">
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    </div>
);
};

export default Home;
