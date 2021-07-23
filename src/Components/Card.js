import React from 'react';

const Card = ({id,name,email}) =>{

	return(

		<div className='tc bg-light-blue dib br3 ma2 grow bw2 shadow-5'>
		 <img alt="Robots" src={`https://robohash.org/${id}`} width='300' height='300'/>
		 <div>
		 	<h2>{name}</h2>
		 	<p>{email}</p>
		 </div>

		</div>


	);
}

export default Card;