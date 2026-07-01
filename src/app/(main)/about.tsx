import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "../styles/global";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>This is the About Screen</Text>
      <Link href="/" style={styles.button}>
        Go to Home Screen
      </Link>
    </View>
  );
}
