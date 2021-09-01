<template>
  <header>
    <div class="content">
      <div class="content-logo">
        <nuxt-link to="/"> Vue/Nuxt Dokumentacija</nuxt-link>
      </div>
      <div class="content-links">
        <ul>
          <li>
            <nuxt-link to="/dokumentacija">Dokumentacija</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  background-color: #0f0f0f;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-logo {
      padding: 15px 10px;
      a {
        color: #fff;
        font-size: 16px;
        line-height: 24px;
        font-weight: 800;
        &:hover {
          color: #2ec997;
          transition: all 0.3s ease-in-out;
        }
      }
    }

    &-links {
      li {
        a {
          font-size: 13px;
          line-height: 19px;
          font-weight: 400;
          text-transform: uppercase;
          cursor: pointer;
          padding: 21px 10px 17px 10px;
          color: white;
          &:hover {
            background-color: #1e1e1e;
            color: #2ec997;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
  }
}
</style>