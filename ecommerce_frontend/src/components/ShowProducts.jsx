import '../assets/style.css';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import ProductCard from './cards/ProductCard';

export default function ShowProducts() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
            fetch('http://localhost:8080/product', {
                method: 'GET',
            })
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                const productArray = Object.values(data);
                const productList = productArray.flat();
                setProduct(productList);
            })
            .catch(error => {
            console.error('Error fetching data:', error);
            }); 
    }, []);

    return (
            <div className='ShowProducts'>
                <NavBar />
                <div className="filter-container col-1">

                </div>
                <div className='result-container col-11'>
                    {product.map((product, index) => (
                <ProductCard key={index} product={product} />
                ))}
                </div>
                
            </div>
    );
}