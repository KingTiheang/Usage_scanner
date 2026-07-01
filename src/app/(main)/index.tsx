import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "../styles/global";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <Link href="/about" style={styles.link}>
        Go to about Screen
      </Link>
    </View>
  );
}
