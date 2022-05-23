import { Input, Row, Col, List, Form } from 'antd';
//import { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './Params.less';



const Params = ({apiInfo, update}) => {

  const [form] = Form.useForm();
  //const inputRef = useRef();

  // useImperativeHandle(ref, () => ({
  //   formFields: form.getFieldValue()
	
	// }));

  
  
  return (
    <div className={styles.Params}>
      <h3>Params</h3>
      <List className={styles.ListParms}>
        {
          apiInfo?.params.map(param => (
            <List.Item>
            <Row className={styles.paramsRow}>
              <Col span={12}>
                <div>
                  <ul className={styles.requireParamsCotent}>
                    <li className={styles.paramsName}>{param.name}</li>
                    <li>{param.type}</li>
                    <li>{param.require}</li>
                  </ul>
                </div>
                <div>
                  <span>{param.description}</span>
                </div>
              </Col>
              <Col span={12}>
                <Form form={form}
                onValuesChange={(changeValues) => {
                  update({
                    ...changeValues 
                  });
                }}
                >
                <Form.Item name={param.name}>
                  <Input />
                </Form.Item>
                </Form>
              </Col>
            </Row>
            </List.Item>
            )
          )
        }
     </List>
    </div>
 
  )
}
export default Params;