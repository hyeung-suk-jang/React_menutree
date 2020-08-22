import { createStore } from 'redux';
import treeState from '../reducers';

//createStore(reducer,preloadedstate,enhancer)
//reducer : state,action을 가진 함수.
export default function configureStore(initialState) {
    const store = createStore(
        treeState,
        initialState,
    );

    return store
}