import './Button.css'

export default function Button({ white, value }) {
  return (
    <div className={`buttonContainer ${white ? "white" : ""}`}>{value}</div>
  )
}
