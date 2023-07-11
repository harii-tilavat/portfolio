import { createReducer, on } from "@ngrx/store"
import * as AuthActions from "./auth.actions";
export interface State{
  // AIzaSyBcGsyoxC-sGzaTVFfL2RO6oirbEJizzcY           ------------API KEY
  authError:string|null,
  loading:boolean
}
const initialState:State={
  authError: null,
  loading: false
}
export const authReducer=createReducer(
  initialState,
  on(AuthActions.authLogin,(state,action)=>{
    debugger;
    return{
      ...state
    }
  })
);
