import { createStore, compose } from 'redux';
import { syncHistoryFromStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
 import rootReducer from './reducers/index';

//import the data to work with
 import comments from './data/comments';
 import posts from './data/comments';

 //create an object for the default data
 const defaultState = {
 	posts,
 	comments
 };

 export default const store = createStore(rootReducer,defaultState); 

 export  const history = syncHistoryFromStore(browserHistory,store);