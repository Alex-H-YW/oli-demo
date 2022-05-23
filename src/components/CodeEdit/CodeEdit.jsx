import CodeMirror from 'react-codemirror';
//import { javascript } from 'codemirror/mode/javascript';
import styles from "./CodeEdit.less"
import "codemirror/lib/codemirror.css";
import 'codemirror/theme/abcdef.css';
import { Input, Button } from 'antd';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

export default function CodeEdit({formData,apiInfo}) {
  console.log("formdata",formData);
  const codeDisplay = `const sdk = require('api')('@fintel/v0.0#1mld74kq6wam9o');
  sdk['insider-trades']({country: 'us', symbol: 'tsla'}) `


  return (
    <div className={styles.codeMirror}>
      <div className={styles.HeaderApi}>
        <div className={styles.HeaderContent}>
          <h4>API</h4>
        </div>
        <div className={styles.installContent}>
          <h4>INSTALLATION</h4>
          <Input className={styles.installBtn} prefix="$"  defaultValue={`npm install api --save`} disabled/>
          <h4 className={styles.req}>REQUEST</h4>
        </div>
      </div>
      <div className={styles.resquestContent}>
        <CodeMirror
          options={{
            lineNumbers: 'true',
            readOnly:'true',
            theme: 'abcdef',
            mode: 'javascript',
          }}
            value={codeDisplay}
              height="150px"
              //extensions={[javascript({ jsx: true })]}
              onChange={(value, viewUpdate) => {
                console.log('value:', value);
              }}
          />
      </div>
      <div className={styles.try}>
        <Button className={styles.tryBtn}>
          <span>Try It!</span>
        </Button>

      </div>

          
    </div>
  )
}
