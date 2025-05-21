
const options = {
	rootMargin: '-10px'
};
const observerVue = () => {
	// Создать наблюдателя
	const observer = new IntersectionObserver(entries => {
		// перебор записей
		// debugger
		entries.forEach(entry => {
			let containerInner = entry.target.querySelectorAll('[data-animated]');
			if (entry.isIntersecting ) {
				containerInner.forEach(function(item) {
					let setaDataAimated = item.dataset.animated;
					item.classList.add(setaDataAimated);
				})
				return; // если класс добавлен, продолжать уже не надо
			}
			containerInner.forEach(function(item) {
				let setaDataAimated = item.dataset.animated;
				item.classList.remove(setaDataAimated);
			});
		});
	}, options);
	
	// Сообщить наблюдателю, какие элементы следует отслеживать
	try {
		observer.observe(document.querySelector('.observer-headline'));
	} catch (error) {}
	try {
		observer.observe(document.querySelector('.observer-pavlova'));
		observer.observe(document.querySelector('.observer-pavlova-additive'));
	} catch (error) {}

	try {
		observer.observe(document.querySelector('.observer-peterhof'));
		observer.observe(document.querySelector('.observer-peterhof-additive'));

	} catch (error) {}
	try {
		observer.observe(document.querySelector('.observer-second'));
		observer.observe(document.querySelector('.observer-second-additive'));

	} catch (error) {}
	try {
		observer.observe(document.querySelector('.observer-third'));
		observer.observe(document.querySelector('.observer-third-additive'));
	} catch (error) {}
	try {
		observer.observe(document.querySelector('.observer-paintings'));
		observer.observe(document.querySelector('.observer-meetings'));
	} catch (error) {}

};

export default observerVue;
