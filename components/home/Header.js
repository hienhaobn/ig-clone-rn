import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const handleSignout = () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error);
  }
}
const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Feather name="plus-square" size={25} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="hearto" size={25} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <AntDesign name="message1" size={25} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    color: "white",
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
