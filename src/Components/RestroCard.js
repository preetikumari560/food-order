 const RestroCard=(props)=>{
 
if (!props.tata || !props.tata.banner_image_es) return null;



const {banner_image_es, brand_name, description}=props.tata

//  console.log(banner_image_es,": "+ main_offering, ": " + brand_name,": " )
 return(
 <div id={props.id}>
 <img src={banner_image_es}></img>
 <div id="menuHeadChild" className="flex flex-col">
<h2 className="text-white">{brand_name}</h2>
<p className="text-white">{description}</p>
</div>

 </div>
 )
 }
 export default RestroCard