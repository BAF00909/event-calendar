import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { bindActionCreators } from "redux";
import { RootStore } from "../store";
import { allActions } from "../store/reducers/action-creators";

export const useTypeSelector:TypedUseSelectorHook<RootStore> = useSelector;

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
}