import { useEffect } from "react";

export default function useOnResize(onResizeFunc) {
	useEffect(() => {
		function onResize() {
			onResizeFunc();
		}

		function updateTimeout() {
			setTimeout(onResize, 50);
		}

		window.addEventListener("resize", updateTimeout);
		return () => {
			window.removeEventListener("resize", updateTimeout);
		};
	}, [onResizeFunc]);
}
