import type { ILivestream } from '@/interfaces/livestream.interface'
import { defineStore } from 'pinia'

type State = {
  listLivestream: ILivestream[] | null
}

export const useLivestream = defineStore('livestream', {
  state: () =>
    ({
      listLivestream: null
    }) as State,
  getters: {},
  actions: {
    setListLivestream(list: ILivestream[]) {
      this.listLivestream = list
    }
  }
})
