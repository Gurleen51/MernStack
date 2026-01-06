import React from "react";
import {useState} from "react";

const Increment = () => {
    const [count, setCount] = useState(0);
    return (   
        <>
            <div className="increment-container">
                <div className="card-increment">
                    <div className="value">{count}</div>
                    <div className="btn">
                        <button 
                            onClick={() => {
                                setCount((prev) => prev + 1);
                            }}
                            >
                                Increment
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Increment;