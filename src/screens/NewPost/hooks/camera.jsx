import { Camera } from "expo-camera";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Audio } from "expo-av";

export const useCamera = () => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [mediaType, setMediaType] = useState("photo");
  const [hasLibraryPermissions, setHasLibraryPermissions] = useState(null);

  const [hasPermission, setHasPermission] = useState(null);

  const askPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
    const mediaPermissions =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    const audioPermissions = Audio.requestPermissionsAsync();
    setHasLibraryPermissions(mediaPermissions.status === "granted");
  };
  useEffect(() => {
    askPermissions();
  }, []);

  const toggleType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const toggleCameraMode = () => {
    setMediaType(mediaType === "photo" ? "video" : "photo");
  };

  return { type, toggleType, mediaType, toggleCameraMode, hasPermission };
};
