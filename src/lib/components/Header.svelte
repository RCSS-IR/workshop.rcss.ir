<script>
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { tick } from "svelte";

  let rightLinks = [
    {
      name: "صفحه‌ی اصلی",
      url: "/",
    },
    {
      name: "طرح درس",
      url: "/outline",
    },
  ];

  let leftLinks = [
    // {
    //     name: 'درباره‌ی ما',
    //     url: '/about'
    // },
    // {
    //     name: 'تماس با ما',
    //     url: '/contact'
    // },
  ];

  let selectedUrl;

  $: selectedUrl = $page.url.pathname;

  async function highlightSelectedLink(node) {
    if (node.href === window.location.origin + selectedUrl) {
      await tick(); // ensure the DOM has been updated
      node.classList.add("highlighted");
      return {
        destroy() {
          node.classList.remove("highlighted");
        },
      };
    }
  }
</script>

<header class="container m-auto p-4 flex flex-col md:flex-row justify-center md:justify-between">
  <ul class="flex flex-row flex-wrap mt-7 md:mt-0 justify-center items-center text-gray-600 font-bold">
    {#each rightLinks as link}
      <li class="w-40 md:w-auto text-center p-4 md:p-0 md:text-start">
        <a
          href={link.url}
          class="p-4 hover:text-gray-800"
          class:selected={selectedUrl === link.url}
          use:highlightSelectedLink
        >
          {link.name}
        </a>
      </li>
    {/each}
  </ul>

  <div class="flex flex-row justify-center items-center">
    <img src="/img/logo.jpg" height="100" width="100" alt="logo" />
  </div>

  <ul class="flex flex-row flex-wrap mt-7 md:mt-0 justify-center items-center text-gray-600 font-bold">
    {#each leftLinks as link}
      <li class="w-40 md:w-auto text-center p-4 md:p-0 md:text-start">
        <a
          href={link.url}
          class="p-4 hover:text-gray-800"
          class:selected={selectedUrl === link.url}
          use:highlightSelectedLink
        >
          {link.name}
        </a>
      </li>
    {/each}
  </ul>
</header>

<style>
  .highlighted {
    position: relative;
    animation: highlightAnimation 0.5s ease-in-out forwards;
  }
  @keyframes highlightAnimation {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: yellow;
    }
    100% {
      background-color: transparent;
    }
  }

  .selected {
    @apply text-gray-800 relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 10px;
      left: 0;
      width: calc(100% - 30px);
      @apply absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md;
      @apply bg-green-400;
      height: 2px;
    }
  }
</style>
