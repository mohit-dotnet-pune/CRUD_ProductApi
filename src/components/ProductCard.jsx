import { NavLink } from "react-router-dom";

export const ProductCard = ({productDetail}) =>{
    return (
        <div >
            {console.log()}
            {/* <img src={productDetail.productName} alt="" /> */}
            <h1>Name : {productDetail.productName}</h1>
            <p>Price : ₹ {productDetail.productPrice}</p>

            <NavLink to={`showbyid/${productDetail.productId}`}><button>Checkout</button></NavLink>
            <NavLink to={`deletebyid/${productDetail.productId}`}><button>Delete Product</button></NavLink>
            <NavLink to={`updatebyid/${productDetail.productId}`}><button>Update Product</button></NavLink>
        </div>
    );
};