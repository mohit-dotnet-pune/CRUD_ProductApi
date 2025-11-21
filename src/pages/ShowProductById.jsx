import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ShowProductById = () =>{
    const [product,setProduct] = useState(null);
    const params = useParams();

useEffect(()=>{
    axios
        .get(`http://localhost:5145/api/Product/${params.id}`)
        .then(response =>{
            setProduct(response.data)
            // console.log(response.data)
        })
        .catch(error => {
                console.log("Error fetching product : ",error);
            })

    
        },[]);

        if(product==null) return <h1>Loading...</h1>

    return(
        <div className="productCard">
            {console.log()}
            {/* <img src={productDetail.productName} alt="" /> */}
            <h1>Name : {product.productName}</h1>
            <p>Price : ₹ {product.productPrice}</p>


        </div>
    )
}