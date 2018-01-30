import React from 'react';
import styles from './Omit.css';
// import {Tooltip} from 'antd';

function Omit({text = '', length}) {

  return (
    <span>
      qeet
    {/*{text ? <Tooltip title={<div className={styles.text}>{text}</div>}>*/}
        {/*{text.length > length ? (text.substr(0, length) + '...') : text}*/}
      {/*</Tooltip> : ''}*/}
    </span>
  );
}

Omit.propsTypes={
  text:React.PropTypes.string.isRequired,
  length:React.PropTypes.number.isRequired
};

export default Omit;
