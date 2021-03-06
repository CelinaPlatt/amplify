import React, { useState } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";

// DN = displayName
export default async function createChatRoom(
  userId1,
  userDN1,
  userId2,
  userDN2,
  chatArray
) {
  // console.log("in function");
  console.log(chatArray, "<<chat arr in function");
  const db = firebase.firestore();
  let roomExists = false;
  let roomId;
  console.log(userId1, userId2);

  // console.log(displayName);
  if (chatArray.length === 0) {
    roomExists = false;
  } else {
    await chatArray.forEach((chat) => {
      if (chat.users.includes(userId1) && chat.users.includes(userId2)) {
        roomExists = true;
        roomId = chat.id;
        console.log(chat.id, "<<<<<<<<<<chat id");
      }
    });
  }
  if (roomExists) {
    return roomId;
  } else {
    const ref = await db
      .collection("chats")
      .add({ users: [userId1, userId2], displayNames: [userDN1, userDN2] });
    roomId = ref.id;
    return roomId;
  }
}
