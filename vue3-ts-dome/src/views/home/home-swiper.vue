<template>
  <van-swipe class="home-swiper" v-if="sliderList.length">
    <van-swipe-item v-for="slider in sliderList" :key="slider.url">
      <img :src="slider.url" style="width: 100%; height: 100px">
    </van-swipe-item>
  </van-swipe>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { IGlobalState } from '../../stort';
import * as Types from '../../stort/action-types';
export default defineComponent({
  // defineAsyncComponent() 包一层, 有提示功能
  async setup() {
    // 页面一加载就要获取数据
    let store = useStore<IGlobalState>();

    let sliderList = computed(() => store.state.home.sliders);
    if (sliderList.value.length == 0) {
      // 缓存, 如果数据没有获取过, 再获取
      store.dispatch(`home/${Types.SET_SLIDER_LIST}`);
    }
    return {
      sliderList,
    };
  },
});
</script>