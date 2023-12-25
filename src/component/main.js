import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState } from 'react';
import Slider from './slider.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Loan() {
  const [pdata, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  const totalLoanMonths = pdata.loanTerm * 12;
  const interestPerMonth = pdata.interestRate / 100 / 12;
  const monthlyPayment =
    (pdata.loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated =
    monthlyPayment * totalLoanMonths - pdata.loanAmount;

  const data = {
    labels: ['principle', 'Interest'],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [pdata.homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white', 
        },
      },
    },
  };

  return (
    <>
      <div className='container'>
        <div className='left'>
          <Slider pdata={pdata} setData={setData} />
        </div>
        <div
          className='right'
          style={{
            padding: '20px',
            width: '30%',
          }}
        >
          <h1> Monthly Payment: $ {monthlyPayment.toFixed(2)}</h1>
          <Pie data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default Loan;
