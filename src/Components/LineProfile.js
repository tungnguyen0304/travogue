import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import TicketCard from "./TicketCard";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

export default function LineProfile() {
  const [following, setFollowing] = useState(false);

  return (
    <View style={{ height: 55, width: "85%", marginTop: 10 }}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 18,
          paddingVertical: 12,
        }}
      >
        <Pressable
          onPress={() => {}}
          style={[styles.avatar, styles.actionPadding]}
        >
          <Image
            style={[styles.avaImg, { marginRight: 10 }]}
            resizeMode="cover"
            source={require("../Assets/ava1.jpg")}
          />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View style={{ width: "65%", marginTop: 5 }}>
            <View style={styles.line1}>
              <Text style={styles.title}>{"aquan09010"}</Text>
            </View>
            <Text style={{ paddingTop: 3, paddingRight: 45 }}>
              {"Young killua"}
            </Text>
          </View>
          <Pressable
            onPress={() => {
              setFollowing(!following);
            }}
            style={{
              borderRadius: 15,
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 30,
            }}
          >
            {!following ? (
              <View style={styles.followButton}>
                <Text style={styles.followText}>Theo dõi</Text>
              </View>
            ) : (
              <View style={styles.followingButton}>
                <Text style={styles.followingText}>Đang theo dõi</Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    padding: 16,
    paddingBottom: 0,
    backgroundColor: "#fff",
  },
  avaImg: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  followText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  followingText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  followButton: {
    borderRadius: 15,
    backgroundColor: "#418dff",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
  },
  followingButton: {
    borderRadius: 15,
    backgroundColor: "#e8e8e8",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
  },
});