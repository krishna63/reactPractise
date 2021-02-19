import {
    GET_SIDENAV_ITEMS,
    GET_SIDENAV_ITEMS_SUCCESS,
    GET_SIDENAV_ITEMS_FAILED
} from '../constants';

const defaultState = {
    navItems:[]
};

function sideNavigatorReducer(state= defaultState, action) {
    switch(action.type) {
        case GET_SIDENAV_ITEMS_SUCCESS:
            return { 
                ...state,
                navItems: [...action.payload.sideNavItems]
            }
        default:
            return state;
    } 
}

export default sideNavigatorReducer;
