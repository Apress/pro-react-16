import { PRODUCTS, SUPPLIERS } from "./dataTypes";

export const STATE_START_EDITING = "state_start_editing";
export const STATE_END_EDITING = "state_end_editing";
export const STATE_START_CREATING = "state_start_creating";

export const startEditingProduct = (product) => ({
    type: STATE_START_EDITING,
    dataType: PRODUCTS,
    payload: product
})

export const startEditingSupplier = (supplier) => ({
    type: STATE_START_EDITING,
    dataType: SUPPLIERS,
    payload: supplier
})

export const endEditing = () => ({
    type: STATE_END_EDITING
})

export const startCreatingProduct = () => ({
    type: STATE_START_CREATING, dataType: PRODUCTS
})

export const startCreatingSupplier = () => ({
    type: STATE_START_CREATING, dataType: SUPPLIERS
})
