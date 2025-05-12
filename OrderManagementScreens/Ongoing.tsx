import React from 'react';
import { ScrollView, View } from 'react-native';
import { OngoingItems } from './OngoingItems';

export const Ongoing = () => {
  return (
    <ScrollView>
        <View>
            <OngoingItems/>
            <OngoingItems/>
            <OngoingItems/>
        </View>

    </ScrollView>
  );
};
