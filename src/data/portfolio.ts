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
		subtitle: '24-hour-ahead electricity price forecasting for the Danish DK2 bidding zone.',
		facts: [
			{
				label: 'Data',
				text: 'Prices, weather, load, wind, solar, renewables, and net load.',
			},
			{
				label: 'Modeling',
				text: 'Baselines, XGBoost, and PyTorch LSTM benchmark.',
			},
			{
				label: 'Validation',
				text: 'Leakage-aware temporal splits and expanding-window walk-forward evaluation.',
			},
			{
				label: 'Decision layer',
				text: 'Forecast-to-signal logic, PnL, drawdown, VaR, and loss-limit analysis.',
			},
			{
				label: 'Engineering',
				text: 'Modular Python for features, training, validation, backtesting, and risk checks.',
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
			'Simplified research backtest; excludes full frictions, liquidity, transaction costs, imbalance costs, and operational constraints.',
	},
	workflow: [
		{
			label: '01',
			title: 'Market & weather data',
			text: 'Align price, load, generation, and weather signals.',
		},
		{
			label: '02',
			title: 'Feature engineering',
			text: 'Build lags, calendar features, renewables, and net load.',
		},
		{
			label: '03',
			title: 'Forecasting models',
			text: 'Compare baselines, XGBoost, and sequence models.',
		},
		{
			label: '04',
			title: 'Walk-forward validation',
			text: 'Evaluate with expanding temporal windows.',
		},
		{
			label: '05',
			title: 'Backtesting',
			text: 'Translate forecasts into simple signals.',
		},
		{
			label: '06',
			title: 'Risk controls',
			text: 'Track drawdown, VaR, loss limits, and failure modes.',
		},
	],
	selectedWork: [
		{
			title: 'Cryptocurrency Price Forecasting with Autoformer',
			description:
				'MSc thesis on transformer-based forecasting for volatile crypto time series, benchmarked against LSTM.',
			tags: ['Python', 'PyTorch', 'Autoformer', 'LSTM', 'Time Series', 'Financial Data'],
		},
		{
			title: 'ML Infrastructure & Reproducible Deployments',
			description: 'Local AI and Streamlit deployments using Docker, k3s, GitHub Actions, and Raspberry Pi infrastructure.',
			tags: ['Docker', 'Linux', 'k3s', 'Streamlit', 'GitHub Actions', 'MLOps'],
		},
	],
	experience: {
		title: 'Bravida / Energinet Projects — Denmark',
		subtitle: 'HV Substation, Protection & Control Interface',
		bullets: [
			'Coordination with Ramboll and Energinet on power infrastructure.',
			'Commissioning readiness, P&C interfaces, wiring, loop checks, and documentation.',
			'Grid assets, operational constraints, and reliability requirements.',
		],
		why:
			'Power-systems context matters: electricity markets are shaped by assets, renewables, grid constraints, and execution.',
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
