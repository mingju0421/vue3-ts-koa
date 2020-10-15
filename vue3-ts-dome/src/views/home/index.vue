<template>
  <div class="home">
    <!-- 首页头部 -->
    <HomeHeader :category="category" @setCurrentCatefory="setCurrentCatefory"></HomeHeader>
    <div class="home-main" ref="refreshElement">
      <!-- 轮播图 -->
      <Suspense>
        <template #default>
          <HomeSwiper></HomeSwiper>
        </template>
        <template #fallback> loading... </template>
      </Suspense>
      <!-- 课程列表 -->
      <HomeList :lessonList="lessonList"></HomeList>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, ref } from 'vue';
import HomeHeader from './home-header.vue';
import HomeSwiper from './home-swiper.vue';
import HomeList from './home-list.vue';
import { useStore, Store } from 'vuex';
import stort, { IGlobalState } from '../../stort';
import { CATEGORY_TYPES } from '../../typings/home';
import * as Types from '../../stort/action-types';
import { useLoadMore } from '../../hooks/useLoadMore';

/** 专门修改分类使用的 */
function useCategory(stort: Store<IGlobalState>) {
  let category = computed(() => stort.state.home.currentCategory);
  function setCurrentCatefory(category: CATEGORY_TYPES) {
    stort.commit(`home/${Types.SET_CATEGORY}`, category);
  }
  return {
    category,
    setCurrentCatefory,
  };
}

/** 获取课程数据 */
function useLessonList(stort: Store<IGlobalState>) {
  const lessonList = computed(() => stort.state.home.lessons.list);
  onMounted(() => {
    // 如果有数据就不继续加载
    if (lessonList.value.length == 0) {
      stort.dispatch(`home/${Types.SET_LESSON_LIST}`);
    }
  });
  return {
    lessonList,
  };
}
export default defineComponent({
  // defineComponent() 包一层, 有提示功能
  components: {
    HomeHeader,
    HomeList,
    HomeSwiper,
  },
  setup() {
    // 需要获取vuex中的分类状态, 有个更改状态的功能
    let strot = useStore<IGlobalState>();
    // 分类
    let { category, setCurrentCatefory } = useCategory(strot);

    // 获取课程
    let { lessonList } = useLessonList(stort);

    // 获取真实DOM, 组件实例
    const refreshElement = ref<null | HTMLElement>(null);

    const { isLoading, hasMore } = useLoadMore(
      refreshElement,
      stort,
      `home/${Types.SET_LESSON_LIST}`,
    );

    return {
      category,
      setCurrentCatefory,
      lessonList,
      refreshElement,
      isLoading,
      hasMore
    };
  },
});
</script>
<style scoped>
.home{
    height: 100%;
}
.home-main {
  position: relative;
  padding: 48px 0 50px;
  height: 100%;
  overflow: auto;
}
</style>