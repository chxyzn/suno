import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../utils/screen";
import { COLORS } from "../../utils/colors";

export default function Home() {
  return (
    <SafeAreaView>
      <View style={scrollViewStyle.container}>
        <AppBar />
        <RecentlyPlayed
          songs={[
            { name: "Song 1", singer: "Singer 1", count: "1" },
            { name: "Song 2", singer: "Singer 2", count: "2" },
            { name: "Song 3", singer: "Singer 3", count: "3" },
            { name: "Song 4", singer: "Singer 4", count: "4" },
            { name: "Song 5", singer: "Singer 5", count: "5" },
            { name: "Song 6", singer: "Singer 6", count: "6" },
            { name: "Song 7", singer: "Singer 7", count: "7" },
            { name: "Song 8", singer: "Singer 8", count: "8" },
          ]}
        />
        <RecommenededForYou
          songs={[
            { name: "Song 1", singer: "Singer 1", count: "1" },
            { name: "Song 2", singer: "Singer 2", count: "2" },
            { name: "Song 3", singer: "Singer 3", count: "3" },
            { name: "Song 4", singer: "Singer 4", count: "4" },
            { name: "Song 5", singer: "Singer 5", count: "5" },
            { name: "Song 6", singer: "Singer 6", count: "6" },
            { name: "Song 7", singer: "Singer 7", count: "7" },
            { name: "Song 8", singer: "Singer 8", count: "8" },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

const scrollViewStyle = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.primary,
  },
});

const AppBar = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: verticalScale(50),
      }}
    >
      <Text style={{ fontSize: moderateScale(32), color: COLORS.white }}>
        SUNO
      </Text>
    </View>
  );
};

const RecentlyPlayed = ({ songs }: { songs: Song[] }) => {
  console.log(songs);
  return (
    <View style={{ marginLeft: horizontalScale(12) }}>
      <Text
        style={{
          fontSize: moderateScale(24),
          color: COLORS.white,
          marginBottom: verticalScale(12),
        }}
      >
        Recently Played
      </Text>
      <FlatList
        horizontal
        data={songs}
        renderItem={({ item }) => <RecentlyPlayedItem song={item} />}
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </View>
  );
};

const RecentlyPlayedItem = ({ song }: { song: Song }) => {
  return (
    <View style={{ marginRight: horizontalScale(10) }}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FYPDsy6JPufPoVlaNW9RSjX_AD4e5pEevQ&s",
        }}
        style={{
          resizeMode: "contain",
          width: horizontalScale(130),
          borderRadius: moderateScale(12),
          height: verticalScale(130),
        }}
      ></Image>
      <Text
        style={{
          fontSize: moderateScale(18),
          color: COLORS.white,
          alignSelf: "center",
          marginTop: verticalScale(6),
        }}
      >
        {song.name}
      </Text>
    </View>
  );
};

const RecommenededForYou = ({ songs }: { songs: Song[] }) => {
  return (
    <View
      style={{
        marginLeft: horizontalScale(12),
        marginTop: verticalScale(20),
      }}
    >
      <Text
        style={{
          fontSize: moderateScale(24),
          color: COLORS.white,
          marginBottom: verticalScale(12),
        }}
      >
        Recommended For You
      </Text>
      <FlatList
        data={songs}
        renderItem={({ item }) => <RecommenededForYouItem song={item} />}
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </View>
  );
};

const RecommenededForYouItem = ({ song }: { song: Song }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: verticalScale(18),
      }}
    >
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FYPDsy6JPufPoVlaNW9RSjX_AD4e5pEevQ&s",
        }}
        style={{
          resizeMode: "contain",
          width: horizontalScale(130),
          height: verticalScale(130),
          borderRadius: moderateScale(12),
          marginRight: horizontalScale(12),
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text>{song.name}</Text>
        <Text>{song.singer}</Text>
        <Text>{song.count + " streams"}</Text>
      </View>
    </View>
  );
};

type Song = {
  name: string;
  singer: string;
  count: string;
};
