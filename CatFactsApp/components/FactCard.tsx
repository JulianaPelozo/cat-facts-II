import React from "react";
import { Card, Text } from "react-native-paper";

export default function FactCard({ text }: { text: string }) {
  return (
    <Card style={{ marginBottom: 15, backgroundColor: "#F7ECFF" }}>
      <Card.Content>
        <Text style={{ fontSize: 15 }}>{text}</Text>
      </Card.Content>
    </Card>
  );
}
