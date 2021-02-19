import { GET_SIDENAV_ITEMS, GET_SIDENAV_ITEMS_SUCCESS, GET_SIDENAV_ITEMS_FAILED } from '../constants';

const getSideNavItems = (data) => ({
  type: GET_SIDENAV_ITEMS,
  payload: data,
});

const getSideNavItemsSuccess = (data) => ({
  type: GET_SIDENAV_ITEMS_SUCCESS,
  payload: data,
});

const getSideNavItemsFalied = (data) => ({
  type: GET_SIDENAV_ITEMS_FAILED,
  payload: data,
});

export { getSideNavItems, getSideNavItemsSuccess, getSideNavItemsFalied };
