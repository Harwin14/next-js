// import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Products = () => {
    // const [products, setProducts] = useState([]);
    const { data, error } = useSWR("http://localhost:5000/products", fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    // useEffect(() => {
    //     const getProducts = async () => {
    //         const response = await fetch("http://localhost:5000/products");
    //         const data = await response.json();
    //         setProducts(data);
    //     };
    //     getProducts();
    // }, []);

    return (
        <div>
            {data.map((item) => (
                <ul key={item.id}>
                    <li>
                        {item.name} - {item.price}
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default Products;

// export const getServerSideProps = async () => {
//     const response = await fetch("http://localhost:5000/products");
//     const data = await response.json();

//     return {
//         props: {
//             products: data,
//         },
//     };
// };
