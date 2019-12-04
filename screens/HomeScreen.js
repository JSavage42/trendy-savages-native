import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Announcement />
          <Image
            source={require("../assets/images/trendysavages--short.png")}
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>

        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function Announcement() {
  return (
    <Text style={styles.announcementText}>
      Announcement: This App is In Development. Please be patient.
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9"
  },
  announcementText: {
    backgroundColor: '#5100d1',
    marginBottom: 20,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    width: '100%',
    padding: '.5%'
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: '100%',
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  }
});
