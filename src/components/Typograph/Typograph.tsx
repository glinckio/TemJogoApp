import React from 'react';

import {Text} from 'react-native';
import {content} from './Typograph.content';

type TypographType = {
  children: React.JSX.Element;
};

const Typograph = (props: TypographType) => {
  return <Text testID={content.testID}>{props.children}</Text>;
};

export default Typograph;
