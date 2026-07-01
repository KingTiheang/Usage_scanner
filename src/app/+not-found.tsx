import { Link, Stack, router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles/global";

export default function NotFound() {
  useEffect(() => {
    console.log("NotFound component mounted");

    // Start a timer to log a message after 5 seconds
    const timer = setTimeout(() => {
      console.log("5 seconds have passed since NotFound component mounted");
      router.replace("/"); // Redirect to home screen after 5 seconds
    }, 5000);

    return () => {
      clearTimeout(timer);
      console.log("NotFound component unmounted");
    };
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          <Text style={styles.btn1}>Go back to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
