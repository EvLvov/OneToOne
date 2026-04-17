<script lang="ts">
	import Header from '$lib/components/landing/Header.svelte';
	import Button from '$lib/components/landing/Button.svelte';
	import ProductSlider from '$lib/components/landing/ProductSlider.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	import Preloader from '$lib/components/landing/Preloader.svelte';
</script>

<Preloader />

<section class="lg:h-[700px] bg-cover bg-no-repeat [background-position:calc(50%+300px)_center] lg:bg-left" style="background-image: url('images/landing/hero-bg.jpg')">
	<div class="container-landing">
		<Header />
		<div class="py-[100px] pt-[50px] lg:py-[60px] max-w-[849px] mx-auto 2xl:mx-0 2xl:max-w-none">
			<img class="mb-[60px]" src="images/landing/hero-logo.png" alt="logo" />
			<h1 class="font-gordita font-normal text-[40px] uppercase text-landing-brown leading-[1.1]">Это стиль жизни,</h1>
			<p class="mb-[45px] font-fira font-light text-[24px] uppercase text-landing-brown leading-[1.1]">упакованный в красивый и качественный продукт</p>
			<Button label="Присоединиться" href="#" />
		</div>
	</div>
</section>

<section class=" min-h-[940px] bg-cover bg-no-repeat overflow-hidden [background-position:-1550px_center] sm:[background-position:-1400px_center]  md:[background-position:-1100px_center] lg:[background-position:-600px_center] xl:bg-center" style="background-image: url('images/landing/parfume-bg.jpg')">

	<div class=" relative container-landing flex flex-col items-center pt-[80px] pb-[80px] lg:pb-[0px] ">
		<img src="images/landing/parfume-label.png" alt="One Parfum" class="h-auto mb-[40px]" loading="lazy" />
		<h2 class="mb-[30px] font-gordita font-light text-[40px] sm:text-[64px] text-center uppercase leading-[1.1]">Что такое <span class="font-normal leading-none"><br class="block md:hidden">One parfum</span>?</h2>
		<p class="max-w-[750px] mb-[60px] font-gordita font-light text-[16px] leading-[130%] text-center">Ваш уникальный образ, личная история, которую мы рассказываем миру.<br class="hidden md:block"> <span class="font-normal">Духи дополняют нас</span>. Они помогают чувствовать себя теми, кем мы хотим быть:<br class="hidden md:block"> уверенными... яркими... неотразимыми.</p>

		<div class="max-w-[900px] xl:max-w-[1000px] mx-auto xl:mx-0 xl:mr-[50px] mb-[50px] lg:mb-[100px] grid grid-cols-3 gap-5 xl:self-end font-fira font-light text-[20px] sm:text-[26px] uppercase leading-[130%] text-center lg:text-left">
			<div class="col-span-3 flex flex-col gap-5 items-center lg:items-start">
				<img src="icons/star.svg" alt="" class="w-6 h-6" />
				<p><span class="font-medium">Эксклюзивные парфюмерные композиции</span> из Франции и Швейцарии, вдохновленные шедеврами известных брендов</p>
			</div>
			<div class="col-span-3 lg:col-span-1 flex flex-col gap-5 items-center lg:items-start">
				<img src="icons/star.svg" alt="" class="w-6 h-6" />
				<p>Это <span class="font-medium">десятилетие опыта</span><br class="hidden lg:block"/>в мире ароматов</p>
			</div>
			<div class="col-span-3 lg:col-span-1 flex flex-col gap-5 items-center lg:items-start">
				<img src="icons/star.svg" alt="" class="w-6 h-6" />
				<p>Только <span class="font-medium">самые топовые и востребованные</span> ароматы</p>
			</div>
			<div class="col-span-3 lg:col-span-1 flex flex-col gap-5 items-center lg:items-start">
				<img src="icons/star.svg" alt="" class="w-6 h-6" />
				<p><span class="font-medium">Концентрация<br class="hidden lg:block">эфирных масел</span> от 20%</p>
			</div>
		</div>

		<div class="relative self-end flex items-center min-h-[300px] max-w-[855px] w-full mr-[0px] lg:mr-[100px]">
			<img src="images/landing/parfume-3.png" alt="" class="absolute -bottom-[70px] sm:-bottom-[30px] right-[-130px] -scale-x-100 sm:right-auto sm:-left-[150px] sm:scale-x-100 h-auto" />
			<div class="ml-auto border-2 border-dashed border-black  rounded-[10px]">
				<div class="pt-[20px] sm:pt-[30px] pb-[150px] xs:pb-[200px] sm:pb-[30px] pl-[20px] sm:pl-[241px] pr-[125px] xs:pr-[130px] sm:pr-[15px]">
					<h3 class="font-fira font-normal text-[30px]  xs:text-[34px] uppercase mb-4 leading-[1.1]">Все 35 ароматов</h3>
					<p class="font-fira font-light text-[18px]  xs:text-[22px] uppercase leading-[130%]">В модном и стильном клатче - это ваш идеальный шанс познакомиться с полной коллекцией и подобрать свой неповторимый аромат</p>
				</div>
			</div>
		</div>

		<img src="images/landing/parfume-1.png" alt="" class="hidden xl:block absolute bottom-0 -left-[270px]" />
		<img src="images/landing/parfume-2.png" alt="" class="hidden xl:block absolute bottom-0 -left-[20px]" />
	</div>
