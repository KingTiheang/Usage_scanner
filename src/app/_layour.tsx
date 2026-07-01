import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="information" options={{ headerShown: false }} />
    </Stack>
  );
}
