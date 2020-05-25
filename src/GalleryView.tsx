import React, { useRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';

import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';

import {
  ColumnLayout,
  RowLayout,
  RowWrapLayout,
  ColumnWrapLayout,
} from './Layouts';

export enum GalleryLayout {
  Column = 'column',
  ColumnWrap = 'columnWrap',
  Row = 'row',
  RowWrap = 'rowWrap',
}

const getLayout = (layout: GalleryLayout) => {
  switch (layout) {
    case GalleryLayout.Column:
      return ColumnLayout;
    case GalleryLayout.ColumnWrap:
      return ColumnWrapLayout;
    case GalleryLayout.Row:
      return RowLayout;
    case GalleryLayout.RowWrap:
      return RowWrapLayout;
    default:
      return RowLayout;
  }
};
const transition = (
  <Transition.Change durationMs={400} interpolation="easeInOut" />
);

export interface GalleryViewProps {
  /** The layout for the gallery. Defaults to 'row' */
  layout?: GalleryLayout;

  /** The amount of space to have betwen items. Defaults to 5 */
  spacing?: number;

  /** Additional styles or override default styles for each gallery item */
  itemStyle?: StyleProp<any>;

  /** Do not pass this as prop. Use this method to animate the gallery to a new layout. See code example for details */
  setLayout: (newLayout: GalleryLayout) => void;

  /**
   * Additional styles or styles to override default style for all layout modes. This will be overriden by
   * the more specific style props: columnLayoutStyle, rowLayoutStyle, wrapLayoutStyle
   */
  style?: StyleProp<ViewStyle>;

  /** Additional style or override styles when gallery is in column mode */
  columnLayoutStyle?: StyleProp<ViewStyle>;

  /** Additional style or override styles when gallery is in row mode */
  rowLayoutStyle?: StyleProp<ViewStyle>;

  /** Additional style or override styles when gallery is in wrap mode */
  wrapLayoutStyle?: StyleProp<ViewStyle>;
}

/** Component to show items in a Gallery style supporting multiple layouts and animating between them */
const GalleryView = React.forwardRef<GalleryViewProps, any>(
  (
    {
      layout = GalleryLayout.RowWrap,
      spacing = 5,
      style,
      columnLayoutStyle,
      rowLayoutStyle,
      wrapLayoutStyle,
      itemStyle,
      children,
    },
    ref
  ) => {
    const [currentLayout, setCurrentLayout] = useState(layout);
    const transitionRef = useRef<TransitioningView>(null);

    useImperativeHandle(ref, () => ({
      setLayout: (newLayout) => {
        if (transitionRef.current) {
          transitionRef.current.animateNextTransition();
          setCurrentLayout(newLayout);
        }
      },
    }));

    let providedLayoutStyle = {};
    if (currentLayout === GalleryLayout.Column)
      providedLayoutStyle = columnLayoutStyle;

    if (currentLayout === GalleryLayout.Row)
      providedLayoutStyle = rowLayoutStyle;

    if (currentLayout === GalleryLayout.RowWrap)
      providedLayoutStyle = wrapLayoutStyle;

    return (
      <Transitioning.View
        style={[
          styles.container,
          getLayout(currentLayout).layout.container,
          style,
          providedLayoutStyle,
        ]}
        ref={transitionRef}
        transition={transition}
      >
        {React.Children.map(children, (currChild, index) => {
          if (currChild) {
            const childStyle = [
              currChild.props.style,
              getLayout(currentLayout).layout.child,
              { margin: spacing },
              itemStyle,
            ];
            return React.cloneElement(currChild, {
              style: childStyle,
              key: `galleryItem${index}`,
            });
          } else {
            return null;
          }
        })}
      </Transitioning.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GalleryView;
