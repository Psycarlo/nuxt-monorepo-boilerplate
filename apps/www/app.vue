<template>
  <main
    class="flex flex-col gap-2 items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100"
  >
    <NuxtImg src="/hero.png" alt="Hero" width="1125" height="375" />
    <Button class="group" href="https://psycarlo.com" target="_blank">
      <span>psycarlo</span>
      <IconAnimatedChevronRight />
    </Button>
    <Button
      variant="secondary"
      class="group"
      href="https://github.com/Psycarlo/nuxt-monorepo-boilerplate"
      target="_blank"
    >
      <span>Github</span>
      <IconAnimatedChevronRight />
    </Button>
    <Select
      v-model="network"
      :options="groupedNetworks"
      groupChildrenKey="items"
      placeholder="Select a network..."
      class="w-60"
    />
  </main>
</template>

<script setup lang="ts">
const network = ref()
const groupedNetworks = ref([
  { label: 'Layer 1', items: [{ label: 'Bitcoin', value: 'BTC' }] },
  {
    label: 'Layer 2',
    items: [
      { label: 'Lightning Network', value: 'LN' },
      { label: 'Liquid Network', value: 'LQN', disabled: true }
    ]
  }
])
</script>
