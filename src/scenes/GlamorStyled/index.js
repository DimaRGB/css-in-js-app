import React from 'react';
import Page from '../../components/Page';

export default () => {
  return (
    <Page
      title="GlamorStyled"
      github="threepointone/glamor"
      load={onLoad => {
        require.ensure(['./Block', './DifferentBlocks'], () => {
          const block = require('./Block').default;
          const differentBlocks = require('./DifferentBlocks').default;

          onLoad({ block, differentBlocks });
        });
      }}
    />
  );
};
