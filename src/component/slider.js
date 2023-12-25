import React from "react";


 const Slider= ({pdata,setData})=>{


    return(
        <>
        <div className='item'>
                <p>Home Value</p>
                <p className="bold">${pdata.homeValue}</p>
                <input
                 type='range' 
                 min={1000} 
                 max={10000}
                 value={parseFloat(pdata.homeValue)}
                 onChange={(e)=>setData({
                    ...pdata,
                    homeValue: parseFloat(e.target.value).toFixed(0),
                    downPayment: (0.2 * e.target.value).toFixed(0),
                    loanAmount: (0.8 * e.target.value).toFixed(0),
                 })}
                 />
                <div className='item-range'>
                    <span>$1000</span>
                    <span>$10000</span>
                </div>
            </div>



        <div className="item">
                <p>Down Payment</p>
                <p className="bold">${pdata.downPayment}</p>
                <input
                type="range"
                min={0}
                max={10000}
                value={parseFloat(pdata.downPayment)}
                onChange={(e) =>
                    setData({
                    ...pdata,
                    downPayment: parseFloat(e.target.value).toFixed(0),
                    loanAmount:(pdata.homeValue-e.target.value).toFixed(0),
                    })
                }
                />
                <div className="item-range">
                <span>$0</span>
                <span>$10000</span>
                </div>
        </div>


            <div className='item'>
                <p>Loan amount</p>
                <p className="bold">${pdata.loanAmount}</p>
                <input
                type="range"
                min={0}
                max={10000}
                value={parseFloat(pdata.loanAmount)}
                onChange={(e) =>
                    setData({
                    ...pdata,
                    loanAmount: parseFloat(e.target.value).toFixed(0),
                    downPayment:(pdata.homeValue-e.target.value).toFixed(0),
                    })
                }
                />
                <div className='item-range'>
                    <span>$0</span>
                    <span>$10000</span>
                </div>
            </div>

            <div className='item'>
                <p>Interest Rate</p>
                <p className="bold">%{pdata.interestRate}</p>
                <input
                type="range"
                min={2}
                max={18}
                value={parseFloat(pdata.interestRate)}
                onChange={(e) =>
                    setData({
                    ...pdata,
                    interestRate:parseFloat(e.target.value).toFixed(0),
                    })
                }
                />
                <div className='item-range'>
                    <span>%2</span>
                    <span>%18</span>
                </div>
            </div>


            <div className='select-box'>
                <fieldset>
                    <legend>Tenure</legend>
                <select value={pdata.loanTerm} onChange={(e)=>setData({...pdata,loanTerm:e.target.value})}>
                    <option value={5}>5 years</option>
                    <option value={10}>10 years</option>
                    <option value={15}>15 years</option>
                    <option value={20}>20 years</option>
                    <option value={25}>25 years</option>
                </select>
                </fieldset>
            </div>


            
        </>
    );
};


export default Slider;