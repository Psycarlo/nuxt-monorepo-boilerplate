<template>
  <SelectRoot v-model:model-value="model" :disabled="props.disabled">
    <SelectTrigger :class="selectClass">
      <SelectValue :placeholder="props.placeholder" />
      <ChevronDownIcon class="fill-gray-600 size-5" />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent
        position="popper"
        :side-offset="5"
        class="bg-white font-brand data-[state=closed]:animate-selectHide data-[side=top]:animate-selectUp data-[side=left]:animate-selectLeft data-[side=bottom]:animate-selectDown data-[side=right]:animate-selectRight z-50 max-h-[--radix-select-content-available-height] min-w-[var(--radix-select-trigger-width)] max-w-[96vw] rounded-md border will-change-[opacity,transform]"
      >
        <SelectViewport class="p-1">
          <SelectGroup
            v-for="group in isGroup ? props.options : 1"
            :key="group['label']"
          >
            <SelectLabel
              v-if="isGroup"
              class="text-gray-900 px-3 py-2 text-xs font-medium"
            >
              {{ group['label'] }}
            </SelectLabel>
            <SelectItem
              v-for="item in isGroup
                ? group[props.groupChildrenKey!]
                : props.options"
              :key="item.value"
              :value="item.value"
              class="hover:bg-gray-100 flex cursor-pointer items-center justify-between gap-2 rounded px-3 py-2 text-sm outline-none transition-colors data-[state=checked]:font-semibold"
            >
              <SelectItemText class="truncate">
                {{ item['label'] }}
              </SelectItemText>
              <SelectItemIndicator>
                <CheckIcon class="fill-brand-dark size-4" />
              </SelectItemIndicator>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script setup lang="ts">
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/16/solid'
import { tv } from 'tailwind-variants'
import type { HTMLAttributes } from 'vue'

type Item = {
  label: string
  value: string
  disabled?: boolean
}

type Group = {
  label: string
  [key: string]: string | Item[]
}

type SelectProps = {
  placeholder?: string
  disabled?: boolean
  options: Item[] | Group[]
  groupChildrenKey?: string
  class?: HTMLAttributes['class']
}

const props = defineProps<SelectProps>()

const selectClass = computed(() =>
  tv({
    base: 'bg-white border-gray-300 data-[disabled]:bg-gray-100 data-[placeholder]:text-gray-700 group relative inline-flex w-full items-center justify-between gap-2 truncate rounded-md border px-3 py-2 text-sm shadow-sm outline-none'
  })(props)
)

const model = defineModel({ type: String })

const isGroup = computed(() => !!props.groupChildrenKey)
</script>