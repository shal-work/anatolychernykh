const options = {
	rootMargin: '-10px'
};
// Создать наблюдателя
const observer = new IntersectionObserver(entries => {
	// перебор записей
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
	observer.observe(document.querySelector('.observer-first'));
	observer.observe(document.querySelector('.observer-first-additive'));
	observer.observe(document.querySelector('.observer-second'));
	observer.observe(document.querySelector('.observer-second-pictures'));
	observer.observe(document.querySelector('.observer-third'));
	observer.observe(document.querySelector('.observer-third-pictures'));

	observer.observe(document.querySelector('.observer-pavlova'));
	observer.observe(document.querySelector('.observer-pavlova-additive'));


	observer.observe(document.querySelector('.observer-paintings'));
	observer.observe(document.querySelector('.observer-meetings'));
} catch (error) {}




// Пример записи:
// в html:
//<div class="observer" id="observer">
//    <div class="container-inner" data-animated = "fadeInUp"></div>
//</div>
// в js:
// try {
// 	observer.observe(document.querySelector('.observer'));
// } catch (error) {}
// // или через id
// observer.observe(document.getElementById('observer'));
// observer.observe(document.querySelector('#observer'));
