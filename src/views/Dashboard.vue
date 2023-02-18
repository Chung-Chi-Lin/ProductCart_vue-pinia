<template>
  <div class="container-fluid mt-3 position-relative">
    <h1 class="ms-5 mt-4">購物車-<span class="fs-3">Pinia管理邏輯</span></h1>
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: { ToastMessages },
};
</script>
