export default function About() {
    return (
        <>
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">About Rug Pull Detector</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Understanding how we detect potential rug pulls in the Solana ecosystem.
                </p>
            </div>

            {/* Overview */}
            <div className="bg-white shadow-sm rounded-xl p-6 mb-8">
                <p className="text-lg leading-relaxed">
                    The <strong>Rug Pull Detector</strong> is a research and analysis platform designed to assess the
                    credibility of Solana-based tokens using a combination of machine learning, statistical modeling,
                    and natural language processing. The system integrates on-chain data, social sentiment,
                    and historical pricing patterns to generate a risk score and flag tokens with suspicious behavior.
                </p>
            </div>

            {/* Analysis Components */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1 */}
                <div className="bg-white shadow-sm rounded-xl p-6 flex flex-col">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">
                        1. XGBoost On-Chain Analysis
                    </h3>
                    <p className="text-gray-700 flex-1">
                        Transaction patterns, token distribution, and authority configurations are analyzed using an
                        <strong>XGBoost</strong> model trained on historical data of verified rug pulls.
                        This model captures complex relationships between features such as liquidity depth,
                        developer wallet behavior, and mint/freeze authority changes.
                    </p>
                </div>

                {/* 2 */}
                <div className="bg-white shadow-sm rounded-xl p-6 flex flex-col">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">
                        2. Sentiment Analysis on Tweets
                    </h3>
                    <p className="text-gray-700 flex-1">
                        Tweets mentioning the token or its associated project are collected in real time.
                        Using <strong>transformer-based NLP models</strong>, sentiment polarity and intensity are quantified
                        to gauge the market's emotional response.
                        Sharp divergences between positive hype and negative network activity often indicate manipulative marketing.
                    </p>
                </div>

                {/* 3 */}
                <div className="bg-white shadow-sm rounded-xl p-6 flex flex-col">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">
                        3. LSTM Price Anomaly Detection
                    </h3>
                    <p className="text-gray-700 flex-1">
                        Price history is modeled using a <strong>Long Short-Term Memory (LSTM)</strong> network, which learns
                        sequential patterns to identify unusual spikes or drops.
                        Anomalies are flagged when the difference between the predicted and actual price exceeds a
                        <strong>three-sigma threshold</strong>, indicating behavior far outside expected market variation.
                    </p>
                </div>

                {/* 4 */}
                <div className="bg-white shadow-sm rounded-xl p-6 flex flex-col">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">
                        4. AI Agent Risk Flagging
                    </h3>
                    <p className="text-gray-700 flex-1">
                        A lightweight <strong>AI agent</strong> consolidates all prior analyses -
                        on-chain patterns, sentiment scores, and price anomalies - to generate an interpretable
                        “<em>is rug pull</em>” classification.
                        This agent leverages historical outcomes to continuously refine its assessment criteria.
                    </p>
                </div>
            </div>
        </>
    )
}