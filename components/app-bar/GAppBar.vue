<template>
  <VAppBar
    :height="100" class=" px-3 "
    color="background" scroll-behavior="hide"
  >
    <VCard
      :style="`width: ${1450}px`" class="mx-auto flex items-center p-7 mt-2 elevation-0 dark:backdrop-blur  "
      color="app-background" height="68"
    >
      <NuxtLink to="/">
        <SkriptjobsLogo />
      </NuxtLink>
      <VSpacer />

      <GAppBarMenuRight />
    </VCard>
  </VAppBar>
</template>
