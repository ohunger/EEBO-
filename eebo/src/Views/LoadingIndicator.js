import { RotatingLines } from "react-loader-spinner"
export function LoadingIndicator({}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-30%",
        marginLeft: "10%",
      }}
    >
      <RotatingLines
        strokeColor="#0076a5"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  )
}
