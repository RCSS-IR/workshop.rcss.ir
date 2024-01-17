<script>
  import { onMount } from "svelte";

  let countdown = 10; // starting countdown value
  const startingDate = new Date("2024-01-26"); // replace with your desired starting date

  onMount(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = startingDate - now;
      countdown = Math.ceil(difference / (1000 * 60 * 60 * 24)); // calculate remaining days

      if (difference <= 0) {
        clearInterval(interval);
        countdown = 0;
      }
    }, 1000);
  });
</script>

<div class="container mx-auto">
  <div
    style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(to bottom, #00FF00, #00FF00);"
    class="justify-center align-items-center textfive-row textfive-position-right"
  >
    <div class="col textfive-texts">
      <div class="textfive-texts__wrapper">
        <div
          class="textfive-texts__title text-4xl font-bold mb-3 bg-gradient-to-b from-white to-green-300 bg-clip-text text-transparent"
        >
          جلسه اول؟ مقدمه!
        </div>
        <div class="description">
          <p>در جلسه‌ی اول آقای زارع و آقای کشاورزی راجب شبیه سازی دوبعدی و این دوره با شما صحبت می کنند</p>
          <p>
            چه روزی: جمعه 6 بهمن ماه 1402 <br />
            چند روز مونده:
            {countdown} روز
            <br />
            کجا: گوگل میت
            <br />
            .لینک جلسه در کانال نلگرام قرار داده خواهد شد و برای افرادی که ثبت نام کردند از طریق ایمیل ارسال می شود
          </p>
        </div>
        <div class="textfive-texts__buttons"></div>
      </div>
    </div>
    <div class="textfive-up-circle">
      <img src="/img/filled-circle.svg" />
    </div>
    <div class="textfive-up-ring">
      <img src="/img/ring.svg" />
    </div>
    <div class="textfive-down-circle">
      <img src="/img/filled-circle.svg" />
    </div>
    <div class="textfive-down-ring">
      <img src="/img/ring.svg" />
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    padding: 0;
  }

  .textfive-row {
    @apply rounded-none md:rounded-3xl flex flex-col justify-center items-center min-h-[20vh] py-[65px] md:py-40;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    position: relative;
    margin-right: 0;
    width: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .textfive-texts {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
  }

  .textfive-texts__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .textfive-texts__title {
    text-align: center;
    max-width: 450px;
    position: relative;
  }

  .description {
    text-align: justify;
    color: white;
    font-size: 16px;
    font-weight: 300;
    margin-top: 10px;
    max-width: 450px;
  }

  .textfive-texts__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0px;
  }

  .textfive-texts__buttons a {
    text-decoration: none;
    color: inherit;
    text-align: center;
  }

  .textfive-texts__buttonOne {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: rgb(var(--fourth));
    border: 2px solid white;
    border-radius: 15px;
    margin: 5px;
    padding: 0px 8px;
    min-width: 155px;
    min-height: 50px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .textfive-up-circle {
    position: absolute;
    top: -160px;
    right: -135px;
    transform: rotate(195deg);
  }

  .textfive-up-ring {
    position: absolute;
    top: -220px;
    right: -135px;
  }

  .textfive-down-circle {
    position: absolute;
    left: -80px;
    top: 100px;
  }

  .textfive-down-ring {
    position: absolute;
    left: -210px;
    top: 100px;
  }

  @media (max-width: 991px) {
    .textfive-texts {
      max-width: 100%;
    }

    .textfive-texts__wrapper {
      max-width: 100%;
    }

    .textfive-texts__buttons {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .textfive-up-circle {
      top: -205px;
      right: -165px;
    }

    .textfive-up-ring {
      top: -275px;
    }

    .textfive-down-circle {
      top: 375px;
    }

    .textfive-down-ring {
      top: 360px;
    }
  }

  @media (max-width: 500px) {
    .textfive-row {
      padding: 50px 5px;
    }

    .textfive-texts__buttons {
      margin-top: 5px;
    }

    .textfive-down-circle {
      top: 415px;
    }

    .textfive-down-ring {
      top: 390px;
    }
  }
</style>
