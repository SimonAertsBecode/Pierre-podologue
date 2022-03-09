import { Dispatch, SetStateAction } from 'react';

export interface dataInt {
   data: {
      title: string;
      description: JSX.Element;
   };
   modalVisible: boolean;
   close?: Dispatch<SetStateAction<boolean>>;
   link?: string;
}
