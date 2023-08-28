import React from "react";

const Section = ({title,des,id}) => {

    return(
            <div className="sections">
               <hr></hr>
               <h1 id={id}>{title}</h1>
               <p>{des}</p>
            </div>
        );

}

export default Section;