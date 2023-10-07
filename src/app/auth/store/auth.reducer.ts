import { createReducer, on } from "@ngrx/store"
import * as AuthActions from "./auth.actions";
import { User } from "src/app/_model";
export interface State {
  user: User | null;
  authError: string | null;
  loading: boolean;
}
const initialState: State = {
  authError: null,
  loading: false,
  user: null
}
export const authReducer = createReducer(
  initialState,
  on(AuthActions.authenticateSuccess, (state,action)=>{
    const user=new User(action.email,action.userId,action.token,action.expirationDate);
    return{
      ...state,
      user: user,
      loading:false
    }
  }),
  on(AuthActions.loginStart, (state, action) => {
    return {
      ...state,
      authError:null,
      loading:true
    }
  }),
  on(AuthActions.signupStart, (state,action)=>{
    return{
      ...state,
      authError:null,
      loading:true
    }
  }),
  on(AuthActions.authenticateFail, (state,action)=>{
    return{
      ...state,
      authError:action.message,
      loading:false
    }
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      ...state,
      user: null,
      loading:false
    }
  }),
);
