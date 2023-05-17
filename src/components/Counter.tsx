import {useState} from "react";
import styles from  "./counter.module.scss"
export const Counter = () => {

    const [count, setCount]=useState(0)



    return (
        <div>
            <h1 className={styles.button}>{count}</h1>
            <button onClick={()=> setCount(count + 1)}> click</button>
        </div>
    );
};