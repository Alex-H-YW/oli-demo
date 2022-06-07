import { useContext,useState, useEffect, useRef} from 'react';
import SideBar from '../../components/Header/SideBar/SideBar';
import ResExample from '../../components/ResExample/ResExample';
import Intro from '../../components/Intro/Intro';
import Params from '../../components/Params/Params';
import { Row, Col } from 'antd';
import { useLocation } from 'react-router-dom';
import DataContext from "../../components/Context"
import { isEmpty } from 'lodash';
import CodeEdit from '../../components/CodeEdit/CodeEdit';
import Language from '../../components/Language/Language';
import Authentication from '../../components/Authentication/Authentication';
import styles from './Reference.less'

const Reference = () => {
  const {search}  =  useLocation();
  const apiList = useContext(DataContext);
  const [apiInfo, setApiInfo] = useState();
  const paramFormRef = useRef();
  const [formData, setFormData] = useState();
  const [chooseLanguage, setChooseLanguage] = useState();

  const handleChangeLanguage = (value) => {
      setChooseLanguage(value);
    }
    console.log("chooseLanguage",chooseLanguage);

 
    const updateFormData = (values) => {
      setFormData({
        //...formData,
        ...values
      });
    };
 
  useEffect(() => {
    const urlId = search.split('=')[1];
    if(!isEmpty(urlId)){
      const data = apiList.find(item =>{
              return item.id === Number(urlId);
          })      
      setApiInfo(data);
      setFormData();
    }      
  },[search])

  return (
    <div className={styles.referenceContent}>
        <Row>
        <Col span={6}>
          <SideBar/>
        </Col>
        <Col span={9} className={styles.referenceMiddle}>
          <Row>
          {!isEmpty(apiInfo) &&
            <Intro apiInfo={apiInfo}/>
          }
          </Row>
          <Row>
          {!isEmpty(apiInfo) &&
             <Params apiInfo={apiInfo} update={updateFormData} ref={paramFormRef}/>
          }
          </Row>
          <Row>
          {!isEmpty(apiInfo) &&
             <ResExample apiInfo={apiInfo}/>
          }
          </Row>
          
        </Col>
        <Col span={9}>
          <Language handleChangeLanguage={handleChangeLanguage}/>
          <Authentication />
          {!isEmpty(apiInfo) &&
            <CodeEdit formData={formData} apiInfo={apiInfo} chooseLanguage={chooseLanguage}/> 
          }
      </Col>
    </Row>
    </div>
  )
}
export default Reference;
