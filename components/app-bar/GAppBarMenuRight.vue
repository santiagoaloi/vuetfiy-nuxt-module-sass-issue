<template>
  <div>
    <div class="lg:flex hidden align-center ">
      <div class="gap-4 flex">
        <VBtn
          :active="false"
          class="border-0 no-gutters"
          color="appbar-buttons"
          disabled
          size="large"
          variant="plain"
        >
          Find Jobs
        </VBtn>

        <VBtn
          :active="false"
          class="border-0 no-gutters"
          color="appbar-buttons"
          disabled
          size="large"
          to="/"
          variant="plain"
        >
          Pricing
        </VBtn>
      </div>

      <VDivider class="mx-3" vertical />

      <div class="gap-6 flex">
        <VBtn class="rounded-xl border-0" color="link" size="large" variant="plain">
          Sign In
        </VBtn>

        <SettingsButton
          color="black-button"
          light
          size="large"
          variant="flat"
        >
          <div class=" flex align-center">
            Get started
            <VIcon class="ml-1" end icon="i-mdi:arrow-right" size="17" />
          </div>
        </SettingsButton>
      </div>

      <!-- <template v-else>
        <GAppBarNotifications />
        <GAppBarProfileMenu />
        </template> -->
    </div>
  </div>
</template>
