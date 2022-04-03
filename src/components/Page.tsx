import {Theme, useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {Constants} from '../Constants';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import ScalePressable from './ScalePressable';

type Props = {
  modal?: boolean;
  editable?: boolean;
  children: React.ReactNode[];
};

type Item = {
  key: string;
  element: React.ReactNode;
};

const ScrollViewWrapper = ({
  enabled,
  children,
}: {
  enabled: boolean;
  children: any;
}) => (enabled ? <ScrollView>{children}</ScrollView> : children);

const Page = (props: Props) => {
  const {colors} = useTheme() as Theme;
  const {width} = useWindowDimensions();
  const [dragging, setDragging] = useState(false);
  const [data, setData] = useState(
    props?.children?.map((element, index) => {
      const item: Item = {
        key: index.toString(),
        element,
      };
      return item;
    }),
  );

  const renderItem = ({item, drag}: RenderItemParams<Item>) => {
    return (
      <ScalePressable
        onPress={() => null}
        style={{
          margin: dragging ? -1 : 0,
          borderWidth: dragging ? 1 : 0,
          borderColor: '#AAAAAA99',
          borderStyle: 'dashed',
          borderRadius: 6,
        }}
        onLongPress={drag}>
        {item.element}
      </ScalePressable>
    );
  };

  if (props.modal && width > Constants.maxWidth) {
    return (
      <View style={styles.webOverlay}>
        <View
          style={[
            styles.webContent,
            {backgroundColor: colors.background, borderColor: colors.hovered},
          ]}>
          {props.children}
        </View>
      </View>
    );
  }

  if (props.editable) {
    return (
      <ScrollViewWrapper enabled={Platform.OS === 'web'}>
        <DraggableFlatList
          style={styles.container}
          contentContainerStyle={styles.content}
          contentInsetAdjustmentBehavior="automatic"
          data={data}
          onDragBegin={() => setDragging(true)}
          onDragEnd={({data}) => {
            setDragging(false);
            setData(data);
          }}
          keyExtractor={element => element.key}
          renderItem={renderItem}
        />
      </ScrollViewWrapper>
    );
  } else {
    return (
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.content}
        contentInsetAdjustmentBehavior="automatic"
        data={data}
        keyExtractor={element => element.key}
        renderItem={item => item.item.element}
      />
    );
  }
};

export default Page;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  content: {
    width: '100%',
    maxWidth: Constants.maxWidth,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  webOverlay: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000BB',
  },
  webContent: {
    width: '80%',
    padding: 64,
    borderWidth: 0.2,
    borderColor: 'red',
    borderRadius: 10,
    maxWidth: Constants.maxWidth - 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
