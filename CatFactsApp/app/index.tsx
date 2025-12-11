import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Card, Text, Button, ActivityIndicator } from "react-native-paper";
import { Link } from "expo-router";

export default function HomeScreen() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const loadFact = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFact(data.fact);
    } catch {
      setFact("Erro ao carregar.");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadFact();
  }, []);

  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FFF6FF",
      }}
    >
    
      <Image
        source={{
         uri: "https://cdn-icons-png.flaticon.com/512/1864/1864514.png",
        }}
        style={{
          width: 70,
          height: 70,
          alignSelf: "center",
          marginBottom: 20,
          opacity: 0.8,
        }}
      />

      <Card style={{ backgroundColor: "#F7ECFF" }}>
        <Card.Title title="Fato Aleatório" titleStyle={{ color: "#6A4BA3" }} />
        <Card.Content>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={{ fontSize: 16 }}>{fact}</Text>
          )}
        </Card.Content>
      </Card>

      <Button mode="contained" style={{ marginTop: 20 }} onPress={loadFact}>
        Novo fato 
      </Button>

      <Link href="/list" asChild>
        <Button mode="outlined" style={{ marginTop: 20 }}>
          Ver lista fofinha
        </Button>
      </Link>

  
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1818/1818402.png",
        }}
        style={{
          width: 60,
          height: 60,
          position: "absolute",
          bottom: 10,
          right: 10,
          opacity: 0.3,
        }}
      />
    </View>
  );
}
