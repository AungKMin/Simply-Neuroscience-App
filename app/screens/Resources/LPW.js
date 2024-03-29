import React from "react";
import { Text } from "native-base";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import colors from "../../config/colors";

function LPW() {
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
      <ScrollView>
        <Text style={styles.titleText}>lesson plans/workshops</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.simplyneuroscience.org/ggsxsn-lesson-plans"
            )
          }
        >
          <Image
            source={require("../../assets/quizlet.png")}
            style={styles.schedule}
            resizeMode="stretch"
          />
        </TouchableOpacity>

        <Image
          source={require("../../assets/brainbuilding.png")}
          style={styles.schedule2}
          resizeMode="stretch"
        />
        <Image
          source={require("../../assets/brainbuildinginfo.png")}
          style={styles.schedule3}
          resizeMode="stretch"
        />
      </ScrollView>
    </View>
  );
}

let wHeight = Dimensions.get("window").height;
let wWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  descBox: {
    height: wHeight * 0.44,
    width: Math.min(wWidth * 1, wHeight * 0.4) * 0.95,
  },
  schedule: {
    height: wHeight * 0.21,
    width: wWidth * 0.9,
    marginBottom: "4%",
    marginTop: "4%",
    alignSelf: "center",
  },
  schedule2: {
    height: wHeight * 0.27,
    width: wWidth * 0.9,
    marginBottom: "3%",
    alignSelf: "center",
  },
  schedule3: {
    height: wHeight * 0.3,
    width: wWidth * 0.9,
    alignSelf: "center",
    marginBottom: "10%",
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginTop: "4%",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default LPW;
