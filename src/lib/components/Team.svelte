<script>
  import SectionTitle from "$lib/components/SectionTitle.svelte";

  let teachers = [
    {
      name: "نادر زارع",
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
    {
      name: "آراد فیروزکوهی",
      role: "دانشگاه امیرکبیر",
      image: "/img/people/arad-firouzkohi.jpg",
    },
    {
      name: "امید امینی",
      role: "دانشگاه دالهاوزی کانادا",
      image: "/img/people/omid-amini.jpg",
    },
    {
      name: "رانا رکنی",
      role: "دانشگاه شهید بهشتی",
      image: "/img/people/rana-rokni.jpg",
    },
    {
      name: "عارف سیاره",
      role: "دانشگاه مموریال کانادا",
      image: "/img/people/aref-sayareh.jpg",
    },
    {
      name: "آریا مستاجران",
      role: "دانشگاه آیندهون",
      image: "/img/people/aria-mostajeran.jpg",
    },
    {
      name: "صدار خنجری",
      role: "دانشگاه شریف",
      image: "/img/people/sadra-khanjari.jpg",
    },
  ];
</script>

<div class="container mx-auto">
  <div class="flex flex-row justify-content-md-center flex flex-col">
    <SectionTitle title="تیم آموزشی" />

    <div class="flex flex-row flex-wrap justify-center">
      {#each teachers as teacher}
        <div class="member d-flex flex-column align-items-center position-relative">
          <div class="image" style="transform: scale(1);">
            <div class="overlay"></div>
            <img src={teacher.image} class="img-fluid d-block" alt="{teacher.name}'s image" />
          </div>
          <h6 class="name">
            {teacher.name}
          </h6>
          <p class="role">
            {teacher.role}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .title {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-bottom: 30px;
  }

  .title .topic {
    color: rgb(var(--fourth));
    margin-bottom: 29px;
    font-size: 20px;
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
    background-color: rgb(var(--first));
    border-radius: 100px;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .member {
    text-align: center !important;
    text-decoration: none;
    width: 207px;
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
    margin-bottom: 15px;
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

  @media screen and (max-width: 991px) {
    .member {
      margin-bottom: 40px;
    }

    .member .desc {
      max-width: 50%;
      margin: auto;
    }

    .member:nth-child(odd):not(:last-child)::after,
    .member:nth-child(even):not(:last-child)::after {
      display: none;
    }
  }
</style>
