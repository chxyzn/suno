import { Stack } from "expo-router";

export default function NavTab() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{}} />
    </Stack>
  );
}
