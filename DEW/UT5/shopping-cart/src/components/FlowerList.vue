<template>
  <div class="row">
    <div class="col-md-4" v-for="flower in flowers" :key="flower.id">
      <FlowerItem :flower="flower" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FlowerItem from '@/components/FlowerItem.vue'
import flowers from '@/components/flowers.json'

export default defineComponent({
  name: 'FlowerList',
  components: { FlowerItem },
  data() {
    return { flowers }
  },
})
</script>
