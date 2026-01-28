import { useState } from 'react'
interface DoiBongProps {
  tenDoi: string
  co: string
  dangDa: boolean
}
const DoiBong = ({ tenDoi, co, dangDa }: DoiBongProps) => {
  const [soban, setSoban] = useState<number>(0)
  const daVao = () => {
    setSoban((prev) => prev + 1)
  }
  const giamBan = () => {
    setSoban((prev) => (prev > 0 ? prev - 1 : 0))
  }

  return (
    <div className="flex flex-col rounded-2xl border-2 border-gray-950">
      <h3>
        {tenDoi} {co}
      </h3>
      <span>{soban}</span>
      <div className="flex flex-row justify-center gap-8 border-2 border-gray-950">
        <button onClick={daVao} disabled={dangDa}>
          VÀO
        </button>
        <button onClick={giamBan} disabled={dangDa}>
          GIẢM
        </button>
      </div>
      <span>{soban >= 3 ? 'Hủy diệt' : 'Sương sương'}</span>
    </div>
  )
}
export default DoiBong
