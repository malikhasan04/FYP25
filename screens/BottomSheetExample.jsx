import 'react-native-reanimated';
import 'react-native-gesture-handler';
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const BottomSheetExample = ({handleOrderPress}) => {
  const bottomSheetRef = useRef(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};
export default BottomSheetExample;

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    padding: 24,
    backgroundColor: 'gray',
  },
});
