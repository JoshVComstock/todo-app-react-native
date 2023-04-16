import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { colors } from "../styles/Colors";
import { Ionicons } from "@expo/vector-icons";
const Nav = () => {
  const handleClick=()=>{
   console.log("Click en mi")
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick}>
        <Ionicons name="menu-outline" style={styles.icons}/>
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "16px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  icons: {
    fontSize: "32px",
    color: colors.white,
  },
});
export default Nav;