</section>



<section class="min-h-[980px] bg-cover bg-no-repeat overflow-hidden [background-position:-600px_center] lg:[background-position:-500px_center] xl:bg-center" style="background-image: url('images/landing/parfume-home-bg.jpg')">
	<div class="container-landing flex flex-col items-center py-[80px] text-white">

		<img src="images/landing/parfume-label.png" alt="One Parfum" class="h-auto mb-[40px]" loading="lazy" />
		<h2 class="max-w-[968px] mb-[30px] font-gordita font-light text-[40px] sm:text-[56px] uppercase text-center leading-none hyphens-auto xs:hyphens-none" lang="ru">Премиальная коллекция <span class="text-[32px] sm:text-[40px] font-normal leading-none">парфюмированных диффузоров</span></h2>
		<p class="max-w-[400px] lg:max-w-[750px] mb-[40px] sm:mb-[75px] font-gordita font-light text-[16px] leading-[130%] text-center">Погрузитесь в атмосферу роскоши и тонких ощущений с коллекцией One Parfum for Home!</p>
		<h3 class="max-w-[600px] lg:max-w-[1200px] mb-[85px] font-gordita font-normal text-[30px] sm:text-[40px] text-center uppercase leading-[110%]">В чём уникальность <span class="font-light">One Parfum for Home?</span></h3>

		<div class="flex flex-col xl:flex-row mb-[90px] xl:mb-[50px] gap-[40px] xl:gap-[76px]">
			<ul class="w-full md:w-[600px] font-fira font-light text-[20px] sm:text-[26px] uppercase">
				<li class="flex mb-[20px] xl:mb-[40px]">
					<img class="mr-[29px] mt-[5px] shrink-0 self-start" src="images/landing/arrow.png" alt="">
					<p><span class="font-medium">Элегантные, многогранные ароматы,</span> которые не навязываются,<br> а созданы для тех, кто ценит тонкость</p>
				</li>
				<li class="flex mb-[20px] xl:mb-[40px]">
					<img class="mr-[29px] mt-[5px] shrink-0 self-start" src="images/landing/arrow.png" alt="">
					<p><span class="font-medium">6 Изысканных </span> премиальных композиций</p>
				</li>
				<li class="flex items-center">
					<img class="mr-[29px] mt-[5px] shrink-0 self-start" src="images/landing/arrow.png" alt="">
					<p><span class="font-medium">Лаконичные флаконы </span>высочайшего класса</p>
				</li>
			</ul>
			<div class="w-full md:min-w-[518px] xl:w-auto bg-[landing-dark] rounded-[10px] px-[40px] py-[30px]">
				<h4 class="text-[landing-caramel] font-fira text-[34px] leading-none mb-[20px] sm:mb-[35px] uppercase">В комплекте:</h4>
				<ul class="flex flex-col gap-[12px] uppercase text-fira font-light text-[18px] sm:text-[22px]">
					<li class="flex items-center gap-[16px]">
						<img src="images/landing/check.png" alt="" class="shrink-0 mr-[10px]" />
						<span>Дорогой декоративный флакон,</span>
					</li>
					<li class="flex items-center gap-[16px]">
						<img src="images/landing/check.png" alt="" class="shrink-0 mr-[10px]" />
						<span>роматическая жидкость,</span>
					</li>
					<li class="flex items-center gap-[16px]">
						<img src="images/landing/check.png" alt="" class="shrink-0 mr-[10px]" />
						<span>Фибровые палочки,</span>
					</li>
					<li class="flex items-center gap-[16px]">
						<img src="images/landing/check.png" alt="" class="shrink-0 mr-[10px]" />
						<span>Премиальная подарочная упаковка</span>
					</li>
				</ul>
			</div>
		</div>
		<p class="max-w-[800px] xl:max-w-[1300px] font-gogol text-[35px] sm:text-[40px] text-center text-[landing-gold] leading-[1.1]">Создайте атмосферу, в которую хочется возвращаться снова и снова</p>
	</div>
