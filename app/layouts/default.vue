<template>
  <AppContainer class="sm:border-x border-default pt-10 bg-white dark:bg-black">
    <AppFloatingNav :links="navLinks" />
    <slot />
    <AppFooter />
  </AppContainer>
</template>
