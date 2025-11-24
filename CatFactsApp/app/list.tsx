import React, { useEffect, useState } from "react";
import { ScrollView, View, Image } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import FactCard from "../components/FactCard";

export default function ListScreen() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadFacts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://catfact.ninja/facts?limit=12");
      const data = await res.json();
      setFacts(data.data);
    } catch {
      console.log("Erro ao carregar");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadFacts();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF6FF" }}>
      <ScrollView style={{ padding: 20 }}>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/616/616430.png" }}
            style={{ width: 60, height: 60, opacity: 0.7 }}
          />
          <Text style={{ marginTop: 10, color: "#6A4BA3" }}>Fatos fofinhos 🐾💜</Text>
        </View>

        {loading ? (
          <ActivityIndicator />
        ) : (
          facts.map((item: any, index: number) => (
            <FactCard key={index} text={item.fact} />
          ))
        )}
      </ScrollView>

      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1818/1818402.png",
        }}
        style={{
          width: 70,
          height: 70,
          position: "absolute",
          bottom: 10,
          left: 10,
          opacity: 0.25,
        }}
      />
    </View>
  );
}
