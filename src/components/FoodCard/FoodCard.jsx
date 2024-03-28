
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import { axiosSecure } from "../../hooks/useAxiosSecure";



const FoodCard = ({item}) => {
    const {image,price,name,recipe,_id}=item;
    const navigate=useNavigate()
    const{user}=useAuth();
    const location=useLocation();
    
    const handleAddToCart=()=>{
      if(user && user.email){
        const cartItem={
          menuId:_id,
          email:user.email,
          name,
          image,
          price

        }
        axiosSecure.post('/carts',cartItem)
       .then(res=>{
        console.log(res.data)
        if(res.data.insertedId
          ){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
           
          }
       })
      }
      else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state:{from:location }})
          }
        });

      }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
  <div className="card-body flex flex-col items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;