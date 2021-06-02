import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import dynamic from "next/dynamic";

// Create styles
const styles = StyleSheet.create({
  page: { backgroundColor: "#E4E4E4", padding: 30 },
  section: { textAlign: "center", marginBottom: 30 },
  text: { textAlign: "left", fontSize: 14 },
  title: { textAlign: "center", fontSize: 20 },
  date: { textAlign: "center", fontSize: 14 },
});

// Create Document Component
const MyDocument = ({ data }) => {
  const {
    reactionA,
    reactionB,
    reactionD,
    calculatedLimitEscBc,
    calculatedLimitEscDe,
    displacementPointA,
    displacementPointc,
    displacementPointE,
    displacementPointF,
    deformationBC,
    deformationDE,
  } = data;

  const date = new Date().toLocaleDateString();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Universidade Federal de Goiás</Text>
          <Text style={styles.title}>Resistência dos Materiais I</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Alunos:</Text>
          <Text style={styles.text}>Marcus Vinicius Marques</Text>
          <Text style={styles.text}>Victor Hugo Marques</Text>
          <Text style={styles.text}>Lorenzo Antônio Leite</Text>
        </View>
        <View style={styles.section}></View>
        <View style={styles.section}>
          <Text style={styles.title}>Relatório Estrutural</Text>
        </View>
        <View style={styles.section}></View>
        <View style={styles.section}>
          <Text style={styles.text}>Limites de escoamento:</Text>
          <Text style={styles.text}>Arame BC = {calculatedLimitEscBc} MPa</Text>
          <Text style={styles.text}>Arame DE = {calculatedLimitEscDe} MPa</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Reações:</Text>
          <Text style={styles.text}>A = {reactionA} KN</Text>
          <Text style={styles.text}>B = {reactionB} KN</Text>
          <Text style={styles.text}>D = {reactionD} KN</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Deslocamentos:</Text>
          <Text style={styles.text}>Ponto A = {displacementPointA} m</Text>
          <Text style={styles.text}>Ponto C = {displacementPointc} m</Text>
          <Text style={styles.text}>Ponto E = {displacementPointE} m</Text>
          <Text style={styles.text}>Ponto F = {displacementPointF} m</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Deformações:</Text>
          <Text style={styles.text}>Arame BC = {deformationBC}</Text>
          <Text style={styles.text}>Arame DE = {deformationDE}</Text>
        </View>
        <View style={styles.section}></View>
        <View style={styles.section}></View>
        <View style={styles.section}></View>
        <View style={styles.section}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </Page>
    </Document>
  );
};

const DynamicComponent = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
  }
);

export default function DownloadDocument({ data }) {
  return (
    <DynamicComponent
      document={<MyDocument data={data} />}
      fileName="relatorio_estrutural.pdf"
    >
      {({ loading }) => (loading ? "Carregando..." : "Gerar relatório")}
    </DynamicComponent>
  );
}
