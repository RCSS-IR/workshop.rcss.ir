<script>
  import YoutubeIcon from "$lib/icons/YoutubeIcon.svelte";
  export let sessions = [
    {
      title: " جلسه اول",
      sessiontitle: "مقدمه و آشنایی",
      description: "در این جلسه به آشنایی با دوره می پردازیم",
      youtubeLink: "https://youtu.be/y89kXYZeXJ4?si=H_4m-ssvMjXMiff0",
      members: [
        { name: "نادر زارع ", role: "عضو کمیته جهانی ربوکاپ", image: "/img/people/nader-zare.jpg" },
        {
          name: "اشکان کشاورزی",
          role: "مسئول کمیته فنی ایران",
          image: "/img/people/ashkan-keshavarzi.jpg",
        },
        {
          name: "علیرضا صدرایی",
          role: "عضو کمیته فنی جهانی",
          image: "/img/people/alireza-sadraii-rad.jpg",
        },
      ],
    },
    {
      title: " جلسه دوم",
      sessiontitle: " آموزش مبانی کامپیوتر و گیت ",
      youtubeLink: "https://youtu.be/fL2csdarZG4?si=hi4LvHWIZka0I5DF",
      members: [
        {
          name: "امید امینی",
          role: "دانشگاه دالهاوزی کانادا",
          image: "/img/people/omid-amini.jpg",
        },
        {
          name: "علیرضا صدرایی",
          role: "عضو کمیته فنی جهانی",
          image: "/img/people/alireza-sadraii-rad.jpg",
        },
      ],
    },

    {
      title: " جلسه سوم",
      sessiontitle: " آموزش مبانی برنامه نویسی - بخش اول  ",
      youtubeLink: "https://www.youtube.com/@RCSS2D",
      members: [
        {
          name: "رانا رکنی",
          role: "دانشگاه شهید بهشتی",
          image: "/img/people/rana-rokni.jpg",
        },
        {
          name: "صدار خنجری",
          role: "دانشگاه شریف",
          image: "/img/people/sadra-khanjari.jpg",
        },
      ],
    },

    {
      title: " جلسه چهارم",
      sessiontitle: " آموزش مبانی برنامه نویسی - بخش دوم  ",
      youtubeLink: "https://www.youtube.com/@RCSS2D",
      members: [
        {
          name: "رانا رکنی",
          role: "دانشگاه شهید بهشتی",
          image: "/img/people/rana-rokni.jpg",
        },
      ],
    },
  ];
</script>

{#each sessions as session (session.title)}
  <div class="container" dir="rtl">
    <div class="flex" style="float: left;">
      <div class="session-members">
        {#each session.members as member}
          <div class="member d-flex flex-column align-items-center position-relative">
            <div class="image" style="transform: scale(1);">
              <div class="overlay"></div>
              <img src={member.image} class="img-fluid d-block" alt="{member.name}'s image" />
            </div>
            <h6 class="name">
              {member.name}
            </h6>
            <p class="role">
              {member.role}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <div class="content">
      <div class="title">{session.title}</div>
      <div class="sessiontitle" style="position:relative;  top:10px">{session.sessiontitle}</div>

      <div class="youtube-link" style="position:relative;  top:100px">
        <div class="icon"><svelte:component this={YoutubeIcon} /></div>
        <div class="big" style="position:relative;  right:20px">
          <a href={session.youtubeLink}>مشاهده در یوتیوب</a>
        </div>
      </div>
    </div>
  </div>
{/each}

<style lang="scss">
  .container {
    @apply bg-white p-7 rounded-lg shadow-lg  mb-4;
  }

  .session-members {
    @apply flex items-start mb-4;
  }

  .session-member {
    @apply inline-block w-32 h-40 rounded-lg overflow-hidden m-2; // Increase size to 20x20
  }

  .content {
    @apply ml-4;
  }

  .title {
    @apply text-2xl font-bold text-green-700 mb-2;
  }

  .sessiontitle {
    @apply text-xl text-gray-600 mb-4;
  }

  .youtube-link {
    @apply flex flex-row  gap-2;
    .icon {
      text-align: right;
      color: rgb(180, 9, 9);
      width: 5px;
      height: 5 px;
    }

    .big {
      text-align: left;
      @apply text-sm underline;
    }
  }

  .member {
    text-align: center !important;
    text-decoration: none;
    width: 150px;
    padding: 0 24px;
  }

  .member .image {
    position: relative;
    top: 0;
    left: 0;
    padding-top: 125%;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 2px;
  }

  .member .image .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(var(--second));
    opacity: 0.2;
    z-index: 1;
  }

  .member .image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .member .name {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 2px;
    color: rgb(var(--third));
    margin-top: 15px;
  }

  .member .role {
    font-size: 13px;
    font-weight: 300;
    color: rgb(var(--third));
    margin-bottom: 15px;
  }
</style>
