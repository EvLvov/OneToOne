<script lang="ts">
  import Input from './Input.svelte';
  import Button from './Button.svelte';

  let id = $state('');
  let password = $state('');
  let menuOpen = $state(false);

  let filled = $derived(id.trim() !== '' && password.trim() !== '');

  function handleSubmit() {
    // логика отправки
  }
</script>

<header class="relative">
  <div class="py-6">
    <div class="flex justify-end lg:justify-start items-center">

      <button
        class="lg:hidden relative z-[60] flex flex-col gap-1.5 p-2"
        onclick={() => menuOpen = !menuOpen}
        aria-label="Меню"
      >
        <span class="block h-0.5 w-6 bg-landing-brown transition-all duration-300" class:rotate-45={menuOpen} class:translate-y-2={menuOpen}></span>
        <span class="block h-0.5 w-6 bg-landing-brown transition-all duration-300" class:opacity-0={menuOpen}></span>
        <span class="block h-0.5 w-6 bg-landing-brown transition-all duration-300" class:-rotate-45={menuOpen} class:-translate-y-2={menuOpen}></span>
      </button>

      <div class="hidden lg:flex items-center w-full max-w-[849px] mx-auto 2xl:max-w-none 2xl:mx-0">
        <div class="relative flex gap-4">
          <Input placeholder="ID number" bind:value={id} class="w-[130px]" />
          <Input type="password" placeholder="Password" bind:value={password} class="w-[130px]" />
          <div class="absolute left-full ml-4 top-1/2 -translate-y-1/2 transition-all duration-300 {filled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}">
            <Button variant="icon" src="icons/arrow-brown.svg" onclick={handleSubmit} />
          </div>
        </div>
      </div>

      <div class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-[#e9ded9] px-4 lg:hidden transition-all duration-300 {menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}">
        <Input placeholder="ID number" bind:value={id} class="w-[250px]" />
        <Input type="password" placeholder="Password" bind:value={password} class="w-[250px]" />
        <div class="transition-all duration-300 {filled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}">
          <Button variant="icon" src="icons/arrow-brown.svg" onclick={handleSubmit} />
        </div>
      </div>

    </div>
  </div>
</header>
