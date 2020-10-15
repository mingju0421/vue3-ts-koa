<template>
  <div class="home-header">
    <van-dropdown-menu>
      <!-- 以前的v-model = input事件 + value -->
      <van-dropdown-item :modelValue="category" :options="option" @change='setCurrentCatefory'/>
    </van-dropdown-menu>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { CATEGORY_TYPES } from '../../typings/home';
export default defineComponent({
  // defineAsyncComponent() 包一层, 有提示功能
  props: {
    category: {
      type: Number as PropType<CATEGORY_TYPES>,
    },
  },
  emits: ['setCurrentCatefory'], // 为了提示
  setup(props, context) {
    let state = reactive({
      option: [
        { text: '全部课程', value: CATEGORY_TYPES.ALL },
        { text: 'reacte课程', value: CATEGORY_TYPES.REACT },
        { text: 'vue课程', value: CATEGORY_TYPES.VUE },
        { text: 'node课程', value: CATEGORY_TYPES.NODE },
      ],
    });
    function setCurrentCatefory(category: CATEGORY_TYPES) {
        context.emit('setCurrentCatefory', category)
    }
    return { ...toRefs(state), setCurrentCatefory };
  },
});
</script>

<style scoped>
.home-header{
    height: 48px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
}
</style>