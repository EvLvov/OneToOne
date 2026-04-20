<script lang="ts">
	import { reveal } from '$lib/actions/animate';

	let { variant = 'main' }: { variant?: 'main' | 'landing' } = $props();

	const links = [
		{ label: 'Пользовательское соглашение', href: '#' },
		{ label: 'Соглашение о персональных данных', href: '#' },
		{ label: 'Оферта', href: '#' },
		{ label: 'Способы доставки', href: '#' },
		{ label: 'Инструкция по приему заказов One To One', href: '#' }
	];
</script>

{#if variant === 'landing'}
	<footer  class="bg-brand-gray-dark">
		<div class="relative container-landing text-white overflow-hidden 2xl:overflow-visible">
			<div use:reveal  class="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 font-gordita font-normal gap-[40px] pt-[80px] pb-[35px] text-[16px] max-w-[500px] mx-auto lg:max-w-none lg:mx-0 text-center xs:text-left">

				<div class="flex flex-col items-center xs:items-start">
					<img class="mb-[30px]" src="images/landing/footer-logo.webp" alt="">
					<p class="max-w-[200px] font-dinpro text-[26px] text-[#8B5CF6] uppercase leading-[1.0]">Живи для себя создавай для других</p>
				</div>

				<div>
					<h3 class="mb-[32px] font-light uppercase">Реквизиты компании</h3>
					<ul>
						<li>ООО "КРИСТЕЛ"</li>
						<li>ИНН: 2460096023</li>
						<li>ОГРН: 1162468074691</li>
					</ul>
				</div>

				<div>
					<h3 class="mb-[32px] font-light uppercase">Почтовый адрес</h3>
					<address class="not-italic">
						<p>г. Новороссийск, ул. Дерябина 8А</p>
						<a href="mailto:121concept@gmail.com">121concept@gmail.com</a>
					</address>
				</div>

				<nav aria-label="links">
					<h3 class="mb-[32px] font-light uppercase">Ссылки</h3>
					<ul class="text-[#3FA176] font-medium">
						<li><a href="/#" class="hover:underline">Пользовательское соглашение</a></li>
						<li><a href="/#" class="hover:underline">Соглашение о персональных данных</a></li>
						<li><a href="/#" class="hover:underline">Способы доставки</a></li>
					</ul>
				</nav>

			</div>

			<div class="py-[40px] border-t border-white/10">
				<p class="text-[16px] text-center">Copyright @2021</p>
			</div>

			<img class="hidden 2xl:block absolute top-[-40px] right-[10px]" src="images/landing/footer-1.webp" alt="">
			<img class="hidden 2xl:block absolute top-[50px] right-[-260px]" src="images/landing/footer-2.webp" alt="">
		</div>
	</footer>
{:else}
	<div class="lg:rounded-[60px] bg-brand-dark-soft">
		<footer class="conteiner-custom py-10">
			<div class="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
				<div class="flex w-full justify-center lg:w-1/2 lg:justify-start">
					<img src="images/main/logo.png" alt="ONE TO ONE" class="h-auto w-full max-w-[486px] object-contain" />
				</div>
				<div class="flex w-full flex-col items-center gap-8 lg:w-1/2 lg:flex-row lg:items-start lg:justify-between">
					<nav class="flex flex-col items-center gap-0.5 lg:items-start">
						{#each links as link}
							<a
								href={link.href}
								class="font-gordita font-medium text-xs leading-6 tracking-normal text-brand-light uppercase underline decoration-solid transition-colors duration-200 hover:text-white"
							>
								{link.label}
							</a>
						{/each}
					</nav>
					<address class="font-gordita font-normal text-xs leading-relaxed text-white not-italic text-center lg:text-left">
						<p class="font-gordita font-medium text-white">ООО "КРИСТЕЛ"</p>
						<p>ИНН: 2460096023</p>
						<p>ОГРН: 1162468072491</p>
						<br />
						<p>353924, Краснодарский край, город Новороссийск,</p>
						<p>ул. Мурата Ахеджака, д.3, этаж 2, помещение 19</p>
						<p>manage@123.me</p>
						<p>Телефон: 8 (800) 333-33-29</p>
					</address>
				</div>
			</div>
		</footer>
	</div>
	<p class="py-2 text-center font-gordita font-normal text-xs text-brand-light">Copyright ©2025</p>
{/if}
