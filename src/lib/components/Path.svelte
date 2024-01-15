<script>
  import SectionTitle from "$lib/components/SectionTitle.svelte";
  import Camera1Icon from "$lib/icons/CameraIcon.svelte";
  import Movie1Icon from "$lib/icons/Movie1Icon.svelte";
  import HappyFaceIcon from "$lib/icons/HappyFaceIcon.svelte";
  import ListCheckedIcon from "$lib/icons/ListCheckedIcon.svelte";
  import CupIcon from "$lib/icons/CupIcon.svelte";

  let path = [
    {
      title: "ثبت نام دوره",
      desc: "خیلی راحت تو دوره ثبت نام میکنی (رایگان)",
      icon: Camera1Icon,
    },
    {
      title: "کلاس ها",
      desc: "خیلی راحت میاید سرکلاس ها آنلاین",
      icon: Movie1Icon,
    },
    {
      title: "حل تمرین",
      desc: "مشکلاتت رو تو کلاس حل تمرین برطرف میکنی",
      icon: HappyFaceIcon,
    },
    {
      title: "تقویت تیم",
      desc: "تیم خودتو تقویت میکنی",
      icon: ListCheckedIcon,
    },
    {
      title: "Iranopen2024",
      desc: "حالا به ایران اپن حمله میکنی",
      icon: CupIcon,
    },
  ];
</script>

<div class="container relative mx-auto mb-40">
  <SectionTitle title="چطوری کمک میکنیم؟" />

  <div class="flex flex-col md:flex-row justify-center items-center relative">
    {#each path as step}
      <div class="step">
        <div class="logo">
          <div class="circle"></div>
          <div class="icon text-blue-900">
            <svelte:component this={step.icon} />
          </div>
        </div>
        <div class="text">
          <h6 class="topic">
            {step.title}
          </h6>
          <p class="w-40 text-center text-gray-600">
            {step.desc}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .step {
    @apply flex flex-col;
    padding: 60px 0;
    position: relative;
    width: 100%;

    .text {
      @apply flex flex-col justify-center items-center;
      width: 100%;
      padding: 0 20px;
    }
    .logo {
      position: absolute;
      top: 5px;
      width: 100%;

      .icon {
        position: absolute;
        top: 1px;
        right: calc(50% - 20px);
        z-index: 10;
      }
    }

    .circle {
      width: 52px;
      height: 52px;
      position: absolute;
      border-radius: 50%;
      margin: auto;
      margin-bottom: 30px;
      background: rgb(var(--second), 0.1);
      right: calc(50% - 40px);
    }

    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 2px;
      border-radius: 100px;
      position: absolute;
      left: 50px;
      bottom: 0;
    }
  }

  .stepone__texts {
    margin-right: 20px;
  }

  .step {
    text-align: center;
  }

  .stepone__texts {
    margin-right: 20px;
  }

  .step .stepone-img {
    user-select: none;
    width: 60px;
    margin-bottom: 20px;
    object-fit: contain;
  }

  .stepone__circle {
    width: 52px;
    height: 52px;
    position: relative;
    border-radius: 50%;
    margin: auto;
    margin-bottom: 30px;
    background: rgb(var(--second), 0.1);
  }

  .step .svg {
    position: absolute;
    width: 50px;
    top: 7%;
    right: 50%;
  }

  .step img {
    width: 80px;
    height: 60px;
    max-width: 80px;
    max-height: 60px;
    margin-bottom: 15px;
    margin-right: 10px;
  }

  .step .topic {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .step .desc {
    font-size: 14px;
    font-weight: 300;
    color: rgb(var(--third));
    white-space: pre-line;
    direction: ltr;
  }

  .step:nth-child(odd):not(:last-child)::after {
    content: "";
    display: block;
    width: 105px;
    height: 16px;
    background-image: url("/img/oddBg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 15px;
    left: -55px;
  }

  .step:nth-child(even):not(:last-child)::after {
    content: "";
    display: block;
    width: 105px;
    height: 16px;
    background-image: url("/img/evenBg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 30px;
    left: -55px;
  }

  @media screen and (max-width: 1200px) {
    .step:nth-child(odd):not(:last-child)::after {
      width: 65px;
      height: 12px;
      top: 15px;
      left: -45px;
    }

    .step:nth-child(even):not(:last-child)::after {
      width: 65px;
      height: 12px;
      top: 30px;
      left: -45px;
    }
  }

  @media screen and (max-width: 991px) {
    .step {
      margin-bottom: 50px;
    }

    .step .desc {
      max-width: 50%;
      margin: auto;
    }

    .step:nth-child(odd):not(:last-child)::after,
    .step:nth-child(even):not(:last-child)::after {
      display: none;
    }
  }
</style>
