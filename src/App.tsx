import './App.css'
import DoiBong from './components/DoiBong'
import { useState } from 'react'
function App() {
  const [dangDaBong, setDangDabong] = useState<boolean>(false)

  const handleDaBong = () => {
    setDangDabong(!dangDaBong)
  }

  return (
    <div className="min-h-screen bg-green-600 flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Kẻ vạch sân bóng mờ mờ */}
      <div className="absolute inset-0 border-20 border-white/20 m-10 rounded-[4rem] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-full h-1 bg-white/20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-white/20 rounded-full pointer-events-none"></div>

      <div className="z-10 w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] mb-10 uppercase italic tracking-widest">
          🏟️ Sân Vận Động Mỹ Đình
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {/* Đội 1: Việt Nam (Dùng link ảnh FlagCDN) */}
          <DoiBong
            tenDoi="Việt Nam"
            co="https://flagcdn.com/w320/vn.png"
            dangDa={dangDaBong}
          />

          {/* Cụm điều khiển ở giữa */}
          <div className="flex flex-col items-center gap-4">
            <div className="text-white font-bold text-xl bg-black/30 px-6 py-2 rounded-full backdrop-blur-md">
              {dangDaBong ? '🔴 LIVE' : '⚪️ SẮP DIỄN RA'}
            </div>

            <button
              onClick={handleDaBong}
              className={`
                w-24 h-24 rounded-full border-8 border-white shadow-2xl font-bold text-sm uppercase transition-all duration-300 transform hover:scale-110 active:scale-95
                ${
                  dangDaBong
                    ? 'bg-red-500 text-white hover:bg-red-600 animate-pulse'
                    : 'bg-white text-green-700 hover:bg-gray-100'
                }
              `}
            >
              {dangDaBong ? 'Kết thúc' : 'Bắt đầu'}
            </button>

            <span className="text-white/80 text-xs font-mono">
              {dangDaBong ? 'Trận đấu đang diễn ra...' : 'Bấm nút để giao bóng'}
            </span>
          </div>

          {/* Đội 2: Thái Lan (Dùng link ảnh FlagCDN) */}
          <DoiBong
            tenDoi="Thái Lan"
            co="https://flagcdn.com/w320/th.png"
            dangDa={dangDaBong}
          />
        </div>
      </div>
    </div>
  )
}

export default App
