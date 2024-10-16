<template>
  <div class="flex h-screen flex-col">
    <AppTopNav />
    <div class="mt-12 flex-auto">
      <AppContainer>
        <slot />
      </AppContainer>
    </div>
    <div>
      <AppContainer>
        <AppFooter />
      </AppContainer>
    </div>
  </div>
</template>
