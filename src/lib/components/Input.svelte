<script module>
  let idCounter = 0;
</script>

<script>
  let {
    type = 'text',
    placeholder = '',
    value = $bindable(),
    label = '',
    size = 'normal'
  } = $props();

  const sizeClasses = {
    normal: '',
    small: 'w-[130px] rounded-[90px] bg-brand-mid font-body-light text-white placeholder:text-white/50 px-3 py-2 text-sm outline-none border border-transparent focus:brand-light'
  };

  const inputId = `input-${++idCounter}`;
  const currentSizeClass = $derived(sizeClasses[size] ?? sizeClasses.normal);
</script>

<div class="flex flex-col gap-1">
  {#if label}
    <label for={inputId} class="text-sm font-body-light text-white/50">{label}</label>
  {/if}
  <input
    id={inputId}
    {type}
    {placeholder}
    bind:value
    class={currentSizeClass}
  />
</div>
