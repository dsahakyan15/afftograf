import { useDispatch } from "react-redux";
import type { AppDispatch } from "entities/redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch