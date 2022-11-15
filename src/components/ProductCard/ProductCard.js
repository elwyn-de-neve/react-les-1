import React from "react";
import styles from "./ProductCard.module.css";

function ProductCard( { title, price } ) {
    return (
        <>
            <div className={ styles.product }>
                <h3>{ title }</h3>
                <span>{ price },-- euro</span>
            </div>
        </>
    );
}

export default ProductCard;