const OBSWebSocket = require("obs-websocket-js");

const obs = new OBSWebSocket();

obs.on("error", (err) => {
	console.error("socket error:", err);
});

async function connect() {
	try {
		await obs.connect();
	} catch (e) {
		console.log(e);
		errorMessage = e.description;
	}
}

async function sendCommand(command, params) {
	try {
		return await obs.send(command, params || {});
	} catch (e) {
		console.log("Error sending command", command, " - error is:", e);
		return {};
	}
}

async function setScene() {
	await sendCommand("SetCurrentScene", { "scene-name": "Full" });
}



