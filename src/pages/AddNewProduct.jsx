import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddNewProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [getCategory, setGetCategory] = useState(null);

    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const newProduct = {
            productName: name,
            productDescription: description,
            productPrice: Number(price),
            categoryId: Number(category)
        }

        console.log("Data to post : ", newProduct);

        try {
            const response = await axios.post(
                `http://localhost:5145/api/Product`,
                newProduct
            )

            alert("product added successfully");
            console.log(response.data);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        axios
            .get(`http://localhost:5255/api/category`)
            .then(response => {
                setGetCategory(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error fetching product : ", error);
            })
    }, []);

    if (getCategory == null) return <h1>Loading</h1>
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div className="formItem">
                    <label htmlFor="name" value={name} >Product Name</label>
                    <input type="text" name="ProductName" id="name" onChange={(e) => setName(e.target.value)} />
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
                    <select name="CategoryId" value={category} onChange={(e) => setCategory(e.target.value)}>

                        <option value="">Select category</option>

                        {getCategory.map((cat) => (
                            <option key={cat.categoryId} value={cat.categoryId}>
                                {cat.categoryName}
                            </option>
                        ))}
                    </select>

                </div>
                <button type="submit" value="send">Submit</button>
            </form>
        </div>
    );
}