
import React from 'react'

//  screens  interfaces

interface HomeInterface { }
interface AuthInterface { }


// layout interfaces

interface LayoutInterface {
    children: JSX.Element
}

// components interfaces


// zustand store interfaces
enum BearsTypes {
    Grizzly = "Grizzly",
    Brown = "Brown",
    Black = "Black",
    Polar = "Polar",
  }
interface BearState {
    forest:{bears:number,bearType:BearsTypes},
    increaseBears:(addedNumber : number) => void,
    swapBears:(newBearType : BearsTypes) => void

}

// utils interfaces



// routes interfaces

interface RouterWrapperInterface {
    key: string;
    path: string;
    route: { name: string };
    shouldProtect: boolean;
    Component:typeof React.Component,
    [k: string]: any;
}


export type {
    HomeInterface,
    AuthInterface,
    LayoutInterface,
    RouterWrapperInterface,
    BearState,
    
}

export {
    BearsTypes
}