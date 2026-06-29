export const portfolio = {
	name: 'Ivo Tonioni',
	title: 'Quantitative ML Engineer',
	focus: 'Energy Markets · Time-Series Forecasting · Applied AI',
	heroDescription:
		'MSc in Artificial Intelligence and Electromechanical Engineer building data-driven forecasting and decision systems for energy markets. I combine power-systems domain knowledge with machine learning, walk-forward validation, backtesting, and risk-aware research.',
	availability:
		'Based in Copenhagen, Denmark · Open to ML, quant research, and energy forecasting opportunities',
	links: {
		linkedin: 'https://www.linkedin.com/in/ivotonioni/',
		github: 'https://github.com/Ivo196',
		email: 'mailto:ivo.tonioni@gmail.com',
		cv: '/assets/resume.pdf',
		flagshipRepo: 'https://github.com/Ivo196/denmark-electricity-price-forecasting',
	},
	nav: [
		{ label: 'Work', href: '#work' },
		{ label: 'Approach', href: '#approach' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Stack', href: '#stack' },
		{ label: 'Contact', href: '#contact' },
	],
	flagship: {
		title: 'DK2 Electricity Price Forecasting & Trading Research',
		subtitle:
			'End-to-end machine learning research pipeline for 24-hour-ahead electricity price forecasting in the Danish DK2 bidding zone.',
		facts: [
			{
				label: 'Data',
				text: 'Danish electricity prices, weather, consumption/load, wind generation, solar generation, renewable generation, and net load.',
			},
			{
				label: 'Modeling',
				text: 'Baselines, XGBoost, and PyTorch LSTM benchmark.',
			},
			{
				label: 'Validation',
				text: 'Leakage-aware temporal validation and expanding-window walk-forward evaluation.',
			},
			{
				label: 'Decision layer',
				text: 'Forecast-to-signal logic, simplified economic backtesting, cumulative PnL, drawdown, Value at Risk, and daily loss-limit analysis.',
			},
			{
				label: 'Engineering',
				text: 'Modular Python code for features, training, validation, backtesting, risk analysis, unit tests, and lightweight benchmarking where those modules exist in the repository.',
			},
		],
		metrics: [
			{ label: 'Walk-forward XGBoost MAE', value: '25.48', unit: 'EUR/MWh' },
			{ label: 'Walk-forward XGBoost RMSE', value: '34.04', unit: 'EUR/MWh' },
			{ label: 'Current-price baseline MAE', value: '28.85', unit: 'EUR/MWh' },
			{ label: 'Current-price baseline RMSE', value: '41.83', unit: 'EUR/MWh' },
			{ label: 'Relative MAE improvement', value: '≈11.7', unit: '%' },
		],
		disclaimer:
			'Economic results are based on a simplified research backtest and do not include all market frictions, liquidity constraints, transaction costs, imbalance costs, or operational constraints.',
	},
	workflow: [
		{
			label: '01',
			title: 'Market & weather data',
			text: 'Collect aligned price, load, generation, and weather signals that shape the DK2 market.',
		},
		{
			label: '02',
			title: 'Feature engineering',
			text: 'Build lagged, calendar, renewable, and net-load features with temporal leakage checks.',
		},
		{
			label: '03',
			title: 'Forecasting models',
			text: 'Compare simple baselines with XGBoost and sequence models under the same horizon.',
		},
		{
			label: '04',
			title: 'Walk-forward validation',
			text: 'Evaluate models on expanding windows to mimic repeated real forecast updates.',
		},
		{
			label: '05',
			title: 'Backtesting',
			text: 'Translate forecasts into signals and inspect simplified economic behavior over time.',
		},
		{
			label: '06',
			title: 'Risk controls',
			text: 'Track drawdown, VaR, loss limits, and failure modes before treating signals as useful.',
		},
	],
	selectedWork: [
		{
			title: 'Cryptocurrency Price Forecasting with Autoformer',
			description:
				'MSc thesis exploring transformer-based forecasting for volatile cryptocurrency time series. Built an Autoformer pipeline, engineered technical indicators, benchmarked against an LSTM, and generated recursive multi-step forecasts up to 31 days.',
			tags: ['Python', 'PyTorch', 'Autoformer', 'LSTM', 'Time Series', 'Financial Data'],
		},
		{
			title: 'ML Infrastructure & Reproducible Deployments',
			description:
				'Built and deployed local AI and Streamlit applications using Docker, k3s, GitHub Actions, Ollama, and Open WebUI on Raspberry Pi infrastructure.',
			tags: ['Docker', 'Linux', 'k3s', 'Streamlit', 'GitHub Actions', 'MLOps'],
		},
	],
	experience: {
		title: 'Bravida / Energinet Projects — Denmark',
		subtitle: 'HV Substation, Protection & Control Interface',
		bullets: [
			'Technical coordination with Ramboll and Energinet on critical power infrastructure.',
			'Commissioning readiness, protection and control interfaces, cabinet wiring, loop checks, and technical documentation.',
			'Practical understanding of grid assets, operational constraints, and reliability requirements.',
		],
		why:
			'My power-systems background gives the forecasting work operational context: electricity markets are shaped by physical assets, renewable generation, grid constraints, and real-world execution.',
	},
	stack: [
		{
			category: 'Machine Learning',
			items: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'PyTorch'],
		},
		{
			category: 'Quant Research',
			items: ['Time Series', 'Feature Engineering', 'Walk-Forward Validation', 'Backtesting', 'PnL', 'Drawdown', 'VaR'],
		},
		{
			category: 'Energy Systems',
			items: ['Electricity Markets', 'Load', 'Wind', 'Solar', 'Net Load', 'HV/MV Infrastructure', 'Protection & Control'],
		},
		{
			category: 'Engineering',
			items: ['Git/GitHub', 'Docker', 'Streamlit', 'Linux', 'Jupyter', 'CI/CD'],
		},
	],
};
