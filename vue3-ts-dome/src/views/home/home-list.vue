<template>
  <div class="home-list">
    <van-card
      v-for="lesson in lessonList"
      :key="lesson.id"
      :price="lesson.price"
      :title="lesson.title"
      :thumb="lesson.poster"
    >
      <template #tags>
        <van-tag plain>
            {{formateCatefory(lesson.category)}}
        </van-tag>
      </template>
    </van-card>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { ILesson } from '../../typings/home';
export default defineComponent({
  props: {
    lessonList: Array as PropType<ILesson[]>,
  },
  setup() {
    function formateCatefory(type: number) {
      switch (type) {
        case 1:
          return 'react课程';
          break;
        case 2:
          return 'vue课程';
          break;
        default:
            return '全部'
      }
    }
    return {
      formateCatefory,
    };
  },
});
</script>