<script lang="ts">
  export let title: string = "برگزار کننده ها";
</script>

<div class="title">
  <h4 class="topic text-2xl">
    <span class="underline-holder"></span>
    {title}
  </h4>
</div>

<style lang="postcss">
  .title {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  .title .topic {
    color: rgb(var(--fourth));
    margin-bottom: 29px;
    font-weight: 600;
    line-height: 1.76;
    position: relative;
    display: flex;
  }

  .title .topic .underline-holder::after {
    content: "";
    display: block;
    width: 50px;
    height: 2px;
    @apply bg-green-400;
    border-radius: 100px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
