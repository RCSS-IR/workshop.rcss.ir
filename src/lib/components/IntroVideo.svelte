<script lang="ts">
    import Icon from '@iconify/svelte';

    let videoState: "IMAGE" | "YOUTUBE" | "APARAT" | "CHOOSE" = "IMAGE";

    function changeVideoState(state: "IMAGE" | "YOUTUBE" | "APARAT" | "CHOOSE") {
        videoState = state;
    }

</script>
<div class="main-container">
    <div class="flex flex-col gap-2">
        <h3 class="font-bold text-3xl gradient-text-01">
            شبیه‌سازی دوبعدی فوتبال چیست؟
        </h3>
        <p class="text-md w-full md:w-[400px] text-justify text-gray-600">
            این ویدیو ارائه‌ی سال ۹۹-۹۸ در مورد شبیه‌سازی دوبعدی فوتبال است که در آن به معرفی مفاهیم اولیه‌ی محیط شبیه
            سازی دوبعدی فوتبال میپردازیم.
        </p>
    </div>

    <div>
        {#if videoState === "IMAGE"}
            <button class="relative group" on:click={()=>changeVideoState("CHOOSE")}>
                <img src="/img/2d-intro-background.png" alt="2d-intro-background"
                     class="video-size border border-2 border-gray-700 group-hover:opacity-50 transition-opacity duration-300 rounded-lg shadow-lg"/>
                <div class=" text-yellow-600">
                    <Icon icon="akar-icons:play"
                          height="50px"
                          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-opacity-25 bg-gray-600 cursor-pointer p-2
                          group-hover:bg-opacity-100 transition-opacity duration-300"/>
                </div>
            </button>

        {:else if videoState === "CHOOSE"}
            <div class="flex flex-row gap-2 justify-center items-center video-size border border-2 border-gray-700 group-hover:opacity-50 transition-opacity duration-300 rounded-lg shadow-lg">
                <button class="h-20 w-20 flex flex-col items-center justify-center hover:bg-gray-200 transition-colors duration-300 rounded-lg"
                        on:click={()=>changeVideoState("YOUTUBE")}>
                    <Icon icon="akar-icons:youtube-fill" height="40px" class="text-red-600 rounded-md"/>
                    <p class="text-gray-600 pt-2">یوتیوب</p>
                </button>
                <button class=" h-20 w-20 p-4 flex flex-col items-center justify-center hover:bg-gray-200 transition-colors duration-300 rounded-lg"
                        on:click={()=>changeVideoState("APARAT")}>
                    <img src="/img/aparat-logo.png" alt="aparat" class="h-10 rounded-md"/>
                    <p class="text-gray-600 pt-2">آپارات</p>
                </button>
            </div>
        {:else if videoState === "YOUTUBE"}
            <div class="video-size">
                <iframe src="https://www.youtube.com/embed/RvktEzH4glA?si=vr5dtHeeEKdjJmep"
                        title="YouTube video player" frameborder="0"
                        class="rounded-md video-size"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
            </div>
        {:else if videoState === "APARAT"}
            <div class="h_iframe-aparat_embed_frame bg-gray-600 video-size rounded-md overflow-hidden">
                <iframe src="https://www.aparat.com/video/video/embed/videohash/y0Sa7/vt/frame"
                        class="video-size"
                        allowFullScreen="true"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true">
                </iframe>
            </div>
        {/if}
    </div>
</div>


<style lang="scss">
  .main-container {
    @apply container flex items-center h-screen;
    @apply justify-center md:justify-between;
    @apply gap-7 md:gap-8;
    @apply flex-col-reverse md:flex-row;

  }

  .video-size {
    height: 400px;
    width: 676px;
  }

  .h_iframe-aparat_embed_frame {
    position: relative;
  }

  .h_iframe-aparat_embed_frame .ratio {
    display: block;
    width: 100%;
    height: auto;
  }

  .h_iframe-aparat_embed_frame iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  //    breakpoint on 1207px for .video-size class and make it smaller
  @media (max-width: 1207px) {
    .video-size {
      height: 300px;
      width: 507px;
    }
  }

  // breakpoint on 999px for .main-container class and make it flex column
  @media (max-width: 999px) {
    .main-container {
      @apply  gap-7 flex-col-reverse;
      justify-content: center;
    }
  }

  // breakpoint on 570 for .video-size class and make it smaller width 100% and aspect ratio 16:9
    @media (max-width: 570px) {
        .video-size {
            height: 100%;
            width: 100%;
            aspect-ratio: 16/9;
        }
    }
</style>