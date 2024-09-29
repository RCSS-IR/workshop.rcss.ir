<script>
  import YoutubeIcon from "$lib/icons/YoutubeIcon.svelte";
  import SectionTitle from "$lib/components/SectionTitle.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  export let sessions = [
    {
      title: " جلسه اول",
      sessiontitle: "مقدمه و آشنایی",
      description: "در این جلسه به آشنایی با دوره می پردازیم",
      youtubeLink: "https://youtu.be/y89kXYZeXJ4?si=H_4m-ssvMjXMiff0",
      members: [
        {
          name: "نادر زارع ",
          role: "عضو کمیته جهانی ربوکاپ",
          image: "/img/people/nader-zare.jpg",
        },
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
      title: "جلسه سوم",
      sessiontitle: "  حل تمرین آموزش مبانی کامپیوتر و گیت ",
      youtubeLink:
        "https://www.youtube.com/watch?v=nSMoRHh7kOY&list=PLFy1-QjBONFKYdgOVFmUBLAb7yYbRPxwH&index=3&pp=gAQBiAQB",
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
        {
          name: "عرفان فتحی",
          role: "",
          image: "/img/people/erfan-fathi.jpg",
        },
      ],
    },

    {
      title: " جلسه چهارم",
      sessiontitle: " آموزش مبانی برنامه نویسی - بخش اول  ",
      youtubeLink:
        "https://www.youtube.com/watch?v=FbuIMxj28kk&list=PLFy1-QjBONFKYdgOVFmUBLAb7yYbRPxwH&index=4&pp=gAQBiAQB",
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
      title: " جلسه پنجم",
      sessiontitle: "حل تمرین مبانی برنامه نویسی",
      youtubeLink:
        "https://www.youtube.com/watch?v=I8oYIp_Y4oA&list=PLFy1-QjBONFKYdgOVFmUBLAb7yYbRPxwH&index=5&pp=gAQBiAQB",
      members: [
        {
          name: "صدرا خنجری",
          role: "دانشگاه شریف",
          image: "/img/people/sadra-khanjari.jpg",
        },
        {
          name: " سروش مظلوم",
          role: "",
          image: "/img/people/soroush-mazloom.jpg",
        },
      ],
    },

    {
      title: " جلسه ششم",
      sessiontitle: " آموزش مبانی برنامه نویسی - بخش دوم  ",
      youtubeLink:
        "https://www.youtube.com/watch?v=ACE-Hzdcc_g&list=PLFy1-QjBONFKYdgOVFmUBLAb7yYbRPxwH&index=7&pp=gAQBiAQB",
      members: [
        {
          name: "رانا رکنی",
          role: "دانشگاه شهید بهشتی",
          image: "/img/people/rana-rokni.jpg",
        },
      ],
    },

    {
      title: " جلسه هفتم",
      sessiontitle: " آموزش نصب و مبانی شبیه ساز دو بعدی فوتبال",
      youtubeLink:
        "https://www.youtube.com/watch?v=RYaNgjNGLv0&list=PLFy1-QjBONFKYdgOVFmUBLAb7yYbRPxwH&index=7&pp=gAQBiAQB",
      members: [
        {
          name: "صدرا خنجری",
          role: "دانشگاه شریف",
          image: "/img/people/sadra-khanjari.jpg",
        },
      ],
    },

    {
      title: " جلسه هشتم",
      sessiontitle: " انواع رفتار و چگونگی پیاده سازی آنها",
      youtubeLink:
        "https://www.youtube.com/watch?v=rBo7ieTODVA&list=PLFy1-QjBONFKYdgOVFmUBLAb7yYbRPxwH&index=8&pp=gAQBiAQB",
      members: [
        {
          name: "اشکان کشاورزی",
          role: "مسئول کمیته فنی ایران",
          image: "/img/people/ashkan-keshavarzi.jpg",
        },
      ],
    },

    {
      title: " جلسه نهم",
      sessiontitle: "  حل تمرین انواع رفتار و چگونگی پیاده سازی آنها",
      youtubeLink:
        "https://www.youtube.com/watch?v=E_pGDqR_1zw&list=PLFy1-QjBONFKYdgOVFmUBLAb7yYbRPxwH&index=9&pp=gAQBiAQB",
      members: [
        {
          name: "اشکان کشاورزی",
          role: "مسئول کمیته فنی ایران",
          image: "/img/people/ashkan-keshavarzi.jpg",
        },
        {
          name: " سروش مظلوم",
          role: "",
          image: "/img/people/soroush-mazloom.jpg",
        },
        {
          name: "عرفان فتحی",
          role: "",
          image: "/img/people/erfan-fathi.jpg",
        },
      ],
    },

    {
      title: " جلسه دهم",
      sessiontitle: "آموزش رفتار های دفاعی",
      youtubeLink:
        "https://www.youtube.com/watch?v=__L5P3IwOm8&list=PLFy1-QjBONFKYdgOVFmUBLAb7yYbRPxwH&index=10&pp=gAQBiAQB",
      members: [
        {
          name: "آراد فیروزکوهی ",
          role: "دانشگاه امیر کبیر",
          image: "/img/people/arad-firouzkohi.jpg",
        },
      ],
    },

    {
      title: " جلسه یازدهم",
      sessiontitle: "نحوه پیاده سازی مارک و مرتب سازی کد ها",
      youtubeLink: "https://youtu.be/9ygm9rYg82g?feature=shared",
      members: [
        {
          name: " سروش مظلوم",
          role: "",
          image: "/img/people/soroush-mazloom.jpg",
        },
        {
          name: "عرفان فتحی",
          role: "",
          image: "/img/people/erfan-fathi.jpg",
        },
      ],
    },

    {
      title: " جلسه دوازدهم",
      sessiontitle: "آموزش رفتار های هجومی",
      youtubeLink:
        "https://www.youtube.com/watch?v=z8cyW1F9SxQ&list=PLFy1-QjBONFKYdgOVFmUBLAb7yYbRPxwH&index=11&pp=gAQBiAQB",
      members: [
        {
          name: "صدرا خنجری",
          role: "دانشگاه شریف",
          image: "/img/people/sadra-khanjari.jpg",
        },
      ],
    },
  ];
