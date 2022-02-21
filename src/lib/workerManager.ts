import TheWorker from "./worker/theWorker?worker";

export function startWorker() {
	if (typeof window !== "undefined" && window.Worker) {
		const theWorker = new TheWorker();
		theWorker.addEventListener("message", (e) => {
			const toReplace = document.getElementById("hello");
			if (toReplace) toReplace.innerText = e.data;
		});
	}
}
