import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';

const FeauturedItem = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => {
                setItems(res.data)
            })
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl'>Feautured Items</h2>
                <h2 className='text-green-900 mt-2 font-thin'>Limited Edition</h2>
            </div>
            <div className="md:grid grid-cols-4 gap-4 mt-4 ml-6">
                {items.map(item => (
                    <ItemsCard item={item} key={item._id} />
                ))}
            </div>

        </div>
    );
};

export default FeauturedItem;