import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";

export const DeleteProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const onClickDeleteBtn = () => {
        axios
            .delete(`http://localhost:5145/api/Product?id=${id}`)
            .then((response) => {
                alert(`Product deleted successfully!`);
                console.log(response);
                navigate("/");
            })
            .catch((error) => {
                console.log("Error deleting product:", error);
                alert("Delete failed!");
            });
    };

    return (
        <div>
            <h1>Delete Product ID: {id}</h1>
            <button onClick={onClickDeleteBtn}>Delete</button>
            <button>
                <NavLink to="/">Cancel</NavLink>
            </button>
        </div>
    );
};
