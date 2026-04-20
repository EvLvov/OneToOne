<script lang="ts">
  import Button from './Button.svelte';

  let {
    variant = 'main',
    isAuthorized =  true,
    loginHref = '#',
    dashboardHref = '#',
    logoutHref = '#'
  }: {
    variant?: 'main' | 'landing';
    isAuthorized?: boolean;
    loginHref?: string;
    dashboardHref?: string;
    logoutHref?: string;
  } = $props();

  let menuOpen = $state(false);

  const isLanding = $derived(variant === 'landing');

  const burgerBarColor  = $derived(isLanding ? 'bg-landing-brown' : 'bg-white');
  const burgerMenuBg    = $derived(isLanding ? 'bg-landing-beige' : 'bg-brand-dark');
  const btnTextColor    = $derived(isLanding ? 'text-landing-caramel' : 'text-black');
  const desktopJustify  = $derived(isLanding ? 'lg:justify-start' : 'lg:justify-end');
  const desktopInnerClass = $derived(isLanding ? 'w-full max-w-[849px] mx-auto 2xl:max-w-none 2xl:mx-0' : '');
  const iconColor = $derived(isLanding ? 'currentColor' : '#1D223B');
  const iconOpacity = 0.8;
</script>

<header class="relative">
  <div class="py-6">
    <div class="flex justify-end {desktopJustify} items-center">

      <button
        class="lg:hidden relative z-[60] flex flex-col gap-1.5 p-2"
        onclick={() => menuOpen = !menuOpen}
        aria-label="Меню"
      >
        <span class="block h-0.5 w-6 {burgerBarColor} transition-all duration-300" class:rotate-45={menuOpen} class:translate-y-2={menuOpen}></span>
        <span class="block h-0.5 w-6 {burgerBarColor} transition-all duration-300" class:opacity-0={menuOpen}></span>
        <span class="block h-0.5 w-6 {burgerBarColor} transition-all duration-300" class:-rotate-45={menuOpen} class:-translate-y-2={menuOpen}></span>
      </button>

      <div class="hidden lg:flex items-center gap-4 {desktopInnerClass}">
        {#if isAuthorized}
          <Button variant="white" small label="Личный кабинет" icon="user" href={dashboardHref} class={btnTextColor} {iconColor} {iconOpacity} />
          <Button variant="white" small label="Выйти" icon="logout" href={logoutHref} class={btnTextColor} {iconColor} {iconOpacity} />
        {:else}
          <Button variant="white" small label="Личный кабинет" icon="user" href={loginHref} class={btnTextColor} />
        {/if}
      </div>

      <div class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 {burgerMenuBg} px-4 lg:hidden transition-all duration-300 {menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}">
        {#if isAuthorized}
          <div class="flex flex-col gap-4">
            <Button variant="white" medium label="Личный кабинет" icon="user" href={dashboardHref} class={btnTextColor} {iconColor} {iconOpacity} />
            <Button variant="white" medium label="Выйти" icon="logout" href={logoutHref} class="w-full {btnTextColor}" {iconColor} {iconOpacity} />
          </div>
        {:else}
          <Button variant="white" medium label="Личный кабинет" icon="user" href={dashboardHref} class={btnTextColor} />
        {/if}
      </div>

    </div>
  </div>
</header>
