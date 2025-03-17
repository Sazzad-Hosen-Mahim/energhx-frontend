import { useDispatch, useSelector } from "react-redux";
import CommonWrapper from "../common/CommonWrapper";
import type { RootState, AppDispatch } from "../store/store";
import {
  decrement,
  increment,
  reset,
  setCount,
} from "@/store/Slices/counterSlice/counterSlice";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <CommonWrapper>
   <h1>Hello world</h1>
    </CommonWrapper>
  );
};

export default Home;
