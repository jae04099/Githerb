import React, { useRef, useEffect } from 'react'
import Chart from "chart.js/auto";

export default function DayCommitGraph({ data }) {
  const canvasDom = useRef(null);
  useEffect(() => {
    //getContext : 캔버스의 드로잉 컨텍스트를 반환함
    const ctx = canvasDom.current.getContext("2d");

    let graph = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Morning', 'Daytime', 'Evening', 'Night'],
        datasets: [{
          label: 'Commit',
          data: data,
          backgroundColor: [
            'rgba(170, 220, 152, 0.3)',
            'rgba(120, 220, 152, 0.3)',
            'rgba(35, 200, 152, 0.3)',
            'rgba(50, 180, 200, 0.3)',
          ],
          borderColor: [
            'rgba(170, 200, 152, 1)',
            'rgba(120, 200, 152, 1)',
            'rgba(35, 200, 152, 1)',
            'rgba(50, 180, 200, 1)',
          ],
          borderWidth: 1
        }]

      },
      options: {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false
          }
        }
      },
    });

    return () => graph.destroy();
  }, [data]);

  return (
    <div>
      <canvas ref={canvasDom}></canvas>
    </div>
  )
}

