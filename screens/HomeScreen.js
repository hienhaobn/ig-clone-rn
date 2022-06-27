import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";

import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import ButtomTabs, { bottomTabIcons } from "../components/home/BottomTabs";

import {
  collectionGroup,
  query,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";

import { POSTS } from "../data/posts";
import app from "../config/firebase";

const db = getFirestore(app);

async function getPosts() {
  const users = collectionGroup(db, "posts");
  const querySnapshot = await getDocs(users);
  let posts = [];
  await querySnapshot.forEach((doc) => {
    posts = [...posts, doc];
  });
  return posts;
}

const HomeScreen = ({ navigation }) => {
  React.useEffect(async () => {
    console.log("HOME");
    const posts = await getPosts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <ButtomTabs icons={bottomTabIcons} />
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
