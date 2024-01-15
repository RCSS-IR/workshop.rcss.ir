<script>
  import SectionTitle from "$lib/components/SectionTitle.svelte";
  import LocationIcon from "$lib/icons/LocationIcon.svelte";
  import ClockIcon from "$lib/icons/ClockIcon.svelte";

  let features = [
    {
      title: "مکان برگذاری دوره",
      desc: "غیر حضوری",
      unit: "",
      icon: LocationIcon,
      color: "blue",
    },
    {
      title: "مقدار زمان آموزش",
      desc: "۳۰+",
      unit: "ساعت",
      icon: ClockIcon,
      color: "green",
    },
    {
      title: "مدرسین",
      desc: "۹",
      unit: "نفر",
      icon: LocationIcon,
      color: "red",
    },
    {
      title: "ظرفیت دوره",
      desc: "+۲۰۰",
      unit: "نفر",
      icon: LocationIcon,
      color: "yellow",
    },
  ];
</script>

<div
  class="hidden bg-blue-200 bg-green-200 bg-red-200 bg-yellow-200
text-blue-800 text-green-800 text-red-800 text-yellow-800"
></div>

<div class="container mx-auto my-10">
  <SectionTitle title="ویژگی‌های این دوره" />

  <div class="feature-container">
    {#each features as feat}
      <div class="item">
        <div class="head">
          <div class="desc">
            <div class="circle bg-{feat.color}-200"></div>
            <span class="big">
              {feat.desc}
            </span>
            <span class="text-sm text-gray-600">
              {feat.unit}
            </span>
          </div>
          <i class="bg-{feat.color}-200" style="color: gray">
            <svelte:component this={feat.icon} />
          </i>
        </div>
        <span class="title">
          {feat.title}
        </span>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .feature-container {
    @apply flex flex-wrap justify-center gap-4 mb-32;
    direction: rtl;

    .item {
      @apply flex flex-col p-4 w-56 rounded-lg shadow-md;
      border: 1px solid #e2e8f0;

      .head {
        @apply flex flex-row justify-between;

        .desc {
          @apply flex flex-row items-center gap-2;
          .circle {
            @apply w-2 h-2  rounded-full mr-2;
          }

          .big {
            @apply text-lg font-bold;
          }
        }

        i {
          @apply flex items-center justify-center w-12 h-12  text-white rounded-full p-3;
        }
      }

      .title {
        @apply text-sm mr-3;
      }
    }
  }
</style>
