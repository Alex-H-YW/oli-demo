import styles from "./CodeEdit.less"
import { Input, Button } from 'antd';
import { useState } from 'react';
import Response from '../Response/Response'
import axios from 'axios';
import CodeMirror from '@uiw/react-codemirror';
import { oneDarkTheme } from '@codemirror/theme-one-dark';
import _, {isEmpty} from 'lodash';


export default function CodeEdit({formData,apiInfo}) {
  const [response, setResponse] = useState();
  const baseURL = `https://api.finmarketdata.com/${apiInfo.url}?${!isEmpty(formData)? 
  _.map(formData, (key, item) => {
  return `${item}=${key}`
  })
  :apiInfo.params.map(item=>`${item.name}=${item.default}`)}`
  console.log("url",baseURL.replace(/,/g,'&'));

  const handleGetReq =()=> {  
    axios.get(baseURL)
    .then((res)=>{
      setResponse(res.data)
    })
    .catch(error => {
      console.log(error.response.data.error);
    })
  }


  const codeDisplay = `curl --request GET  \n     --url   https://api.finmarketdata.com/${apiInfo.url}?${!isEmpty(formData)? 
    _.map(formData, (key, item) => {
    return `${item}=${key}`
    })
    :apiInfo.params.map(item=>`${item.name}=${item.default}`)}`;
const value = codeDisplay.replace(/,/g,'&')
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
          theme={oneDarkTheme}
          value={value}
          height="150px"
          maxWidth="500px"
          readOnly={true}
          // extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
          }}
        />
        
         
      </div>
      <div className={styles.try}>
        <Button className={styles.tryBtn} onClick={()=>handleGetReq()}>
          <span>Try It!</span>
        </Button>
      </div>
      <div className={styles.resBox}>
        <Response response={response}/>
      </div>       
    </div>
  )
}
