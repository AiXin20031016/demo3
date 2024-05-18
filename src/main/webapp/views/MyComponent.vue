<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props, { emit }) {
    const showStudyMessage = (message) => {
      emit('showMessage', message);
    };

    return {
      showStudyMessage // 确保将方法返回
    };
  }
});
</script>
