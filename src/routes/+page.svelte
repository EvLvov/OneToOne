<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import Card from '$lib/components/Card.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const brands = [
		{ image: 'images/dont-speak.png', alt: "Don't Speak School", href: '#' },
		{ image: 'images/align-pro.png', alt: 'Align Pro Group', href: '#' },
		{ image: 'images/dr-agen.png', alt: "Dr. A'Gen", href: '#' },
		{ image: 'images/one-coffee.png', alt: 'One Coffee', href: '#' },
		{ image: 'images/one-product.png', alt: 'One Product', href: '#' },
		{ image: 'images/one-parfum.png', alt: 'One Parfum', href: '#' },
	];

	const slides = [
		{
			image: 'images/slide-1.png',
			title: 'Скоро!',
			description:
				'Готовьте свои костюмы!<br>Совсем скоро нас ждет встреча, на которой мы обсудим все важные вопросы, увидим новинки и запланируем какие-то крутые штуки!'
		},
		{
			image: 'images/slide-2.png',
			title: 'Скоро!',
			description:
				'Готовьте свои костюмы!<br>Совсем скоро нас ждет встреча, увидим новинки и запланируем какие-то крутые штуки!'
		},
		{
			image: 'images/slide-3.png',
			title: 'Скоро!',
			description:
				'Готовьте свои костюмы!<br>Совсем скоро нас ждет встреча, на которой мы обсудим все важные вопросы, увидим новинки и запланируем какие-то крутые штуки!'
		}
	];
</script>

<div class="bg-brand-dark">
	<Header />
	<div class="conteiner-custom flex flex-col items-center gap-[3.75rem] py-32 md:py-44">
		<img src="images/logo.png" alt="ONE TO ONE" />
		<h2 class="text-center font-title-light text-xl text-white">
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
					<Card image="images/vk.png" alt="VK Видео" href="#" size="sm" />
					<Card image="images/telegram.png" alt="Телеграм" href="#" size="sm" />
				</div>

				<div class="p-6 text-brand-gray-dark">
					<h2 class="mb-3 text-xl font-title-medium lg:pl-4">Присоединяйтесь</h2>
					<div class="font-body-light lg:pl-[5.5rem]">
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