</section> 



<section class="min-h-[1485px] bg-cover bg-no-repeat overflow-hidden [background-position:calc(100%+400px)_center] xl:bg-center" style="background-image: url('images/landing/pbc-bg.png')">
	<div class="container-landing flex flex-col items-center py-[80px]">
		<img src="images/landing/pbc-label.png" alt="One PBC" class="h-auto mb-[40px]" loading="lazy" />
		<h2 class="max-w-[800px] xl:max-w-[1200px] mb-[30px] font-gordita font-light text-[40px] sm:text-[64px] uppercase text-center leading-[1.1]">Линейка <span class="font-normal">Premium Body Care</span></h2>
		<p class="max-w-[750px] mb-[60px] font-gordita font-light text-[16px] leading-[130%] text-center">Это не просто уход, а <span class="font-normal">новый уровень заботы о теле</span>, объединяющий эффективность профессиональной косметики и эстетическое удовольствие от использования</p>

			<div class="max-w-[882px] flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[80px] border-[2px] rounded-[10px] border-dashed border-[#000000] px-[40px] py-[30px] mb-[50px]">
				<p class="max-w-[394px] font-inter font-light text-justify lg:text-left">Линейка <span class="font-normal">Premium Body Care</span> создана для тех, кто ценит не только эффективность, но и истинное удовольствие от заботы о себе. Каждое средство в коллекции разрабатывалось <span class="font-normal">с учётом современных косметологических технологий, лучших натуральных ингредиентов и трендов бьюти-индустрии.</span></p>
				<ul class="font-fira font-light text-[20px] sm:text-[22px] uppercase flex flex-col gap-[8px] self-start">
					<li class="flex items-center">
						<img src="images/landing/check.png" alt="" class="mr-[10px] shrink-0" />
						<span>Высокая эффективность</span>
					</li>
					<li class="flex items-center">
						<img src="images/landing/check.png" alt="" class="mr-[10px] shrink-0" />
						<span>Эксклюзивные ингредиенты</span>
					</li>
					<li class="flex items-center">
						<img src="images/landing/check.png" alt="" class="mr-[10px] shrink-0" />
						<span>Деликатные текстуры</span>
					</li>
					<li class="flex items-center">
						<img src="images/landing/check.png" alt="" class="mr-[10px] shrink-0" />
						<span>Ароматы класса Luxury</span>
					</li>
					<li class="flex items-center">
						<img src="images/landing/check.png" alt="" class="mr-[10px] shrink-0" />
						<span>Комплексный уход</span>
					</li>
				</ul>
			</div>
			<h3 class="font-gordita font-light text-[30px] sm:text-[40px] uppercase text-center mb-[20px]">В линейку <strong class="font-normal">P.B.C.</strong> входят:</h3>

			<ProductSlider gap={50} btnOffset={-17}  btnColor="gray">
				<div class="flex flex-col">
					<img src="images/landing/pbc-1.png" alt="Гель-парфюм PBC" class="max-w-[400px] mb-[34px] w-full mx-auto" loading="lazy" />
					<div class="text-center font-gordita font-normal uppercase">
						<p class="mb-[20px]  text-[18px]">Гель-парфюм</p>
						<ul class="list-disc list-inside text-[landing-caramel] text-[14px] leading-[180%]">
							<li>Mango Skin</li>
							<li>Modern Princess</li>
							<li>Lost Cherry</li>
						</ul>
					</div>
				</div>
				<div class="flex flex-col">
					<img src="images/landing/pbc-2.png" alt="Шампунь-гель 3 в 1 PBC" class="max-w-[400px] mb-[34px] w-full mx-auto" loading="lazy" />
					<div class="text-center font-gordita font-normal uppercase">
						<p class="mb-[20px] text-[18px]"><span class="font-light">Парфюмированный<br></span> шампунь-гель 3 в 1</p>
						<ul class="list-disc list-inside text-[landing-caramel] text-[14px] leading-[180%]">
							<li>Aventus</li>
							<li>Sauvage</li>
						</ul>
					</div>
				</div>
				<div class="flex flex-col">
					<img src="images/landing/pbc-3.png" alt="Жидкое мыло PBC" class="max-w-[400px] mb-[34px] w-full mx-auto" loading="lazy" />
					<div class="text-center font-gordita font-normal uppercase">
						<p class="mb-[20px] text-[18px]"><span class="font-light">Парфюмированное<br></span> жидкое мыло</p>
						<ul class="list-disc list-inside text-[landing-caramel] text-[14px] leading-[180%]">
							<li>Жасмин</li>
							<li>Пион</li>
						</ul>
					</div>
				</div>
				<div class="flex flex-col">
					<img src="images/landing/pbc-4.png" alt="Антиперспирант с ионами серебра" class="max-w-[400px] mb-[34px] w-full mx-auto" loading="lazy" />
					<div class="text-center font-gordita font-normal uppercase">
						<p class="mb-[20px] text-[18px]">Антиперспирант<br><span class="font-light">с ионами серебра</span></p>
						<ul class="list-disc list-inside text-[landing-caramel] text-[14px] leading-[180%]">
							<li>Без запаха</li>
						</ul>
					</div>
				</div>
			</ProductSlider>
			<p class="max-w-[700px] xl:max-w-[1300px] mb-[60px] font-gogol text-[35px] sm:text-[40px] text-center text-black leading-[1.1]">Создайте атмосферу, в которую хочется возвращаться снова и снова</p>
			<Button variant="brown" label="Попробовать" href="#" />
	</div>
