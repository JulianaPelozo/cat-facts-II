import { Stack } from "expo-router";
import { Provider as PaperProvider, MD3LightTheme } from "react-native-paper";

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#B980F0",     
    secondary: "#D6B4FC",
    surface: "#F7ECFF",
    background: "#FFF6FF",
  }
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Cat Facts Cute 💜🐾" }} />
        <Stack.Screen name="list" options={{ title: "Lista Fofinha 🐱✨" }} />
      </Stack>
    </PaperProvider>
  );
}
