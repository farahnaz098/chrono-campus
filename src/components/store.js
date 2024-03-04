// store.js
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  instituteData: {},
  showInstructorForm: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INSTITUTE_DATA':
      return { ...state, instituteData: action.payload };
    case 'SHOW_INSTRUCTOR_FORM':
      return { ...state, showInstructorForm: true };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
  // other configuration options
});

export default store;
