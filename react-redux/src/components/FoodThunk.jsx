import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { foodname } from '../modules/foodThunk';
export default function FoodThunk() {
    let foodName=useSelector((state)=>state.foodThunk)
    let dispatch=useDispatch();
    console.log(foodName);
    useEffect(()=>{dispatch(foodname())},[])
  return (
    <div>
        <h2>FoodThunk</h2>
        <p>{foodName.food}</p>
    </div>
  )
}
