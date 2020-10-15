import { onMounted, Ref } from "vue";
import { Store } from "vuex";
import stort, { IGlobalState } from "../stort";

// import 
export function useLoadMore(refreshElement: Ref<null |HTMLElement>, store: Store<IGlobalState>, type: string) {
    let element:HTMLElement
    // 防抖 
    function debounce(fn: any, wait: number) {
        let timer: null | NodeJS.Timeout = null
        return function() {
            console.log(111)
            if(timer !== null) clearTimeout(timer)
            timer = setTimeout(fn, wait);
        }
    }
    function _loadMore() {
        console.log(1231)
        // 获取可是区域高度, 卷曲的高度, 整个高度
        let containerHeight = element.clientHeight
        let scrollTop = element.scrollTop
        let scrollHeight = element.scrollHeight
        if(containerHeight + scrollTop + 20 >= scrollHeight) stort.dispatch(type)
    }
    onMounted(() => {
        // 页面已经加载完了, refreshElement一定是真实的元素
        element = refreshElement.value as HTMLElement
        element.addEventListener('scroll', debounce(_loadMore, 200))
    })
    
    return {
        isLoading: false,
        hasMore: false
    }
}