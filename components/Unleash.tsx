import { FlagProvider } from 'unleash-react-native'
import type { PropsWithChildren } from 'react'

const config = {
  url: 'https://sandbox.getunleash.io/nuno/api/frontend',
  clientKey:
    'unleash-react-native-demo:development.c2f13edd19eb4abee4d11735d1d2187d7c1e1a3dd10c3567a7b804c6',
  refreshInterval: 5,
  appName: 'unleash-react-native-demo'
}

export const Unleash = ({ children }: PropsWithChildren) => {
  return <FlagProvider config={config}>{children}</FlagProvider>
}
