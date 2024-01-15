<div class="container mx-auto">
    <div style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/nasircup.png');"
         class="justify-center align-items-center textfour-row textfour-position-right">
        <div class="col textfour-texts">
            <div class="textfour-texts__wrapper">
                <div class="textfour-texts__title text-4xl font-bold mb-3 bg-gradient-to-b from-white to-green-300 bg-clip-text text-transparent">
                    داستان از چه قراره
                </div>
                <div class="description">
                    <p>
                        کمیته فنی لیگ شبیه ساز دوبعدی فوتبال با همکاری کمیته ملی ربوکاپ ایران ، به خاطر دسترسی بهتر همه
                        دانش آموزان ایرانی به مطالب آموزشی مفید و برقراری عدالت آموزشی، تصمیم گرفته یک دوره آموزشی
                        برگزار کنه تا تیم های شرکت کننده تو مسابقات ایران اپن 2024 با قدرت بیشتری وارد مسابقات بشن.
                    </p>
                    <p>
                        دوستداریم تو این مسیر کمکتون کنیم :)
                    </p>
                </div>
                <div class="textfour-texts__buttons"></div>
            </div>
        </div>
        <div class="textfour-up-circle">
            <img src="/img/filled-circle.svg">
        </div>
        <div class="textfour-up-ring">
            <img src="/img/ring.svg">
        </div>
        <div class="textfour-down-circle">
            <img src="/img/filled-circle.svg">
        </div>
        <div class="textfour-down-ring">
            <img src="/img/ring.svg">
        </div>
    </div>
</div>

<style lang="scss">
  .container {
    padding: 0;
    }

    .textfour-row {
      @apply rounded-none md:rounded-3xl flex flex-col justify-center items-center min-h-[60vh] py-[200px] md:py-40;
        position: relative;
        margin-right: 0;
        width: 100%;
        overflow: hidden;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover
    }

    .textfour-texts {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 1
    }

    .textfour-texts__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap
    }

    .textfour-texts__title {
        text-align: center;
        max-width: 450px;
        position: relative
    }

  .description {
    text-align: justify;
        color: white;
        font-size: 16px;
        font-weight: 300;
        margin-top: 20px;
        max-width: 450px;
    }

    .textfour-texts__buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 30px
    }

    .textfour-texts__buttons a {
        text-decoration: none;
        color: inherit;
        text-align: center
    }

    .textfour-texts__buttonOne {
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
        transition: all 0.3s
    }


    .textfour-up-circle {
        position: absolute;
        top: -160px;
        right: -135px;
        transform: rotate(195deg)
    }

    .textfour-up-ring {
        position: absolute;
        top: -220px;
        right: -135px
    }

    .textfour-down-circle {
        position: absolute;
        left: -80px;
        top: 275px
    }

    .textfour-down-ring {
        position: absolute;
        left: -210px;
        top: 270px
    }

    @media (max-width: 991px) {
        .textfour-texts {
            max-width:100%
        }

        .textfour-texts__wrapper {
            max-width: 100%
        }

        .textfour-texts__buttons {
            justify-content: center
        }
    }

    @media (max-width: 768px) {
        .textfour-up-circle {
            top:-205px;
            right: -165px
        }

        .textfour-up-ring {
            top: -275px
        }

        .textfour-down-circle {
            top: 375px
        }

        .textfour-down-ring {
            top: 360px
        }
    }

    @media (max-width: 500px) {
        .textfour-row {
            padding:100px 10px
        }

        .textfour-texts__buttons {
            margin-top: 45px
        }

        .textfour-down-circle {
            top: 415px
        }

        .textfour-down-ring {
            top: 390px
        }
    }

</style>