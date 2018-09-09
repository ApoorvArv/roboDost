import React from 'react';

const Card = ({name,email,id}) => {
  //destructing  const {name,email,id} = props; 
    return (

        <div className="tc bg-light-blue dib br2 ma3 pa2 grow bw2 shadow-5">
            
            <img src={`https://robohash.org/${id}?250x250`} alt ='chehra'/>
            <div>
                <h2>
                    {name}
                </h2>
                <p> {email}
                </p>
            </div>
        </div>

    );

}

export default Card;