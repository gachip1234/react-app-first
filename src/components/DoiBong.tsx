import { useState } from 'react'
interface DoiBongProps {
  tenDoi: string
  co: string // Bây giờ cái này sẽ là đường link hình ảnh (URL) nha
  dangDa: boolean
}

// --- 2. COMPONENT CON: ĐỘI BÓNG ---
const DoiBong = ({ tenDoi, co, dangDa }: DoiBongProps) => {
  const [soban, setSoban] = useState<number>(0)

  const daVao = () => setSoban((prev) => prev + 1)
  const giamBan = () => setSoban((prev) => (prev > 0 ? prev - 1 : 0))

  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border-4 border-white w-64 flex flex-col items-center transform transition-all hover:scale-105">
      {/* Tên Đội & Cờ */}
      <div className="mb-4 flex flex-col items-center">
        {/* Thay span bằng img để hiện cờ cho đẹp */}
        <img
          src={co}
          alt={tenDoi}
          className="w-24 h-16 object-cover rounded-lg shadow-md mb-3 border border-gray-200"
        />
        <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tighter">
          {tenDoi}
        </h3>
      </div>

      {/* Tỉ Số To Đùng */}
      <div className="bg-gray-900 text-white w-32 h-32 rounded-2xl flex items-center justify-center mb-4 shadow-inner border-4 border-gray-700 relative overflow-hidden">
        <span className="text-7xl font-mono font-bold z-10">{soban}</span>
        {/* Hiệu ứng bóng loáng */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10"></div>
      </div>

      {/* Thông báo trạng thái */}
      <div className="h-8 mb-4">
        {soban >= 3 ? (
          <span className="text-red-600 font-extrabold text-lg animate-bounce block uppercase">
            🔥 Hủy diệt! 🔥
          </span>
        ) : (
          <span className="text-gray-400 text-sm italic">Đang thăm dò...</span>
        )}
      </div>

      {/* Khu vực nút bấm */}
      <div className="flex gap-3 w-full">
        <button
          onClick={daVao}
          disabled={!dangDa}
          className="flex-1 py-3 bg-green-500 text-white rounded-xl font-bold shadow-lg shadow-green-500/40 hover:bg-green-600 active:scale-95 disabled:bg-gray-300 disabled:shadow-none disabled:cursor-not-allowed transition"
        >
          VÀO ⚽️
        </button>

        <button
          onClick={giamBan}
          disabled={!dangDa}
          className="px-4 py-3 bg-yellow-400 text-yellow-900 rounded-xl font-bold shadow-lg shadow-yellow-400/40 hover:bg-yellow-500 active:scale-95 disabled:bg-gray-300 disabled:shadow-none disabled:cursor-not-allowed transition"
          title="Check VAR"
        >
          VAR
        </button>
      </div>
    </div>
  )
}
export default DoiBong
