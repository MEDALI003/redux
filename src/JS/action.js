import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from './actionType';



export const Add_Product = (newProduct) => {
  return {
    type:ADD_PRODUCT,
    payload:{newProduct}
}
}

export const Delete_Product = (id) => {
    return{
      type:DELETE_PRODUCT,
      payload:{id}
  }
  }
export const Edit_Product = (id,newProduct) => {
    return{
      type:EDIT_PRODUCT,
      payload:{id:id,newProduct:newProduct}
  }
  }