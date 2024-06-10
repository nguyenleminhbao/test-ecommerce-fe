import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

export const configStream = (roomID: string) => {
  let role_str = 'Host'
  const role =
    role_str === 'Host'
      ? ZegoUIKitPrebuilt.Host
      : role_str === 'Cohost'
        ? ZegoUIKitPrebuilt.Cohost
        : ZegoUIKitPrebuilt.Audience

  let sharedLinks = []
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: 'Join as co-host',
      url: `${import.meta.env.VITE_FRONTEND_URL}/livestream?roomID=${roomID}&role=Cohost`
    })
  }
  sharedLinks.push({
    name: 'Join as audience',
    url: `${import.meta.env.VITE_FRONTEND_URL}/livestream?roomID=${roomID}&role=Audience`
  })

  return { role, sharedLinks }
}
