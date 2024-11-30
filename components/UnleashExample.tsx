import { useFlag } from '@nunogois/unleash-react-native'
import { ThemedText } from './ThemedText'

export const UnleashExample = () => {
  const enabled = useFlag('unleash-react-native-demo')

  return (
    <ThemedText>
      {enabled ? 'Feature is enabled!' : 'Feature is disabled!'}
    </ThemedText>
  )
}