</script>

<Header></Header>
<SectionTitle title="کلاس ها"></SectionTitle>
{#each sessions as session (session.title)}
  <div class="container">
    <div class="content">
      <div class="title">
        {session.title}
        <div class="sessiontitle" style="position:relative;  top:10px">
          {session.sessiontitle}
        </div>
      </div>

      <div class="explain-content">
        <div class="youtube-link">
          <div class="icon">
            <svelte:component this={YoutubeIcon} />
          </div>
          <div class="big" style="position:relative;  right:20px">
            <a href={session.youtubeLink}>مشاهده در یوتیوب</a>
          </div>
        </div>
      </div>
    </div>
    <div class="session-members" dir="ltr">
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
{/each}

<Footer></Footer>

<style lang="scss">
  .container {
    @apply flex bg-white p-7 rounded-lg shadow-lg  mb-4;
    justify-content: space-between;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .session-members {
    @apply flex items-start mb-4;
    direction: rtl;
  }
  .session-member {
    @apply flex inline-block w-32 h-40 rounded-lg overflow-hidden m-2;
    flex-direction: row;
    // Set the session-members direction to LTR
    // Increase size to 20x20
  }

  .content {
    @apply flex ml-4;
    flex-direction: column;
    justify-content: space-between;
    min-width: 280px;

    .explain-content {
      @apply flex;
      flex-direction: column;
      justify-content: space-between;

      .youtube-link {
        @apply flex flex-row  gap-0;
        .icon {
          display: flex;
          color: rgb(180, 9, 9);
        }

        .big {
          @apply flex text-sm underline;
        }
      }
    }
    .title {
      @apply flex text-2xl font-bold text-green-700 mb-2;
      flex-direction: column;
      .sessiontitle {
        @apply flex text-xl text-gray-600 mb-4;
      }
    }
  }

  .member {
    display: flex;
    flex-direction: column;
    text-align: center !important;
    text-decoration: none;
    width: 150px;
    padding: 0 24px;
  }

  .member .image {
    display: flex;
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
