import React from "react";
import styles from "./styles.module.scss";

// assets
import Divisor from "../../assets/divisor.svg";

function Divider () {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img className={styles.divisor} src={Divisor} alt="divisor" />
            </div>
        </div>
    );
};

export default Divider;
