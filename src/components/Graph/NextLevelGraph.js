import "./Graph.css";

export default function NextLevelGraph({ data }) {
  return (
    <>
      <progress className="nxtLvBar" max={100} value={data}>{data + "%"}</progress>
    </>
  )
}