</section>



<section class="min-h-[2197px] bg-cover bg-no-repeat overflow-hidden [background-position:calc(100%+500px)_center] xl:bg-center" style="background-image: url('images/landing/coffee-bg.png')">
	<div class="container-landing flex flex-col items-center py-[80px] text-white">

		<img src="images/landing/coffee-label.png" alt="One Coffee" class="h-auto mb-[40px]" loading="lazy" />
		<h2 class="max-w-[991px] mb-[30px] font-gordita font-light text-[40px] sm:text-[56px] uppercase text-center leading-[1.1]  sm:leading-[0.8]">ONE COFFEE:<br><span class="text-[40px]">собственное кофейное производство полного цикла</span></h2>
		<p class="max-w-[895px] mb-[60px] font-gordita font-light text-[16px] leading-[130%] text-center">Наше производство охватывает весь процесс — от обжарки зерен до фасовки, с использованием передового оборудования из Швейцарии, Германии и Кореи. Мы сами разрабатываем уникальные рецептуры и создаём авторские бленды, чтобы предложить исключительный вкус и качество.</p>
		<h3 class="max-w-[870px] mb-[60px] font-fira font-light text-[30px] sm:text-[40px] text-center text-[landing-gold] uppercase leading-[1.1]">Свежеобжаренный натуральный молотый кофе <span class="font-gordita text-white">в дрип-пакетах</span></h3>

		<div class="flex flex-col-reverse xl:flex-row gap-[30px] mb-[90px]">

			<div class="max-w-[655px] w-full">
				<p class="max-w-[464px] mb-[20px] font-gogol text-center xl:text-left text-[40px] leading-[1.0]">Кофе, аналогов которому нет на российском рынке</p>
				<div class="rounded-[10px] w-full border border-dashed border-[landing-caramel] px-[18px] py-[35px]">
					<h4 class="max-w-[320px] sm:max-w-[528px] mb-[35px] ml-[30px] font-fira font-light text-[22px] text-white uppercase"><span class="mr-[8px] font-gordita font-normal text-[landing-amber] text-[24px] xs:text-[34px]">С куркумином</span><br class="block sm:hidden"><span class="text-[landing-gold]">25 мг на чашку<br></span>Для улучшения обмена веществ и стройной фигуры</h4>
					<div class="grid grid-cols-2 gap-x-[40px] gap-y-[20px] font-gordita font-light text-[16px]">
						<div class="col-span-2 sm:col-span-1 flex gap-[16px]">
							<img src="images/landing/check.png" alt="" class="shrink-0 self-start mt-[4px]" />
							<p>Положительно воздействует на систему пищеварения, ускоряет обмен веществ</p>
						</div>
						<div class="col-span-2 sm:col-span-1 flex gap-[16px]">
							<img src="images/landing/check.png" alt="" class="shrink-0 self-start mt-[4px]" />
							<p>Активизирует жиросжигающие процессы в организме и препятствует росту жировой ткани</p>
						</div>
						<div class="col-span-2 sm:col-span-1 flex gap-[16px]">
							<img src="images/landing/check.png" alt="" class="shrink-0 self-start mt-[4px]" />
							<p>Уменьшает аппетит и способствует снижению и контролю веса</p>
						</div>
						<div class="col-span-2 sm:col-span-1 flex gap-[16px]">
							<img src="images/landing/check.png" alt="" class="shrink-0 self-start mt-[4px]" />
							<p>Снижает все виды воспалительных процессов в организме, замедляя процесс старения</p>
						</div>
					</div>
				</div>
			</div>

			<div class="max-w-[655px] rounded-[10px] w-full px-[18px] py-[35px] bg-gradient-to-r from-black from-0% via-black/30 via-[30%] to-black/30 flex flex-col">
				<h4 class="max-w-[528px] mb-[35px] ml-[30px] font-fira font-light text-[22px] text-white uppercase"><span class="mr-[8px] font-gordita font-normal text-[landing-amber] text-[24px] xs:text-[34px]">С ресвератролом</span><br class="block sm:hidden"><span class="text-[landing-gold]">15 мг на чашку<br></span>для иммунитета, молодости, сердца и сосудов</h4>
				<div class="grid grid-cols-2 gap-x-[40px] gap-y-[20px] flex-1 content-between font-gordita font-light text-[16px]">
					<div class="col-span-2 sm:col-span-1 flex gap-[16px]">
						<img src="images/landing/check.png" alt="" class="shrink-0 self-start mt-[4px]" />
						<p>Защищает клетки от повреждающего действия свободных радикалов — окислительного стресса и воспалени</p>
					</div>
					<div class="col-span-2 sm:col-span-1 flex gap-[16px]">
						<img src="images/landing/check.png" alt="" class="shrink-0 self-start mt-[4px]" />
						<p>Замедляет процесс старения, активирует белки «сиртуины», связанные с долголетием, и улучшает жизнеспособность клеток</p>
					</div>
					<div class="col-span-2 sm:col-span-1 flex gap-[16px]">
						<img src="images/landing/check.png" alt="" class="shrink-0 self-start mt-[4px]" />
						<p>Способствует здоровью сердца и сосудов: снижает уровень вредного холестерина в артериях, укрепляет внутренний слой сосудов, препятствует образованию тромбов</p>
					</div>
					<div class="col-span-2 sm:col-span-1 flex gap-[16px]">
						<img src="images/landing/check.png" alt="" class="shrink-0 self-start mt-[4px]" />
						<p>Защищает нервные клетки от повреждений, снижает воспаление в мозге и улучшает его когнитивные функции</p>
					</div>
				</div>
			</div>
		</div>

		<h3 class="mb-[55px] font-gordita font-light text-[30px] sm:text-[40px]  text-[landing-gold] text-center uppercase">Кофе натуральный жареный</h3>
		
		<ProductSlider gap={50} btnOffset={-160}  btnColor="gray">
			<div class="flex flex-col">
				<img src="images/landing/coffee-1.png" alt="Кофе Colombia Supremo" class="max-w-[426px] mb-[30px] w-full mx-auto" loading="lazy" />
				<div class="w-full max-w-[426px] mx-auto text-center font-gordita font-normal">
					<h4 class="mb-[30px] sm:mb-[50px] text-[30px] sm:text-[40px] uppercase leading-[1.0]">в зернах</h4>
					<h4 class="mb-[15px] font-fira font-light text-[28px] sm:text-[40px] text-[landing-gold] leading-[1.0] uppercase">Colombia Supremo</h4>
					<p class="min-h-[170px] max-w-[340px] sm:max-w-[426px] mx-auto font-light text-[16px]">Откройте для себя истинный вкус Колумбии с кофе Colombia Supremo – одним из самых узнаваемых и качественных сортов арабики в мире. Зерна, выращенные на высокогорных плантациях, впитали в себя мягкий климат, плодородную почву и чистую горную воду, что сделало их вкус по-настоящему уникальным.</p>
				</div>
			</div>
			<div class="flex flex-col">
				<img src="images/landing/coffee-2.png" alt="Кофе Ethiopia Sidamo" class="max-w-[426px] mb-[30px] w-full mx-auto" loading="lazy" />
				<div class="w-full max-w-[426px] mx-auto text-center font-gordita font-normal">
					<h4 class="mb-[30px] sm:mb-[50px] text-[30px] sm:text-[40px] uppercase leading-[1.0]">в зернах</h4>
					<h4 class="mb-[15px] font-fira font-light text-[28px] sm:text-[40px] text-[landing-gold] leading-[1.0] uppercase">Ethiopia Sidamo</h4>
					<p class="h-[170px] max-w-[340px] sm:max-w-[426px] mx-auto font-light text-[16px]">Ethiopia Sidamo — это свежий и ароматный кофе с цветочными, цитрусовыми и ягодными нотами. Натуральная обработка зерен придаёт напитку яркую кислинку и длительное фруктовое послевкусие. Идеальный выбор для ценителей изысканных вкусов.</p>
				</div>
			</div>
			<div class="flex flex-col">
				<img src="images/landing/coffee-3.png" alt="Кофе Premium Blend молотый" class="max-w-[426px] mb-[30px] w-full mx-auto" loading="lazy" />
				<div class="relative max-w-[426px] mx-auto text-center font-gordita font-normal">
					<h4 class="mb-[30px] sm:mb-[50px] text-[30px] sm:text-[40px] uppercase leading-[1.0]">молотый</h4>
					<span class="absolute top-[27px] sm:top-[40px] left-1/2 -translate-x-1/2 text-[landing-amber] text-[17px] sm:text-[20px] uppercase whitespace-nowrap">с ресвератролом</span>
					<h4 class="mb-[15px] font-fira font-light text-[28px] sm:text-[40px] text-[landing-gold] leading-[1.0] uppercase">Premium Blend</h4>
					<p class="h-[170px] max-w-[340px] sm:max-w-[426px] mx-auto font-light text-[16px]">Идеальный баланс арабики и робусты в сочетании с ресвератролом обеспечат вас зарядом бодрости и мощной антиоксидантной защитой. Универсальный помол, подходящий для большинства способов приготовления кофе</p>
				</div>
			</div>
			
		</ProductSlider>

		<Button variant="white" label="Попробовать" href="#" />

	</div>
