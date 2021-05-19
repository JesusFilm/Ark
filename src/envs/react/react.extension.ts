import { EnvsMain, EnvsAspect } from '@teambit/envs'
import { ReactAspect, ReactMain } from '@teambit/react'
import { Aspect } from '@teambit/harmony'
import webpackConfig from './webpack/webpack.config'

export class ReactExtension {
  static dependencies: Aspect[] = [EnvsAspect, ReactAspect]

  static async provider([envs, react]: [EnvsMain, ReactMain]) {
    const reactEnv = react.compose([
      react.overrideDevServerConfig(webpackConfig),
      react.overridePreviewConfig(webpackConfig)
    ])

    envs.registerEnv(reactEnv)

    return new ReactExtension()
  }
}
