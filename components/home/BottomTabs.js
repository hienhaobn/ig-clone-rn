import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { Image } from "react-native-elements/dist/image/Image";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/material-rounded/344/ffffff/home-page.png",
    inactive:
      "https://img.icons8.com/material-outlined/344/ffffff/home-page.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/344/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/344/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/344/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/344/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/ios-glyphs/344/ffffff/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/344/ffffff/shopping-bag-full.png",
  },
  {
    name: "Profile",
    active: "https://www.w3schools.com/howto/img_avatar.png",
    inactive: "https://www.w3schools.com/howto/img_avatar.png",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // truong hop ipx
    // position: "absolute",
    // width: "100%",
    // bottom: 0,
    // zIndex: 999,
    // backgroundColor: "#000"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },

  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});

export default BottomTabs;
