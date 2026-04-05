<script lang="ts">
	import logo from '$lib/images/logo.png';

	const links = [
		{ label: 'Пользовательское соглашение', href: '#' },
		{ label: 'Соглашение о персональных данных', href: '#' },
		{ label: 'Оферта', href: '#' },
		{ label: 'Способы доставки', href: '#' },
		{ label: 'Инструкция по приему заказов One To One', href: '#' }
	];
</script>

<div class="lg:rounded-[60px] bg-brand-dark-soft">
	<footer class="conteiner-custom py-10">
		
			<div class="flex flex-col items-center gap-6 lg:flex-row lg:items-start">

				<div class="flex w-full justify-center lg:w-1/2 lg:justify-start">
					<img src={logo} alt="ONE TO ONE" class="h-auto w-full max-w-[486px] object-contain" />
				</div>

				<div class="flex w-full flex-col items-center gap-8 lg:w-1/2 lg:flex-row lg:items-start lg:justify-between">
					<nav class="flex flex-col items-center gap-0.5 lg:items-start">
						{#each links as link}
							<a
								href={link.href}
								class="font-body-medium text-xs leading-6 tracking-normal text-brand-light uppercase underline decoration-solid transition-colors duration-200 hover:text-white"
							>
								{link.label}
							</a>
						{/each}
					</nav>

					<address class="font-body-light text-xs leading-relaxed text-white/80 not-italic text-center lg:text-left">
						<p class="font-body-medium text-white">ООО "КРИСТЕЛ"</p>
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
<p class="py-2 text-center font-body-light text-xs text-white/40">Copyright ©2025</p>
