import React from "react";
import "./Testimonial.css";

function Testimonial( { studentName, studentTestimonial } ) {
    return (
        <>
            <article className="testimonial">
                <h3>{ studentName }</h3>
                <p>{ studentTestimonial }</p>
            </article>
        </>
    );
}

export default Testimonial;