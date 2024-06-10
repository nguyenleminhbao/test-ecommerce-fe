import { useLivestream } from '@/stores/use-livestream'
import { io } from 'socket.io-client'

export const listenSocketStream = (action: string) => {
  // socket connect
  const socket = io(import.meta.env.VITE_BACKEND_URL, {
    extraHeaders: {
      Authorization: `Bearer ${localStorage && localStorage.getItem('accessToken')}`
    }
  })

  const { setListLivestream } = useLivestream()

  socket.on('connect', function () {
    console.log('Connected')
  })

  // listening action form server livestream
  socket.on(action, (data) => {
    if (data.type == 'Success') {
      console.log(action, data?.message)
      setListLivestream(data?.message ?? [])
    }
  })

  // after 10s, disconnect socket
  setTimeout(() => {
    socket.disconnect()
  }, 10000)
}
