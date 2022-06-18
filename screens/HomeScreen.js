import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";

import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import ButtomTabs, { bottomTabIcons } from "../components/home/BottomTabs";

import { POSTS } from "../data/posts";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <ButtomTabs icons={bottomTabIcons}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
