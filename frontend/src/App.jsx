import { useEffect } from "react";
import axios from "./api/axiosconfig"
import { asyncusers } from "./store/UserAction";
import { useDispatch, useSelector } from "react-redux";
const App = () => {

  const data = useSelector((state) => state)
  const dispatch = useDispatch();
  console.log(data);
  
  useEffect(() => {
    dispatch(asyncusers());
  },[])


  return (
    <div>App</div>
  )
}

export default App