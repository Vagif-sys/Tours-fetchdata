import { useState } from "react"


const SingleTour=({id,image,info,name,price,removeTour})=>{

   const [readMore, setReadMore] = useState(false)
   console.log(info.substring(0,10))
   return(
     <article className="single-tour">
      <img src={image} alt={name} className="img"/>
      <span className="tour-price">{price}</span>
      <div className="tour-info">
         <h5>{name}</h5>
         <p>{readMore ? info : `${info.substring(0,300)}...`}
          <button type='button' className="info-btn" onClick={()=>setReadMore(!readMore)}>
             {readMore ? ' show less' : 'read more'}
          </button>
         </p>
         <button className="btn btn-block delete-btn" onClick={()=>removeTour(id)}>
            Not Interested
         </button>
      </div>
   </article>
   )
    
  
}

export default SingleTour