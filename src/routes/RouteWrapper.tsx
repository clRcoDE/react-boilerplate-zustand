import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';



import {RouterWrapperInterface} from '../types'


const token = 'key'

export default function RouteWrapper(props : RouterWrapperInterface) {

  const { Component, route ,path, key, shouldProtect = true, ...rest } = props;


  useEffect(() => {
    document.title = route.name;
  }, [route.name]);


  const handleProtect = (props : any) => {
    if (shouldProtect) {
      return token ? <Component {...props} /> : <Redirect to={{ pathname: '/auth' }} />;
    } else {
      return <Component {...props} />;
    }
  };

  return <Route {...rest} render={(props : any) => handleProtect(props)} />;
}
