import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import React from 'react';
import { LineChart } from 'react-native-chart-kit';

export const Revenue = () => {
  const data = {
    labels: ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM'],
    datasets: [
      {
        data: [120, 190, 300, 420, 350, 400, 500],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // optional
        strokeWidth: 2 ,// optional
      },
    ],
    legend: ['Revenue'], // optional
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Total Revenue</Text>
        <Text style={styles.subTitle}>Daily</Text>
        <Text style={styles.details}>See Details</Text>
      </View>
        <Text style={styles.revenue}>$2,241</Text>

      <LineChart
        data={data}
        width={300} // from react-native
        height={163}
        yAxisLabel="$"
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '3',
            strokeWidth: '2',
            stroke: 'red',
          },
        }}
        bezier
        style={styles.chart}
        withInnerLines={false}
        withHorizontalLabels={false}
      />
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    width: 320,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 6,
    paddingTop: 2,
    margin: 25,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    color: '#666',
  },
  revenue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 0,
  },
  // subHeader: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  //   alignItems: 'center',
  // },
  subTitle: {
    fontSize: 14,
    color: '#666',
  },
  details: {
    fontSize: 14,
    color: '#007aff',
  },
  chart: {
    // marginVertical: 2,
    borderRadius: 16,
  },
});
