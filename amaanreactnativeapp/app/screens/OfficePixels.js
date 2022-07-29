import React, { useEffect, useState, useCallback } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  Linking,
  Alert,
  TouchableWithoutFeedback,
  SafeAreaView,
  RefreshControl,
  ScrollView
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function OfficePixels(props) {
  const pixels = [
    "Andy",
    "Creed",
    "Angela",
    "Darrel",
    "Dwight",
    "Jim",
    "Kelly",
    "Kevin",
    "Meredith",
    "Michael",
    "Ryan",
    "Stanley",
    "Toby",
    "Oscar",
    "Pam",
    "Phyllis"
  ];

  const [imageNumber, setImageNumber] = useState(0);
  // const [pixel, setPixel] = useState(require(`../assets/officepixels/${pixels[imageNumber]}.png`))

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setImageNumber(0)
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const pixelIncrease = () => {
    if (imageNumber + 1) {
      setImageNumber(imageNumber + 1);
    } else {
      setImageNumber(0);
    }
  };

  const pixelDecrease = () => {
    if (imageNumber != 0) {
      setImageNumber(imageNumber - 1);
    } else {
      setImageNumber(pixels.length-1);
    }
  };

  const longPress=()=> {
    Alert.alert(`${pixels[imageNumber]} selected`,`Thanks for choosing ${pixels[imageNumber]}!`,[
      {
        text: "Nice!"
      }
    ])
  }

  const pixelArt = (imageNumber) => {
    switch (imageNumber) {
      case 0:
        return require(`../assets/officepixels/andy.png`);
      case 1:
        return require(`../assets/officepixels/creed.png`);
      case 2:
        return require(`../assets/officepixels/angela.png`);
      case 3:
        return require(`../assets/officepixels/darrel.png`);
      case 4:
        return require(`../assets/officepixels/dwight.png`);
        break;
      case 5:
        return require(`../assets/officepixels/jim.png`);
      case 6:
        return require(`../assets/officepixels/kelly.png`);
      case 7:
        return require(`../assets/officepixels/kevin.png`);
      case 8:
        return require(`../assets/officepixels/meredith.png`);
      case 9:
        return require(`../assets/officepixels/michael.png`);
      case 10:
        return require(`../assets/officepixels/ryan.png`);
      case 11:
        return require(`../assets/officepixels/stanley.png`);
      case 12:
        return require(`../assets/officepixels/toby.png`);
      case 13:
        return require(`../assets/officepixels/oscar.png`);
      case 14:
        return require(`../assets/officepixels/pam.png`);
      case 15:
        return require(`../assets/officepixels/phyllis.png`);
      default:
        return setImageNumber(0);
    }
  };
  const orientation = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.safeViewBackground}>
      <ScrollView
      contentContainerStyle={styles.scrollViewBackground}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }

      >

      <TouchableWithoutFeedback onLongPress={longPress}>
      <Image style={styles.pixelArt} source=
      {pixelArt(imageNumber)} />
      </TouchableWithoutFeedback>

      <View>
        <Text style={styles.title}>This is {pixels[imageNumber]}</Text>
      </View>
      <View style={{ paddingBottom: orientation.portrait ? 100 : 10 }} />
      <View style={{ flexDirection: "row" ,marginLeft: 20, justifyContent: 'space-between'}}>

      <Button
        title="Prev"
        color="lightgrey"
        accessibilityLabel="Go to previous pixel art displayed on the screen"
        onPress={pixelDecrease}
      />
      <View style={{width: 50}}/>
      <Button
        title="Next"
        color="lightblue"
        accessibilityLabel="Proceed to next pixel art displayed on the screen"
        onPress={pixelIncrease}
      />
      </View>

      <View style={{ paddingBottom: orientation.portrait ? 150 : 10 }} />
      <Text style={styles.text}>Credit to: </Text>
      <Text
        style={styles.link}
        onPress={() =>
          Linking.openURL(
            "https://pixelfigures.tumblr.com/post/68724021934/the-office-pixel-art"
          )
        }
      >
        Pixel Figures on Tumblr
      </Text>
    </ScrollView>
    </SafeAreaView>
  );
}

export default OfficePixels;

const styles = StyleSheet.create({
  safeViewBackground: {

    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: 'center'
  },
  scrollViewBackground: {
    // backgroundColor: 'blue',
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: 'center',
  },
  forwardButton: {
    alignContent: "center",
  },
  backButton: {
    width: "80%",
    height: 60,
    alignContent: "center",
    backgroundColor: 'grey'
  },
  pixelArt: {
    alignSelf: "center",
    width: 100,
    height: 200,
  },
  title: {
    color: 'black',
    fontSize: 20,
    paddingTop: 50,
    alignSelf:"center"
  },
  text: {
    color: "black",
    alignSelf: 'center'
  },
  link: {
    color: "blue",
    paddingBottom: 20,
    alignSelf: 'center'
  },
});
