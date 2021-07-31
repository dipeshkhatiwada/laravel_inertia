<template>
    <main>
        <header>
            <inertia-link :href="route('home')">Welcome </inertia-link> /
            <inertia-link :href="route('test')">Test </inertia-link> /
            <inertia-link :href="route('about')">About </inertia-link>
        </header>
        <slot />
  </main>
</template>
