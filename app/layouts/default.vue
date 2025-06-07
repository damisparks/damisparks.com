<template>
  <AppContainer class="sm:border-x border-default pt-10">
    <AppFloatingNav :links="navLinks" />
    <slot />
    <AppFooter />
  </AppContainer>
</template>
