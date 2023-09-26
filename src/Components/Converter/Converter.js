import React ,{useState} from 'react'
import "./Converter.css"
import ReactCountryFlag from "react-country-flag"
function Converter() {
    const [value ,setValue]=useState(0)
    const [from ,setFrom]=useState('VND')
    const [to ,setTo]=useState('USD')

    const [cunrency, setCurency]=useState('Dong')

    const handleChangeValue =(e)=>{
        setValue(e.target.value)
    }
    
    const handleChangeFrom =(e)=>{
        setFrom(e.target.value)
        console.log(e.target.value)
    }
    
    const handleChangeTo =(e)=>{
        setTo(e.target.value)
    }
    const handleConvert = (from,to) =>{
    //     if (from === 'VND' && to === 'USA'){
    //         setValue(value/24000)
    //     }
    //     else if (from === 'VND' && to === 'EURO'){
    //         setValue(value/30000)
    //     }
    //     else if (from === 'USA' && to === 'VND'){
    //         setValue(value*24000)
    //     }
    //     else if (from === 'USA' && to === 'EURO'){
    //         setValue(value*0.07)
    //     }
    //     else if (from === 'EURO' && to === 'VND'){
    //         setValue(value/30000)
    //     }
    //     else if (from === 'EURO' && to === 'USD'){
    //         setValue(value/0.07)
    //     }
    // }
        if (from=== 'VND'){
            if(to==='USD') {
                setValue(value/24000)
                setCurency('S')
            } 
            if(to==='EURO') 
            { setValue(value/30000)
            setCurency('E')
        }
        }else if (from === 'USA'){
            if(to==='EURO') 
            {setValue(value*0.07)
                setCurency('E')
            }
            if(to==='VND') 
            {setValue(value/24000)
            setCurency('VND')
        }
        }else if (from === 'EURO'){
            if(to==='USA') setValue(value/0.07)
            if(to==='VND') setValue(value/30000)
        }
    }
    
  return (
    <div>
    <div >Converter</div>
    <div className='value1'>
    {cunrency}<input type='number' value={value}  onChange={handleChangeValue}/> 
    <label>From</label>

    <select  name="From" id="from" onChange={handleChangeFrom} value={from}>
  <option value="VND">VND</option>
  <option value="USA">USA</option>
  <option value="EURO">EURO</option>
 
</select>
    <label>To</label>
    <select name="To" id="to" onChange={handleChangeTo} value={to}>
  <option value="VND" ReactCountryFlag countryCode="VN">VND </option>
  <option value="USA">USA</option>
  <option value="EURO">EURO</option>
</select>
   
    </div>
    <button className='btnConvert' onClick={()=>handleConvert(from,to)}>Convert</button>
  
    </div>
  )
}

export default Converter