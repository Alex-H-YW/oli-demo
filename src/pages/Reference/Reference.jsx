import { useContext,useState, useEffect, useRef} from 'react';
import SideBar from '../../components/Header/SideBar/SideBar';
import Response from '../../components/Response/Response';
import Intro from '../../components/Intro/Intro';
import Params from '../../components/Params/Params';
import { Row, Col } from 'antd';
import { useLocation } from 'react-router-dom';
import DataContext from "../../components/Context"
import { isEmpty } from 'lodash';
import CodeEdit from '../../components/CodeEdit/CodeEdit';

const Reference = () => {
  const {search}  =  useLocation();
  const apiList = useContext(DataContext);
  const [apiInfo, setApiInfo] = useState();
  //const paramFormRef = useRef();
  const [formData, setFormData] =useState();
 
    const updateFormData = (values) => {
      setFormData({
        ...formData,
        ...values
      });
    };
//console.log("test", formData);
  useEffect(() => {
    const urlId = search.split('=')[1];
    if(!isEmpty(urlId)){
      const data = apiList.find(item =>{
              return item.id === Number(urlId)
          })   
      setApiInfo(data);
    }      
    },[search])
  
  return (
    <div className='referenceContent'>
        <Row>
        <Col span={6}>
          <SideBar/>
        </Col>
        <Col span={10}>
          <Row>
          {!isEmpty(apiInfo) &&
            <Intro apiInfo={apiInfo}/>
          }
          </Row>
          <Row>
          {!isEmpty(apiInfo) &&
             <Params apiInfo={apiInfo} update={updateFormData}/>
          }
          </Row>
          <Row>
          {!isEmpty(apiInfo) &&
             <Response apiInfo={apiInfo}/>
          }
          </Row>
          
        </Col>
        <Col span={8}>
          {!isEmpty(apiInfo) &&
            <CodeEdit formData={formData} apiInfo={apiInfo}/> 
          }
      </Col>
    </Row>
    </div>
  )
}
export default Reference;
