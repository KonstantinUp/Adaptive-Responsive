import {NAME_SPACE as NS} from "./constants";
import {getCategoriesState} from "../categories/selectors";



export const getCommonState = state=> state[NS];
export const categoriesMap = state => getCommonState(state).categories;

export const categoriesList = state => Object.values(categoriesMap(state));


export const getTasksMap = state => getCommonState(state).tasks;
export const tasksList = state => Object.values(getTasksMap(state));


export const getCategoryTodoIds = (state,categoryId) => categoriesMap(state)[categoryId].tasks;

