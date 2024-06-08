import { createContext, useContext, useEffect, useReducer, useState } from "react";


export const StatContext= createContext();

export const StatContextProvider= ({children})=>{

    const [products,setProducts] = useState([]);
    const [search,setSearch] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    useEffect(()=>{
        dispatch({type:"GET_PRODUCTS",payload:products})
        const filteredProducts = products.filter(product=>product.title.toLowerCase().includes(search))
        dispatch({type:"GET_PRODUCTS",payload:filteredProducts});
        console.log(filteredProducts.length);
    },[products,search])

    const fetchData=async()=>{
        const response=await fetch("https://dummyjson.com/products");
        const {products}=await response.json();
        console.log(products);
        setProducts(products);
    }

    const initalState={
        products:[],
        carts:[],
    }

    const reducer =(stat,action) =>{
        switch(action.type){
            case "GET_PRODUCTS" :
                return {...stat,products:action.payload};
            case "ADD_CARTS" :

               if(stat.carts.find(item => item.id === action.payload.id)){
                return stat;
               }else{
                return {...stat,carts:[...stat.carts,{...action.payload}]};
               }
            case "REMOVE_CART" :
                return {...stat,carts:stat.carts.filter(item => item.id !== action.payload)};
            default:
                return stat;
        }
    }

    const [stat,dispatch]=useReducer(reducer,initalState);
    
    const data={stat,dispatch,search,setSearch}
    return(
       <StatContext.Provider value={data}>
        {children}
       </StatContext.Provider>
    )
}


export const StatContextCustom= () => useContext(StatContext);