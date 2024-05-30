import type { ArtalkPlugin } from 'artalk'

export const ArtalkSamplePlugin: ArtalkPlugin = (ctx) => {
  ctx.on('mounted', () => {
    console.log('ArtalkSamplePlugin mounted')
  })
}
