export default function BarberLABPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: 'url(/barberlab-hero.jpg)' }}>
        <div className="bg-black bg-opacity-60 p-6 rounded-2xl shadow-xl">
          <h1 className="text-5xl font-bold mb-4">BarberLAB</h1>
          <p className="text-xl mb-6">不只是剪发，是一场进化</p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">探索我们</button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">我们的故事</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          BarberLAB 诞生于一段逆流而上的旅程。创办人从街头剪发走到品牌导师，凝聚一群有潜力、未被世界看见的战士。这里不仅传授技术，更打造心智、灵魂、责任感与风格的战斗基地。
        </p>
      </section>

      {/* Apprentice Program */}
      <section className="bg-gray-900 py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">学徒计划</h2>
          <p className="text-lg text-gray-400 mb-4">
            BarberLAB 的学徒不是普通学徒。他们将接受心理、技术、纪律与创造力的全面训练。每位成员都是品牌未来的核心。
          </p>
          <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">加入我们</button>
        </div>
      </section>

      {/* LAB Warriors Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">LAB 战队</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Tony", "琪琪", "YoungBlood"].map((name, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 shadow-md text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-700"></div>
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-400">擅长：变革发型 / 个性表达</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-950 py-12 px-8 text-center">
        <h2 className="text-2xl font-bold mb-4">想了解更多？</h2>
        <p className="text-gray-400 mb-6">欢迎透过 IG / WhatsApp 与我们联系，或预约实地体验 BarberLAB 的世界。</p>
        <div className="space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">Instagram</button>
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">WhatsApp</button>
        </div>
      </section>
    </div>
  );
}