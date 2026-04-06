<script lang="ts">
  import Input from './Input.svelte';
  
  let id = $state('');
  let password = $state('');
</script>

<header>
  <div class="conteiner-custom py-6">
    <div class="flex justify-end items-center">
      
      <div class="flex gap-4">
        <Input
          placeholder="ID number"
          bind:value={id}
          size="small"
        />
        <Input
          type="password"
          placeholder="Password"
          bind:value={password}
          size="small"
        />
      </div>
    </div>
  </div>
</header>