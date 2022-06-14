import { Input, Row, Col, List, Form } from 'antd';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styles from './Params.less';
import { IApiItem } from '../../interface/interface';

interface ParamsProps {
  apiInfo: IApiItem;
  update: (values: string| number) => void;
};

const Params: React.FC<ParamsProps> = ({apiInfo, update}, ref ) => {
  const [form] = Form.useForm();

  //const inputRef = useRef();
  //const [defaultData, setDefaultData] = useState();
 
  // useImperativeHandle(ref, () => ({
  //   formFields:defaultData
  // }),
  // [{}]
  // );
  
  useEffect(()=>{
    form.resetFields();
    //setDefaultData(form.getFieldsValue());
  },[apiInfo]);


  return (
    <div className={styles.Params}>
      <h3>Params</h3>
      <List className={styles.ListParms}>
        {
          apiInfo?.params.map(param => (
            <List.Item>
            <Row className={styles.paramsRow}>
              <Col span={12}>
                <ul className={styles.requireParamsCotent}>
                  <li className={styles.paramsName}>{param.name}</li>
                  <li>{param.type}</li>
                  <li>{param.require}</li>
                </ul>
                <div>
                  <span>{param.description}</span>
                </div>
              </Col>
              <Col span={12}>
                <Form 
                  //ref={inputRef}
                  form={form}
                  onValuesChange={(changeValues,values) => {
                    update({
                      ...values,
                      ...changeValues
                    });
                  }
                }
              >
                  <Form.Item name={param.name} initialValue={param.default}>
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