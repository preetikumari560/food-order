 const RestroCard=(props)=>{
 
if (!props.tata || !props.tata.banner_image_es || !props.tata.description) return null;

const shortText = (text, max = 25) => 
  text.length > max ? text.slice(0, max) + "..." : text;

const {banner_image_es, brand_name, description}=props.tata

//  console.log(banner_image_es,": "+ main_offering, ": " + brand_name,": " )
 return(
 <div id={props.id}>
 <img src={banner_image_es}></img>
 <div  className=" menuHeadChild flex flex-col ">
<h4 className="text-white">{brand_name}</h4>
<p className="text-white">{props.id==="restroCard"?shortText(description):description}</p>
</div>

 </div>
 )
 }
 export default RestroCard