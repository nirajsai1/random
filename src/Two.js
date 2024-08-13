import React from 'react'
import { useState } from 'react';
import './two.css';
const Two = () => {
    const names=['RS','VK','MSD'];
    const errors=['already Player1 Selected','']
    const [p1,setP1]=useState('');
    const [p2,setP2]=useState('');
    const [click,setClick]=useState(false);
    const [clickk,setClickk]=useState(false);
    const [info1,setInfo1]=useState('');
    const [info2,setInfo2]=useState('');
    const [hehe,setHehe]=useState('');
    const [huii,setHuii]=useState('');
    const [ans,setAns]=useState('');
    var x='';
    const fun1 = ()=>
    {
        if(click===false)
        {
        x='RS';
        setP1('RS');
        setInfo1(`Player1 Selected:${x}`);
        setClick(true);
        setHehe('edit');
        }
        if(click===true && clickk===false)
        {
            x='RS';
            setP2('RS');
            setInfo1(`Player1 Selected:${x}`);
            setClickk(true);
            setHuii('edit');
        }
    }
    const fun2 = () =>
        {
            if(click===false)
            {
            x='VK';
            setP1('VK');
            setInfo1(`Player1 Selected:${x}`);
            setClick(true);
            setHehe('edit');
            }
            if(click===true && clickk===false)
            {
                x='VK';
            setP2('VK');
            setInfo2(`Player2 Selected:${x}`); 
            setClickk(true);
            setHuii('edit');
            }
        } 
    const fun3 = () =>
    {
        if(click===false)
        {
        x='MSD';
        setP2('MSD');
        setInfo2(`Player2 Selected:${x}`);
        setClick(true);
        setHehe('edit');
        }
        if(click===true&& clickk===false)
        {
            x='MSD';
            setP2('MSD');
            setInfo2(`Player2 Selected:${x}`);
            setClickk(true);
            setHuii('edit');
        }
    }
    const scf = () =>
    {
        setClickk(true);
        setClick(false);
    }
    const sccf = () =>
    {
        setClick(true);
        setClickk(false);
    }
    const ran = () =>
    {
        const name=['RS','VK','MSD'];
        const i=Math.floor(Math.random()*3);
        if(name[i]===p1)
        {
            setAns('Player1 won unfortunately')
        }
        else if(name[i]===p2)
        {
            setAns('player2 won unfortunately');
        }
        else
        {
            setAns('womp womp');
        }
    }
  return (
    <div className='cont'>
        <button onClick={fun1} className='button'>RS</button>
        <button onClick={fun2} className='button'>VK</button>
        <button onClick={fun3} className='button'>MSD</button>
        <p className='info'>{info1}</p>
        <button onClick={scf} className='ebutton'>{hehe}</button>
        <p className='info'>{info2}</p>
        <button onClick={sccf} className='ebutton'>{huii}</button>
        <br></br>
        <button onClick={ran}>Submit</button>
        <p className='res'>{ans}</p>
    </div>
  )
}

export default Two
