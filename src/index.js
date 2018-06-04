import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BarChart, Bar,Tooltip } from 'recharts';
import data from './data/data.json';
import { StatsWidget } from './components/statsheader';

var total=0;

function sum(data){
    var i=0;
    var out=0;
    for(i in data)
        {
            console.log(data[i].deaths);
            out= out + data[i].deaths;
            i++;
        }
    total=out;
    console.log(out);
}

sum(data);

const statwidget= <StatsWidget takesum={total}></StatsWidget>;

const barchart = 
    <BarChart width={1170} height={250} barSize={5} data={data}>
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }}/>
        <Bar dataKey='deaths' fill='#E94337'/>
    </BarChart>;

ReactDOM.render(
    statwidget,
    document.getElementById('stats')
);

ReactDOM.render(
  barchart,
  document.getElementById('container')
);