import { useState } from "react"
import { MenuItem, OrderItem } from '../types/index';
export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = ( item: MenuItem ) => {
        
        const newItem = { ...item, quantity: 1 }
        setOrder([...order, newItem])

        console.log(order);
        
    }

    return {
        addItem
    }
}