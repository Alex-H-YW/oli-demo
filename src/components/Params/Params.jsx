import { Input, Row, Col, List } from 'antd';
import styles from './Params.less';



const Params = ({apiInfo}) => {
  
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
                <Input />
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