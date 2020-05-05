import React from 'react';
import UseJsonFetch from '../hooks/UseJsonFetch';
import Alert from './Alert';
 
function GetData(props) {
  const {action} = props;
  const url = process.env.REACT_APP_SERVER_URL + action;
  const opts = [];
  const [data, loading, error] = UseJsonFetch(url, opts);
  
  if (loading) { 
    return <Alert text={'Loading...'} kind={'warning'}/>
  } else if (error) {
    return <Alert text={error.name + ': ' + error.message} kind={'danger'}/>   
  } else if (data) {
    return <Alert text={'A data obtained: ' + JSON.stringify(data)}/>   
  } else {
    return null;
  }

}

export default GetData;