</section>



<section class="min-h-[1230px] bg-cover bg-center bg-no-repeat overflow-hidden" style="background-image: url('images/landing/tea-bg.png')">
	<div class="container-landing flex flex-col items-center py-[80px] text-black">

		<img src="images/landing/tea-label.png" alt="One Tea" class="h-auto mb-[40px]" loading="lazy" />
		<h2 class="mb-[30px] font-gordita font-light text-[40px] sm:text-[64px] uppercase text-center leading-none">Премиальный чай <br class="block lg:hidden"><span class="font-normal">One tea</span></h2>
		<p class="max-w-[750px] mb-[60px] font-gordita font-light text-[16px] leading-[130%] text-center">Идеальное сочетание премиальных сортов и натуральных ингредиентов для взыскательных любителей чая и ценителей тонких ароматов</p>

		<ProductSlider gap={50} btnOffset={-160}  btnColor="gray">
			<div class="flex flex-col">
				<img src="images/landing/tea-1.png" alt="Чай Купаж Мальва-Клубника" class="max-w-[426px] mb-[30px] w-full mx-auto" loading="lazy" />
				<div class="max-w-[426px] mx-auto text-center font-gordita font-light">
					<h3 class="mb-[15px] font-fira font-normal text-[35px] sm:text-[40px] text-[landing-caramel] uppercase leading-[1.0]">Премиальный чай</h3>
					<h4 class="mb-[15px] font-light text-[18px] leading-[1.0] uppercase">Купаж «Мальва-Клубника»</h4>
					<p class="h-[220px] max-w-[340px] sm:max-w-[426px] mx-auto font-light text-[16px]">Изысканный купаж, объединяющий насыщенный кенийский черный чай и тонкий китайский зеленый сенча, обогащённый яркими нотами спелой клубники и тропических фруктов. Карамельная сладость цветов мальвы добавляет роскошную цветочную глубину, создавая невероятно гармоничный и многогранный вкусовой букет.</p>
				</div>
			</div>
			<div class="flex flex-col">
				<img src="images/landing/tea-2.png" alt="Чёрный чай элитный индийский" class="max-w-[426px] mb-[30px] w-full mx-auto" loading="lazy" />
				<div class="max-w-[426px] mx-auto text-center font-gordita font-light">
					<h3 class="mb-[15px] font-fira font-normal text-[35px] sm:text-[40px] text-[landing-caramel] uppercase leading-[1.0]">чёрный чай</h3>
					<h4 class="mb-[15px] font-light text-[18px] leading-[1.0] uppercase">Элитный Индийский</h4>
					<p class="h-[220px] max-w-[340px] sm:max-w-[426px] mx-auto font-light text-[16px]">Погрузитесь в мир изысканного вкуса с этим богатым и глубоким черным чаем, собранным на лучших плантациях Индии. Бархатистый аромат и насыщенный букет создают утонченное удовольствие, даря гармонию традиций и роскоши в каждой чашке.</p>
				</div>
			</div>
			<div class="flex flex-col">
				<img src="images/landing/tea-3.png" alt="Зелёный чай сенча" class="max-w-[426px] mb-[30px] w-full mx-auto" loading="lazy" />
				<div class="max-w-[426px] mx-auto text-center font-gordita font-light">
					<h3 class="mb-[15px] font-fira font-normal text-[35px] sm:text-[40px] text-[landing-caramel] uppercase leading-[1.0]">зеленый чай сенча</h3>
					<h4 class="mb-[15px] font-light text-[18px] leading-[1.0] uppercase">Китайский Зеленый</h4>
					<p class="h-[220px] max-w-[340px] sm:max-w-[426px] mx-auto font-light text-[16px]">Изящный и свежий, этот премиальный Сенча — настоящий символ японской чайной культуры. Листья отбираются тщательно, чтобы раскрыть тонкий, мягкий вкус с легкими травянистыми и цветочными нотами.</p>
				</div>
			</div>
		</ProductSlider>

		<p class="font-gogol text-[35px] sm:text-[40px] text-center leading-[1.1]">для настоящих<br class="block md:hidden"> ценителей чая</p>
	</div>
