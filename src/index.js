import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {name: '2000', deaths: 12},
  {name: '2001', deaths: 11},
  {name: '2002', deaths: 10},
  {name: '2003', deaths: 9},
  {name: '2004', deaths: 14},
  {name: '2005', deaths: 8},
  {name: '2006', deaths: 9},
  {name: '2007', deaths: 12},
  {name: '2008', deaths: 15},
  {name: '2009', deaths: 12},
  {name: '2010', deaths: 7},
  {name: '2011', deaths: 8},
  {name: '2012', deaths: 12},
  {name: '2013', deaths: 17},
  {name: '2014', deaths: 11},
  {name: '2015', deaths: 8},
  {name: '2016', deaths: 8},
  {name: '2017', deaths: 12}
];
const barchart = 
    <BarChart width={1170} height={250} barSize={5} data={data}>
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }}/>
        <Bar dataKey='deaths' fill='#E94337'/>
    </BarChart>;

ReactDOM.render(
  barchart,
  document.getElementById('container')
);