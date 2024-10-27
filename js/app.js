// Selección de elementos
const $ = (selector) => document.querySelector(selector);

const elements = {
	days: $(".timer__days span"),
	hours: $(".timer__hours span"),
	minutes: $(".timer__minutes span"),
	seconds: $(".timer__seconds span"),
};

// Estado inicial del temporizador
const timerData = {
	days: 8,
	hours: 23,
	minutes: 55,
	seconds: 41,
};

// Función para actualizar los valores en pantalla
const updateDisplay = () => {
	Object.keys(elements).forEach((unit) => {
		elements[unit].innerText = String(timerData[unit]).padStart(2, "0");
	});
};

// Función para manejar la lógica del tiempo
const updateTimer = () => {
	if (--timerData.seconds < 0) {
		timerData.seconds = 59;
		if (--timerData.minutes < 0) {
			timerData.minutes = 59;
			if (--timerData.hours < 0) {
				timerData.hours = 23;
				if (--timerData.days < 0) {
					timerData.days = 8; // Reiniciar a 8 días si es necesario
				}
			}
		}
	}
	updateDisplay();
};

// Iniciar el temporizador
setInterval(updateTimer, 1000);