</section>

<section class="min-h-[651px] bg-cover bg-no-repeat overflow-hidden [background-position:calc(50%+300px)_center] lg:bg-center" style="background-image: url('images/landing/work-bg.png')">
	<div class="container-landing py-[80px] text-black">
		<div class="max-w-[1000px] mx-auto 2xl:mx-0 2xl:max-w-none flex flex-col items-center md:items-start  md:pl-[100px] lg:pl-0">

		<h2 class="mb-[40px] font-gordita font-normal text-[40px] sm:text-[56px] text-[#43220A] uppercase text-center md:text-left leading-none">Как начать работу<br><span class="font-bold text-[40px]">с ONE PRODUCT</span></h2>

		<ul class="mb-[60px] flex flex-col gap-[12px] uppercase text-fira font-light text-[18px] sm:text-[22px] self-center md:self-start">
			<li class="flex flex-col md:flex-row items-center gap-[16px]">
				<img src="images/landing/check.png" alt="" class="shrink-0" />
				<span class="text-center md:text-left">Обратитесь к информационному спонсору</span>
			</li>
			<li class="md:ml-[30px] flex font-normal justify-center md:justify-start">
				<span class="text-center md:text-left">Либо позвоните по номеру: <br class="block md:hidden">8-800-333-33-29</span>
			</li>
			<li class="flex flex-col md:flex-row items-center gap-[16px]">
				<img src="images/landing/check.png" alt="" class="shrink-0" />
				<span class="text-center md:text-left">Получите ссылку на регистрацию,</span>
			</li>
			<li class="flex flex-col md:flex-row items-center gap-[16px]">
				<img src="images/landing/check.png" alt="" class="shrink-0" />
				<span class="text-center md:text-left">Зарегистрируйтесь в системе</span>
			</li>
			<li class="flex flex-col md:flex-row items-center gap-[16px]">
				<img src="images/landing/check.png" alt="" class="shrink-0" />
				<span class="text-center md:text-left">Делитесь информацией, получайте прибыль</span>
			</li>
		</ul>

		<Button variant="brown" label="Зарегистрироваться" href="#" radius={10} />

		</div>
	</div>
</section>

<Footer />

