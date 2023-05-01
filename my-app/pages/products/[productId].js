// import { useState, useEffect } from "react";
import useSWR from "swr";

import { useRouter } from "next/router";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProductDetail = () => {

    
    // if (router.isFallback) {
        //     return <div>Loading...</div>;
        // }
        // const [name, setName] = useState("");
        // const [price, setPrice] = useState("");
        const router = useRouter();
        const { productId } = router.query;
        const { data, error } = useSWR(`http://localhost:5000/products/${productId}`, fetcher);
        if (error) return <div>Failed to load</div>;
        if (!data) return <div>Loading...</div>;
 
    // useEffect(() => {
    //     const getProductById = async () => {
    //         const response = await fetch(
    //             `http://localhost:5000/products/${productId}`
    //         );
    //         const data = await response.json();
    //         setName(data.name);
    //         setPrice(data.price);
    //     };
    //     getProductById();
    // }, [productId]);

    return (
        <div>
            {data.name} - {data.price}
        </div>
    );
};

export default ProductDetail;

// export const getStaticPaths = async () => {
//     const response = await fetch(`http://localhost:5000/products?_limit=2`);
//     const data = await response.json();
//     const paths = data.map((item) => ({
//         params: {
//             productId: `${item.id}`,
//         },
//     }));
//     return {
//         paths,
//         //false ditolak ke 404 not found jd tergantung limit
//         // blocking tidak langsung ke not found jd bisa diakses makanya harus di validasi
//         // true next js akan menampilkan versi fallback pada saat initial request
//         fallback: true,
//     };
// };

// export const getServerSideProps = async ({ params }) => {
//     const response = await fetch(
//         `http://localhost:5000/products/${params.productId}`
//     );
//     const data = await response.json();

//     if (!data.id) {
//         return {
//             notFound: true,
//         };
//     }
//     return {
//         props: {
//             product: data,
//         },
//     };
// };
