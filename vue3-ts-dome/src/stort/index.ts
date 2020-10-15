import {createStore} from 'vuex'
import { IHomeState } from '../typings/home'
import home from './modules/home'

export interface IGlobalState {
    home: IHomeState // 某个页面, 某个模块可以在这里增加
}


const stort = createStore<IGlobalState>({
    // state: {},
    modules: {
        home
    }
})
export default stort