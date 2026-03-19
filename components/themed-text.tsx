import { StyleSheet, Text, TextProps } from 'react-native';

type ThemedTextProps = TextProps & {
  type?: 'title' | 'link'
}

export function ThemedText({ type, style, ...props }: ThemedTextProps) {
  return <Text style={[styles.base, type ? styles[type] : null, style]} {...props} />;
}

const styles = StyleSheet.create({
  base: {
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  link: {
    color: '#0a7ea4',
  },
});