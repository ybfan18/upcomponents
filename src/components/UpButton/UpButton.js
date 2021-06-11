import { Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import t from 'prop-types';
import './UpButton.css';

// const kinds = {
//   info: '#5352ED',
//   positive: '#2ED573',
//   negative: '#FF4757',
//   warning: '#FFA502',
// }

export const UpButton = ({ children, kind, ...rest }) => (
  <div className='btnUp' >
    <Button type={kind}>{children}</Button>
  </div>
)

UpButton.propTypes = {
  /**
   * The kind prop is used to set the alert's background color
   */
  kind: t.oneOf(['primary', 'dashed', 'text', 'link']),
}

UpButton.defaultProps = {
  kind: 'primary',
}
