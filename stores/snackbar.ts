import { defineStore } from 'pinia'

interface Snackbar {
   show: boolean;
   color: string;
   icon: string;
   title: string;
   text: string;
}

export const useSnackbarStore = defineStore('snackbar', {
   state: () => ({
      snackbar: {
         show: false,
         color: 'success',
         icon: '',
         title: '',
         text: ''
      }
   }),
   getters: {
      getSnackbar(state) {
         return state.snackbar
      }
   },
   actions: {
      setSnackbar({ snackbar }: { snackbar: Snackbar }, payload: any) {
          snackbar.show = payload.show
          snackbar.color = payload.color
          snackbar.icon = payload.icon
          snackbar.title = payload.title
          snackbar.text = payload.text
      }
   }
})
