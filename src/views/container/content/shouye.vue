<template>
  <div id="content">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "content1"
};
</script>

<style lang="scss" scoped>
#content {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  .left {
    width: calc(70% - 20px);
    height: 300px;
    background: red;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
  .right {
    width: 30%;
    height: 300px;
    background: black;
    @media (max-width: 900px) {
      display: none;
    }
  }
}
</style>
