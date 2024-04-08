import React from "react";
import styles from "./styles.module.scss";

// assets
import Divisor from "../../assets/divisor.svg";

function Divider () {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src={Divisor} alt="divisor" />
            </div>
        </div>
    );
};

export default Divider;