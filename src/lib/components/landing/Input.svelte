<script module lang="ts">
  let idCounter = 0;
</script>

<script lang="ts">
  let {
    type = 'text',
    placeholder = '',
    value = $bindable(),
    label = '',
    class: extraClass = ''
  }: {
    type?: string;
    placeholder?: string;
    value?: string;
    label?: string;
    class?: string;
  } = $props();

  const inputId = `input-${++idCounter}`;
</script>

<div class="flex flex-col gap-1">
  {#if label}
    <label for={inputId} class="text-sm text-black/50">{label}</label>
  {/if}
  <input
    id={inputId}
    {type}
    {placeholder}
    bind:value
    class="rounded-[90px] bg-white text-black placeholder:text-black/50 px-3 py-2 text-sm outline-none border border-transparent focus:border-landing-brown focus:ring-0 {extraClass}"
  />
</div>
