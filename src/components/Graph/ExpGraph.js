import { ResponsiveLine } from '@nivo/line'

const ExpGraph = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
    yFormat=" >-.0f"
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    colors={{ scheme: 'set2' }}
    enablePoints={false}
    pointSize={2}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    enableArea={true}
    enableCrosshair={false}
    useMesh={true}
    legends={[]}
  />
)

export default ExpGraph;