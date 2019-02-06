import { initialData } from "./initialData";

export const STORE_RESET = "store_clear";

export const resetStore = () => ({ type: STORE_RESET });

export function customReducerEnhancer(originalReducer) {

    let intialState = null;

    return (storeData, action) => {
        if (action.type === STORE_RESET && initialData != null) {
            return intialState;
        } else {
            const result = originalReducer(storeData, action);
            if (intialState == null) {
                intialState = result;
            }
            return result;
        }
    }
}
