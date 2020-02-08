<template>
  <div class="layout">
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header> -->
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
	scroll-behavior: smooth;
}

body {
  // font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  font-family: 'Montserrat', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #E5E5E5;
}

.layout {
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav {
  &__link {
    margin-left: 20px;
  }
}

h1 {
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
  margin: 10px 0;

  @include break(mobile) {
    font-size: 24px;
    line-height: 32px;
  }

  @include break(mobile-s) {
    font-size: 22px;
    line-height: 30px;
  }
}

h2 {
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  color: #fff;
  margin: 10px 0;

  @include break(mobile) {
    font-size: 16px;
    line-height: 22px;
  }
}

button:focus {
  outline: none;
}
</style>
