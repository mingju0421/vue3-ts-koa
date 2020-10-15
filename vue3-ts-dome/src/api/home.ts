import axios from '.'
import { CATEGORY_TYPES } from '../typings/home'

/** 声明获取轮播图的接口 */
export function getSliders<T>() {
    // <T> 泛型
    return axios.get<T, T>('/slider/list')
}

export function getLessons<T>(category: CATEGORY_TYPES, offset: number = 0, limit: number = 5) {
    return axios.get<T, T>(`/lesson/list?category=${category}&offset=${offset}&limit=${limit}`)
}
