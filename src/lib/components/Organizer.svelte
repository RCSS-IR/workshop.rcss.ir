<script>
  import SectionTitle from "$lib/components/SectionTitle.svelte";

  let organizers = [
    {
      id: 1,
      name: "RCSS.IR",
      logo: "/img/rcss-logo.png",
      link: "https://rcss.ir",
    },
    {
      id: 2,
      name: "کمیته ملی ربوکاپ",
      logo: "/img/committee.png",
      link: "https://fa.wikipedia.org/wiki/%DA%A9%D9%85%DB%8C%D8%AA%D9%87_%D9%85%D9%84%DB%8C_%D8%B1%D8%A8%D9%88%DA%A9%D8%A7%D9%BE_%D8%A7%DB%8C%D8%B1%D8%A7%D9%86#:~:text=%DA%A9%D9%85%DB%8C%D8%AA%D9%87%20%D9%85%D9%84%DB%8C%20%D8%B1%D8%A8%D9%88%DA%A9%D8%A7%D9%BE%20%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%20(%D8%A8%D8%A7,%D9%85%D9%88%D8%B3%DB%8C%E2%80%8C%D8%AE%D8%A7%D9%86%DB%8C%20%D8%B1%D8%A6%DB%8C%D8%B3%20%D8%A7%DB%8C%D9%86%20%DA%A9%D9%85%DB%8C%D8%AA%D9%87%20%D8%A7%D8%B3%D8%AA.",
    },
  ];
</script>

<div class="container m-auto">
  <div class="flex flex-row justify-center">
    <div class="w-full md:w-2/3">
      <div class="prees forPadding">
        <SectionTitle title="برگزار کننده ها" />
        <div class="flex flex-row justify-center gap-2">
          {#each organizers as organizer}
            <a href={organizer.link} target="_blank" class="flex flex-col">
              <div
                class="flex flex-row justify-center items-center bg-white h-32 w-32 p-2 rounded-lg hover:shadow border-2 border-white transition-all duration-300 ease-in-out hover:border-green-950 hover:shadow-lg"
                style="transform: scale(1);"
              >
                <img src={organizer.logo} alt={organizer.name} />
              </div>
              <span class="org-title">
                {organizer.name}
              </span>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  img {
    max-width: 100%;
    max-height: 100%;
  }

  .org-title {
    @apply text-center my-2 font-light bg-green-950 text-white rounded-b-md pt-2 text-xs pb-1;
    margin-top: -5px;
  }
</style>
