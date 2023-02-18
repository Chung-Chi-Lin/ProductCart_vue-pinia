import { defineStore } from 'pinia';

export default defineStore('statusStore', {
  state: () => ({
    isLoading: false,
    loadingItem: '',
    messages: [],
  }),
  actions: {
    pushMessage(data) {
      const { style = 'success', title, content } = data;
      this.messages.push({ style, title, content });
    },
  },
});
