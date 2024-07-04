<template>
  <div class="h-screen flex flex-col">
    <AppTopNav />
    <div class="flex-auto mt-12">
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
