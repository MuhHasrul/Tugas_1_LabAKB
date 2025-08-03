import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 70,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "yellow",
          backgroundColor: "transparent",
          marginBottom: 20,
        }}
      />

      <View
        style={{
          width: 180,
          height: 50,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "black" }}>Fauzan Azhari Rahman</Text>
      </View>

      <View
        style={{
          width: 80,
          height: 180,
          backgroundColor: "green",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 10 }}>1058411096322</Text>
      </View>

    </View>
  );
}
