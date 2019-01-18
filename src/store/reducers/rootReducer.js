import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReduser = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReduser;
