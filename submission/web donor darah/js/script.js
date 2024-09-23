// header handle
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
	const currentPageYPosition = window.pageYOffset;
	// add class active ketika di scroll
	header.classList.toggle('active', currentPageYPosition > 0);
})
// sidebar handle
const btnMenu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
if(btnMenu){
	const openSideBar = () => {
		navList.classList.toggle('active')
	}

	btnMenu.addEventListener('click', openSideBar);
	document.addEventListener('click', (e) => {
		// handle close sidebar jika mengklik selain sidebar dan menu
		if(!btnMenu.contains(e.target) && !header.contains(e.target)){
			navList.classList.remove('active');
		}
	});
}
// articles
const articles = [
	{
		imgSrc: 'assets/images/prosedur-donor.jpg',
		altText: 'prosedur donor image',
		title: 'Prosedur Donor Darah: Apa yang Harus Anda Ketahui Sebelum Mendonorkan?',
		date: '19 September 2024'
	},
	{
		imgSrc: 'assets/images/manfaat-donor.jpg',
		altText: 'manfaat donor darah image',
		title: 'Manfaat Donor Darah untuk Kesehatan: Mengapa Anda Harus Mendonorkan Darah?',
		date: '19 September 2024'
	},
	{
		imgSrc: 'assets/images/kampanye-donor.jpg',
		altText: 'kampanye donor darah image',
		title: 'Donor Darah: Menyelamatkan Nyawa dengan Setetes Darah',
		date: '19 September 2024'
	},
	{
		imgSrc: 'assets/images/kegiatan-donor.jpg',
		altText: 'kegiatan donor image',
		title: 'Donor Darah Rutin: Bagaimana Mendonorkan Secara Berkala Bisa Meningkatkan Kesehatan Anda',
		date: '19 September 2024'
	}
]

const container = document.getElementById('articles-container');
if(container){
	// looping article and add container
	articles.forEach(article => {
		const section = document.createElement('section');
		section.innerHTML=`
		<a href="#">
		<div>
		<img src="${article.imgSrc}" alt="${article.altText}">
		</div>
		<div>
		<h3>${article.title}</h3>
		<p>${article.date}</p>
		</div>
		</a>
		`
	// add to container
		container.appendChild(section);
	})
}

// handle title artikel
const truncateText = (text, maxLength) => {
	if(text.length > maxLength){
		// ambil sebagian text dan tambahkan ... diakhir text
		return text.substring(0, maxLength) + '...'
	} else {
		return text;
	}
}
// get all title
const titles = document.querySelectorAll('.article-content h3');
titles.forEach(title => {
	title.textContent = truncateText(title.textContent, 50);
})
