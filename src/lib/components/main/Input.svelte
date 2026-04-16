<script module lang="ts">
  let idCounter = 0;
</script>

<script lang="ts">
  let {
    type = 'text',
    placeholder = '',
    value = $bindable(),
    label = '',
    size = 'normal',
    class: extraClass = ''
  }: {
    type?: string;
    placeholder?: string;
    value?: string;
    label?: string;
    size?: 'normal' | 'small';
    class?: string;
  } = $props();

  const sizeClasses: Record<string, string> = {
    normal: '',
    small: 'w-[130px] rounded-[90px] bg-brand-mid font-gordita font-normal text-white placeholder:text-white/50 px-3 py-2 text-sm outline-none border border-transparent focus:border-brand-light focus:ring-0'
  };

  const inputId = `input-${++idCounter}`;
  const currentSizeClass = $derived(sizeClasses[size] ?? sizeClasses.normal);
</script>

<div class="flex flex-col gap-1">
  {#if label}
    <label for={inputId} class="text-sm font-gordita font-normal text-white/50">{label}</label>
  {/if}
  <input
    id={inputId}
    {type}
    {placeholder}
    bind:value
    class="{currentSizeClass} {extraClass}"
  />
</div>
