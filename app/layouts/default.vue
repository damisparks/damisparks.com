<template>
  <div class="flex flex-col min-h-screen">
    <AppFloatingNav :links="navLinks" />
    <PagePaper />
    <AppContainer class="py-24 sm:py-32 mt-12 flex-auto">
      <slot />
    </AppContainer>
    <AppContainer>
      <AppFooter />
    </AppContainer>
  </div>
</template>
