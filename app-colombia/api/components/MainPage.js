import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getColombiaInfo } from "../Services";
import { Icon } from "react-native-elements";
import axios from "axios";

const MainPage = () => {
  const [colombiaInfo, setColombiaInfo] = useState({});

  useEffect(() => {
    const getColombiaInfo = () => {
      const url = "https://api-colombia.com/api/v1/country/colombia";
      axios.get(url).then((res) => {
        setColombiaInfo(res.data);
      });
    };
    getColombiaInfo();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Información acerca de:{colombiaInfo.name}
      </Text>
      <Text style={styles.text}>Regiones:{colombiaInfo.name}</Text>
      <Text style={styles.text}>Descripción:{colombiaInfo.description}</Text>
      <Text style={styles.text}>Capital:{colombiaInfo.stateCapital}</Text>
      <Text style={styles.text}>Superficie:{colombiaInfo.surface}</Text>
      <Text style={styles.text}>Población:{colombiaInfo.population}</Text>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
