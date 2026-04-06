<script lang="ts">
    let { image, alt, href = '#', size = 'lg' } = $props();
</script>

<a {href} class="flex w-full items-center justify-center rounded-2xl bg-white p-6 transition-shadow hover:shadow-md
    {size === 'sm' ? 'h-[90px] lg:h-[120px]' : 'h-[170px] lg:h-[230px]'}">
    <img src={image} {alt} class="max-h-full w-auto object-contain" />
</a>