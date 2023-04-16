import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/color";
import { size } from "../../styles/size";

const Nav = () => {
  const handleClick = () => {
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
    padding: 32,
    paddingTop: 64,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 16,
  },
  icons: {
    fontSize: size.heading100,
    color: colors.primary50,
  },
});

export default Nav;