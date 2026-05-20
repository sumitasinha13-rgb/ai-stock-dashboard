export default function Home() {
  const picks = [
    {
      name: "TCS",
      score: 88,
      risk: "Medium",
      confidence: "High",
      type: "Long-term + Swing"
    },
    {
      name: "Reliance",
      score: 85,
      risk: "Medium",
      confidence: "Medium",
      type: "Swing"
    },
    {
      name: "HDFC Bank",
      score: 84,
      risk: "Low",
      confidence: "High",
      type: "Long-term"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          📈 AI NSE Smart Opportunity Finder
        </h1>

        <p className="text-gray-600 mb-6">
          Market Mood: Bullish | AI Mode: Balanced
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">

          <div className="bg-white rounded-xl p-5 shadow">
            <h2 className="text-gray-500">NIFTY</h2>
            <p className="text-2xl font-bold">+0.82%</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow">
            <h2 className="text-gray-500">SENSEX</h2>
            <p className="text-2xl font-bold">+0.65%</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow">
            <h2 className="text-gray-500">AI Sentiment</h2>
            <p className="text-2xl font-bold">
              Positive
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-bold mb-4">
          Top AI Picks Today
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {picks.map((stock) => (

            <div
              key={stock.name}
              className="bg-white rounded-xl p-5 shadow"
            >

              <h3 className="text-xl font-bold">
                {stock.name}
              </h3>

              <p>Score: {stock.score}/100</p>

              <p>Risk: {stock.risk}</p>

              <p>
                Confidence:
                {" "}
                {stock.confidence}
              </p>

              <p>Type: {stock.type}</p>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}
