<template>
  <component
    :is="component"
    :class="buttonClass"
    :href="props.href"
    :to="props.to"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { tv } from 'tailwind-variants'
import { type AnchorHTMLAttributes, type HTMLAttributes, computed } from 'vue'

type ButtonProps = {
  as?: string
  variant?: 'primary' | 'secondary'
  href?: AnchorHTMLAttributes['href']
  to?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  variant: 'primary'
})

const component = computed(() => {
  if (props.to || props.href) return resolveComponent('NuxtLink')
  return 'button'
})

const buttonClass = computed(() =>
  tv({
    base: 'inline-flex items-center font-brand rounded-full font-medium px-6 py-2 text-brand-light shadow-md',
    variants: {
      variant: {
        primary: 'bg-brand-primary',
        secondary: 'bg-brand-dark'
      }
    }
  })({ variant: props.variant, class: props.class })
)
</script>
