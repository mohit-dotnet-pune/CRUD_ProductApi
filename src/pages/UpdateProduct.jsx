import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useNavigation, useParams } from "react-router-dom";

export const UpdateProduct = () =>{
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    // const [getProduct, setGetProduct] = useState(null);
    const [getCategory, setGetCategory] = useState(null);
    // const [product,setProduct] = useState(null);
    const params = useParams();
    const navigation = useNavigate();

const onFormSubmit = async (e) => {
        e.preventDefault();

        const updatedProduct = {
            productId: params.id,
            productName: name,
            productDescription: description,
            productPrice: Number(price),
            categoryId: Number(category)
        };

        try {
            const response = await axios.put(
                `http://localhost:5145/api/Product`,
                updatedProduct
            );

            alert("Product updated successfully!");
            console.log(response.data);
            navigation("/");
        } catch (error) {
            console.log("Error updating product:", error);
        }
    };

 useEffect(() => {
        const fetchData = async () => {
            try {
                const prodRes = await axios.get(
                    `http://localhost:5145/api/Product/${params.id}`
                );

                const prod = prodRes.data;

                console.log(prodRes.data);

                // SET INITIAL VALUES IN STATE4
                
                setName(prod.productName);
                setDescription(prod.productDescription);
                setPrice(prod.productPrice);
                setCategory(prod.categoryId);

                const catRes = await axios.get(
                    "http://localhost:5255/api/category"
                );

                console.log(catRes.data);

                setGetCategory(catRes.data);
            } catch (error) {
                console.log("Error fetching:", error);
            }
        };

        fetchData();
    }, [params.id]);

// if(setName=="" && getCategory==null) return <h1>Loading...</h1>

    return(
        <div>
            <form onSubmit={onFormSubmit}>
                <div className="formItem">
                    <label htmlFor="name" >Product Name</label>
                    <input type="text" name="ProductName" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="formItem">
                    <label htmlFor="description">Product Description</label>
                    <textarea name="ProductDescription" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="formItem">
                    <label htmlFor="price" >Price</label>
                    <input type="number" name="ProductPrice" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                 <div className="formItem">
                    <label htmlFor="category">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select category</option>

                        {getCategory !=null && getCategory.map((cat) => (
                            <option key={cat?.categoryId} value={cat?.categoryId}>
                                {cat?.categoryName}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}