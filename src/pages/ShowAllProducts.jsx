import { useEffect, useState } from "react"
import { ProductCard } from "../components/ProductCard";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";

export const ShowAllProducts = () =>{
    const [products,setProducts] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            axios
            .get(`http://localhost:5145/api/Product`)
            .then( response =>{
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error fetching product : ",error);
            })
        },2000)
         

    },[])

    if(products == null) return <ImSpinner9 />
    return(
        <div className="showAllProducts-container">
                {products.map((product) =>(
                    <div key={product.productId} className="productCard">
                        <ProductCard productDetail={product}/>
                    </div>
                ))}
        </div>
    )
}