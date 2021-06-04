import { EnvsMain, EnvsAspect } from '@teambit/envs'
import { ReactAspect, ReactMain } from '@teambit/react'
import { Aspect } from '@teambit/harmony'

export class ReactExtension {
  static dependencies: Aspect[] = [EnvsAspect, ReactAspect]

  static async provider([envs, react]: [EnvsMain, ReactMain]) {
    const reactEnv = react.compose([
      react.overrideJestConfig(require.resolve('./jest/jest.config'))
    ])

    envs.registerEnv(reactEnv)

    return new ReactExtension()
  }
}
