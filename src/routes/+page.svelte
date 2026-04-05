<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import Card from '$lib/components/Card.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import logo from '$lib/images/logo.png';
	import slide1 from '$lib/images/slide-1.png';
	import slide2 from '$lib/images/slide-2.png';
	import slide3 from '$lib/images/slide-3.png';
	import vk from '$lib/images/vk.png';
	import telegram from '$lib/images/telegram.png';
	import dontSpeak from '$lib/images/dont-speak.png';
	import alignPro from '$lib/images/align-pro.png';
	import drAgen from '$lib/images/dr-agen.png';
	import oneCoffee from '$lib/images/one-coffee.png';
	import oneProduct from '$lib/images/one-product.png';
	import oneParfum from '$lib/images/one-parfum.png';

	const brands = [
		{ image: dontSpeak, alt: "Don't Speak School", href: '#' },
		{ image: alignPro, alt: 'Align Pro Group', href: '#' },
		{ image: drAgen, alt: "Dr. A'Gen", href: '#' },
		{ image: oneCoffee, alt: 'One Coffee', href: '#' },
		{ image: oneProduct, alt: 'One Product', href: '#' },
		{ image: oneParfum, alt: 'One Parfum', href: '#' },
	];

	const slides = [
		{
			image: slide1,
			title: 'Скоро!',
			description:
				'Готовьте свои костюмы!<br>Совсем скоро нас ждет встреча, на которой мы обсудим все важные вопросы, увидим новинки и запланируем какие-то крутые штуки!'
		},
		{
			image: slide2,
			title: 'Скоро!',
			description:
				'Готовьте свои костюмы!<br>Совсем скоро нас ждет встреча, увидим новинки и запланируем какие-то крутые штуки!'
		},
		{
			image: slide3,
			title: 'Скоро!',
			description:
				'Готовьте свои костюмы!<br>Совсем скоро нас ждет встреча, на которой мы обсудим все важные вопросы, увидим новинки и запланируем какие-то крутые штуки!'
		}
	];
</script>

<div class="bg-brand-dark">
	<Header />
	<div class="conteiner-custom flex flex-col items-center gap-15 py-44">
		<img src={logo} alt="ONE TO ONE" />
		<h2 class="text-center font-title-light text-xl text-white">
			Живи для себя, создавай для других
		</h2>
	</div>
	<section class="bg-white lg:rounded-[60px]">
		<div class="conteiner-custom flex flex-col gap-[30px] py-20 lg:flex-row">
			<div class="min-w-0 flex-1">
				<Slider {slides} />
			</div>

			<div
				class="flex h-[330px] w-full shrink-0 flex-col gap-4 rounded-[20px] bg-brand-gray-light p-3 lg:w-[491px]"
			>
				<div class="flex h-[120px] gap-3">
					<Card image={vk} alt="VK Видео" href="#" size="sm" />
					<Card image={telegram} alt="Телеграм" href="#" size="sm" />
				</div>

				<div class="p-6 text-brand-gray-dark">
					<h2 class="mb-3 text-xl font-title-medium lg:pl-4">Присоединяйтесь</h2>
					<div class="font-body-light lg:pl-22">
						<p class="text-sm leading-relaxed">
							Вступайте в наши социальные сети,<br> чтобы
							<mark class="rounded bg-brand-accent p-0.5 font-body-medium"
								>быть в курсе всех событий:</mark
							>
						</p>
						<p class="font-body-medium mt-2 text-sm leading-relaxed">
							новые франшизы, новые продукты,<br />мероприятия и многое другое!
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-brand-gray-light lg:rounded-[60px]">
		<div class="conteiner-custom py-20">
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each brands as brand}
					<div class="flex justify-center">
						<Card {...brand} />
					</div>
				{/each}
			</div>
		</div>
	</section>
	<Footer />
</div>
