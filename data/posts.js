import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1654894887516-63eeb53d35a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    user: USERS[0].user,
    likes: 7091,
    caption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 😄😄😄  ",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "alex",
        comment:
          "Contrary to popular belief, Lorem Ipsum is not simply random text",
      },
      {
        user: "nathan.div",
        comment:
          "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source 😄😄😄",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1644982654072-0b42e6636821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    user: USERS[0].user,
    likes: 7091,
    caption: "OMG... Beautiful...🙄",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "alex",
        comment:
          "Contrary to popular belief, Lorem Ipsum is not simply random text",
      }
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1654886712447-94c8a9b3215c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    user: USERS[0].user,
    likes: 7091,
    caption: "OMG... Beautiful...",
    profile_picture: USERS[0].image,
    comments: [],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1654875185977-4a97176ef3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    user: USERS[0].user,
    likes: 7091,
    caption: "OMG... Beautiful...",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "alex",
        comment:
          "Contrary to popular belief, Lorem Ipsum is not simply random text",
      },
      {
        user: "nathan.div",
        comment:
          "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
      },
    ],
  },
];
