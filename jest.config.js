module.exports = {
	preset: "jest-puppeteer", // jest must use jest-puppeteer
	launch: {
		headless: process.env.CI === "true", // use headless mode if CI process
		ignoreDefaultArgs: ["--disable-extensions"],
		args: ["--no-sandbox"]
	},
	server: {
		command: "npm run dist",
		port: 5000,
		launchTimeout: 180000 // kill server if no response during 3 minutes
	}
};
