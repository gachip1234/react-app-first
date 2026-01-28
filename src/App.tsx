import './App.css'
import DoiBong from './components/DoiBong'
import { useState } from 'react'
function App() {
  const [dangDaBong, setDangDabong] = useState<boolean>(false)
  const handleDaBong = () => {
    setDangDabong(!dangDaBong)
  }
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-800 border border-slate-200">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 mb-4">
          SÂN VẬN ĐỘNG MỸ ĐÌNH
        </h1>
        <div className="flex justify-evenly gap-4">
          <DoiBong tenDoi="Viet Nam" co="🚩" dangDa={dangDaBong} />
          <button onClick={handleDaBong}>
            {dangDaBong ? 'Thổi còi kết thúc' : 'Trận đang diễn ra'}
          </button>
          <DoiBong tenDoi="Thái Lan" co="❤️" dangDa={dangDaBong} />
        </div>
      </div>
    </div>
  )
}

export default App
