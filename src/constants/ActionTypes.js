// Get Products
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT'

// FILTERS
export const FILTER_BRAND = 'FILTER_BRAND'
export const FILTER_COLOR = 'FILTER_COLOR'
export const FILTER_PRICE = 'FILTER_PRICE'
export const SORT_BY = 'SORT_BY'

export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'

// Cart
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREMENT_QTY = 'INCREMENT_QTY'
export const DECREMENT_QTY = 'DECREMENT_QTY'

// WishList
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'

// Compare
export const ADD_TO_COMPARE = 'ADD_TO_COMPARE'
export const REMOVE_FROM_COMPARE = 'REMOVE_FROM_COMPARE'

// CheckOut Process
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'

export const ActionTypes = {
    GET_TOKEN: 'GET_TOKEN',
    GET_TOKEN_FAIL: 'GET_TOKEN_FAIL',
    GET_TOKEN_SUCCESS: 'GET_TOKEN_SUCCESS',

    REFRESH_TOKEN: 'REFRESH_TOKEN',
    REFRESH_TOKEN_FAIL: 'REFRESH_TOKEN_FAIL',
    REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS',

    REGISTER: 'REGISTER',
    REGISTER_FAIL: 'REGISTER_FAIL',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',

    LOGIN: 'LOGIN',
    LOGIN_FAIL: 'LOGIN_FAIL',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',

    LOGOUT: 'LOGOUT',

    GET_USER: 'GET_USER',
    GET_USER_FAIL: 'GET_USER_FAIL',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',

    GET_CART: 'GET_CART',
    GET_CART_FAIL: 'GET_CART_FAIL',
    GET_CART_SUCCESS: 'GET_CART_SUCCESS',

    FETCH_ARTWORK: 'FETCH_ARTWORK',
    FETCH_ARTWORK_FAIL: 'FETCH_ARTWORK_FAIL',
    FETCH_ARTWORK_SUCCESS: 'FETCH_ARTWORK_SUCCESS',

    FETCH_SINGLEPRODUCT: 'FETCH_SINGLEPRODUCT',
    FETCH_SINGLEPRODUCT_FAIL: 'FETCH_SINGLEPRODUCT_FAIL',
    FETCH_SINGLEPRODUCT_SUCCESS: 'FETCH_SINGLEPRODUCT_SUCCESS',

    FETCH_BYSEARCH: 'FETCH_BYSEARCH',
    FETCH_BYSEARCH_FAIL: 'FETCH_BYSEARCH_FAIL',
    FETCH_BYSEARCH_SUCCESS: 'FETCH_BYSEARCH_SUCCESS',

    FETCH_BYARTISTNAME: 'FETCH_BYARTISTNAME',
    FETCH_BYARTISTNAME_FAIL: 'FETCH_BYARTISTNAME_FAIL',
    FETCH_BYARTISTNAME_SUCCESS: 'FETCH_BYARTISTNAME_SUCCESS',

    FETCH_PRICEASC: 'FETCH_PRICEASC',
    FETCH_PRICEASC_FAIL: 'FETCH_PRICEASC_FAIL',
    FETCH_PRICEASC_SUCCESS: 'FETCH_PRICEASC_SUCCESS',

    FETCH_PRICEDESC: 'FETCH_PRICEDESC',
    FETCH_PRICEDESC_FAIL: 'FETCH_PRICEDESC_FAIL',
    FETCH_PRICEDESC_SUCCESS: 'FETCH_PRICEDESC_SUCCESS',


    FETCH_CATEGORY: 'FETCH_CATEGORY',
    FETCH_CATEGORY_FAIL: 'FETCH_CATEGORY_FAIL',
    FETCH_CATEGORY_SUCCESS: 'FETCH_CATEGORY_SUCCESS',

    FETCH_CATEGORYASC: 'FETCH_CATEGORYASC',
    FETCH_CATEGORYASC_FAIL: 'FETCH_CATEGORYASC_FAIL',
    FETCH_CATEGORYASC_SUCCESS: 'FETCH_CATEGORYASC_SUCCESS',

    FETCH_CATEGORYDESC: 'FETCH_CATEGORYDESC',
    FETCH_CATEGORYDESC_FAIL: 'FETCH_CATEGORYDESC_FAIL',
    FETCH_CATEGORYDESC_SUCCESS: 'FETCH_CATEGORYDESC_SUCCESS',

    TOGGLE_CART_ITEM: 'TOGGLE_CART_ITEM',
    CALC_CART_PRICE: 'CALC_CART_PRICE',

    DELETE_CART_ITEM: 'DELETE_CART_ITEM',
    DELETE_CART_ITEM_FAIL: 'DELETE_CART_ITEM_FAIL',
    DELETE_CART_ITEM_SUCCESS: 'DELETE_CART_ITEM_SUCCESS',


    ARTICLELIST: 'ARTICLELIST',
    ARTICLELIST_FAIL: 'ARTICLELIST_FAIL',
    ARTICLELIST_SUCCESS: 'ARTICLELIST_SUCCESS',

    ARTICLEDETAIL: 'ARTICLEDETAIL',
    ARTICLEDETAIL_FAIL: 'ARTICLEDETAIL_FAIL',
    ARTICLEDETAIL_SUCCESS: 'ARTICLEDETAIL_SUCCESS',

    ARTICLEWRITE: 'ARTICLEWRITE',
    ARTICLEWRITE_FAIL: 'ARTICLEWRITE_FAIL',
    ARTICLEWRITE_SUCCESS: 'ARTICLEWRITE_SUCCESS',

    ARTICLEDELETE: 'ARTICLEDELETE',
    ARTICLEDELETE_FAIL: 'ARTICLEDELETE_FAIL',
    ARTICLEDELETE_SUCCESS: 'ARTICLEDELETE_SUCCESS',


    MAKE_ORDER:'MAKE_ORDER',
    MAKE_ORDER_FAIL:'MAKE_ORDER_FAIL',
    MAKE_ORDER_SUCCESS: 'MAKE_ORDER_SUCCESS',

    EXCUTE_KAKAO_PAY:'EXCUTE_KAKAO_PAY',
    EXCUTE_KAKAO_PAY_FAIL:'EXCUTE_KAKAO_PAY_FAIL',
    EXCUTE_KAKAO_PAY_SUCCESS:'EXCUTE_KAKAO_PAY_SUCCESS',

    APPROVE_KAKAO_PAY:'APPROVE_KAKAO_PAY',
    APPROVE_KAKAO_PAY_FAIL:'APPROVE_KAKAO_PAY_FAIL',
    APPROVE_KAKAO_PAY_SUCCESS:'APPROVE_KAKAO_PAY_SUCCESS',

    DUPLICATION_CHECK_EMAIL: 'DUPLICATION_CHECK_EMAIL',
    DUPLICATION_CHECK_EMAIL_FAIL: 'DUPLICATION_CHECK_EMAIL_FAIL',
    DUPLICATION_CHECK_EMAIL_SUCCESS: 'DUPLICATION_CHECK_EMAIL_SUCCESS',

    DUPLICATION_CHECK_NICKNAME: 'DUPLICATION_CHECK_NICKNAME',
    DUPLICATION_CHECK_NICKNAME_FAIL: 'DUPLICATION_CHECK_NICKNAME_FAIL',
    DUPLICATION_CHECK_NICKNAME_SUCCESS: 'DUPLICATION_CHECK_NICKNAME_SUCCESS',

    ACCOUNT_ORDER_ITEMS: 'ACCOUNT_ORDER_ITEMS',
    ACCOUNT_ORDER_ITEMS_FAIL: 'ACCOUNT_ORDER_ITEMS_FAIL',
    ACCOUNT_ORDER_ITEMS_SUCCESS: 'ACCOUNT_ORDER_ITEMS_SUCCESS',

    UPDATE_USER: 'UPDATE_USER',
    UPDATE_USER_FAIL: 'UPDATE_USER_FAIL',
    UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',

    CHECK_PASSWORD: 'CHECK_PASSWORD',
    CHECK_PASSWORD_FAIL: 'CHECK_PASSWORD_FAIL',
    CHECK_PASSWORD_SUCCESS: 'CHECK_PASSWORD_SUCCESS',

    ADD_CART:'ADD_CART',
    ADD_CART_FAIL:'ADD_CART_FAIL',
    ADD_CART_SUCCESS:'ADD_CART_SUCCESS',

    UPDATE_NICKNAME: 'UPDATE_NICKNAME',
    UPDATE_NICKNAME_FAIL: 'UPDATE_NICKNAME_FAIL',
    UPDATE_NICKNAME_SUCCESS: 'UPDATE_NICKNAME_SUCCESS',

    UPDATE_REALNAME: 'UPDATE_REALNAME',
    UPDATE_REALNAME_FAIL: 'UPDATE_REALNAME_FAIL',
    UPDATE_REALNAME_SUCCESS: 'UPDATE_REALNAME_SUCCESS',

    UPDATE_PHONE: 'UPDATE_PHONE',
    UPDATE_PHONE_FAIL: 'UPDATE_PHONE_FAIL',
    UPDATE_PHONE_SUCCESS: 'UPDATE_PHONE_SUCCESS',


    GET_ADDRESS:'GET_ADDRESS',
    GET_ADDRESS_FAIL:'GET_ADDRESS_FAIL',
    GET_ADDRESS_SUCCESS:'GET_ADDRESS_SUCCESS',

    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_PASSWORD_FAIL: 'UPDATE_PASSWORD_FAIL',
    UPDATE_PASSWORD_SUCCESS: 'UPDATE_PASSWORD_SUCCESS',

    SEND_MAIL_REGISTER: 'SEND_MAIL_REGISTER',
    SEND_MAIL_REGISTER_FAIL: 'SEND_MAIL_REGISTER_FAIL',
    SEND_MAIL_REGISTER_SUCCESS: 'SEND_MAIL_REGISTER_SUCCESS',

    CHECK_REGISTER_TOKEN: 'CHECK_REGISTER_TOKEN',
    CHECK_REGISTER_TOKEN_FAIL: 'CHECK_REGISTER_TOKEN_FAIL',
    CHECK_REGISTER_TOKEN_SUCCESS: 'CHECK_REGISTER_TOKEN_SUCCESS'
};

export const Errors = {
    UnknownError: "Unknown error!"
};