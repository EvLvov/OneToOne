<script lang="ts">
	import Header from '$lib/components/main/Header.svelte';
	import Slider from '$lib/components/main/Slider.svelte';
	import Card from '$lib/components/main/Card.svelte';
	import Footer from '$lib/components/main/Footer.svelte';

	const brands = [
		{ image: 'images/main/dont-speak.png', alt: "Don't Speak School", href: '#' },
		{ image: 'images/main/align-pro.png', alt: 'Align Pro Group', href: '#' },
		{ image: 'images/main/dr-agen.png', alt: "Dr. A'Gen", href: '#' },
		{ image: 'images/main/one-coffee.png', alt: 'One Coffee', href: '/landing' },
		{ image: 'images/main/one-product.png', alt: 'One Product', href: '/landing' },
		{ image: 'images/main/one-parfum.png', alt: 'One Parfum', href: '/landing' },
	];

	const slides = [
		{
			image: 'images/main/slide-1.png',
			title: 'Скоро!',
			description:
				'Готовьте свои костюмы!<br>Совсем скоро нас ждет встреча, на которой мы обсудим все важные вопросы, увидим новинки и запланируем какие-то крутые штуки!'
		},
		{
			image: 'images/main/slide-2.png',
			title: 'Скоро!',
			description:
				'Готовьте свои костюмы!<br>Совсем скоро нас ждет встреча, увидим новинки и запланируем какие-то крутые штуки!'
		},
		{
			image: 'images/main/slide-3.png',
			title: 'Скоро!',
			description:
				'Готовьте свои костюмы!<br>Совсем скоро нас ждет встреча, на которой мы обсудим все важные вопросы, увидим новинки и запланируем какие-то крутые штуки!'
		}
	];
</script>

<div class="bg-brand-dark md:bg-[linear-gradient(to_right,theme('colors.brand-darker'),theme('colors.brand-dark'),theme('colors.brand-darker'))]">
	<div class="conteiner-custom">
		<Header />
	</div>
	
	<div class="conteiner-custom flex flex-col items-center gap-[3.75rem] py-32 md:py-44">
		
		<img src="images/main/logo.png" alt="ONE TO ONE" />
		<h2 class="text-center font-unbounded font-light text-xl text-white">
			Живи для себя, создавай для других
		</h2>
	</div>
	<section class="bg-white lg:rounded-[60px]">
		<div class="conteiner-custom flex flex-col gap-[30px] py-14 md:py-20 lg:flex-row">
			<div class="min-w-0 flex-1">
				<Slider {slides} />
			</div>

			<div
				class="flex h-auto lg:h-[330px] w-full shrink-0 flex-col gap-4 rounded-[20px] bg-brand-gray-light p-3 lg:w-[491px]"
			>
				<div class="flex gap-3">
					<Card image="images/main/vk.png" alt="VK Видео" href="#" size="sm" />
					<Card image="images/main/telegram.png" alt="Телеграм" href="#" size="sm" />
				</div>

				<div class="p-6 text-brand-gray-dark">
					<h2 class="mb-3 text-xl font-unbounded font-medium lg:pl-4">Присоединяйтесь</h2>
					<div class="font-gordita font-normal lg:pl-[5.5rem]">
						<p class="text-sm leading-relaxed">
							Вступайте в наши социальные сети,<br> чтобы
							<mark class="rounded bg-brand-accent p-0.5 font-gordita font-medium"
								>быть в курсе всех событий:</mark
							>
						</p>
						<p class="font-gordita font-medium mt-2 text-sm leading-relaxed">
							новые франшизы, новые продукты,<br />мероприятия и многое другое!
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-brand-gray-light lg:rounded-[60px]">
		<div class="conteiner-custom py-14 md:py-20">
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
